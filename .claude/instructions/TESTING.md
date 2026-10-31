# Testing Guide

Quick reference for running tests in the linting skill project.

## Test Coverage Requirements

- **Unit Tests (Jest)**: 100% coverage required
- **Integration Tests (Bats)**: All major workflows must pass
- **Pre-commit**: Linting must pass (enforced by Lefthook)

## Running Tests

### All Tests
```bash
npm run test:all
```

### Unit Tests Only (Jest)
```bash
npm test
# With coverage report:
npm run test:coverage
npm run coverage:report
```

### Integration Tests Only (Bats)
```bash
npm run test:bats
```

### Watch Mode (Jest)
```bash
npm test -- --watch
```

### Specific Test File
```bash
npm test -- linting.test.js
npm test -- --testNamePattern="ESLint"
```

## Test Structure

### Unit Tests (`__tests__/`)
```
__tests__/
├── linting.test.js           # Main skill tests
├── sub-skills.test.js        # Sub-skill tests
├── wordpress.test.js         # WordPress-specific tests
├── config-parser.test.js     # Config parsing tests
└── fixtures/                 # Test fixtures & mocks
```

### Integration Tests (`tests/`)
```
tests/
├── javascript-linting.bats
├── markdown-linting.bats
├── yaml-linting.bats
├── php-linting.bats
└── wordpress-integration.bats
```

## Writing Tests

### Jest Unit Tests
- Use `describe()` for grouping
- Use `test()` or `it()` for individual tests
- Mock external dependencies
- Aim for descriptive test names

Example:
```javascript
describe('ESLint Configuration', () => {
  test('parses valid config correctly', () => {
    const config = parseESLintConfig(validConfig);
    expect(config.rules).toBeDefined();
  });
});
```

### Bats Integration Tests
- Use `@test` for test declarations
- Setup/teardown with `setup()` and `teardown()`
- Test actual workflows end-to-end

Example:
```bash
@test "ESLint validates JavaScript file" {
  run npx eslint test-file.js
  [ "$status" -eq 0 ]
}
```

## Coverage Requirements

- **Unit Tests**: Must reach 100% statement, branch, function, and line coverage
- **Integration Tests**: All major code paths must be exercised
- **Skip Rules**: Only skip coverage for:
  - Unreachable error handlers
  - Environment-specific code blocks
  - CLI-only code

View coverage report:
```bash
npm run coverage:report
# Opens in browser
```

## Pre-Commit Testing

Lefthook automatically runs before commits:
```bash
# Runs linting + tests
git commit -m "message"

# Skip checks (not recommended)
git commit --no-verify -m "message"
```

Configure in `lefthook.yml`:
```yaml
pre-commit:
  commands:
    lint:
      glob: "*.js"
      run: npm run lint
    test:
      run: npm test
```

## CI/CD Testing

GitHub Actions run full test suite on PR. See `.github/workflows/` for configuration.

Tests run:
1. Unit tests (Jest with coverage)
2. Integration tests (Bats)
3. Linting (ESLint, Prettier, markdownlint)

## Debugging Failed Tests

### Jest Debug Mode
```bash
node --inspect-brk node_modules/.bin/jest --runInBand
# Open chrome://inspect in Chrome DevTools
```

### Bats Debug Mode
```bash
# Run single test with debug output
bats tests/javascript-linting.bats --trace
```

### Common Issues

**Test fails locally but passes in CI**:
- Check Node version (`node --version`)
- Check npm version (`npm --version`)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

**Coverage drops below 100%**:
- Run `npm run coverage:report` to see uncovered lines
- Add tests for missing branches
- Use `/* istanbul ignore next */` only when truly unreachable

## Test Fixtures

Store test data in `__tests__/fixtures/`:
- `valid-config.json` - Valid configuration examples
- `invalid-config.json` - Invalid configurations
- `sample-files/` - Sample code files for linting tests

Use in tests:
```javascript
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('__tests__/fixtures/valid-config.json'));
```

## Performance Testing

No performance tests currently configured. Add if needed:
```bash
npm run test:performance
```

---

**Last Updated**: 2026-10-31
