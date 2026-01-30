# 5DENTAL TOKYO GINZA ウェブサイト

## プロジェクト概要

銀座の歯科医院「5DENTAL TOKYO GINZA」の公式ウェブサイト。
静的HTML/CSSで構築されたランディングページ・下層ページ。

## 技術スタック

- HTML5
- CSS3（Vanilla CSS、BEM命名規則）
- Vanilla JavaScript
- Google Fonts（Noto Sans JP, Zen Old Mincho, Pinyon Script）

## ディレクトリ構造

```
5dental-official/
├── index.html              # トップページ
├── orthodontics.html       # 矯正歯科ページ
└── assets/
    ├── css/
    │   ├── base.css        # 基本スタイル・CSS変数
    │   ├── header.css      # ヘッダー
    │   ├── footer.css      # フッター
    │   ├── overlays.css    # メガメニュー・モバイルメニュー
    │   ├── hero.css        # トップページヒーロー
    │   ├── sections.css    # トップページセクション
    │   ├── lower.css       # 下層ページ共通スタイル
    │   └── responsive.css  # レスポンシブ対応
    ├── icons/              # SVGアイコン
    └── images/             # 画像ファイル
```

## CSS設計規則

### カラー変数（base.css）

```css
--color-primary: #595a5d;      /* メインテキスト */
--color-primary-strong: #4d4e50;
--color-secondary: #787b83;
--color-accent: #b5a27c;       /* ゴールドアクセント */
```

### ゴールド系カラー

- `#9a7d4a` - セクションタイトル、サブ見出し
- `#b5a27c` - 見出しバー背景、ボタン
- `#7d6c4f` - ボタンテキスト

### BEM命名規則

```css
.block {}
.block__element {}
.block--modifier {}
```

## コーディング規約

### HTML

- セマンティックなHTML5タグを使用
- アクセシビリティ（aria属性、alt属性）を考慮
- 画像は適切なloading属性を設定（lazy/eager）

### CSS

- モバイルファーストではなくデスクトップファーストで記述
- ブレークポイント: 768px（タブレット以下）
- 単位: px基本、line-heightは単位なし
- フォントサイズ: 明示的にpxで指定

### 画像

- 写真: PNG/WebP
- アイコン・ロゴ: SVG
- 画像パス: `assets/images/` または `assets/icons/`

## Figma連携

デザインはFigmaで管理。MCP経由でデザイン情報を取得可能。

### 画像の命名規則

- サービス画像: `assets/images/service/{service-name}.png`
- 背景画像: `assets/images/backgrounds/{name}.png`
- ロゴ: `assets/images/service/logo-{brand}.svg`

### Figmaからの変換ルール

1. Tailwindクラスは使用しない（Vanilla CSSに変換）
2. React構文はHTML構文に変換
3. localhost画像URLは適切な名前でダウンロードして保存
4. セクションタイトルの装飾線はCSSグラデーションで再現

## 下層ページテンプレート

### 必須要素

1. メインビジュアル（`.lower-mv`）
2. パンくずリスト（`.breadcrumb`）
3. コンテンツセクション
4. フッター（index.htmlから流用）

### 共通CSS

下層ページは `assets/css/lower.css` を使用。
