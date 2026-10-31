# Linting Configuration Reference

Comprehensive guide to configuring all supported linting tools in WordPress projects.

## ESLint Configuration

### Flat Config (Modern - ESLint 9+)

**File**: `eslint.config.cjs` or `eslint.config.js`

```javascript
// eslint.config.cjs
const js = require('@eslint/js');
const typescriptEslint = require('typescript-eslint');

module.exports = [
  // JavaScript files
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: { ecmaVersion: 2021 },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn'
    }
  },
  // TypeScript files
  ...typescriptEslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }
];
```

### Legacy Config (ESLint 8.x)

**File**: `.eslintrc.json`

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}
```

### Ignore Files

**File**: `.eslintignore`

```
node_modules/
dist/
build/
.next/
out/
coverage/
*.min.js
*.bundle.js
```

### WordPress-Specific Configuration

For WordPress projects, ensure these rules align with WordPress standards:

```javascript
// eslint.config.cjs
module.exports = [
  {
    files: ['**/*.js'],
    rules: {
      // WordPress standards
      'camelcase': ['error', { properties: 'never', ignoreDestructuring: true }],
      'no-var': 'error',
      'prefer-const': 'error',
      'no-undef': 'error',
      // Avoid console in production
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
    }
  }
];
```

## Prettier Configuration

### Basic Setup

**File**: `.prettierrc`

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always",
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css",
  "vueIndentScriptAndStyle": false,
  "endOfLine": "lf"
}
```

### Ignore File

**File**: `.prettierignore`

```
node_modules
dist
build
coverage
.next
out
*.min.js
*.lock
```

### ESLint + Prettier Integration

Always use `eslint-config-prettier` to avoid conflicts:

```javascript
// eslint.config.cjs
const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  {
    // Your custom rules
    rules: { /* ... */ }
  },
  prettier  // Must be last!
];
```

## markdownlint Configuration

### With GitHub Rules

**File**: `.markdownlint-cli2.mjs`

```javascript
import github from '@github/markdownlint-github';

export default {
  config: {
    extends: [github],
    rules: {
      MD003: { style: 'consistent' },
      MD004: { style: 'consistent' },
      MD013: { line_length: 120 }
    }
  }
};
```

### Configuration File

**File**: `.markdownlint.jsonc`

```jsonc
{
  "extends": "markdownlint/style/github",
  "rules": {
    // Disable rules as needed
    "MD001": false,  // Heading hierarchy
    "MD007": { "indent": 2 },  // Unordered list indentation
    "MD013": false,  // Line length (use in cli2 instead)
    "MD041": false   // First line heading
  }
}
```

### Ignore File

**File**: `.markdownlintignore`

```
node_modules/
dist/
build/
CHANGELOG.md
.git/
```

## Spectral Configuration (JSON/YAML)

**File**: `.spectral.config.cjs`

```javascript
module.exports = {
  rules: {
    // OpenAPI rules
    'oas3-api-hosts': 'error',
    'oas3-server-trailing-slash': 'error',
    // JSON Schema rules
    'json-schema-no-additional-properties': 'warn',
    // Custom rules
    'custom-rule': {
      'given': '$.info',
      'then': {
        'function': 'truthy'
      }
    }
  }
};
```

## PHPStan Configuration

**File**: `phpstan.neon`

```neon
parameters:
  level: 5
  paths:
    - src
    - inc
    - lib

  excludePaths:
    - tests
    - vendor

  excludeFiles:
    - '*.asset.php'
    - '*/autoload.php'

  ignoreErrors:
    # Ignore WordPress dynamic properties
    - '#Dynamic property access#'
    - '#Call to an undefined method#'

  reportUnmatchedIgnoredErrors: false
```

## npm-pkg-json-lint Configuration

**File**: `.npmpackagejsonlint.config.cjs`

```javascript
module.exports = {
  extends: 'npm-package-json-lint-config-default',
  rules: {
    'name-format': ['error', { requireLowerCase: true }],
    'version-format': ['error', { allowSpecial: [''] }],
    'require-license': ['error'],
    'require-author': ['error'],
    'require-repository': ['error', 'github'],
    'require-bugs': ['error'],
    'type': ['error', { type: 'module' }],
    'valid-values-private': ['error', [false]],
    'description-format': ['error', { requireCapitalFirstLetter: true }],
    'keywords-type': ['error'],
    'author-type': ['error'],
    'license-type': ['error'],
    'repository-type': ['error'],
    'bugs-type': ['error'],
    'homepage-type': ['error'],
    'bugs-url-format': ['error'],
    'repository-url-format': ['error']
  }
};
```

## wp-scripts Configuration

### For Block Themes

wp-scripts includes pre-configured ESLint and Prettier. Extend by creating `.eslintrc.json`:

```json
{
  "extends": "@wordpress/eslint-config",
  "rules": {
    "custom-rule": "error"
  }
}
```

### For Block Plugins

**package.json** with wp-scripts:

```json
{
  "name": "my-block-plugin",
  "devDependencies": {
    "@wordpress/scripts": "^27.0.0"
  },
  "scripts": {
    "build": "wp-scripts build",
    "start": "wp-scripts start",
    "lint:js": "wp-scripts lint-js",
    "format:js": "wp-scripts format-js"
  }
}
```

## GitHub Actions Workflow

**File**: `.github/workflows/lint.yml`

```yaml
name: Linting

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [18.x, 20.x]
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint JavaScript
        run: npm run lint:js
      
      - name: Lint Markdown
        run: npm run lint:md
      
      - name: Check formatting
        run: npm run format:js -- --check
      
      - name: PHP linting
        run: composer run lint
        if: hashFiles('composer.json') != ''
```

## Common Configuration Issues

### ESLint + Prettier Conflicts

**Problem**: Rules fight each other

**Solution**: Use `eslint-config-prettier` as the last config:

```javascript
// WRONG: prettier in the middle
module.exports = [
  js.configs.recommended,
  prettier,
  { rules: { semi: ['error', 'always'] } }  // Conflicts with Prettier!
];

// RIGHT: prettier at the end
module.exports = [
  js.configs.recommended,
  { rules: { semi: ['error', 'always'] } },
  prettier  // Disables conflicting ESLint rules
];
```

### Ignore Files Not Working

**Problem**: Files still being linted despite ignore file

**Solution**: Verify glob patterns

```bash
# Test ESLint patterns
npx eslint --debug . 2>&1 | grep -E "(ignored|pattern)"

# Test markdownlint patterns
markdownlint-cli2 --list-files
```

### Config File Not Found

**Problem**: Linter not using config

**Solution**: Check file names and location

```bash
# ESLint searches for:
# 1. eslint.config.js (modern)
# 2. .eslintrc.* (legacy)
# 3. package.json eslintConfig field

# Prettier searches for:
# 1. .prettierrc*
# 2. prettier.config.js
# 3. package.json prettier field

# markdownlint-cli2 searches for:
# 1. .markdownlint-cli2.mjs
# 2. .markdownlint.json
# 3. .markdownlint.yaml
```

## Validation

To validate all configurations:

```bash
# ESLint
npx eslint --print-config . > /dev/null

# Prettier
npx prettier --check .

# Markdownlint
markdownlint-cli2 --show-errors .

# PHPStan
vendor/bin/phpstan analyse --dry-run
```

---

**Last Updated**: 2026-10-30
