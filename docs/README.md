# Documentation Index

Quick navigation guide for the linting skill documentation.

## Where to Start

- **New to this skill?** → Start with [WORDPRESS.md](WORDPRESS.md) for WordPress-specific setup with block themes (wp-scripts) and block plugins (wp-build)
- **Configuring linters?** → See [CONFIGURATION.md](CONFIGURATION.md) for all supported tools, config file reference, and setup instructions
- **Setting up CI/CD?** → Read [CI-CD.md](CI-CD.md) for GitHub Actions integration, caching strategies, and workflow examples
- **Debugging issues?** → Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for 30+ solutions to common problems across all tools
- **Git hooks & automation?** → [LEFTHOOK.md](LEFTHOOK.md) for pre-commit hook setup and Git automation

## By Use Case

### I'm setting up a new WordPress block theme or plugin
1. Read [WORDPRESS.md — Block Themes](WORDPRESS.md#block-themes-wp-scripts) or [Block Plugins](WORDPRESS.md#block-plugins-wp-build)
2. Follow configuration steps in [CONFIGURATION.md](CONFIGURATION.md)
3. Set up CI/CD with [CI-CD.md](CI-CD.md) or Git hooks with [LEFTHOOK.md](LEFTHOOK.md)

### I have a linting error and need to fix it
1. Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for your tool (ESLint, Prettier, markdownlint, etc.)
2. Reference the tool's section in [CONFIGURATION.md](CONFIGURATION.md) for detailed config
3. Check [WORDPRESS.md — Common Issues](WORDPRESS.md#common-issues) if WordPress-specific

### I want to understand a specific tool in detail
- **ESLint & Prettier** → [CONFIGURATION.md — JavaScript/TypeScript](CONFIGURATION.md#javascripttypescript), use `/javascript-linting` sub-skill for deep focus
- **markdownlint** → [CONFIGURATION.md — Markdown](CONFIGURATION.md#markdown), use `/markdown-linting` sub-skill
- **YAML/JSON (GitHub Actions)** → [CONFIGURATION.md — YAML/JSON](CONFIGURATION.md#yamljson), use `/yaml-linting` or `/json-linting` sub-skills
- **PHPStan (PHP)** → [CONFIGURATION.md — PHP](CONFIGURATION.md#php), use `/php-linting` sub-skill
- **package.json** → [CONFIGURATION.md — Package Management](CONFIGURATION.md#package-management), use `/npm-linting` sub-skill

### I'm setting up GitHub Actions CI
1. Read [CI-CD.md — Quick Start](CI-CD.md#quick-start) for immediate setup
2. Check [CI-CD.md — Full Workflow Examples](CI-CD.md#full-workflow-examples) for block themes vs. plugins
3. Review [CI-CD.md — Caching Strategies](CI-CD.md#caching-strategies) for optimization

### I want to automate linting with Git hooks
1. Read [LEFTHOOK.md — Installation](LEFTHOOK.md#installation) for setup
2. Understand [LEFTHOOK.md — Hook Types](LEFTHOOK.md#hook-types) (pre-commit, pre-push, etc.)
3. See [LEFTHOOK.md — Usage Patterns](LEFTHOOK.md#usage-patterns) for configuration examples

## Document Details

| Document | Length | Best For | Key Sections |
|----------|--------|----------|--------------|
| **WORDPRESS.md** | 531 lines | WordPress setup & best practices | Block themes, block plugins, coding standards, CI/CD integration |
| **CONFIGURATION.md** | 456 lines | Tool reference & config files | All 8+ tools, config file reference, rule examples |
| **CI-CD.md** | 600 lines | GitHub Actions workflows | Quick start, full examples, caching, coverage, PHP linting |
| **TROUBLESHOOTING.md** | 456 lines | Problem solving | 30+ common issues with solutions across all tools |
| **LEFTHOOK.md** | 371 lines | Git hooks automation | Installation, config, hook types, usage patterns |
| **IMPLEMENTATION_SEQUENCE.md** | ~200 lines | Optimization roadmap | 3-phase optimization plan, success criteria, validation |
| **BUILD_SUMMARY.md** | ~200 lines | Project overview | Features, structure, testing, deployment status |
| **DEPLOYMENT_READY.md** | ~250 lines | Release readiness | Deployment checklist, verification steps, go-live guide |

## When to Use Sub-Skills

Sub-skills provide deeper, focused expertise on single tools. Use them when you need specialist guidance:

- **`/javascript-linting`** — ESLint & Prettier deep dives (not just quick config)
- **`/markdown-linting`** — markdownlint rule details and GitHub rules
- **`/yaml-linting`** — GitHub Actions workflow validation
- **`/json-linting`** — JSON schema and validation
- **`/npm-linting`** — package.json and npm dependencies
- **`/php-linting`** — PHPStan configuration and WordPress PHP standards

Use the main `/linting` skill for:
- Multi-tool linting questions (ESLint + Prettier together)
- WordPress-specific setup (block themes + plugins)
- Troubleshooting across tools
- General linting help

---

**Last Updated**: 2026-10-30
