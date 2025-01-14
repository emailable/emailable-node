const CacheESLintConfig = require('eslint-config-cache-ventures')

module.exports = [
  {
    ...CacheESLintConfig,
    files: ['lib/**/*.js', 'test/**/*.js']
  }
]
