## プロジェクト概要

HTML / SCSS を使ったフロントエンド開発のスターターテンプレートです。
Prettier・Stylelint を用いてコード品質を統一し、Live Sass Compiler で SCSS を自動コンパイルします。

**主な使用技術:** Sass, Prettier, Stylelint, Live Sass Compiler

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

- プロパティはアルファベット順に記述する（`stylelint-order`）
- セレクターは BEM 記法に従う: `block__element--modifier`
  - 使用できる文字: 小文字英数字・ハイフン
  - 例: `.card__title--active`
- ネストの深さは最大 3 階層まで
- 保存時に自動修正が実行されます（`source.fixAll.stylelint`）

### SCSS

- 編集するファイルは `project/style.scss` のみ
- `project/style.css` は Live Sass Compiler が自動生成するため直接編集しない
- CSS カスタムプロパティ（変数）は `:root` で定義する
- `!important` の使用は原則禁止

### HTML

- インデントはスペース 2 つ
- 属性値はダブルクォートで囲む
- 空要素の末尾スラッシュは省略する（例: `<img src="..." alt="...">`）
