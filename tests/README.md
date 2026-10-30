# Testing

Comprehensive test suite with 64 passing tests ensuring skill quality and correctness.

## Test Overview

The linting skill includes two types of tests:

- **Jest Tests** (`__tests__/`) — 36 unit tests covering skill logic
- **Bats Tests** (`tests/`) — 28 integration tests covering real workflows

**Total Coverage**: 64 tests | **100% Coverage Threshold**: All metrics (branches, functions, lines, statements)

---

## Jest Unit Tests

Located in `__tests__/`, these tests validate core skill functionality with JavaScript.

### Test Files

#### `__tests__/linting.test.js` (36 tests)

**Coverage**: Core linting skill functionality

Tests include:
- Tool detection across all 8+ linting tools
- Configuration file validation
- Ignore pattern parsing and matching
- Error message parsing and categorization
- Fix suggestion generation
- CI/CD integration detection
- WordPress project detection
- Configuration conflict resolution

**Example test**:
```javascript
test('detects ESLint configuration files', () => {
  const files = ['eslint.config.cjs', '.eslintrc.json'];
  const detected = detectLintingTools(files);
  expect(detected).toContain('eslint');
});
```

#### `__tests__/config-parser.test.js` (22 tests)

**Coverage**: Configuration parsing for all tools

Tests include:
- ESLint config parsing (flat config and legacy)
- Prettier config validation
- markdownlint configuration loading
- YAML/JSON schema validation
- PHPStan config reading
- npm-pkg-json-lint parsing
- WordPress block theme detection
- WordPress block plugin detection

**Example test**:
```javascript
test('parses ESLint flat config', () => {
  const config = parseESlintConfig('eslint.config.cjs');
  expect(config).toHaveProperty('rules');
});
```

#### `__tests__/scripts.test.js` (6 tests)

**Coverage**: CLI scripts and npm utilities

Tests include:
- validate-config.js existence and structure
- Script file permissions
- Node shebang validation
- Validator coverage for all tools
- Exit code handling
- npm package.json script validation

---

## Bats Integration Tests

Located in `tests/`, these tests validate real-world workflows using shell scripts.

### Test Files

#### `tests/markdown-linting.bats` (10 tests)

**Workflow**: Real markdownlint validation

Tests include:
- Valid Markdown file validation
- Markdown syntax error detection
- Ignore file pattern matching
- GitHub rules configuration
- CLI output parsing
- Error message formatting
- Fix suggestions

**Run individually**:
```bash
bats tests/markdown-linting.bats
```

#### `tests/javascript-linting.bats` (10 tests)

**Workflow**: ESLint and Prettier integration

Tests include:
- ESLint rule validation
- Prettier formatting check
- Config conflict detection
- Flat config vs. legacy config
- WordPress ESLint config
- Ignore file handling
- Formatting consistency

**Run individually**:
```bash
bats tests/javascript-linting.bats
```

#### `tests/wordpress-integration.bats` (9 tests)

**Workflow**: WordPress block theme and plugin linting

Tests include:
- wp-scripts block theme setup
- wp-build block plugin setup
- WordPress coding standards
- theme.json validation
- block.json validation
- PHP linting integration
- CI/CD pipeline simulation

**Run individually**:
```bash
bats tests/wordpress-integration.bats
```

---

## Running Tests

### Run All Tests

```bash
npm test           # Jest only (with coverage report)
npm run test:bats  # Bats only (integration tests)
npm run test:all   # Both Jest and Bats
```

### Run Specific Test Suite

```bash
# Jest: Run only linting tests
npm test -- linting.test.js

# Bats: Run only WordPress tests
bats tests/wordpress-integration.bats
```

### Watch Mode (Development)

```bash
npm run test:watch
```

Auto-runs Jest tests when files change.

### Debug Mode

```bash
npm run test:debug
```

Starts Node debugger (use Chrome DevTools at `chrome://inspect`).

### Coverage Report

```bash
npm run coverage:report
```

Generates HTML coverage report and opens in browser.

---

## Coverage Thresholds

All metrics must be 100% for all test suites:

| Metric | Target | Current |
|--------|--------|---------|
| **Branches** | 100% | ✅ Passing |
| **Functions** | 100% | ✅ Passing |
| **Lines** | 100% | ✅ Passing |
| **Statements** | 100% | ✅ Passing |

View detailed coverage report:
```bash
npm run coverage:report
# Opens: coverage/lcov-report/index.html
```

---

## Test Organization

```
linting/
├── __tests__/               # Jest unit tests
│   ├── linting.test.js      # Core skill tests (36 tests)
│   ├── config-parser.test.js # Config parsing tests (22 tests)
│   └── scripts.test.js       # Script validation tests (6 tests)
│
├── tests/                    # Bats integration tests
│   ├── markdown-linting.bats # Markdown workflow tests (10 tests)
│   ├── javascript-linting.bats # ESLint/Prettier tests (10 tests)
│   └── wordpress-integration.bats # WordPress tests (9 tests)
│
└── coverage/                 # Generated coverage reports
    ├── lcov-report/          # HTML coverage report
    └── coverage-summary.json  # Coverage metrics JSON
```

---

## Writing New Tests

### Adding Jest Tests

1. Create file in `__tests__/` with `.test.js` extension
2. Import test utilities:
   ```javascript
   describe('Feature', () => {
     test('description', () => {
       expect(actual).toBe(expected);
     });
   });
   ```
3. Run `npm test` to verify
4. Ensure 100% coverage for the new code

### Adding Bats Tests

1. Create file in `tests/` with `.bats` extension
2. Use Bats syntax:
   ```bash
   @test "description" {
     run command_to_test
     [ "$status" -eq 0 ]
   }
   ```
3. Run `npm run test:bats` to verify
4. Test both success and failure cases

---

## CI/CD Integration

Tests run automatically in GitHub Actions:

```yaml
# .github/workflows/test.yml
- run: npm ci
- run: npm run test:all  # Runs Jest + Bats
- run: npm run coverage:report  # Uploads to Codecov
```

---

## Troubleshooting Tests

### "Cannot find module" error

```bash
# Solution: Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm test
```

### Bats test hangs or times out

```bash
# Solution: Check for infinite loops or missing mocks
# Run with timeout:
timeout 30 bats tests/test.bats
```

### Coverage threshold fails

```bash
# Solution: Ensure new code has test coverage
npm run coverage:report  # View HTML report
# Add tests for uncovered lines
npm test
```

---

**Last Updated**: 2026-10-30  
**Test Count**: 64 tests | **Coverage**: 100% all metrics
