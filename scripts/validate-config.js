#!/usr/bin/env node

/**
 * Validate linting configuration files
 * Usage: node scripts/validate-config.js [tool]
 * Examples:
 *   node scripts/validate-config.js                 # Validate all
 *   node scripts/validate-config.js eslint          # Validate ESLint only
 *   node scripts/validate-config.js prettier        # Validate Prettier only
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const validators = {
  eslint: {
    files: ['eslint.config.cjs', 'eslint.config.js', '.eslintrc.json', '.eslintrc.js'],
    validate: (content) => {
      try {
        if (content.includes('module.exports') || content.includes('export default')) {
          return { valid: true, format: 'JavaScript' };
        }
        JSON.parse(content);
        return { valid: true, format: 'JSON' };
      } catch (e) {
        return { valid: false, error: e.message };
      }
    }
  },

  prettier: {
    files: ['.prettierrc', '.prettierrc.json', '.prettierrc.yaml', 'prettier.config.js'],
    validate: (content) => {
      try {
        if (content.includes('module.exports') || content.includes('export default')) {
          return { valid: true, format: 'JavaScript' };
        }
        JSON.parse(content);
        return { valid: true, format: 'JSON' };
      } catch (e) {
        return { valid: false, error: e.message };
      }
    }
  },

  markdownlint: {
    files: ['.markdownlint.json', '.markdownlint.yaml', '.markdownlint-cli2.mjs'],
    validate: (content) => {
      try {
        if (content.includes('export default') || content.includes('module.exports')) {
          return { valid: true, format: 'JavaScript Module' };
        }
        JSON.parse(content);
        return { valid: true, format: 'JSON' };
      } catch (e) {
        return { valid: false, error: e.message };
      }
    }
  },

  packageJson: {
    files: ['package.json'],
    validate: (content) => {
      try {
        const pkg = JSON.parse(content);
        const issues = [];

        if (!pkg.name) issues.push('Missing "name" field');
        if (!pkg.version) issues.push('Missing "version" field');
        if (!pkg.scripts) issues.push('Missing "scripts" field');

        return {
          valid: issues.length === 0,
          format: 'JSON',
          issues: issues.length > 0 ? issues : undefined
        };
      } catch (e) {
        return { valid: false, error: e.message };
      }
    }
  }
};

function findConfigFile(files) {
  for (const file of files) {
    const fullPath = path.join(projectRoot, file);
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }
  return null;
}

function validateConfig(tool) {
  const validator = validators[tool];
  if (!validator) {
    console.error(`Unknown tool: ${tool}`);
    return false;
  }

  const configPath = findConfigFile(validator.files);

  if (!configPath) {
    console.log(`⚠️  ${tool}: No config file found (searched: ${validator.files.join(', ')})`);
    return false;
  }

  try {
    const content = fs.readFileSync(configPath, 'utf8');
    const result = validator.validate(content);

    if (result.valid) {
      console.log(`✅ ${tool}: Config valid (${result.format})`);
      console.log(`   File: ${path.relative(projectRoot, configPath)}`);
      if (result.issues) {
        result.issues.forEach(issue => console.log(`   ⚠️  ${issue}`));
      }
      return true;
    } else {
      console.log(`❌ ${tool}: Config invalid`);
      console.log(`   File: ${path.relative(projectRoot, configPath)}`);
      console.log(`   Error: ${result.error}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ ${tool}: Error reading config - ${error.message}`);
    return false;
  }
}

// Main
const toolArg = process.argv[2];
const tools = toolArg ? [toolArg] : Object.keys(validators);

console.log('🔍 Validating linting configuration files...\n');

let allValid = true;
for (const tool of tools) {
  if (!validateConfig(tool)) {
    allValid = false;
  }
}

console.log('');
if (allValid) {
  console.log('✅ All configurations are valid!');
  process.exit(0);
} else {
  console.log('❌ Some configurations are invalid. See above for details.');
  process.exit(1);
}
