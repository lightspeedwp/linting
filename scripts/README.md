# Utility Scripts

Helper scripts for linting validation, configuration checking, and automation.

## `validate-config.js`

**Purpose**: CLI tool for validating linting configurations across all supported tools

**Location**: `scripts/validate-config.js`

### Quick Usage

```bash
# Validate a specific config file
node scripts/validate-config.js .eslintrc.json

# Validate package.json
node scripts/validate-config.js package.json

# Validate Prettier config
node scripts/validate-config.js .prettierrc
```

### Features

- ✅ Validates ESLint configurations (both flat config and legacy)
- ✅ Validates Prettier configuration syntax
- ✅ Validates markdownlint configuration
- ✅ Validates package.json structure
- ✅ Detects configuration syntax errors
- ✅ Provides actionable error messages
- ✅ Handles missing config files gracefully
- ✅ Proper exit codes (0 for success, 1 for errors)

### Supported Tools

| Tool | Config Files | Detection |
|------|-------------|-----------|
| ESLint | `.eslintrc.json`, `eslint.config.cjs` | JSON/CommonJS syntax validation |
| Prettier | `.prettierrc`, `.prettierrc.json` | JSON syntax validation |
| markdownlint | `.markdownlint-cli2.mjs`, `.markdownlint.jsonc` | JSONC/CommonJS syntax |
| package.json | `package.json` | npm package structure |

### Example Output

**Valid Configuration**:
```
✓ .eslintrc.json is valid
  - ESLint configuration loaded
  - No syntax errors detected
```

**Invalid Configuration**:
```
✗ .eslintrc.json has errors
  - Syntax error: Unexpected token } at line 15
  - Fix: Check for missing commas in configuration object
  Exit code: 1
```

### Use Cases

1. **Before committing** — Validate configs locally:
   ```bash
   node scripts/validate-config.js .eslintrc.json
   ```

2. **In CI/CD** — Verify configs in GitHub Actions:
   ```bash
   node scripts/validate-config.js .eslintrc.json || exit 1
   ```

3. **Debugging** — Check if config is causing issues:
   ```bash
   node scripts/validate-config.js .prettierrc
   ```

### Running All Validations

The npm script `validate` runs all checks:

```bash
npm run validate
```

This runs:
1. ESLint on the skill code
2. Prettier formatting check
3. Markdown lint on documentation
4. Jest unit tests
5. Bats integration tests
6. Configuration validation

---

## Creating New Scripts

If you add utility scripts:

1. Use `#!/usr/bin/env node` shebang for CLI tools
2. Add proper error handling and exit codes
3. Include usage documentation in this README
4. Add test coverage in `__tests__/` for core logic
5. Reference in `package.json` scripts if it's a commonly used tool

---

**Last Updated**: 2026-10-30
