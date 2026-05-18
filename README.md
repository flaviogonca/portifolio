# 🚀 Portfolio - Flávio Goncalves

> **Construindo sistemas robustos para produtos que precisam escalar**

Um portfolio profissional moderno e responsivo desenvolvido com Next.js, TypeScript, Tailwind CSS e shadcn/ui. Apresenta uma arquitetura elegante com suporte a múltiplos idiomas, tema claro/escuro e experiências interativas.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38b2ac?style=flat-square&logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-6.11-2d3748?style=flat-square&logo=prisma)

---

## 📋 Visão Geral

Este projeto é uma **aplicação web de portfolio pessoal** para apresentar experiência profissional, habilidades técnicas, educação e histórico de trabalho. A aplicação combina design moderno com funcionalidades avançadas como:

- ✨ Animações fluidas com Framer Motion
- 🌍 Suporte multi-idioma (Português, Inglês, Francês)
- 🌓 Tema claro/escuro com persistência
- 📱 Design totalmente responsivo
- 💬 Formulário de contato com validação
- ⚡ WebSocket para comunicação em tempo real (exemplos)
- 🎨 Componentes reutilizáveis com shadcn/ui
- 🗄️ Integração com banco de dados via Prisma

---

## 🎯 Objetivos e Funcionalidades Principais

### **Objetivos**
- Apresentar de forma profissional a experiência e habilidades do desenvolvedor
- Demonstrar conhecimentos em arquitetura moderna e best practices
- Oferecer meio de contato direto via formulário
- Proporcionar experiência de navegação intuitiva e agradável

### **Funcionalidades**

#### 🎨 **Interface & UX**
- Navegação responsiva com menu mobile
- Animações de scroll reveal
- Transições suaves entre temas
- Grid pattern animado no background
- Cards com efeitos glassmorphism

#### 🌐 **Multi-idioma**
- Suporte a 3 idiomas: Português, Inglês e Francês
- Persistência de preferência via localStorage
- Traduções completas em todos os componentes

#### 🎭 **Temas**
- Modo escuro (padrão)
- Modo claro
- Sistema de cores CSS variables
- Detecção automática de preferência do sistema

#### 📧 **Contato**
- Formulário profissional com validação
- Endpoint API para processamento de mensagens
- Feedback visual de sucesso/erro

#### 🔌 **WebSocket (Exemplos)**
- Servidor Socket.io
- Cliente integrado com React
- Suporte a reconexão automática

---

## 💻 Tecnologias Utilizadas

### **Frontend**
| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **Next.js** | 16.1.1 | Framework React full-stack |
| **React** | 19.0.0 | Biblioteca UI |
| **TypeScript** | 5 | Tipagem estática |
| **Tailwind CSS** | 4 | Estilização utility-first |
| **shadcn/ui** | Latest | Componentes acessíveis |
| **Framer Motion** | 12.23.2 | Animações |
| **next-intl** | 4.3.4 | Internacionalização |
| **next-themes** | 0.4.6 | Gerenciamento de temas |
| **React Hook Form** | 7.60.0 | Gerenciamento de formulários |
| **Zod** | 4.0.2 | Validação de schemas |

### **Backend & Dados**
| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **Prisma** | 6.11.1 | ORM e gerenciamento de banco |
| **SQLite** | - | Banco de dados |
| **Socket.io** | - | WebSocket para tempo real |
| **Next.js API Routes** | - | Endpoints REST |

### **Ferramentas & DevOps**
| Ferramenta | Propósito |
|-----------|----------|
| **Bun** | Runtime JavaScript/TypeScript |
| **ESLint** | Linting e code quality |
| **Tailwindcss PostCSS** | Processamento CSS |
| **Caddy** | Reverse proxy e roteamento |

### **Bibliotecas Utilitárias**
- **Lucide React**: Ícones SVG
- **Recharts**: Gráficos e visualizações
- **React Markdown**: Renderização de markdown
- **React Syntax Highlighter**: Destaque de código
- **Date-fns**: Manipulação de datas
- **UUID**: Geração de IDs
- **clsx & tailwind-merge**: Utilitários CSS

