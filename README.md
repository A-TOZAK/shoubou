🔥 火事からまちを守る - 小学3年生向け防火教育サイト
小学校3年生の社会科「火事から町を守る」単元のための学習教材サイトです。
📚 サイト構成
ファイル一覧
├── index.html          # メインページ
├── glossary.html       # 用語集ページ
├── script.js           # メインページのJavaScript
├── glossary.js         # 用語集ページのJavaScript
└── README.md          # このファイル

✨ 主な機能
メインページ (index.html)
6つのカテゴリー


地域の人と一緒に
安全な逃げ道
おうちの火の元チェック
お掃除も防火
計画してやってみよう
みんなに伝えよう
インタラクティブな要素


ホバーエフェクト付きのカード
アニメーション効果
クリックで詳細表示
チェックリスト機能
標語作成機能
用語集ページ (glossary.html)
検索機能


ひらがな・漢字対応の検索
リアルタイム検索結果表示
ハイライト機能
カテゴリーフィルター


すべて
設備・道具
行動・ルール
人・組織
危険なこと
16個の重要用語


消火器、火災警報器、防火扉など
絵文字とアイコン付き
わかりやすい説明
🚀 GitHub Pagesへのデプロイ手順
ステップ1: GitHubアカウントの準備
GitHubにアクセス
アカウントを作成（すでにある場合はログイン）
ステップ2: リポジトリの作成
GitHubのホーム画面右上の「+」ボタンをクリック
「New repository」を選択
リポジトリ名を入力（例：fire-safety-education）
「Public」を選択
「Create repository」をクリック
ステップ3: ファイルのアップロード
方法A: Webインターフェースを使用（簡単）
リポジトリページで「Add file」→「Upload files」をクリック
すべてのファイルをドラッグ&ドロップ
index.html
glossary.html
script.js
glossary.js
「Commit changes」をクリック
方法B: Git コマンドを使用
# リポジトリをクローン
git clone https://github.com/あなたのユーザー名/fire-safety-education.git
cd fire-safety-education

# ファイルをコピー
# (すべてのHTMLとJSファイルをこのフォルダにコピー)

# ファイルを追加
git add .

# コミット
git commit -m "初回コミット: 防火教育サイト"

# プッシュ
git push origin main

ステップ4: GitHub Pagesの有効化
リポジトリのページで「Settings」タブをクリック
左サイドバーの「Pages」をクリック
「Source」で「main」ブランチを選択
「/root」を選択
「Save」をクリック
ステップ5: サイトの確認
数分待つとサイトが公開されます
URLは https://あなたのユーザー名.github.io/fire-safety-education/ になります
ブラウザでアクセスして確認
🎨 カスタマイズ方法
色の変更
各カテゴリーには固有の色が設定されています：
地域の人と一緒に: blue-500
安全な逃げ道: red-500
おうちの火の元チェック: orange-500
お掃除も防火: teal-500
計画してやってみよう: purple-500
みんなに伝えよう: pink-500
Tailwind CSSのクラス名を変更することで色を変えられます。
コンテンツの追加
script.jsのcategoryDataオブジェクトを編集することで、各カテゴリーの内容を変更できます。
用語の追加
glossary.htmlに新しい用語カードを追加：
<div class="term-card bg-white rounded-lg shadow-sm p-4 border-l-4 border-色" 
     data-category="カテゴリー" 
     data-keywords="キーワード1 きーわーど1">
    <!-- カード内容 -->
</div>

🔧 技術スタック
HTML5 - 構造
Tailwind CSS - スタイリング（CDN版使用）
Vanilla JavaScript - インタラクティブ機能
Google Fonts - 日本語フォント（BIZ UDPゴシック、Noto Sans JP）
📱 対応ブラウザ
Chrome（推奨）
Firefox
Safari
Edge
モバイルブラウザ対応
🎯 学習目標
このサイトを使って、児童は以下を学習できます：
防火の基礎知識


火災の危険性
予防方法
消火設備
実践的なスキル


避難の仕方（おかしも）
火の元チェック
地域との協力
伝える力


ポスター作り
標語作成
家族への啓発
📖 参考資料
サイト内で引用している資料：
徳島県つるぎ町立半田小学校
長野県塩尻市立塩尻小学校
日本防火・防災協会
各自治体の消防本部
📝 ライセンス
このプロジェクトは教育目的で作成されています。 引用資料については各出典元の規約に従ってください。
🤝 貢献
改善案やバグ報告は、GitHubのIssuesまたはPull Requestsでお願いします。
📧 お問い合わせ
質問や提案がある場合は、GitHubのIssuesをご利用ください。

作成日: 2025年 対象学年: 小学校3年生 教科: 社会科

