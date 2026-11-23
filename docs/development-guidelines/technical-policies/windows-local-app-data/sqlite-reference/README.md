---
unlisted: true
---

# Windows ローカル SQLite データ設計

> 作成日: 2026-11-23
> 更新日: 2026-11-23
> 作成者: Codex

このリファレンスは、Windows の `%LOCALAPPDATA%` に置く SQLite データの配置、識別、所有権、共有契約、運用上の設計基準を定めます。これはデータ設計方針であり、SQLite の採用、特定のスキーマ、MCP の接続方式、監査保証の認定を決めるものではありません。

- [配置・安定 ID・命名](./storage-and-naming.md)
- [データ所有権と共有契約](./ownership-and-contracts.md)
- [運用・完全性・セキュリティ](./operations-and-integrity.md)

親の[Windows ローカルアプリケーションデータ管理](../README.md)に定める保存領域、ライフサイクル、診断ログ・監査証跡・Temp の区別を前提とします。

