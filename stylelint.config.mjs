module.exports = {
  plugins: ["stylelint-scss"],
  extends: [
    "stylelint-config-recommended-scss", // scssのための拡張ルール追加
    "stylelint-config-recess-order", // 視認性を考慮したcssプロパティの自動ソートを設定
    "stylelint-config-prettier", // Prettierとの競合ルールをOFFにする
  ],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
        ],
      },
    ],
  },
};