---

## 📁 Estrutura de Diretórios

```
portfolio/
├── src/
│   ├── app/                          # Aplicação Next.js App Router
│   │   ├── api/                      # Endpoints REST API
│   │   │   ├── route.ts              # Endpoint raiz
│   │   │   └── contact/
│   │   │       └── route.ts          # POST /api/contact
│   │   ├── layout.tsx                # Layout raiz com metadados
│   │   ├── page.tsx                  # Página principal
│   │   └── globals.css               # Estilos globais
│   ├── components/
│   │   ├── portfolio/                # Componentes de seções
│   │   │   ├── navbar.tsx            # Navegação principal
│   │   │   ├── hero.tsx              # Seção hero
│   │   │   ├── about.tsx             # Seção sobre
│   │   │   ├── skills.tsx            # Seção de habilidades
│   │   │   ├── experience.tsx        # Seção de experiência
│   │   │   ├── highlights.tsx        # Seção de destaques
│   │   │   ├── education.tsx         # Seção de educação
│   │   │   ├── contact.tsx           # Seção de contato
│   │   │   ├── footer.tsx            # Rodapé
│   │   │   ├── section-wrapper.tsx   # Wrapper reutilizável
│   │   │   └── animated-grid.tsx     # Background animado
│   │   ├── ui/                       # Componentes shadcn/ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── form.tsx
│   │   │   └── ... (30+ componentes)
│   │   └── providers.tsx             # Providers (Theme, i18n)
│   ├── hooks/
│   │   ├── use-mobile.ts             # Hook para detectar mobile
│   │   └── use-toast.ts              # Hook para toasts
│   └── lib/
│       ├── db.ts                     # Cliente Prisma singleton
│       ├── utils.ts                  # Funções utilitárias (cn)
│       └── i18n/
│           ├── language-provider.tsx # Contexto de idioma
│           └── translations.ts       # Dicionários de tradução
├── prisma/
│   └── schema.prisma                 # Schema do banco de dados
├── public/                           # Arquivos estáticos
│   ├── robots.txt
│   └── ... (imagens, assets)
├── examples/
│   └── websocket/
│       ├── server.ts                 # Servidor Socket.io
│       └── frontend.tsx              # Cliente Socket.io
├── next.config.ts                    # Configuração Next.js
├── tailwind.config.ts                # Configuração Tailwind
├── tsconfig.json                     # Configuração TypeScript
├── package.json                      # Dependências e scripts
├── Caddyfile                         # Configuração proxy reverso
└── README.md                         # Este arquivo
```

---

## ⚙️ Requisitos

### **Ambiente**
- **Node.js**: 18+ ou **Bun**: 1.0+
- **Git**: Para versionamento

### **Dependências Principais**
- Next.js 16.1.1
- React 19.0
- TypeScript 5
- Tailwind CSS 4
- Prisma 6.11.1

---

## 📦 Instalação

### **1. Clonar o Repositório**
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

### **2. Instalar Dependências**

#### Com Bun (recomendado)
```bash
bun install
```

#### Com npm
```bash
npm install
```

#### Com yarn
```bash
yarn install
```

### **3. Configurar Variáveis de Ambiente**
```bash
cp .env.example .env.local
```

Configure o `.env.local`:
```env
# Database
DATABASE_URL="file:./dev.db"

# Opcionalmente: Configure serviços de email (SendGrid, Resend, etc)
# SMTP_HOST=smtp.example.com
# SMTP_PORT=587
# SMTP_USER=seu-email@example.com
# SMTP_PASSWORD=sua-senha
```

### **4. Inicializar Banco de Dados**
```bash
# Gerar cliente Prisma
bun run db:generate

# Push schema para banco
bun run db:push
```

---

## 🚀 Como Executar o Projeto

### **Desenvolvimento**
```bash
bun run dev
```
Acessa `http://localhost:3000`

### **Build para Produção**
```bash
bun run build
```

Cria otimizações e gera versão standalone em `.next/standalone`

