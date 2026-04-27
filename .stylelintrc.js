module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': '^[a-z0-9\\-]+(__[a-z0-9\\-]+)?(--[a-z0-9\\-]+)?$',
    'max-nesting-depth': 3,
    'no-descending-specificity': null
  }
}
