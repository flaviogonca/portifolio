export type Language = "en" | "pt" | "fr";

export const languageNames: Record<Language, string> = {
  en: "English",
  pt: "Português",
  fr: "Français",
};

export const languageFlags: Record<Language, string> = {
  en: "🇬🇧",
  pt: "🇵🇹",
  fr: "🇫🇷",
};

export type TranslationKeys = {
  nav: {
    home: string;
    about: string;
    techStack: string;
    projects: string;
    experience: string;
    education: string;
    languages: string;
    contact: string;
  };
  hero: {
    available: string;
    greeting: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    ctaContact: string;
    ctaProjects: string;
    metricHours: string;
    metricHoursLabel: string;
    metricLevel: string;
    metricLevelLabel: string;
    metricCore: string;
    metricCoreLabel: string;
    metricProjects: string;
    metricProjectsLabel: string;
  };
  about: {
    label: string;
    title: string;
    items: { emoji: string; text: string }[];
  };
  techStack: {
    label: string;
    title: string;
    description: string;
    systems: string;
    webBackend: string;
    database: string;
    devops: string;
    systemItems: string[];
    webItems: string[];
    databaseItems: string[];
    devopsItems: string[];
  };
  projects: {
    label: string;
    title: string;
    description: string;
    projects: {
      name: string;
      description: string;
      tech: string[];
      grade: string;
    }[];
    techLabel: string;
    gradeLabel: string;
    viewMore: string;
  };
  deepDive: {
    label: string;
    title: string;
    subtitle: string;
    score: string;
    team: string;
    role: string;
    roleDescription: string;
    sections: {
      auth: {
        title: string;
        bullets: string[];
      };
      game: {
        title: string;
        bullets: string[];
      };
      database: {
        title: string;
        bullets: string[];
      };
      chat: {
        title: string;
        bullets: string[];
      };
      pm: {
        title: string;
        bullets: string[];
      };
    };
    techUsed: string;
    techList: string;
  };
  experience: {
    label: string;
    title: string;
    description: string;
    current: string;
    exp1Title: string;
    exp1Company: string;
    exp1Period: string;
    exp1Bullet1: string;
    exp1Bullet2: string;
    exp2Title: string;
    exp2Company: string;
    exp2Period: string;
    exp2Bullet1: string;
    exp2Bullet2: string;
    exp3Title: string;
    exp3Company: string;
    exp3Period: string;
    exp3Bullet1: string;
    exp3Bullet2: string;
  };
  education: {
    label: string;
    title: string;
    description: string;
    edu1Title: string;
    edu1Institution: string;
    edu1Description: string;
    edu2Title: string;
    edu2Institution: string;
    edu2Description: string;
    tagProgramming: string;
    tagTIC: string;
    tagNetworks: string;
    tagMaintenance: string;
    tagWebDev: string;
  };
  spokenLanguages: {
    label: string;
    title: string;
    portuguese: string;
    portugueseLevel: string;
    english: string;
    englishLevel: string;
    french: string;
    frenchLevel: string;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    phone: string;
    email: string;
    location: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSend: string;
    formNamePlaceholder: string;
    formEmailPlaceholder: string;
    formSubjectPlaceholder: string;
    formMessagePlaceholder: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    role: string;
    backToTop: string;
    copyright: string;
  };
};

