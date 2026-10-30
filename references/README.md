# References

Optional external reference materials and configuration documentation links.

This directory holds (or references) external documentation that supports the linting skill. Use these links when you need deeper information about specific tools or standards.

## Recommended External References

### WordPress Development

- **[WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)**
  - Official WordPress block development documentation
  - Block API, block.json schema, component library

- **[WordPress Coding Standards](https://developer.wordpress.org/coding-standards/)**
  - Official WordPress PHP, CSS, and JavaScript standards
  - Best practices for theme and plugin development

- **[WordPress Theme Handbook - Block Themes](https://developer.wordpress.org/themes/block-themes/)**
  - Complete guide to block theme development
  - theme.json structure and configuration

- **[WordPress Plugin Handbook - Blocks](https://developer.wordpress.org/plugins/blocks/)**
  - Block plugin development guide
  - Block registration and rendering

### Build Tools

- **[wp-scripts Documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)**
  - Official WordPress build tool for block themes
  - Includes ESLint, Prettier, Webpack, and Jest setup

### Linting Tools

- **[ESLint Documentation](https://eslint.org/docs/)**
  - Official ESLint rules and configuration
  - Flat config setup and plugins

- **[Prettier Options](https://prettier.io/docs/en/options.html)**
  - Complete Prettier configuration reference
  - Code formatting rules and customization

- **[markdownlint Rules](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)**
  - All markdownlint rules with examples
  - GitHub rules via `@github/markdownlint-github`

- **[PHPStan Documentation](https://phpstan.org/)**
  - PHP static analysis tool reference
  - Analysis levels 0-9 and configuration options

- **[GitHub Actions Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)**
  - Complete GitHub Actions YAML reference
  - All workflow keywords and options

### Git Hooks

- **[Lefthook Documentation](https://lefthook.dev/)**
  - Git hook manager for the linting skill
  - Installation, configuration, and usage

- **[Husky Documentation](https://typicode.github.io/husky/)** (Legacy)
  - Alternative Git hook manager
  - Note: Lefthook is preferred for this skill

## Skill-Specific References

Within this skill, also see:

- **docs/LEFTHOOK.md** — Local Lefthook configuration guide (preferred)
- **docs/CONFIGURATION.md** — Local configuration file reference for all tools
- **docs/TROUBLESHOOTING.md** — Solutions to 30+ common linting issues
- **docs/WORDPRESS.md** — WordPress-specific linting setup

## Note on Husky vs. Lefthook

This skill uses **Lefthook** as its primary Git hook system:

- ✅ **Lefthook** is the active hook manager (see `lefthook.yml` and `docs/LEFTHOOK.md`)
- ⚠️ **Husky** is included in package.json for backward compatibility but is not the primary system

The `prepare` script in package.json attempts to install both, but Lefthook is the recommended approach for new projects. If you're starting fresh, use Lefthook exclusively (and can optionally remove the Husky dependency).

---

**Last Updated**: 2026-10-30
