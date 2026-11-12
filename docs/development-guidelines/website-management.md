# Website Management

確定日: 2026年11月13日（日本時間）

この文書では、Ateliers-Dev のウェブサイトに掲載する情報の分類と運営方針を定めます。サイトは、Ateliers-Dev の活動や製品について、信頼できる情報を利用者に届けるための情報源として運営します。

## 情報の分類

### Development Guidelines

Ateliers-Dev の複数のプロジェクトで共通して適用する開発ガイドラインと方針を掲載します。次の内容を含みます。

- GitHub Guidelines
- Technical Policies
- Website Management（この文書）

### Project Knowledge

プロジェクトごとの設計、技術検証、開発・運用情報を記録します。共通規約ではなく、特定のプロジェクトに結び付く知識が対象です。

### Products

利用者や導入を検討する人に向けて、提供する製品・OSSの情報を掲載します。正式リリース前でも、Alpha や Beta など開発中の製品を紹介し、テスターを募集できます。利用ガイドと利用者向けリリースノートもここに置きます。

### About

Ateliers-Dev 自体を知ってもらうための情報を掲載します。

- **Overview**: 活動の概要
- **Projects**: 活動領域・シリーズの紹介
- **Community**: コミュニティと参加方法の案内

## Project Knowledge と Products の区別

Project Knowledge は開発・研究の過程で得た知識を、主に開発や保守に関わる人へ共有する場所です。Products は提供する成果物を利用者に紹介し、使い方やリリース情報を届ける場所です。

同じプロジェクトや成果物に関する情報でも、開発上の設計判断や検証結果は Project Knowledge、利用者向けの機能説明や使い方は Products に掲載します。あるプロジェクトが製品になった場合も、両者の役割を保ちます。

## サイト構造の参考例

以下は、現時点の運営方針に基づく情報構造の例です。利用者向けのナビゲーションとコンテンツ分類を示すもので、Docusaurus の物理的なディレクトリ構成を定めるものではありません。

```text
Ateliers-Dev
├── Home
│   └── サイト概要・主要コンテンツへの案内
├── Development Guidelines
│   ├── GitHub Guidelines
│   │   ├── Repository Management
│   │   ├── Branch Strategy
│   │   └── Pull Request Guidelines
│   ├── Technical Policies
│   │   ├── Coding Standards
│   │   ├── Design Principles
│   │   ├── Testing Guidelines
│   │   └── Security Policies
│   └── Website Management
│       └── サイト運営方針（本ドキュメント）
├── Project Knowledge
│   ├── Ateliers AI
│   │   ├── AI Orchestrator
│   │   │   ├── Architecture
│   │   │   ├── Technical Decisions
│   │   │   └── Troubleshooting
│   │   └── AI Skills
│   │       ├── Design
│   │       └── Verification
│   └── Ateliers Voice
│       └── Technical Knowledge
├── Products
│   ├── Product A
│   │   ├── Overview
│   │   ├── Getting Started
│   │   ├── User Guide
│   │   └── Release Notes
│   └── Product B
│       └── Overview
└── About
    ├── Overview
    ├── Projects
    │   ├── Ateliers AI
    │   └── Ateliers Voice
    └── Community
```

この例は完成形や必須ページの一覧ではありません。`Product A` と `Product B` は構造を示すための仮名であり、掲載する製品を確定するものではありません。実際のコンテンツや運用状況に応じて、項目の統合・分割・名称変更を行います。Project Knowledge は各開発リポジトリで原本を管理し、サイトから参照または自動連携する方法も選択できます。構造を維持すること自体を目的にせず、利用者が必要な情報へアクセスしやすいことを優先します。

## About / Projects の紹介方針

Projects はリポジトリ一覧ではなく、Ateliers-Dev の活動領域やシリーズを紹介する入口とします。各領域の概要を簡潔に説明し、代表的なリポジトリを最大3件まで掲載します。全リポジトリを網羅せず、個々の実装や詳細は各リポジトリの README と GitHub に案内します。

例えば、`ateliers-ai` シリーズでは AI に関する取り組み、特にオーケストレーションやスキル開発を紹介します。`ateliers-voice` では音声生成や再生に関する取り組みを紹介します。掲載する代表リポジトリは、公開状況や活動に応じて選びます。

## 発信とコミュニティ

- サイト内に Blog カテゴリは設けません。
- 短い近況や募集は X で発信します。
- 技術記事は Zenn などの記事プラットフォームで公開し、必要に応じてサイトから案内します。
- サイトは確定した情報を参照できる場所として保ちます。定期的な記事投稿や更新を義務にしません。情報に変更があったときや公開する内容ができたときに更新します。
- Slack は内部運用と AI からの通知に利用します。
- Discord は将来、外部コミュニティを設ける場合の候補とします。現時点では設置を前提としません。
- 正式な課題や改善要望は GitHub Issues で受け付けます。

## 独立カテゴリにしない項目

現時点では、FAQ、Members、Technical Notebook を独立したカテゴリとして設けません。必要な情報は内容に応じて既存の分類に置き、独立させる必要が生じた場合に見直します。

## 共通方針とサイト固有の技術情報

複数のプロジェクトで再利用できる規約や共通プロセスは Development Guidelines に記録します。Docusaurus の構成、サイト固有の CI/CD、ビルドや公開の技術的な検証・運用情報は、`ateliers-website` の Project Knowledge に記録します。
