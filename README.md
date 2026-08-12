# 🎨 @nhonguista/ui (Design System)

> Biblioteca de componentes React oficiais, acessíveis e reutilizáveis do ecossistema Nhonguista.

<p align="left">
  <img src="https://img.shields.io/badge/Base-Radix%20UI-161618?style=for-the-badge" alt="Radix UI">
  <img src="https://img.shields.io/badge/Estilização-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/Licença-Apache%202.0-green?style=for-the-badge" alt="Licença">
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
import { Button } from "@nhonguista/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@nhonguista/ui/card"

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

## 🤝 Como Contribuir

Quer criar um novo componente ou melhorar a acessibilidade de um existente?
1. Desenvolva o componente dentro da pasta `src/components`.
2. Garanta que o componente utiliza as diretrizes do **Tailwind CSS**.
3. Certifique-se de que é acessível e responsivo.
4. Documente as propriedades do componente.
5. Abra um PR!

## 📄 Licença

Este pacote é de código aberto e distribuído sob a licença **Apache License 2.0**.  
Consulte o ficheiro [LICENSE](./LICENSE) para mais detalhes sobre as permissões e limitações.

---
*Construído com dedicação pela ZEDECK'S IT e a Comunidade Open Source.*
