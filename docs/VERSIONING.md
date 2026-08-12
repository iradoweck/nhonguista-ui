# 🔢 O Dogma de Versionamento (Base 10)

Este pacote segue uma regra estrita de versionamento semântico, conhecida internamente como o **Versioning Dogma (Base 10)**.

A estrutura base é a norma `vX.Y.Z`.

## 📐 As Regras do Dogma Base 10

1. **Limite do Patch (Z)**: Quando atinge `10`, deve ser zerado e `Y` incrementa (Ex: `v0.1.9` ➔ `v0.2.0`).
2. **Limite do Minor (Y)**: Quando atinge `10`, deve ser zerado e `X` incrementa (Ex: `v0.9.9` ➔ `v1.0.0`).

Ao contribuir, deverá respeitar este fluxo nas suas propostas de release.