### **Executar em Produção**
```bash
bun run start
```

Com NODE_ENV=production, executa servidor otimizado

### **Verificar Qualidade do Código**
```bash
bun run lint
```

---

## 📜 Scripts Disponíveis

| Script | Comando | Propósito |
|--------|---------|----------|
| **dev** | `next dev -p 3000` | Inicia servidor de desenvolvimento com live reload |
| **build** | `next build && cp ...` | Cria build otimizado e prepara versão standalone |
| **start** | `NODE_ENV=production bun .next/standalone/server.js` | Executa aplicação em produção |
| **lint** | `eslint .` | Verifica qualidade de código com ESLint |
| **db:push** | `prisma db push` | Sincroniza schema com banco de dados |
| **db:generate** | `prisma generate` | Gera cliente Prisma atualizado |
| **db:migrate** | `prisma migrate dev` | Cria nova migração |
| **db:reset** | `prisma migrate reset` | Reseta banco de dados |

---

## 💡 Exemplos de Uso

### **1. Navegação e Seções**
```typescript
// A página principal é auto-scrollável com âncoras
<a href="#hero">Ir para Hero</a>
<a href="#about">Ir para Sobre</a>
<a href="#skills">Ir para Habilidades</a>
```

### **2. Usar Hook de Idioma**
```typescript
import { useLanguage } from "@/lib/i18n/language-provider";

export function MinhaComponente() {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div>
      <h1>{t.hero.title1}</h1>
      <button onClick={() => setLanguage("en")}>English</button>
    </div>
  );
}
```

### **3. Usar Hook de Tema**
```typescript
import { useTheme } from "next-themes";

export function TemaToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
```

### **4. Componentes shadcn/ui**
```typescript
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ExemploCard() {
  return (
    <Card>
      <CardHeader>Título</CardHeader>
      <CardContent>Conteúdo</CardContent>
    </Card>
  );
}
```

### **5. Formulário com React Hook Form**
```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

export function MeuFormulario() {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  return <form onSubmit={form.handleSubmit(onSubmit)}>...</form>;
}
```

### **6. Chamar API de Contato**
```typescript
const response = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "João",
    email: "joao@example.com",
    subject: "Olá",
    message: "Gostei do seu portfolio!"
  }),
});
```

### **7. WebSocket com Socket.io (Exemplo)**
```typescript
import { io } from "socket.io-client";

const socket = io("/?XTransformPort=3003", {
  transports: ["websocket", "polling"],
  reconnection: true,
});

socket.on("connect", () => console.log("Conectado!"));
socket.emit("message", { content: "Olá servidor!" });
socket.on("message", (msg) => console.log(msg));
```

---

## 🔌 Endpoints API

### **GET /api**
Healthcheck básico do servidor

**Resposta (200):**
```json
{
  "message": "Hello, world!"
}
```

### **POST /api/contact**
Recebe e processa formulário de contato

**Body:**
```json
{
  "name": "Seu Nome",
  "email": "seu-email@example.com",
  "subject": "Assunto da Mensagem",
  "message": "Conteúdo da mensagem"
}
```

**Resposta (200):**
```json
{
  "success": true,
  "message": "Mensagem recebida com sucesso"
}
```

**Resposta (400):**
```json
{
  "error": "Todos os campos são obrigatórios"
}
```

**Resposta (500):**
```json
{
  "error": "Erro interno do servidor"
}
```

---

## 🔄 Fluxo da Aplicação

```
User Browser
    ↓
[Caddy Reverse Proxy :81]
    ↓
    ├─→ [Next.js Server :3000]
    │      ├─ Static Assets
    │      ├─ API Routes
    │      └─ SSR/RSC
    │
    └─→ [WebSocket Server :3003] (via XTransformPort)
           ├─ Socket.io
           └─ Real-time Messages
    ↓
[Prisma ORM]
    ↓
[SQLite Database]
```

