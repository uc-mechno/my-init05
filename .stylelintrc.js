module.exports = {
  extends: [
    'stylelint-config-standard-scss', // stylelintの公式ルールをベースに、SCSSに対応させたルールセット
    'stylelint-config-property-sort-order-smacss', // プロパティの順番をSMACSSに従ってソートするルールセット
    'stylelint-config-prettier-scss' // Prettierと競合するルールを無効化するルールセット
  ],
  plugins: ['@stylistic/stylelint-plugin'],// stylisticのルールを使用するためのプラグイン
  rules: {
    'selector-class-pattern': '^[a-z0-9-]+(__[a-z0-9-]+)?(--[a-z0-9-]+)?$', // BEM記法を許容するクラス名のパターン
    'selector-id-pattern': null, // idのパターン制限なし
    "keyframes-name-pattern": null, // keyframesでkebab-case以外も許容
    "scss/at-mixin-pattern": null, // mixinでkebab-case以外も許容
    "scss/dollar-variable-pattern": null, // $変数でkebab-case以外も許容
    "scss/percent-placeholder-pattern": null, // %placeholderでkebab-case以外も許容
    "scss/at-extend-no-missing-placeholder": null, // @extendで%placeholder以外も許容
    "function-url-quotes": ["always", { "severity": "warning" }], // url()内が""で囲まれていなくてもwarningで止める
    "number-max-precision": [3, { "severity": "warning" }], // 小数点以下3桁以上でもwarningで止める
    "alpha-value-notation": ["number", { "severity": "warning" }], // 0.3が30%となっていてもwarningで止める
    "font-family-name-quotes": [
      "always-where-recommended",
      { "severity": "warning" }
    ], // font-family名のルールが適合していなくてもwarningで止める
    "property-no-vendor-prefix": [
      true,
      {
        "ignoreProperties": ["appearance", "text-size-adjust"]
      } // autoprefixerで補えるprefixを書いていた場合、エラーとなるが、ignorePropertiesは無視する
    ]
  }
}
