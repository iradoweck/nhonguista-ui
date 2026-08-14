# 🎨 @nhonguista/ui (Design System)

> Biblioteca de componentes React oficiais, acessíveis e reutilizáveis do ecossistema Nhonguista.

<p align="left">
  <img src="https://img.shields.io/badge/Base-Radix%20UI-161618?style=for-the-badge" alt="Radix UI">
  <img src="https://img.shields.io/badge/Estilização-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS">
  <a href="LICENSE"><img src="https://img.shields.io/badge/Licen%C3%A7a-Open%20Core%20(Dual)-green?style=for-the-badge" alt="Licença"></a>
</p>

## 📖 Sobre o Projeto

O **@nhonguista/ui** é o coração visual da plataforma Nhonguista. Baseado no ecossistema `shadcn/ui` e `Radix UI`, este pacote fornece uma fundação sólida para a construção de interfaces de utilizador (UIs) consistentes, acessíveis e visualmente premium através das diversas aplicações do monorepo (como a Landing Page e o Admin Dashboard).

Este pacote é **Open Source** para incentivar os desenvolvedores locais a aprenderem e colaborarem na padronização de interfaces de alta qualidade em Moçambique.

## 🚀 Instalação e Uso

Dentro do monorepo Nhonguista, este pacote já está configurado via workspaces. Para usar numa aplicação (ex: `apps/landing`), instale-o como dependência no `package.json`:

```json
{
  "dependencies": {
    "@nhonguista/ui": "workspace:*"
  }
}
```

### Exemplo de Utilização

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@nhonguista/ui"

export default function Exemplo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Serviços Premium</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">
          Encontre os melhores profissionais de Nampula.
        </p>
        <Button variant="default">Ver Profissionais</Button>
      </CardContent>
    </Card>
  )
}
```

## 🛠️ Arquitetura

O Design System não é publicado como um pacote npm compilado (tradicional), mas sim como um pacote interno de código fonte que é transpilado pelas aplicações que o consomem (utilizando a configuração de `transpilePackages` do Next.js).

- **Tailwind Config**: Exportamos um `tailwind.config.js` unificado.
- **Componentes**: Focados em acessibilidade (WAI-ARIA).
- **Variáveis de Cor**: Temas integrados e pensados para contrastes adequados.

## 🤝 Quer Contribuir?

A comunidade é bem-vinda para ajudar a evoluir a **UI** e a **Landing Page**. 
Leia nosso [CONTRIBUTING.md](CONTRIBUTING.md) para entender como as PRs funcionam na branch `devlab`, as regras de *Tags*, e nossos Padrões de Commit em Inglês.

Por favor, garanta que suas interações seguem nosso [Código de Conduta (CODE_OF_CONDUCT.md)](CODE_OF_CONDUCT.md).

- [Reportar um Bug](../../issues/new?template=bug_report.md)
- [Sugerir Melhoria](../../issues/new?template=feature_request.md)

### 🔒 Política de Segurança
Pesquisadores de segurança: Se encontrarem vulnerabilidades no nosso Backend ou Painel Administrativo, **NÃO** abram Issues públicas. Confiram nosso arquivo [SECURITY.md](SECURITY.md) para instruções de reporte confidencial.

---

## 👥 Equipa, Suporte e Créditos

Este projeto é visionado e mantido ativamente com dedicação aos talentos de Nampula.

---
*Construído com dedicação pela ZEDECK'S IT e a Comunidade Open Source.*
