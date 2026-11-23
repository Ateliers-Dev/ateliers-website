---
unlisted: true
---

# docs フォルダ

> 作成日: 2026-11-18
> 更新日: 2026-11-23
> 作成者: Codex

この README は、AI エージェントが開発ドキュメントの配置と参照先を把握するための索引です。サイトの利用者向けサイドバーには掲載しません。

## まず確認する文書

| 目的 | 原本 |
| --- | --- |
| このリポジトリで作業する際の指示 | `AGENTS.md` |
| サイトの目的、情報分類、掲載場所、原本管理 | [Website Management](development-guidelines/website-management.md) |
| 文書の種類、Front Matter、記述・更新方法 | [ドキュメント作成ガイドライン](development-guidelines/documentation-guidelines.md) |
| 理念や目標の詳細な定義 | [哲学と目標](development-guidelines/philosophy.md) |

ここに記載する説明は文書の入口を示すものであり、各原本の内容を置き換えません。判断や変更を行う際は、該当する原本を確認してください。

## 配置と主な参照先

| 場所 | 内容・用途 |
| --- | --- |
| `docs/about/` | Ateliers-Dev の活動概要とメンバー紹介。フォルダの `README.md` が対象範囲を案内します。 |
| `docs/development-guidelines/` | 複数プロジェクトに共通する開発方針・ガイドライン。フォルダの `README.md` と上記の原本を参照します。 |
| `docs/development-guidelines/technical-policies/` | 共通の技術・開発方針、テンプレート、リファレンス。詳細は [Technical Policies の README](development-guidelines/technical-policies/README.md) を参照します。 |
| `docs/development-guidelines/technical-policies/windows-local-app-data/` | Windows ユーザー領域に置くアプリケーションデータの分類・保存・ライフサイクル等。各ページへの入口は同フォルダの `README.md` です。 |
| `docs/development-guidelines/technical-policies/templates/` | 複数プロジェクトで再利用する開発計画テンプレートと記入例。詳細は同フォルダの `README.md` を参照します。 |
| `docs/intro.mdx`、`docs/tutorial-basics/`、`docs/tutorial-extras/` | Docusaurus の入門・サンプル文書です。Ateliers-Dev の方針や実運用を示す原本として扱わないでください。 |

## サイト上のナビゲーション

Docusaurus の利用者向けサイドバーは `sidebars.ts` の自動生成設定と各フォルダの `_category_.json` で構成します。この索引はエージェント向けの参照案内であり、サイドバー設定やカテゴリ表示を複製しません。

## 更新方法

- 文書の追加・移動・削除で上記の参照先や説明が変わる場合は、この索引を更新します。
- フォルダの対象範囲や文書の分類・種類が変わる場合は、そのフォルダの `README.md` と必要な親 README も更新します。
- 文書の説明や仕様は各原本で管理し、索引に全文や詳しい要約を複製しません。
- 小規模な文書群であるため、Front Matter の項目を増やしたり、生成スクリプト・依存関係を追加したりせず、リンクと配置案内を手動で保守します。文書数や更新負担が増えた場合に限り、自動生成を再検討します。
