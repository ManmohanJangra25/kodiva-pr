module.exports = {
  env: {
    node: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  plugins: ['jest'],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
  }
} 