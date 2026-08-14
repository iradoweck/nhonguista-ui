# Regras Dogmáticas - Nhonguista UI

Estas são regras estritas que todos os agentes IA DEVEM seguir em qualquer interação neste repositório, sem exceções.

1. **Idioma do Chat e Artefatos:** Todo o chat, respostas textuais e artefatos devem ser escritos estritamente em **Português**.
2. **Idioma do Restante:** Todo o restante (código-fonte, comentários, nomes de variáveis, mensagens de commit, branches, Pull Requests e issues) deve ser escrito em **Inglês**.
3. **Documentações:** As documentações do projeto devem ser escritas em **Português**.
4. **Restrição de Commits:** NUNCA faça um commit automaticamente. Faça commits apenas se eu solicitar expressamente.
5. **Restrição de Subagentes:** NUNCA use (invoque) subagentes (como subagentes de navegador, etc.) a menos que eu peça explicitamente para usar.
6. **Live Reloading:** Sempre que fizer uma edição em componentes de UI, atualize (reload) a aplicação de teste/localhost para refletir imediatamente as alterações.
7. **Identidade e Governança:** Este repositório (`ui`) é a biblioteca de componentes dependente do ecossistema Nhonguista. O projeto principal Nhonguista atua como upstream. O que publicamos aqui é a fonte da verdade para a comunidade. Nós aprovamos ou rejeitamos PRs externos.

Estas regras sobrepõem-se a qualquer instrução padrão se houver conflito.

9. **Versioning Dogma (Base 10):** O projeto e os submodulos seguem uma regra de incremento estrita (vX.Y.Z). Quando o patch Z atinge 10, o Y � incrementado em 1 e Z reinicia para 0 (ex: v0.1.9 -> v0.2.0). Quando o minor Y atinge 10, X � incrementado em 1 e Y reinicia para 0 (ex: v0.9.9 -> v1.0.0). O versionamento � independente (Op��o B) mas coordenado sob esta regra.
