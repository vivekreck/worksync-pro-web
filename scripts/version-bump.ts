import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'

type VersionType = 'major' | 'minor' | 'patch'

// Recreate __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const packageJsonPath = path.join(__dirname, '../package.json')

function getCurrentVersion(): string {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
  return packageJson.version
}

function parseVersion(version: string): [number, number, number] {
  const parts = version.split('.').map(Number)
  return [parts[0] || 0, parts[1] || 0, parts[2] || 0]
}

function bumpVersion(type: VersionType): string {
  const currentVersion = getCurrentVersion()
  const [major, minor, patch] = parseVersion(currentVersion)

  let newVersion: string
  switch (type) {
    case 'major':
      newVersion = `${major + 1}.0.0`
      break
    case 'minor':
      newVersion = `${major}.${minor + 1}.0`
      break
    case 'patch':
      newVersion = `${major}.${minor}.${patch + 1}`
      break
    default:
      throw new Error(`Invalid version type: ${type}`)
  }

  return newVersion
}

function updatePackageJson(newVersion: string): void {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
  packageJson.version = newVersion
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n')
}

function updateEnvFile(newVersion: string): void {
  const envPath = path.join(__dirname, '../.env')

  if (!fs.existsSync(envPath)) {
    console.log('No .env file found, skipping...')
    return
  }

  let envContent = fs.readFileSync(envPath, 'utf-8')

  if (envContent.includes('VITE_APP_VERSION=')) {
    envContent = envContent.replace(/VITE_APP_VERSION=.*/, `VITE_APP_VERSION=${newVersion}`)
  } else {
    envContent += `\nVITE_APP_VERSION=${newVersion}\n`
  }

  fs.writeFileSync(envPath, envContent)
}

function createGitTag(version: string): void {
  try {
    execSync(`git add package.json .env`, { stdio: 'inherit' })
    execSync(`git commit -m "chore: bump version to ${version}"`, { stdio: 'inherit' })
    execSync(`git tag -a v${version} -m "Version ${version}"`, { stdio: 'inherit' })
    console.log(`Git tag v${version} created`)
  } catch {
    console.log('Git operations skipped (not in a git repository or no changes)')
  }
}

function main(): void {
  const args = process.argv.slice(2)
  const versionType = (args[0] || 'patch') as VersionType
  const skipGit = args.includes('--no-git')

  if (!['major', 'minor', 'patch'].includes(versionType)) {
    console.error('Invalid version type. Use: major, minor, or patch')
    process.exit(1)
  }

  const currentVersion = getCurrentVersion()
  const newVersion = bumpVersion(versionType)

  console.log(`\n Bumping version from ${currentVersion} to ${newVersion}\n`)

  // Update package.json
  updatePackageJson(newVersion)
  console.log('Updated package.json')

  // Update .env
  updateEnvFile(newVersion)
  console.log('Updated .env (if exists)')

  // Create git tag
  if (!skipGit) {
    createGitTag(newVersion)
  }

  console.log(`\n Version bumped to ${newVersion}\n`)
  console.log('Next steps:')
  console.log('  - Review changes: git diff')
  console.log('  - Push changes: git push && git push --tags')
}

main()
