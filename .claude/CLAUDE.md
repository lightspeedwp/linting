# Linting Skill — Claude Code Project Guide

This document defines the context, conventions, and workflows for the LightSpeed WP linting skill in Claude Code.

## Project Overview

**Repository**: https://github.com/lightspeedwp/linting  
**Purpose**: Comprehensive Claude skill for debugging and configuring linters in WordPress block themes and plugins.  
**Language**: JavaScript/TypeScript, Bash, Markdown  
**Test Coverage**: 100% (Jest + Bats)  
**Maintainer**: LightSpeed WP Team

## Architecture

### Skill Structure

```
linting/
├── SKILL.md                    # Main skill definition
├── README.md                   # Quick start & features
├── sub-skills/                 # 6 specialized sub-skills
│   ├── javascript-linting/     # ESLint, Prettier
│   ├── markdown-linting/       # markdownlint
│   ├── yaml-linting/           # GitHub Actions, YAML
│   ├── json-linting/           # JSON, Spectral
│   ├── npm-linting/            # package.json, dependencies
│   └── php-linting/            # PHPStan, WordPress PHP
├── docs/                       # Comprehensive documentation (8 guides)
├── scripts/                    # Helper utilities (config validation, error parsing)
├── references/                 # Reference materials (external tools, standards)
├── prompts/                    # Task-specific prompt templates
├── tests/                      # Bats integration tests
├── __tests__/                  # Jest unit tests
└── assets/                     # Configuration templates & examples
```

### Key Technologies

- **Linting Tools**: ESLint, Prettier, PHPStan, markdownlint, Spectral, actionlint
- **WordPress Build Tools**: wp-scripts (block themes), wp-build (block plugins)
- **Testing**: Jest (unit), Bats (integration)
- **Automation**: Lefthook (Git hooks), GitHub Actions
- **Package Manager**: npm

## Code Style & Conventions

### JavaScript/TypeScript
- **Linter**: ESLint with wp-scripts config
- **Formatter**: Prettier (line width 100)
- **Test Framework**: Jest (100% coverage required)
- **Naming**: camelCase for functions/variables, UPPER_CASE for constants

### Bash Scripts
- **Linter**: ShellCheck
- **Style**: POSIX-compliant where possible
- **Testing**: Bats integration tests

### Markdown
- **Linter**: markdownlint (GitHub rules)
- **Style**: GitHub-flavored Markdown (GFM)
- **Line Length**: 100 characters (soft wrap at 80 for readability)

### Documentation
- **Format**: Markdown with Table of Contents
- **Structure**: Progressive disclosure (overview → details → examples)
- **Navigation**: Cross-references between docs/
- **Updates**: Keep Last Updated dates current

## Workflow & Branching

Follow LightSpeed WP's branching strategy: https://github.com/lightspeedwp/.github/blob/develop/docs/BRANCHING_STRATEGY.md

**Branch naming**: `{type}/{description}`  
- `feature/eslint-config-improvements`  
- `fix/prettier-conflict-debug`  
- `docs/wordpress-block-theme-guide`  

**Commit messages**: Conventional Commits format
```
type(scope): description

More details here if needed.

Closes #123
```

**Pull requests**: Use template from `.github/PULL_REQUEST_TEMPLATE/`

## Testing Requirements

### Unit Tests (Jest)
- **Coverage**: 100% required
- **Location**: `__tests__/` folder
- **Run**: `npm test`
- **Files**: `*.test.js`

### Integration Tests (Bats)
- **Coverage**: All major workflows
- **Location**: `tests/` folder
- **Run**: `npm run test:bats`
- **Files**: `*.bats`

### Pre-Commit
- Lefthook validates linting before commits
- Tests run locally before push
- See `docs/LEFTHOOK.md` for configuration

### CI/CD
- GitHub Actions run full test suite on PR
- See `docs/CI-CD.md` for workflow details

## Common Tasks

### Adding a New Sub-Skill
1. Create folder: `sub-skills/{tool-name}/`
2. Write `sub-skills/{tool-name}/SKILL.md`
3. Add tests in `tests/{tool-name}.bats`
4. Update main `README.md` to reference new sub-skill
5. Run `npm test` to ensure 100% coverage

