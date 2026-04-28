## プロジェクト概要

HTML / SCSS を使ったフロントエンド開発のスターターテンプレートです。
Prettier・Stylelint を用いてコード品質を統一し、npm scripts で SCSS を自動コンパイルします。
PostCSS / autoprefixer によるベンダープレフィックス自動付与にも対応しています。

**主な使用技術:** Sass, PostCSS, autoprefixer, Prettier, Stylelint

## コーディング規約

### 基本ルール

- 文字コード: UTF-8
- 改行コード: LF
- インデント: スペース 2 つ
- ファイル末尾: 改行を必ず入れる
- 行末の空白: 削除する（Markdown は除く）

### フォーマット

#### Prettier（HTML / CSS / SCSS / JS）

| 設定項目   | 値               |
| ---------- | ---------------- |
| セミコロン | あり             |
| クォート   | シングルクォート |
| タブ幅     | 2                |
| 末尾カンマ | ES5 準拠         |
| 最大行長   | 100 文字         |
| 改行コード | LF               |

保存時に自動フォーマットが実行されます（`editor.formatOnSave: true`）。

#### Stylelint（SCSS）

- プロパティは **SMACSS 順序** で記述する（`stylelint-config-property-sort-order-smacss`）
- セレクターは BEM 記法に従う: `block__element--modifier`
  - 使用できる文字: 小文字英数字・ハイフン
  - 例: `.card__title--active`
- ネストの深さは最大 3 階層まで
- 保存時に自動修正が実行されます（`source.fixAll.stylelint`）
- スペース・インデント等のスタイルルールは `@stylistic/stylelint-plugin` で管理

### SCSS

- 編集するファイルは `project/style.scss` のみ
- `project/style.css` は npm scripts（Sass + PostCSS）が自動生成するため直接編集しない
- CSS カスタムプロパティ（変数）は `:root` で定義する
- `!important` の使用は原則禁止

### npm scripts

| スクリプト           | 内容                                                        |
| -------------------- | ----------------------------------------------------------- |
| `npm run sass`       | 1回コンパイル・展開形式・ソースマップなし・autoprefixer適用 |
| `npm run sass:dev`   | 監視・展開形式・ソースマップあり（autoprefixer未適用）      |
| `npm run sass:map`   | 1回コンパイル・展開形式・ソースマップあり・autoprefixer適用 |
| `npm run sass:build` | 1回コンパイル・展開形式・ソースマップなし・autoprefixer適用 |
| `npm run sass:prod`  | 1回コンパイル・minify・ソースマップなし・autoprefixer適用   |

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

| レイヤー       | 役割                                             | 例                         |
| -------------- | ------------------------------------------------ | -------------------------- |
| **Foundation** | リセット・基底スタイル（セレクター指定なし）     | `html`, `body`, `*`        |
| **Layout**     | ページのワイヤーフレーム構成                     | `.l-header`, `.l-main`     |
| **Object**     | 再利用可能な UI パターン（3 種に細分）           |                            |
| └ Component    | 最小単位の UI パーツ（BEM で命名）               | `.c-button`, `.c-card`     |
| └ Project      | 複数 Component を組み合わせたプロジェクト固有 UI | `.p-hero`, `.p-article`    |
| └ Utility      | 補助的な単一スタイル（`!important` 許容）        | `.u-hidden`, `.u-mt-8`     |
| **Page**       | ページ固有のスタイル（特定ページだけに適用）     | `.top`, `.about`           |

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

### HTML

- インデントはスペース 2 つ
- 属性値はダブルクォートで囲む
- 空要素の末尾スラッシュは省略する（例: `<img src="..." alt="...">`）
