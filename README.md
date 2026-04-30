# my-init05

HTML / SCSS を使ったフロントエンド開発のスターターテンプレートです。  
Prettier・Stylelint によるコード品質管理と、npm scripts による SCSS コンパイル環境を備えています。

## 使用技術

| ツール | 用途 |
|---|---|
| Sass | SCSS → CSS コンパイル |
| PostCSS / autoprefixer | ベンダープレフィックス自動付与 |
| Prettier | コードフォーマッター |
| Stylelint | CSS / SCSS リンター（SMACSS 順序） |

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
| `npm run sass` | 1回コンパイル・展開形式・ソースマップなし・autoprefixer適用 |
| `npm run sass:dev` | 監視・展開形式・ソースマップあり（autoprefixer未適用） |
| `npm run sass:map` | 1回コンパイル・展開形式・ソースマップあり・autoprefixer適用 |
| `npm run sass:build` | 1回コンパイル・展開形式・ソースマップなし・autoprefixer適用 |
| `npm run sass:prod` | 1回コンパイル・minify・ソースマップなし・autoprefixer適用 |

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
├── postcss.config.js # PostCSS 設定（autoprefixer）
└── package.json
```

## 開発フロー

1. `npm run sass:dev` を実行すると `style.scss` の変更が `style.css` に自動反映されます（監視モード）。
2. 本番向けには `npm run sass:prod`、ソースマップ付きビルドには `npm run sass:map` を使用します。
3. ファイル保存時に Prettier によるフォーマットと Stylelint による自動修正が実行されます。

## コーディング規約

詳細は [.github/copilot-instructions.md](.github/copilot-instructions.md) を参照してください。

### クラス命名規則（MindBEMding）

BEM（Block Element Modifier）の MindBEMding 記法に従う。

#### 構造

| 種別     | 記法                   | 例                     |
| -------- | ---------------------- | ---------------------- |
| Block    | `.block`               | `.card`                |
| Element  | `.block__element`      | `.card__title`         |
| Modifier | `.block--modifier`     | `.card--featured`      |
|          | `.block__el--modifier` | `.card__title--active` |

#### ルール

- 単語の区切りはハイフン（`-`）を使う: `.site-header`, `.nav-item`
- Element・Modifier は Block を起点とする（Element の Element は作らない）
  - NG: `.card__body__title` → OK: `.card__title`
- Modifier 単体では使わず、必ず Block / Element と併用する
  - NG: `<div class="--active">` → OK: `<div class="card card--active">`
- JS から参照するクラスには `js-` プレフィックスを付け、スタイルには使用しない: `.js-toggle`

### FLOCSS

FLOCSS（Foundation / Layout / Object）の考え方でスタイルを分類する。

#### レイヤー構成

| レイヤー       | 役割                                             | 例                      |
| -------------- | ------------------------------------------------ | ----------------------- |
| **Foundation** | リセット・基底スタイル（セレクター指定なし）     | `html`, `body`, `*`     |
| **Layout**     | ページのワイヤーフレーム構成                     | `.l-header`, `.l-main`  |
| **Object**     | 再利用可能な UI パターン（3 種に細分）           |                         |
| └ Component    | 最小単位の UI パーツ（BEM で命名）               | `.c-button`, `.c-card`  |
| └ Project      | 複数 Component を組み合わせたプロジェクト固有 UI | `.p-hero`, `.p-article` |
| └ Utility      | 補助的な単一スタイル（`!important` 許容）        | `.u-hidden`, `.u-mt-8`  |
| **Page**       | ページ固有のスタイル（特定ページだけに適用）     | `.top`, `.about`        |

#### プレフィックスルール

| プレフィックス | 対象レイヤー |
| -------------- | ------------ |
| `l-`           | Layout       |
| `c-`           | Component    |
| `p-`           | Project      |
| `u-`           | Utility      |

#### ルール

- 上位レイヤーは下位レイヤーに依存しない（Foundation → Layout → Object → Page の順）
- Component は他の Component に依存しない
- Utility の `!important` は唯一の例外として許容する
- Page は特定ページのみに適用し、汎用スタイルは Object に切り出す
