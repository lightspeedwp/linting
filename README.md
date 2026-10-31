# Linting Skill for WordPress Development

A comprehensive Claude skill for debugging and configuring linters in WordPress block themes and plugins.

## Features

- 🔍 **Debug linting configurations** - ESLint, Prettier, markdownlint, PHPStan, YAML, JSON
- 🛠️ **Fix configuration issues** - Resolve conflicts, fix syntax, optimize rules
- 🔧 **Troubleshoot ignore files** - Debug glob patterns and file exclusions
- 📦 **WordPress-specific guidance** - wp-scripts (block themes) and wp-build (block plugins)
- 🚀 **CI/CD integration** - GitHub Actions workflow validation and optimization
- ✅ **100% test coverage** - Jest unit tests + Bats integration tests

## Installation

### From Package
```bash
# Place in ~/.claude/skills/linting/
cp -r linting ~/.claude/skills/
```

### From Source
```bash
git clone https://github.com/lightspeedwp/linting.git ~/.claude/skills/linting
cd ~/.claude/skills/linting
npm install
npm test
```

## Quick Start

### Main Skill Usage
Use when you need general linting help across multiple tools:

```
"My ESLint and Prettier are conflicting, can you fix my config?"
"Why is markdownlint failing on this file?"
"How do I set up linting for my block theme?"
```

### Sub-Skills (Deep Focus)

For specific tools, use the dedicated sub-skills:

- `/markdown-linting` - markdownlint & markdownlint-cli2
- `/yaml-linting` - GitHub Actions & YAML workflows
- `/javascript-linting` - ESLint & Prettier
- `/json-linting` - JSON5 & Spectral
- `/npm-linting` - package.json & dependencies
- `/php-linting` - PHPStan & static analysis

## Supported Tools

| Tool               | Purpose                    | Config File                    |
| ------------------ | -------------------------- | ------------------------------ |
| ESLint             | JS/TS linting              | `eslint.config.cjs`            |
| Prettier           | Code formatting            | `.prettierrc`                  |
| markdownlint       | Markdown linting           | `.markdownlint-cli2.mjs`       |
| Spectral           | JSON/YAML validation       | `.spectral.config.cjs`         |
| PHPStan            | PHP static analysis        | `phpstan.neon`                 |
| npm-pkg-json-lint  | package.json validation    | `.npmpackagejsonlint.config.cjs` |
| actionlint         | GitHub Actions validation  | (built-in)                     |
| wp-scripts         | Block theme build tools    | (extensible via `.eslintrc`)   |
| wp-build           | Block plugin build tools   | (modular configuration)        |

## Project Structure

```
linting/
├── SKILL.md                      # Main skill definition
├── README.md                     # This file
├── package.json                  # Dependencies & scripts
├── jest.config.js               # Jest configuration
├── .batsrc                       # Bats test configuration
│
├── __tests__/                   # Jest unit tests (100% coverage)
│   ├── linting.test.js
│   ├── sub-skills.test.js
│   ├── wordpress.test.js
│   └── config-parser.test.js
│
├── tests/                       # Bats integration tests (100% pass)
│   ├── markdown-linting.bats
│   ├── javascript-linting.bats
│   ├── yaml-linting.bats
│   ├── php-linting.bats
│   └── wordpress-integration.bats
│
├── docs/                        # Documentation
│   ├── CONFIGURATION.md         # Config file reference
│   ├── TROUBLESHOOTING.md       # Common issues & solutions
│   ├── WORDPRESS.md             # Block theme/plugin guidance
│   ├── CI-CD.md                 # GitHub Actions integration
│   └── CONTRIBUTING.md          # Contribution guidelines
│
├── prompts/                     # Task-specific prompts
│   ├── debug-eslint.prompt.md
│   ├── debug-prettier.prompt.md
│   ├── debug-markdownlint.prompt.md
│   ├── setup-wordpress-linting.prompt.md
│   └── fix-ci-linting.prompt.md
│
├── scripts/                     # Helper utilities
│   ├── validate-config.js       # Config validation
│   ├── parse-error.js           # Error message parsing
│   ├── suggest-fix.js           # Fix suggestions
│   └── test-patterns.js         # Pattern testing
│
├── references/                  # Reference documentation
│   ├── eslint-rules.md
│   ├── prettier-options.md
│   ├── markdownlint-rules.md
│   └── wordpress-standards.md
│
└── sub-skills/                  # Specialized sub-skills
    ├── markdown-linting/SKILL.md
    ├── yaml-linting/SKILL.md
    ├── javascript-linting/SKILL.md
    ├── json-linting/SKILL.md
    ├── npm-linting/SKILL.md
    └── php-linting/SKILL.md
```

## Development

### Install Dependencies
```bash
npm install
```

### Run All Tests
```bash
# Jest unit tests (100% coverage)
npm test

# Bats integration tests (100% pass)
npm run test:bats

# All tests with coverage report
npm run test:all
```

### Test Coverage

Maintain 100% coverage:
```bash
npm run test:coverage
```

View coverage:
```bash
npm run coverage:report
```

### Linting the Skill Itself

```bash
npm run lint        # Run ESLint on skill code
npm run lint:fix    # Auto-fix issues
```

## Configuration

Each linting tool has a dedicated reference guide:

- **ESLint**: See `docs/CONFIGURATION.md` - ESLint section
- **Prettier**: See `docs/CONFIGURATION.md` - Prettier section
- **markdownlint**: See `docs/CONFIGURATION.md` - markdownlint section
- **PHPStan**: See `docs/CONFIGURATION.md` - PHPStan section
- **YAML/JSON**: See `docs/CONFIGURATION.md` - Spectral section

## Troubleshooting

For common issues, see `docs/TROUBLESHOOTING.md`:

- ESLint errors and fixes
- Prettier formatting conflicts
- markdownlint rule violations
- PHPStan configuration issues
- CI/CD pipeline problems

## WordPress-Specific Guidance

See `docs/WORDPRESS.md` for:

- Block theme setup with wp-scripts
- Block plugin setup with wp-build
- WordPress coding standards
- Best practices for linting in WordPress projects

## GitHub Actions Integration

See `docs/CI-CD.md` for:

- Workflow validation with actionlint
- Setting up linting in CI
- Caching strategies
- Error reporting for reviewers

## Prompts

Task-specific prompts are available in `prompts/`:

- `debug-eslint.prompt.md` - ESLint debugging workflow
- `debug-prettier.prompt.md` - Prettier configuration
- `setup-wordpress-linting.prompt.md` - WordPress project setup
- `fix-ci-linting.prompt.md` - CI pipeline issues

Use: "I'm having trouble with [tool]. Can you help me debug?"

## Contributing

Contributions are welcome! See `docs/CONTRIBUTING.md` for guidelines:

1. Fork the repository
2. Create a feature branch
3. Add/update documentation
4. Add tests for new features
5. Ensure 100% test pass rate
6. Submit a pull request

## License

Part of the LightSpeed WP open-source toolkit.

## Support

For issues or questions:
- Check `docs/TROUBLESHOOTING.md`
- Review the relevant reference in `references/`
- Open an issue on GitHub
- Contact the LightSpeed team

---

**Last Updated**: 2026-10-30  
**Version**: 1.0.0  
**Maintainer**: LightSpeed WP Team
