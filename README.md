# my-init05

HTML / SCSS を使ったフロントエンド開発のスターターテンプレートです。  
Prettier・Stylelint によるコード品質管理と、npm scripts による SCSS コンパイル環境を備えています。

## 使用技術

| ツール | 用途 |
|---|---|
| Sass | SCSS → CSS コンパイル |
| Prettier | コードフォーマッター |
| Stylelint | CSS / SCSS リンター |

## 必要環境

- Node.js 18 以上
- VS Code（推奨拡張機能: Prettier, Stylelint）

## セットアップ

```bash
npm install
```

## npm scripts

| スクリプト | 内容 |
|---|---|
| `npm run sass` | 監視・展開形式・ソースマップなし |
| `npm run sass:dev` | 監視・展開形式・ソースマップあり |
| `npm run sass:build` | 1回コンパイル・展開形式・ソースマップなし |
| `npm run sass:prod` | 1回コンパイル・minify・ソースマップなし |

## ディレクトリ構成

```
my-init05/
├── project/
│   ├── index.html   # HTML
│   ├── style.scss   # スタイルシート（編集用）
│   └── style.css    # コンパイル済み CSS（自動生成）
├── .prettierrc      # Prettier 設定
├── .stylelintrc.js  # Stylelint 設定
├── .editorconfig    # エディタ設定
└── package.json
```

## 開発フロー

1. `npm run sass` または `npm run sass:dev` を実行すると `style.scss` の変更が `style.css` に自動反映されます。
2. ファイル保存時に Prettier によるフォーマットと Stylelint による自動修正が実行されます。

## コーディング規約

詳細は [.github/copilot-instructions.md](.github/copilot-instructions.md) を参照してください。
