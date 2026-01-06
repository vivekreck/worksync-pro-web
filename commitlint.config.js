export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',     // New feature
                'fix',      // Bug fix
                'docs',     // Documentation
                'style',    // Formatting, missing semicolons, etc.
                'refactor', // Code restructuring
                'perf',     // Performance improvements
                'test',     // Adding tests
                'build',    // Build system or dependencies
                'ci',       // CI configuration
                'chore',    // Other changes
                'revert',   // Revert previous commit
                'ui'        // UI/UX specific changes (frontend addition)
            ]
        ],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'header-max-length': [2, 'always', 72],
        'body-leading-blank': [1, 'always'],
        'footer-leading-blank': [1, 'always']
    }
};