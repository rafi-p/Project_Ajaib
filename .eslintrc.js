// 'off' or 0 - turn the rule off
// 'warn' or 1 - turn the rule on as a warning (doesn’ t affect exit code)
// 'error' or 1 - turn the rule on as an error (exit code is 1 when triggered)
module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended'],
  rules: {
    // 'react/no-did-mount-set-state': 1,
    // 'react/no-did-update-set-state': 1,
    // 'react/no-direct-mutation-state': 1,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/self-closing-comp': 1,
    'react/prop-types': 0,
    'react/jsx-no-bind': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-curly-spacing': [1, 'always'],
    'object-curly-spacing': [1, 'always'],
    'jsx-quotes': [1, 'prefer-single'],
    'quotes': [1, 'single'],
    'eqeqeq': 1,
    'no-unused-vars': 1,
    'no-undef': 2,
    'no-unneeded-ternary': 1,
    'no-extra-bind': 2,
    'no-console': 1,
    'no-trailing-spaces': [1, { 'skipBlankLines': true }],
    'comma-spacing': [
1, {
     'before': false,
     'after': true
    }
],
    'semi': 2,
    'semi-spacing': 1,
    'keyword-spacing': 1,
    'key-spacing': 1,
    'array-bracket-spacing': 1,
    'arrow-parens': [1, 'as-needed'],
    'arrow-spacing': 1,
    'block-spacing': 1,
    'func-call-spacing': 1,
    'brace-style': [
1,
'1tbs',
{ 'allowSingleLine': true }
],
    'space-before-blocks': 1,
    'space-before-function-paren': [1, 'never'],
    'space-in-parens': 1,
    'space-infix-ops': 1,
    'space-unary-ops': [
1, {
      'words': true,
      'nonwords': false,
      'overrides': { '+': true }
    }
],
    'spaced-comment': 1,
    'rest-spread-spacing': 2,
    'prettier/prettier': 0,
    'radix': [1, 'as-needed']
  }
};