### **Fluxo de Requisição HTTP**
1. Navegador acessa `http://localhost:81` (Caddy)
2. Caddy roteia para `localhost:3000` (Next.js)
3. Next.js renderiza página com SSR/RSC
4. Cliente React hydrata e ativa interatividade
5. User interage com formulário
6. POST `/api/contact` envia dados
7. API processa e retorna resposta

### **Fluxo de Requisição WebSocket**
1. Cliente emite `io('/?XTransformPort=3003')`
2. Caddy roteia para servidor Socket.io `:3003`
3. Servidor processa e emite eventos
4. Cliente recebe updates em tempo real

---

## 🏗️ Arquitetura

### **Padrões de Arquitetura**

#### **1. Server Components vs Client Components**
```
- Layout, Page (RSC) → renderizam no servidor
- Componentes com "use client" → hidratam no cliente
- Separação clara de responsabilidades
```

#### **2. Context API para Estado Global**
```
Providers (root)
├─ NextThemesProvider (tema claro/escuro)
└─ LanguageProvider (idioma selecionado)
   ├─ Navbar (acessa contexto)
   ├─ All Sections (acessam t.*)
   └─ Footer (acessa contexto)
```

#### **3. API Routes com Validação**
```
POST /api/contact
├─ Validação de body
├─ Processamento seguro
├─ Tratamento de erro
└─ Resposta estruturada
```

#### **4. Componentes Reutilizáveis**
```
SectionWrapper → envolve seções
SectionHeader → títulos padronizados
SkillCard → card de habilidade
ComponentePortfolio → compostos
```

#### **5. Banco de Dados com Prisma**
```
├─ User (id, email, name)
└─ Post (id, title, content, authorId)
```

---

## 🎯 Padrões e Boas Práticas Adotadas

### **Frontend**
- ✅ **Component Composition**: Componentes pequenos e reutilizáveis
- ✅ **Type Safety**: TypeScript em 100% do código
- ✅ **Responsive Design**: Mobile-first com Tailwind
- ✅ **Performance**: Image optimization, lazy loading
- ✅ **Accessibility**: Componentes shadcn/ui (acessíveis por padrão)
- ✅ **SEO**: Metadados via Next.js metadata API
- ✅ **Dark Mode**: Suporte nativo com next-themes

### **Backend**
- ✅ **API Design**: RESTful com validação Zod
- ✅ **Error Handling**: Tratamento estruturado de erros
- ✅ **Database**: ORM com Prisma, migrations
- ✅ **Environment Variables**: Configuração via .env

### **DevOps & Deployment**
- ✅ **Build Otimizado**: Standalone build para easy deployment
- ✅ **Reverse Proxy**: Caddy para roteamento avançado
- ✅ **Logging**: Logs em arquivo (dev.log, server.log)
- ✅ **Production Ready**: NODE_ENV checks, error handling

### **Code Quality**
- ✅ **ESLint**: Configurado com Next.js rules
- ✅ **TypeScript**: Strict mode habilitado
- ✅ **Naming Conventions**: camelCase para variáveis, PascalCase para componentes
- ✅ **Comments**: Código auto-documentado

---

## 🔐 Modelo de Dados

### **User**
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### **Post**
```prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## 📊 Dependências Principais

```json
{
  "core": {
    "next": "16.1.1",
    "react": "19.0.0",
    "typescript": "5"
  },
  "styling": {
    "tailwindcss": "4",
    "tailwindcss-animate": "1.0.7"
  },
  "components": {
    "shadcn/ui": "via copy-paste",
    "@radix-ui/*": "múltiplas"
  },
  "animations": {
    "framer-motion": "12.23.2"
  },
  "forms": {
    "react-hook-form": "7.60.0",
    "zod": "4.0.2",
    "@hookform/resolvers": "5.1.1"
  },
  "i18n": {
    "next-intl": "4.3.4"
  },
  "database": {
    "prisma": "6.11.1",
    "@prisma/client": "6.11.1"
  },
  "realtime": {
    "socket.io": "latest"
  }
}
```

---

## 🚀 Deployment

### **Opção 1: Standalone Mode (Recomendado)**
```bash
# Build
bun run build