const translations: Record<Language, TranslationKeys> = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      techStack: "Tech Stack",
      projects: "Projetos",
      experience: "Experiência",
      education: "Formação",
      languages: "Idiomas",
      contact: "Contato",
    },
    hero: {
      available: "Disponível para projetos",
      greeting: "Olá, eu sou Flávio",
      title1: "Engenheiro de Software",
      titleHighlight: " & Desenvolvedor Backend",
      subtitle:
        "Estudante na 42 Luanda — uma escola de peer-learning sem professores, sem aulas, apenas projetos reais. Mais de 1.300 horas de código hands-on, Common Core completo e agora na fase avançada do currículo. Baseado em Luanda, Angola.",
      ctaContact: "Entrar em contato",
      ctaProjects: "Ver projetos",
      metricHours: "1,300+",
      metricHoursLabel: "Horas de Projetos",
      metricLevel: "11.20",
      metricLevelLabel: "Nível 42",
      metricCore: "100%",
      metricCoreLabel: "Common Core",
      metricProjects: "6+",
      metricProjectsLabel: "Projetos Destacados",
    },
    about: {
      label: "Sobre",
      title: "Sobre Mim",
      items: [
        {
          emoji: " ",
          text: "Estudante na 42 Luanda — escola de peer-learning sem professores, sem aulas, apenas projetos reais",
        },
        {
          emoji: "  ",
          text: "Common Core completo a 100% — mais de 1.300 horas de projetos práticos",
        },
        {
          emoji: "   ",
          text: "Atualmente na fase avançada do 42 · Nível 11.20 / 21",
        },
        {
          emoji: " ",
          text: "Baseado em Luanda, Angola",
        },
        {
          emoji: "  ",
          text: "Também toco instrumentos musicais — bateria incluída 🥁",
        },
        {
          emoji: "  ",
          text: "Sempre aprendendo, sempre construindo",
        },
      ],
    },
    techStack: {
      label: "Tech Stack",
      title: "Stack & Tecnologias",
      description:
        "Tecnologias e ferramentas que utilizo para construir sistemas robustos e aplicações modernas.",
      systems: "Systems & Low-level",
      webBackend: "Web & Backend",
      database: "Database & ORM",
      devops: "DevOps & Tools",
      systemItems: ["C", "C++", "Shell", "Linux"],
      webItems: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express",
        "HTML5",
        "CSS3",
        "Python",
      ],
      databaseItems: ["PostgreSQL", "Prisma"],
      devopsItems: ["Docker", "Socket.IO", "JWT", "Git", "GitHub"],
    },
    projects: {
      label: "Projetos",
      title: "Projetos em Destaque",
      description:
        "Projetos desenvolvidos na 42 Luanda e em contexto profissional, abrangendo sistemas low-level, web e infraestrutura.",
      projects: [
        {
          name: "ft_transcendence",
          description:
            "Plataforma multiplayer em tempo real full-stack com funcionalidades sociais e autenticação moderna",
          tech: ["Node.js", "Next.js", "PostgreSQL", "Socket.IO", "Docker"],
          grade: "   Bonus",
        },
        {
          name: "webserv",
          description:
            "Servidor HTTP construído do zero com suporte a CGI e I/O não-bloqueante",
          tech: ["C++", "HTTP"],
          grade: "   Bonus",
        },
        {
          name: "cub3d",
          description:
            "Motor de labirinto 3D usando ray-casting — inspirado em Wolfenstein 3D",
          tech: ["C", "MinilibX"],
          grade: "   Pass",
        },
        {
          name: "Inception",
          description:
            "Infraestrutura Docker com NGINX + WordPress + MariaDB",
          tech: ["Docker", "SSL/TLS"],
          grade: "   Pass",
        },
        {
          name: "minishell",
          description:
            "Shell Unix funcional construído do zero com pipes, redirecionamentos e sinais",
          tech: ["C", "Unix"],
          grade: "   Pass",
        },
        {
          name: "Born2beroot",
          description:
            "Configuração e hardening de servidor Linux com virtualização",
          tech: ["Linux", "VirtualBox"],
          grade: "   Bonus",
        },
      ],
      techLabel: "Tech",
      gradeLabel: "Grade",
      viewMore: "Ver Detalhes",
    },
    deepDive: {
      label: "Deep Dive",
      title: "ft_transcendence — Deep Dive",
      subtitle:
        "Uma aplicação web full-stack de nível produtivo construída em equipa de 5 na 42 Luanda.",
      score: "125/100",
      team: "Equipa: Himersus · ~245 horas",
      role: "Meu Papel: Project Manager & Backend Developer",
      roleDescription:
        "Como PM e líder de backend, fui responsável pelas decisões de arquitetura da API, estrutura do backend, evolução dos modelos Prisma e integração do sistema de jogo.",
      sections: {
        auth: {
          title: "🔐 Sistema de Autenticação",
          bullets: [
            "Implementei autenticação local (email + password) com JWT access & refresh tokens",
            "Integrei provedores OAuth 2.0 — Google e 42 Intra — incluindo handling de callbacks e entrega de tokens ao frontend",
            "Construí 2FA completo por email — fluxo completo para ativar, desativar e verificar códigos de segundo fator via SMTP/Nodemailer",
          ],
        },
        game: {
          title: "🎮 Backend de Jogo em Tempo Real",
          bullets: [
            "Projetei e implementei a camada de backend de jogo com Socket.IO",
            "Construí a inicialização de sockets, game loop do lado do servidor e gestão de estado de jogo em tempo real",
            "Desenvolvi a API completa do ciclo de vida das partidas: criar, aceitar, iniciar, atualizar modo, listar partidas ativas e endpoint de ranking dos jogadores",
            "Contribuí para o módulo de Observatório de Partidas ao Vivo — streaming de estado de jogo em tempo real para observadores não autenticados",
          ],
        },
        database: {
          title: "🗄️ Base de Dados & Arquitetura da API",
          bullets: [
            "Liderei o design do schema Prisma — modelando tabelas de User, Profile, Game, Chat, Message, Notification e Membership",
            "Defini regras de integridade relacional e estratégia de migração pela equipa",
            "Construí e mantive rotas e controllers core da API REST com Express 5 + TypeScript",
            "Implementei validação de requests com Zod e segurança com jsonwebtoken + bcrypt",
          ],
        },
        chat: {
          title: "💬 Chat & Gestão de Utilizadores",
          bullets: [
            "Contribuí para a criação de chats privados, envio de mensagens e endpoints de histórico",
            "Construí endpoints /users, /users/me e /users/:id/profile para o ciclo de vida completo do utilizador",
          ],
        },
        pm: {
          title: "📋 Gestão de Projeto",
          bullets: [
            "Coordenei o planeamento de sprints e distribuição de tarefas entre 5 engenheiros ao longo de 5 sprints",
            "Mantive pontos de integração entre as equipas de backend e frontend",
            "Geri a documentação do backend e o board de tracking de sprints no Notion",
          ],
        },
      },
      techUsed: "Tech utilizada:",
      techList:
        "Node.js · Express 5 · TypeScript · Socket.IO · PostgreSQL · Prisma ORM · JWT · OAuth 2.0 · Nodemailer · Zod · Docker",
    },
    experience: {
      label: "Carreira",
      title: "Experiência Profissional",
      description:
        "Trajetória profissional focada em engenharia de software, arquitetura de sistemas e entrega de soluções de alto impacto.",
      current: "Atual",
      exp1Title: "Designer de Sistemas",
      exp1Company: "Freelancer",
      exp1Period: "2026",
      exp1Bullet1:
        "Projetei e implementei arquiteturas de sistemas avançadas em um robô de trading Python para mercado financeiro, aumentando 40% da eficiência operacional.",
      exp1Bullet2:
        "Implementei soluções escaláveis alinhadas aos objetivos de negócio.",
      exp2Title: "Software Developer / Back-End Developer",
      exp2Company: "Génesis Technology",
      exp2Period: "2023 - 2024",
      exp2Bullet1:
        "Desenvolvi projetos para clientes dos setores de saúde, finanças e educação.",
      exp2Bullet2:
        "Implementei melhorias em design e integração de sistemas elevando desempenho e confiabilidade.",
      exp3Title: "Analista de Projetos de TI",
      exp3Company: "Systems Design",
      exp3Period: "2022 - 2023",
      exp3Bullet1:
        "Apoiei projetos de implementação de sistemas para clientes de pequeno e médio porte.",
      exp3Bullet2:
        "Colaborei na documentação técnica e especificações funcionais.",
    },
    education: {
      label: "Formação",
      title: "Formação Acadêmica",
      description:
        "Percurso acadêmico focado em engenharia de software e formação técnica de excelência.",
      edu1Title: "Engenharia de Software",
      edu1Institution: "Escola 42 Luanda",
      edu1Description:
        "Escola de engenharia de software de referência mundial baseada em peer-learning e projetos reais, sem professores nem aulas tradicionais.",
      edu2Title: "Ensino Médio Técnico de Informática",
      edu2Institution: "Instituto Politécnico Industrial Simione Mucune",
      edu2Description:
        "Formação técnica com forte componente prática em programação, TIC, redes e manutenção.",
      tagProgramming: "Programação",
      tagTIC: "TIC",
      tagNetworks: "Redes",
      tagMaintenance: "Manutenção",
      tagWebDev: "Desenvolvimento Web",
    },
    spokenLanguages: {
      label: "Idiomas",
      title: "Idiomas",
      portuguese: "Português",
      portugueseLevel: "Nativo",
      english: "Inglês",
      englishLevel: "Fluente · C1",
      french: "Francês",
      frenchLevel: "Básico",
    },
    contact: {
      label: "Contato",
      title: "Vamos conversar",
      description:
        "Interessado em trabalhar juntos? Entre em contato e vamos discutir como posso contribuir para o seu projeto.",
      phone: "Telefone",
      email: "Email",
      location: "Localização",
      formName: "Nome",
      formEmail: "Email",
      formSubject: "Assunto",
      formMessage: "Mensagem",
      formSend: "Enviar",
      formNamePlaceholder: "Seu nome",
      formEmailPlaceholder: "seu@email.com",
      formSubjectPlaceholder: "Assunto da mensagem",
      formMessagePlaceholder: "Descreva o seu projeto ou ideia...",
      successMessage: "Mensagem enviada com sucesso!",
      errorMessage:
        "Não foi possível enviar a mensagem. Tente novamente.",
    },
    footer: {
      role: "Engenheiro de Software / Desenvolvedor Backend",
      backToTop: "Voltar ao topo",
      copyright: "Todos os direitos reservados.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      techStack: "Tech Stack",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      languages: "Languages",
      contact: "Contact",
    },
    hero: {
      available: "Available for projects",
      greeting: "Hey, I'm Flávio",
      title1: "Software Engineer",
      titleHighlight: "& Backend Developer",
      subtitle:
        "Advanced at 42 Luanda — a peer-learning school with no teachers, no classes, only real projects. Over 1,300 hours of hands-on coding, Common Core completed, and now in the advanced phase of the curriculum. Based in Luanda, Angola.",
      ctaContact: "Get in touch",
      ctaProjects: "View projects",
      metricHours: "1,300+",
      metricHoursLabel: "Project Hours",
      metricLevel: "11.20",
      metricLevelLabel: "42 Level",
      metricCore: "100%",
      metricCoreLabel: "Common Core",
      metricProjects: "6+",
      metricProjectsLabel: "Featured Projects",
    },
    about: {
      label: "About",
      title: "About Me",
      items: [
        {
          emoji: " ",
          text: "Advanced at 42 Luanda — peer-learning school with no teachers, no classes, only real projects",
        },
        {
          emoji: "  ",
          text: "Common Core completed at 100% — 1,300+ hours of hands-on projects",
        },
        {
          emoji: "   ",
          text: "Currently in the 42 Advanced phase · Level 11.20 / 21",
        },
        {
          emoji: " ",
          text: "Based in Luanda, Angola",
        },
        {
          emoji: "  ",
          text: "Also play musical instruments — drums included 🥁",
        },
        {
          emoji: "  ",
          text: "Always learning, always building",
        },
      ],
    },
    techStack: {
      label: "Tech Stack",
      title: "Stack & Technologies",
      description:
        "Technologies and tools I use to build robust systems and modern applications.",
      systems: "Systems & Low-level",
      webBackend: "Web & Backend",
      database: "Database & ORM",
      devops: "DevOps & Tools",
      systemItems: ["C", "C++", "Shell", "Linux"],
      webItems: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express",
        "HTML5",
        "CSS3",
        "Python",
      ],
      databaseItems: ["PostgreSQL", "Prisma"],
      devopsItems: ["Docker", "Socket.IO", "JWT", "Git", "GitHub"],
    },
    projects: {
      label: "Projects",
      title: "Featured Projects",
      description:
        "Projects developed at 42 Luanda and in professional contexts, spanning low-level systems, web, and infrastructure.",
      projects: [
        {
          name: "ft_transcendence",
          description:
            "Full-stack real-time multiplayer platform with social features and modern auth",
          tech: ["Node.js", "Next.js", "PostgreSQL", "Socket.IO", "Docker"],
          grade: "   Bonus",
        },
        {
          name: "webserv",
          description:
            "HTTP server built from scratch with CGI support and non-blocking I/O",
          tech: ["C++", "HTTP"],
          grade: "   Bonus",
        },
        {
          name: "cub3d",
          description:
            "3D maze engine using ray-casting — inspired by Wolfenstein 3D",
          tech: ["C", "MinilibX"],
          grade: "   Pass",
        },
        {
          name: "Inception",
          description:
            "Docker infrastructure with NGINX + WordPress + MariaDB",
          tech: ["Docker", "SSL/TLS"],
          grade: "   Pass",
        },
        {
          name: "minishell",
          description:
            "Functional Unix shell from scratch with pipes, redirections and signals",
          tech: ["C", "Unix"],
          grade: "   Pass",
        },
        {
          name: "Born2beroot",
          description:
            "Linux server setup and hardening with virtualization",
          tech: ["Linux", "VirtualBox"],
          grade: "   Bonus",
        },
      ],
      techLabel: "Tech",
      gradeLabel: "Grade",
      viewMore: "View Details",
    },
    deepDive: {
      label: "Deep Dive",
      title: "ft_transcendence — Deep Dive",
      subtitle:
        "A production-like full-stack web application built as a team of 5 at 42 Luanda.",
      score: "125/100",
      team: "Team: Himersus · ~245 hours",
      role: "My Role: Project Manager & Backend Developer",
      roleDescription:
        "As PM and backend lead, I was responsible for API architecture decisions, backend structure, Prisma model evolution, and game system integration.",
      sections: {
        auth: {
          title: "🔐 Authentication System",
          bullets: [
            "Implemented local auth (email + password) with JWT access & refresh tokens",
            "Integrated OAuth 2.0 providers — Google and 42 Intra — including callback handling and token handoff to the frontend",
            "Built complete 2FA by email — full flow for enabling, disabling, and verifying second-factor codes via SMTP/Nodemailer",
          ],
        },
        game: {
          title: "🎮 Real-Time Game Backend",
          bullets: [
            "Designed and implemented the game backend layer with Socket.IO",
            "Built socket initialization, server-side game loop and real-time game state management",
            "Developed the full match lifecycle API: create, accept, start, update mode, list active matches, and player ranking endpoint",
            "Contributed to the Public Live Match Observatory module — real-time game state streaming to unauthenticated observers",
          ],
        },
        database: {
          title: "🗄️ Database & API Architecture",
          bullets: [
            "Led Prisma schema design — modelling User, Profile, Game, Chat, Message, Notification, and Membership tables",
            "Defined relational integrity rules and migration strategy across the team",
            "Built and maintained core REST API routes and controllers with Express 5 + TypeScript",
            "Implemented request validation with Zod and security with jsonwebtoken + bcrypt",
          ],
        },
        chat: {
          title: "💬 Chat & User Management",
          bullets: [
            "Contributed to private chat creation, message sending, and history endpoints",
            "Built /users, /users/me, and /users/:id/profile endpoints for the full user lifecycle",
          ],
        },
        pm: {
          title: "📋 Project Management",
          bullets: [
            "Coordinated sprint planning and task distribution across 5 engineers over 5 sprints",
            "Maintained integration checkpoints between backend and frontend teams",
            "Managed backend documentation and Notion sprint tracking board",
          ],
        },
      },
      techUsed: "Tech used:",
      techList:
        "Node.js · Express 5 · TypeScript · Socket.IO · PostgreSQL · Prisma ORM · JWT · OAuth 2.0 · Nodemailer · Zod · Docker",
    },
    experience: {
      label: "Career",
      title: "Professional Experience",
      description:
        "Professional trajectory focused on software engineering, systems architecture, and high-impact solution delivery.",
      current: "Current",
      exp1Title: "Systems Designer",
      exp1Company: "Freelancer",
      exp1Period: "2026",
      exp1Bullet1:
        "Designed and implemented advanced system architectures in a Python trading bot for the financial market, increasing operational efficiency by 40%.",
      exp1Bullet2:
        "Implemented scalable solutions aligned with business objectives.",
      exp2Title: "Software Developer / Back-End Developer",
      exp2Company: "Génesis Technology",
      exp2Period: "2023 - 2024",
      exp2Bullet1:
        "Developed projects for clients in healthcare, finance, and education sectors.",
      exp2Bullet2:
        "Implemented improvements in design and system integration, elevating performance and reliability.",
      exp3Title: "IT Project Analyst",
      exp3Company: "Systems Design",
      exp3Period: "2022 - 2023",
      exp3Bullet1:
        "Supported system implementation projects for small and medium-sized clients.",
      exp3Bullet2:
        "Collaborated on technical documentation and functional specifications.",
    },
    education: {
      label: "Education",
      title: "Academic Background",
      description:
        "Academic path focused on software engineering and technical excellence.",
      edu1Title: "Software Engineering",
      edu1Institution: "Escola 42 Luanda",
      edu1Description:
        "World-renowned software engineering school based on peer-learning and real projects, with no teachers or traditional classes.",
      edu2Title: "Technical High School in Computer Science",
      edu2Institution: "Instituto Politécnico Industrial Simione Mucune",
      edu2Description:
        "Technical training with a strong practical component in programming, ICT, networking, and maintenance.",
      tagProgramming: "Programming",
      tagTIC: "ICT",
      tagNetworks: "Networks",
      tagMaintenance: "Maintenance",
      tagWebDev: "Web Development",
    },
    spokenLanguages: {
      label: "Languages",
      title: "Languages",
      portuguese: "Portuguese",
      portugueseLevel: "Native",
      english: "English",
      englishLevel: "Fluent · C1",
      french: "French",
      frenchLevel: "Basic",
    },
    contact: {
      label: "Contact",
      title: "Let's talk",
      description:
        "Interested in working together? Get in touch and let's discuss how I can contribute to your project.",
      phone: "Phone",
      email: "Email",
      location: "Location",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      formSend: "Send",
      formNamePlaceholder: "Your name",
      formEmailPlaceholder: "your@email.com",
      formSubjectPlaceholder: "Message subject",
      formMessagePlaceholder: "Describe your project or idea...",
      successMessage: "Message sent successfully!",
      errorMessage: "Unable to send message. Please try again.",
    },
    footer: {
      role: "Software Engineer / Backend Developer",
      backToTop: "Back to top",
      copyright: "All rights reserved.",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      techStack: "Technologies",
      projects: "Projets",
      experience: "Expérience",
      education: "Formation",
      languages: "Langues",
      contact: "Contact",
    },
    hero: {
      available: "Disponible pour projets",
      greeting: "Salut, je suis Flávio",
      title1: "Ingénieur Logiciel",
      titleHighlight: " & Développeur Backend",
      subtitle:
        "Étudiant à 42 Luanda — une école de peer-learning sans professeurs, sans cours, uniquement des projets réels. Plus de 1 300 heures de code pratique, Common Core terminé, et maintenant dans la phase avancée du cursus. Basé à Luanda, Angola.",
      ctaContact: "Me contacter",
      ctaProjects: "Voir les projets",
      metricHours: "1 300+",
      metricHoursLabel: "Heures de Projet",
      metricLevel: "11,20",
      metricLevelLabel: "Niveau 42",
      metricCore: "100 %",
      metricCoreLabel: "Common Core",
      metricProjects: "6+",
      metricProjectsLabel: "Projets Phares",
    },
    about: {
      label: "À propos",
      title: "À propos de moi",
      items: [
        {
          emoji: " ",
          text: "Étudiant à 42 Luanda — école de peer-learning sans professeurs, sans cours, uniquement des projets réels",
        },
        {
          emoji: "  ",
          text: "Common Core terminé à 100 % — plus de 1 300 heures de projets pratiques",
        },
        {
          emoji: "   ",
          text: "Actuellement en phase avancée du 42 · Niveau 11,20 / 21",
        },
        {
          emoji: " ",
          text: "Basé à Luanda, Angola",
        },
        {
          emoji: "  ",
          text: "Je joue aussi d'instruments de musique — batterie incluse 🥁",
        },
        {
          emoji: "  ",
          text: "Toujours en apprentissage, toujours en construction",
        },
      ],
    },
    techStack: {
      label: "Technologies",
      title: "Stack & Technologies",
      description:
        "Technologies et outils que j'utilise pour construire des systèmes robustes et des applications modernes.",
      systems: "Systèmes & Bas niveau",
      webBackend: "Web & Backend",
      database: "Base de données & ORM",
      devops: "DevOps & Outils",
      systemItems: ["C", "C++", "Shell", "Linux"],
      webItems: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express",
        "HTML5",
        "CSS3",
        "Python",
      ],
      databaseItems: ["PostgreSQL", "Prisma"],
      devopsItems: ["Docker", "Socket.IO", "JWT", "Git", "GitHub"],
    },
    projects: {
      label: "Projets",
      title: "Projets Phares",
      description:
        "Projets développés à 42 Luanda et en contexte professionnel, couvrant les systèmes bas niveau, le web et l'infrastructure.",
      projects: [
        {
          name: "ft_transcendence",
          description:
            "Plateforme multiplayer en temps réel full-stack avec fonctionnalités sociales et authentification moderne",
          tech: ["Node.js", "Next.js", "PostgreSQL", "Socket.IO", "Docker"],
          grade: "   Bonus",
        },
        {
          name: "webserv",
          description:
            "Serveur HTTP construit de zéro avec support CGI et I/O non-bloquant",
          tech: ["C++", "HTTP"],
          grade: "   Bonus",
        },
        {
          name: "cub3d",
          description:
            "Moteur de labyrinthe 3D utilisant le ray-casting — inspiré de Wolfenstein 3D",
          tech: ["C", "MinilibX"],
          grade: "   Pass",
        },
        {
          name: "Inception",
          description:
            "Infrastructure Docker avec NGINX + WordPress + MariaDB",
          tech: ["Docker", "SSL/TLS"],
          grade: "   Pass",
        },
        {
          name: "minishell",
          description:
            "Shell Unix fonctionnel construit de zéro avec pipes, redirections et signaux",
          tech: ["C", "Unix"],
          grade: "   Pass",
        },
        {
          name: "Born2beroot",
          description:
            "Configuration et durcissement de serveur Linux avec virtualisation",
          tech: ["Linux", "VirtualBox"],
          grade: "   Bonus",
        },
      ],
      techLabel: "Tech",
      gradeLabel: "Note",
      viewMore: "Voir Détails",
    },
    deepDive: {
      label: "Deep Dive",
      title: "ft_transcendence — Deep Dive",
      subtitle:
        "Une application web full-stack de niveau production construite en équipe de 5 à 42 Luanda.",
      score: "125/100",
      team: "Équipe : Himersus · ~245 heures",
      role: "Mon Rôle : Chef de Projet & Développeur Backend",
      roleDescription:
        "En tant que PM et lead backend, j'étais responsable des décisions d'architecture API, de la structure backend, de l'évolution des modèles Prisma et de l'intégration du système de jeu.",
      sections: {
        auth: {
          title: "🔐 Système d'Authentification",
          bullets: [
            "Implémentation de l'authentification locale (email + mot de passe) avec JWT access & refresh tokens",
            "Intégration des fournisseurs OAuth 2.0 — Google et 42 Intra — y compris le traitement des callbacks et la transmission des tokens au frontend",
            "Construction du 2FA complet par email — flux complet pour activer, désactiver et vérifier les codes de second facteur via SMTP/Nodemailer",
          ],
        },
        game: {
          title: "🎮 Backend de Jeu en Temps Réel",
          bullets: [
            "Conception et implémentation de la couche backend de jeu avec Socket.IO",
            "Construction de l'initialisation des sockets, de la boucle de jeu côté serveur et de la gestion d'état de jeu en temps réel",
            "Développement de l'API complète du cycle de vie des matchs : créer, accepter, démarrer, mettre à jour le mode, lister les matchs actifs et endpoint de classement des joueurs",
            "Contribution au module d'Observatoire des Matchs en Direct — streaming d'état de jeu en temps réel vers des observateurs non authentifiés",
          ],
        },
        database: {
          title: "🗄️ Base de Données & Architecture API",
          bullets: [
            "Direction de la conception du schema Prisma — modélisation des tables User, Profile, Game, Chat, Message, Notification et Membership",
            "Définition des règles d'intégrité relationnelle et de la stratégie de migration au sein de l'équipe",
            "Construction et maintenance des routes et contrôleurs core de l'API REST avec Express 5 + TypeScript",
            "Implémentation de la validation des requêtes avec Zod et de la sécurité avec jsonwebtoken + bcrypt",
          ],
        },
        chat: {
          title: "💬 Chat & Gestion des Utilisateurs",
          bullets: [
            "Contribution à la création de chats privés, à l'envoi de messages et aux endpoints d'historique",
            "Construction des endpoints /users, /users/me et /users/:id/profile pour le cycle de vie complet des utilisateurs",
          ],
        },
        pm: {
          title: "📋 Gestion de Projet",
          bullets: [
            "Coordination de la planification des sprints et de la distribution des tâches entre 5 ingénieurs sur 5 sprints",
            "Maintien des points d'intégration entre les équipes backend et frontend",
            "Gestion de la documentation backend et du tableau de suivi des sprints Notion",
          ],
        },
      },
      techUsed: "Technologies utilisées :",
      techList:
        "Node.js · Express 5 · TypeScript · Socket.IO · PostgreSQL · Prisma ORM · JWT · OAuth 2.0 · Nodemailer · Zod · Docker",
    },
    experience: {
      label: "Carrière",
      title: "Expérience Professionnelle",
      description:
        "Trajectoire professionnelle axée sur l'ingénierie logicielle, l'architecture de systèmes et la livraison de solutions à fort impact.",
      current: "Actuel",
      exp1Title: "Designer de Systèmes",
      exp1Company: "Freelancer",
      exp1Period: "2026",
      exp1Bullet1:
        "J'ai conçu et implémenté des architectures de systèmes avancées dans un robot de trading Python pour le marché financier, augmentant l'efficacité opérationnelle de 40%.",
      exp1Bullet2:
        "Implémentation de solutions évolutives alignées sur les objectifs métier.",
      exp2Title: "Software Developer / Back-End Developer",
      exp2Company: "Génesis Technology",
      exp2Period: "2023 - 2024",
      exp2Bullet1:
        "Développement de projets pour des clients des secteurs de la santé, des finances et de l'éducation.",
      exp2Bullet2:
        "Implémentation d'améliorations dans la conception et l'intégration de systèmes, élevant la performance et la fiabilité.",
      exp3Title: "Analyste de Projets IT",
      exp3Company: "Systems Design",
      exp3Period: "2022 - 2023",
      exp3Bullet1:
        "Soutien aux projets d'implémentation de systèmes pour des clients de petite et moyenne taille.",
      exp3Bullet2:
        "Collaboration à la documentation technique et aux spécifications fonctionnelles.",
    },
    education: {
      label: "Formation",
      title: "Formation Académique",
      description:
        "Parcours académique axé sur l'ingénierie logicielle et l'excellence technique.",
      edu1Title: "Ingénierie Logicielle",
      edu1Institution: "Escola 42 Luanda",
      edu1Description:
        "École d'ingénierie logicielle de référence mondiale basée sur le peer-learning et les projets réels, sans professeurs ni cours traditionnels.",
      edu2Title: "Lycée Technique en Informatique",
      edu2Institution: "Instituto Politécnico Industrial Simione Mucune",
      edu2Description:
        "Formation technique avec une forte composante pratique en programmation, TIC, réseaux et maintenance.",
      tagProgramming: "Programmation",
      tagTIC: "TIC",
      tagNetworks: "Réseaux",
      tagMaintenance: "Maintenance",
      tagWebDev: "Développement Web",
    },
    spokenLanguages: {
      label: "Langues",
      title: "Langues",
      portuguese: "Portugais",
      portugueseLevel: "Natif",
      english: "Anglais",
      englishLevel: "Courant · C1",
      french: "Français",
      frenchLevel: "Basique",
    },
    contact: {
      label: "Contact",
      title: "Parlons-en",
      description:
        "Intéressé par une collaboration ? Contactez-moi et discutons de la façon dont je peux contribuer à votre projet.",
      phone: "Téléphone",
      email: "Email",
      location: "Localisation",
      formName: "Nom",
      formEmail: "Email",
      formSubject: "Sujet",
      formMessage: "Message",
      formSend: "Envoyer",
      formNamePlaceholder: "Votre nom",
      formEmailPlaceholder: "votre@email.com",
      formSubjectPlaceholder: "Sujet du message",
      formMessagePlaceholder: "Décrivez votre projet ou idée...",
      successMessage: "Message envoyé avec succès !",
      errorMessage:
        "Impossible d'envoyer le message. Veuillez réessayer.",
    },
    footer: {
      role: "Ingénieur logiciel / Développeur backend",
      backToTop: "Retour en haut",
      copyright: "Tous droits réservés.",
    },
  },
};

export default translations;
