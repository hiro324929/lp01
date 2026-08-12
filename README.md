# 「AI社員」の賢い雇い方 実践・体験会 LP

中小企業経営者向けの「AI社員」体験会ランディングページ。

## 構成

- `index.html` — メインHTML
- `style.css` — スタイル定義
- `script.js` — スムーススクロール／フェードイン演出
- `vercel.json` — Vercelデプロイ設定

## 特徴

- ハイブリッド開催（オンライン無料／会場3,000円税別）
- メール送信＋LINE公式アカウントの併用申込導線
- LINE公式は友だち追加特典付き
- レスポンシブ対応（PC/タブレット/スマホ）
- 純粋な HTML/CSS/JS のみで動作（フレームワーク不要）

## 後日差替が必要な箇所

| 箇所 | 内容 |
|------|------|
| 講師セクション | プロフィール写真・氏名・肩書 |
| LINE QRコード | QR画像 or 友だち追加リンク |
| LINE友だち追加特典 | 具体的な特典内容 |
| 開催概要 | 開催日時・会場住所 |

## デプロイ方法（Vercel）

1. このリポジトリを GitHub にプッシュ
2. Vercel（https://vercel.com）で "New Project" → GitHubリポジトリを Import
3. Framework Preset: **Other**（静的HTMLなのでビルド不要）
4. Deploy をクリック

数十秒で `https://ai-seminar-lp-01.vercel.app` のようなURLが発行されます。