### Improving Documentation
1. Edit the relevant file in `docs/`
2. Update Table of Contents if structure changes
3. Update `docs/README.md` navigation section
4. Keep Last Updated date current
5. Use `/engineering:documentation` skill for polish review

### Updating Linting Configuration
1. Modify config template in `assets/`
2. Update corresponding section in `docs/CONFIGURATION.md`
3. Add examples to `references/` if applicable
4. Update tests in `__tests__/config-parser.test.js`
5. Document in `docs/TROUBLESHOOTING.md` if it's a common issue

### Debugging a Linting Issue
1. Check `docs/TROUBLESHOOTING.md` first
2. Review relevant sub-skill in `sub-skills/{tool}/SKILL.md`
3. Look up tool reference in `references/`
4. Test with examples from `assets/`

## Key Files & Their Purposes

| File | Purpose |
|------|---------|
| `SKILL.md` | Main skill definition (triggers, description, workflows) |
| `README.md` | Quick start, features, installation, structure overview |
| `docs/README.md` | Navigation index for all documentation |
| `docs/WORDPRESS.md` | WordPress-specific setup (block themes, plugins) |
| `docs/CONFIGURATION.md` | Tool reference & config files (all 8+ tools) |
| `docs/CI-CD.md` | GitHub Actions integration & caching |
| `docs/TROUBLESHOOTING.md` | 30+ common issues & solutions |
| `docs/LEFTHOOK.md` | Git hooks automation setup |
| `lefthook.yml` | Git hook configuration (root) |
| `package.json` | Dependencies & npm scripts |
| `jest.config.js` | Jest test configuration |
| `.batsrc` | Bats test runner configuration |

## Dependencies & Maintenance

### npm Dependencies
- Keep `@wordpress/scripts` up-to-date for block themes/plugins
- Update ESLint, Prettier, PHPStan when new rules/features available
- Monitor security alerts; patch immediately

### External Tools
- ESLint: https://eslint.org/
- Prettier: https://prettier.io/
- PHPStan: https://phpstan.org/
- markdownlint: https://github.com/DavidAnson/markdownlint
- Lefthook: https://lefthook.dev/

### Skill Updates
- Keep sub-skill descriptions "pushy" (mention specific error phrases)
- Add new trigger phrases when discovered
- Review monthly for accuracy with latest tool versions

## Performance & Optimization

### Skill Triggering
The description in `SKILL.md` frontmatter is the primary trigger mechanism. Keep it:
- Specific with error phrases ("unexpected token", "undefined method")
- Context-aware ("WordPress theme.json", "GitHub Actions workflow")
- Aggressive in scope ("Trigger on any X-related error")

### Documentation Performance
- Keep main `README.md` under 250 lines (use docs/ for details)
- Use Table of Contents for long docs (>300 lines)
- Link instead of duplicating content
- Remove outdated sections immediately

## Communication & Support

### When to Ask for Help
- Security concerns: Escalate immediately
- Breaking changes: Discuss in PR before implementing
- Major refactors: File an issue first with proposal
- User-facing changes: Document thoroughly

### How to Get Help
- Check `docs/TROUBLESHOOTING.md`
- Review relevant reference in `references/`
- Open an issue with:
  - Clear description of the problem
  - Steps to reproduce
  - Expected vs. actual behavior
  - Environment (OS, Node version, tool versions)

## Version Management

**Current Version**: 1.0.0  
**Versioning**: Semantic Versioning (MAJOR.MINOR.PATCH)

- **MAJOR**: Breaking changes to skill interface or sub-skills
- **MINOR**: New features, tools, or sub-skills
- **PATCH**: Bug fixes, documentation, test improvements

Update version in:
- `package.json` (version field)
- `SKILL.md` frontmatter if applicable
- GitHub Releases

## Future Roadmap

- [ ] Additional sub-skills for specialized workflows
- [ ] AI-powered fix suggestions based on error patterns
- [ ] Integration with more WordPress-specific linters
- [ ] Enhanced CI/CD templates for different platforms
- [ ] Community-contributed linting rules & configurations

---

**Last Updated**: 2026-10-31  
**Maintained By**: LightSpeed WP Team  
**Repository**: https://github.com/lightspeedwp/linting
