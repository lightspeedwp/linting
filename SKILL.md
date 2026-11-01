---
name: linting
description: Complete linting and code quality guidance for WordPress themes and plugins using ESLint, Prettier, PHPStan, markdownlint, and GitHub Actions workflows. Supports block themes (wp-scripts), block plugins (wp-build), and full WordPress development stacks. Includes 6 specialized sub-skills for JavaScript, Markdown, YAML, JSON, npm, and PHP linting. Use this skill whenever the user mentions linting, static analysis, code quality, WordPress standards, or any linting error from validation tools — even if they don't explicitly ask for help with linting or name a specific tool.
---

# Linting Skill for WordPress Development

Expert guidance for debugging and configuring linters across WordPress block themes, plugins, and full stacks.

## Purpose

This skill provides comprehensive support for:
- **Debugging linting configurations** — Resolving conflicts, fixing syntax errors, and optimizing rules
- **WordPress-specific setup** — Block themes (wp-scripts) and block plugins (wp-build)
- **Multi-tool coordination** — ESLint, Prettier, markdownlint, PHPStan, YAML validation, JSON validation
- **CI/CD integration** — GitHub Actions workflow validation and linting pipeline setup
- **Troubleshooting** — 30+ common issues with solutions across all tools

## When to Use This Skill

✅ **Use the main skill when:**
- Debugging conflicts between multiple linting tools (e.g., ESLint + Prettier)
- Setting up linting for a new WordPress block theme or plugin
- Troubleshooting linting errors across different tools
- Configuring GitHub Actions CI/CD for linting
- Asking general linting questions or best practices

✅ **Use sub-skills for deep focus on one tool:**
- `/javascript-linting` — ESLint & Prettier deep dives
- `/markdown-linting` — markdownlint rule details and GitHub rules
- `/yaml-linting` — GitHub Actions workflow validation
- `/json-linting` — JSON schema and validation
- `/npm-linting` — package.json and npm dependencies
- `/php-linting` — PHPStan configuration and WordPress PHP standards

## Supported Tools

| Tool | Purpose | Files |
|------|---------|-------|
| **ESLint** | JavaScript/TypeScript linting | `.eslintrc.js`, `.eslintrc.json` |
| **Prettier** | Code formatting | `.prettierrc`, `.prettierrc.json` |
| **markdownlint** | Markdown linting | `.markdownlint-cli2.mjs` |
| **PHPStan** | PHP static analysis | `phpstan.neon` |
| **Spectral** | JSON/YAML validation | `.spectral.config.cjs` |
| **actionlint** | GitHub Actions validation | (built-in) |
| **wp-scripts** | WordPress block theme build + linting | (extends ESLint, Prettier) |
| **wp-build** | WordPress block plugin build + linting | (modular config) |

## Quick Start: Common Scenarios

### ESLint + Prettier Conflict
1. Check current config files (`.eslintrc.js`, `.prettierrc`)
2. Verify `eslint-config-prettier` is installed
3. Add prettier to ESLint config: `extends: ["prettier"]`
4. Test: `npm run lint && npm run format`

### WordPress Block Theme Setup
1. Install `@wordpress/scripts`: `npm install --save-dev @wordpress/scripts`
2. Add scripts to `package.json`:
   - `"lint:js": "wp-scripts lint-js"`
   - `"format:js": "wp-scripts format-js"`
   - `"lint:md": "wp-scripts lint-md"`
3. Run: `npm run lint:js` to validate
4. Configure CI with `.github/workflows/lint.yml`

### GitHub Actions CI Linting
1. Create `.github/workflows/lint.yml` workflow
2. Run: `npm install`, `npm run lint`
3. Validate YAML: `actionlint .github/workflows/`
4. Add status checks to branch protection rules

### PHPStan Setup
1. Install: `composer require --dev phpstan/phpstan phpstan/phpstan-wordpress`
2. Create `phpstan.neon`: set analysis level (5-6 for WordPress)
3. Run: `vendor/bin/phpstan analyse`
4. Add to CI pipeline

## Documentation Structure

See `docs/README.md` for complete navigation. Key guides:
- **WORDPRESS.md** — Block theme & plugin setup patterns
- **CONFIGURATION.md** — Tool reference & config examples
- **CI-CD.md** — GitHub Actions workflows & caching
- **TROUBLESHOOTING.md** — 30+ common issues & solutions
- **LEFTHOOK.md** — Git hooks automation

## Sub-Skills

Six specialized sub-skills provide deeper, focused expertise:

- **javascript-linting** — ESLint rules, Prettier config, conflict resolution
- **markdown-linting** — markdownlint rules, GitHub markdown standards
- **yaml-linting** — GitHub Actions YAML validation, workflow debugging
- **json-linting** — JSON schema validation, Spectral configuration
- **npm-linting** — package.json validation, dependency conflicts
- **php-linting** — PHPStan levels, WordPress PHP standards, type checking

## Getting Help

1. **Check documentation first** — See `docs/TROUBLESHOOTING.md` for 30+ solutions
2. **Use relevant sub-skill** — For tool-specific guidance
3. **Share configuration** — Paste your config file for debugging
4. **Describe the error** — Include full error message and tool name
5. **WordPress context** — Mention if using block theme, block plugin, or classic theme

## Test Coverage

- 100% unit test coverage (Jest)
- All major workflows tested (Bats integration tests)
- GitHub Actions CI validates on every commit
- 100% test pass rate required

---

**Version**: 1.0.0  
**Repository**: https://github.com/lightspeedwp/ls-wp-linting  
**Maintainer**: LightSpeed WP Team