# Executar
NODE_ENV=production bun .next/standalone/server.js
```

### **Opção 2: Docker**
```dockerfile
FROM oven/bun:latest
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build
EXPOSE 3000
CMD ["bun", "run", "start"]
```

### **Opção 3: Plataformas**
- **Vercel**: Deploy automático integrado com Next.js
- **Fly.io**: Suporte a containers com Bun
- **Railway**: Git push to deploy
- **VPS Próprio**: Com Caddy como reverse proxy

---

## 🔄 CI/CD

### **GitHub Actions** (sugestão de implementação)
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run lint
      - run: bun run build
      - run: # deploy script
```

---

## 📈 Possíveis Melhorias

### **Curto Prazo**
- [ ] Integração com serviço de email (SendGrid, Resend)
- [ ] Rate limiting no endpoint de contato
- [ ] Autenticação com NextAuth (admin para blog)
- [ ] Sistema de blog com markdown
- [ ] Analytics com Vercel Analytics ou Plausible

### **Médio Prazo**
- [ ] Dashboard de admin
- [ ] Sistema de comentários
- [ ] Integração com APIs de terceiros (GitHub, LinkedIn)
- [ ] Cache com Redis
- [ ] Testing suite (Jest, Playwright)
- [ ] Performance monitoring

### **Longo Prazo**
- [ ] Versão mobile app (React Native)
- [ ] Sistema de recomendações com ML
- [ ] Comunidade de usuários
- [ ] Marketplace de templates
- [ ] GraphQL API

---

## 🤝 Guia de Contribuição

### **1. Fork o Repositório**
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

### **2. Criar Branch de Feature**
```bash
git checkout -b feat/minha-feature
```

### **3. Fazer Alterações**
- Escrever código limpo e bem documentado
- Seguir padrões do projeto
- Testar mudanças localmente

### **4. Commit com Mensagens Claras**
```bash
git commit -m "feat: adicionar nova seção de projetos"
git commit -m "fix: corrigir bug na navegação mobile"
git commit -m "docs: atualizar README"
```

### **5. Push e Pull Request**
```bash
git push origin feat/minha-feature
# Abrir PR no GitHub
```

### **Padrões de Commit**
```
feat:  nova funcionalidade
fix:   correção de bug
docs:  mudanças em documentação
style: formatação e estilo
refactor: refatoração sem mudança funcional
test:  testes
chore: atualizações de dependências
```

---

## 📝 Licença

Este projeto é licenciado sob a **MIT License** - veja o arquivo LICENSE para detalhes.

```
MIT License

Copyright (c) 2025 Flávio Malungo Goncalves

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Contato & Suporte

- **Email**: fmalungo@student.42luanda.com
- **LinkedIn**: [Flávio Goncalves](https://www.linkedin.com/in/fl%C3%A1vio-gon%C3%A7alves-006637389/)
- **GitHub**: [@flaviogonca](https://github.com/flaviogonca)
- **Localização**: Talatona, Luanda, Angola

---

## 🙏 Agradecimentos

- **shadcn/ui**: Componentes de qualidade profissional
- **Framer Motion**: Animações incríveis
- **Prisma**: ORM poderosa
- **Vercel**: Plataforma Next.js
- **Comunidade Next.js**: Documentação e suporte

---

## 📌 Notas Importantes

### **Suposições Realizadas**
1. **Banco de Dados**: Assumido SQLite para desenvolvimento. Em produção, considere PostgreSQL
2. **Email**: Endpoint de contato loga apenas em console. Integre SendGrid/Resend em produção
3. **Autenticação**: Não implementada. Adicione NextAuth se necessário
4. **Deployment**: Configuração Caddy assume ambiente Linux

### **Próximos Passos Sugeridos**
1. Configurar CI/CD com GitHub Actions
2. Integrar serviço de email
3. Adicionar testes automatizados
4. Implementar monitoring e logging
5. Otimizar performance (lighthouse)

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela! ⭐**

Desenvolvido com ❤️ por [Flávio Goncalves](https://github.com/flaviogonca)

</div>
