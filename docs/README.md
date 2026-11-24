---
unlisted: true
---

# docs フォルダ

> 作成日: 2026-11-18
> 更新日: 2026-11-25
> 作成者: Codex

この README は、AI エージェントが開発ドキュメントの配置と参照先を把握するための索引です。サイトの利用者向けサイドバーには掲載しません。

## 参照方法

このリポジトリでの作業指示はルートの `AGENTS.md` を確認してください。続けて、以下の一覧から作業目的に合う文書を選び、判断の根拠として該当する原本を開きます。サイトの分類・配置は Website Management、文書作成はドキュメント作成ガイドライン、理念の解釈は哲学と目標がそれぞれ原本です。

## 文書一覧

一覧は文書を選ぶための短い案内です。詳しい説明や規則はリンク先の原本で確認してください。

### About

- [活動概要](about/overview.md)：Ateliers-Dev の活動と理念の概要。
- [メンバー](about/members.md)：公開対象のメンバー紹介。
- [AI コンプライアンス教育](about/ai-compliance-education.md)：人間と AI の協働における教育・行動・改善の取り組み。

### Development Guidelines

- [Website Management](development-guidelines/website-management.md)：サイトの目的、情報分類、掲載場所、原本管理。
- [ドキュメント作成ガイドライン](development-guidelines/documentation-guidelines.md)：文書の種類、Front Matter、記述・更新方法。
- [継続的改善ガイドライン](development-guidelines/technical-policies/continuous-improvement-guidelines.md)：事象・検討・対処結果を関連付けて記録し、必要時に再評価する方法。
- [継続的改善の記録一覧](development-guidelines/continuous-improvement/README.md)：再利用可能な改善事例。
- [哲学と目標](development-guidelines/philosophy.md)：Ateliers の理念と目標の詳細な原本。
- [Technical Policies README](development-guidelines/technical-policies/README.md)：共通の技術・開発方針と下位フォルダの案内。
- [Issue Type・共通ラベル運用方針](development-guidelines/technical-policies/issue-classification-and-label-policy.md)：組織 Issue Type と共通ラベルの正本。
- [AI 協働方針](development-guidelines/technical-policies/ai-collaboration-policy.md)：AI エージェントの協働原則と権限の扱い。
- [AGENTS.md 作成ガイドライン](development-guidelines/technical-policies/agent-instructions-guidelines.md)：リポジトリ向け AI 作業指示の作成・配置・更新。
- [開発プロセスガイドライン](development-guidelines/technical-policies/development-process-guidelines.md)：計画から完了までの共通プロセス。
- [品質ガイドライン](development-guidelines/technical-policies/quality-guidelines.md)：目的・要求・リスクに応じた品質判断。
- [レビュー工程と品質判定](development-guidelines/technical-policies/review-process-guidelines.md)：レビューの責務、証拠、判定の扱い。
- [ブランチ戦略](development-guidelines/technical-policies/branch-strategy-guidelines.md)：共通ブランチ運用方針。
- [GitLab Flow 品質ゲート](development-guidelines/technical-policies/gitlab-flow-quality-gates.md)：GitLab Flow における遷移別の品質ゲート。
- [リポジトリ公開・非公開方針](development-guidelines/technical-policies/repository-visibility-policy.md)：リポジトリの公開判断と維持管理。

### 継続的改善の事例

- [管理者向け文書・報告の情報粒度改善](development-guidelines/continuous-improvement/documentation-and-reporting-granularity-2026.md)：管理者向け概要と実装者向け詳細を併存させた事例。実運用の効果は継続観察中。

### 再利用テンプレート

- [テンプレート README](development-guidelines/technical-policies/templates/README.md)：共通計画テンプレートと記入例の案内。
- [開発計画テンプレート](development-guidelines/technical-policies/templates/development-plan-template.md)：複数プロジェクトで使う計画のひな型。
- [記入例：Markdown 変換 CLI](development-guidelines/technical-policies/templates/markdown-conversion-cli-example.md)：小規模 CLI の計画例。
- [記入例：AI オーケストレーター](development-guidelines/technical-policies/templates/fictional-ai-orchestrator-example.md)：複数段階の AI 開発計画例。

### Windows ローカルアプリケーションデータ

- [Windows データ管理 README](development-guidelines/technical-policies/windows-local-app-data/README.md)：保存場所・ライフサイクル・記録・SQLite 関連ページの目次。
- [概要と既存実装の調査結果](development-guidelines/technical-policies/windows-local-app-data/overview.md)
- [保存場所とデータ分類](development-guidelines/technical-policies/windows-local-app-data/storage-layout.md)
- [作成・更新・削除と移行](development-guidelines/technical-policies/windows-local-app-data/lifecycle.md)
- [実行記録と監査データ](development-guidelines/technical-policies/windows-local-app-data/records-and-audit.md)
- [一時データと容量管理](development-guidelines/technical-policies/windows-local-app-data/temporary-data.md)
- [SQLite データ設計 README](development-guidelines/technical-policies/windows-local-app-data/sqlite-reference/README.md)：配置・所有権・運用の各ページへの目次。
- [SQLite の配置・安定 ID・命名](development-guidelines/technical-policies/windows-local-app-data/sqlite-reference/storage-and-naming.md)
- [SQLite のデータ所有権と共有契約](development-guidelines/technical-policies/windows-local-app-data/sqlite-reference/ownership-and-contracts.md)
- [SQLite の運用・完全性・セキュリティ](development-guidelines/technical-policies/windows-local-app-data/sqlite-reference/operations-and-integrity.md)

### Docusaurus の入門・サンプル

`docs/intro.mdx`、`docs/tutorial-basics/`、`docs/tutorial-extras/` は Docusaurus の入門・サンプル文書です。Ateliers-Dev 固有の方針や実運用の根拠として使わず、Docusaurus の利用方法を確認するときに参照します。

## サイト上のナビゲーション

Docusaurus の利用者向けサイドバーは `sidebars.ts` の自動生成設定と各フォルダの `_category_.json` で構成します。この索引はエージェント向けの参照案内であり、サイドバー設定やカテゴリ表示を複製しません。

## 更新方法

- 文書の追加・移動・削除で上記の参照先や説明が変わる場合は、この索引を更新します。
- フォルダの対象範囲や文書の分類・種類が変わる場合は、そのフォルダの `README.md` と必要な親 README も更新します。
- 文書の説明や仕様は各原本で管理し、索引に全文や詳しい要約を複製しません。
- 小規模な文書群であるため、Front Matter の項目を増やしたり、生成スクリプト・依存関係を追加したりせず、リンクと配置案内を手動で保守します。文書数や更新負担が増えた場合に限り、自動生成を再検討します。
