export type Language = "pt" | "en" | "fr";

export const languageNames: Record<Language, string> = {
  pt: "Português",
  en: "English",
  fr: "Français",
};

export const languageFlags: Record<Language, string> = {
  pt: "🇧🇷",
  en: "🇬🇧",
  fr: "🇫🇷",
};

export type TranslationKeys = {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    highlights: string;
    education: string;
    contact: string;
  };
  hero: {
    available: string;
    title1: string;
    titleHighlight1: string;
    title2: string;
    titleHighlight2: string;
    subtitle: string;
    ctaContact: string;
    ctaExperience: string;
    metricYears: string;
    metricEfficiency: string;
    metricTeams: string;
    metricSectors: string;
  };
  about: {
    label: string;
    title: string;
    summaryTitle: string;
    summary: string;
    keyCompetencies: string;
    archVision: string;
    archVisionDesc: string;
    practicalExec: string;
    practicalExecDesc: string;
    collaboration: string;
    collaborationDesc: string;
    measurability: string;
    measurabilityDesc: string;
    badgeBackend: string;
    badgeSystemDesign: string;
    badgeAPIs: string;
    badgeCloud: string;
    badgeDevOps: string;
    badgeCICD: string;
    badgeObservability: string;
    badgeArchitecture: string;
    badgeSecurity: string;
    badgeTechLead: string;
  };
  skills: {
    label: string;
    title: string;
    description: string;
    core: string;
    languages: string;
    competencies: string;
    sysDesign: string;
    backend: string;
    apisRest: string;
    architecture: string;
    integration: string;
    cloud: string;
    devops: string;
    cicd: string;
    observability: string;
    security: string;
    testing: string;
    governance: string;
    compScalable: string;
    compLead: string;
    compIntegration: string;
    compDocs: string;
    compMonitoring: string;
    compPerformance: string;
    compReliability: string;
  };
  experience: {
    label: string;
    title: string;
    description: string;
    current: string;
    exp1Title: string;
    exp1Company: string;
    exp1Bullet1: string;
    exp1Bullet2: string;
    exp2Title: string;
    exp2Company: string;
    exp2Bullet1: string;
    exp2Bullet2: string;
    exp3Title: string;
    exp3Company: string;
    exp3Bullet1: string;
    exp3Bullet2: string;
  };
  highlights: {
    label: string;
    title: string;
    description: string;
    learnMore: string;
    scalableTitle: string;
    scalableDesc: string;
    multiSectorTitle: string;
    multiSectorDesc: string;
    techLeadTitle: string;
    techLeadDesc: string;
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
      skills: "Skills",
      experience: "Experiência",
      highlights: "Destaques",
      education: "Formação",
      contact: "Contato",
    },
    hero: {
      available: "Disponível para projetos",
      title1: "Construindo sistemas",
      titleHighlight1: "robustos",
      title2: "para produtos que precisam",
      titleHighlight2: "escalar.",
      subtitle: "Sou Flávio Goncalves, software developer com 3 anos de experiência em criação, implementação e otimização de sistemas complexos. Meu foco é transformar requisitos de negócio em soluções técnicas confiáveis, mensuráveis e sustentáveis.",
      ctaContact: "Entrar em contato",
      ctaExperience: "Ver experiência",
      metricYears: "Anos de Experiência",
      metricEfficiency: "Melhoria de Eficiência",
      metricTeams: "Equipas Lideradas",
      metricSectors: "Setores Atendidos",
    },
    about: {
      label: "Sobre",
      title: "Perfil profissional",
      summaryTitle: "Resumo Profissional",
      summary: "Profissional comprometido e inovador, com histórico em sistemas de missão crítica e melhoria contínua de operações técnicas. Minha abordagem combina visão de arquitetura, execução prática e colaboração entre áreas para entregar software com qualidade, confiabilidade e impacto real no negócio.",
      keyCompetencies: "Competências-chave",
      archVision: "Visão de Arquitetura",
      archVisionDesc: "Design de sistemas com foco em escalabilidade e manutenibilidade",
      practicalExec: "Execução Prática",
      practicalExecDesc: "Implementação hands-on com padrões de engenharia modernos",
      collaboration: "Colaboração",
      collaborationDesc: "Integração entre áreas para entregar software com impacto real",
      measurability: "Mensurabilidade",
      measurabilityDesc: "Soluções técnicas confiáveis e mensuráveis para o negócio",
      badgeBackend: "Backend Engineering",
      badgeSystemDesign: "System Design",
      badgeAPIs: "APIs",
      badgeCloud: "Cloud",
      badgeDevOps: "DevOps",
      badgeCICD: "CI/CD",
      badgeObservability: "Observabilidade",
      badgeArchitecture: "Arquitetura",
      badgeSecurity: "Segurança",
      badgeTechLead: "Liderança Técnica",
    },
    skills: {
      label: "Competências",
      title: "Skills & Tecnologias",
      description: "Mapa de competências técnicas e ferramentas que utilizo para construir sistemas robustos e escaláveis.",
      core: "Core",
      languages: "Linguagens",
      competencies: "Competências",
      sysDesign: "System Design",
      backend: "Backend",
      apisRest: "APIs REST",
      architecture: "Arquitetura",
      integration: "Integração",
      cloud: "Cloud",
      devops: "DevOps",
      cicd: "CI/CD",
      observability: "Observabilidade",
      security: "Segurança",
      testing: "Testing",
      governance: "Governança",
      compScalable: "Planejamento de soluções escaláveis",
      compLead: "Liderança técnica",
      compIntegration: "Integração de sistemas",
      compDocs: "Documentação técnica",
      compMonitoring: "Monitoramento",
      compPerformance: "Performance",
      compReliability: "Confiabilidade",
    },
    experience: {
      label: "Carreira",
      title: "Experiência Profissional",
      description: "Trajetória profissional focada em engenharia de software, arquitetura de sistemas e entrega de soluções de alto impacto.",
      current: "Atual",
      exp1Title: "Designer de Sistemas",
      exp1Company: "Freelancer",
      exp1Bullet1: "Projetei e implementei arquiteturas de sistemas avançadas em um robô de trading Python para mercado financeiro, aumentando 40% da eficiência operacional.",
      exp1Bullet2: "Implementei soluções escaláveis alinhadas aos objetivos de negócio.",
      exp2Title: "Software Developer / Back-End Developer",
      exp2Company: "Génesis Technology",
      exp2Bullet1: "Desenvolvi projetos para clientes dos setores de saúde, finanças e educação.",
      exp2Bullet2: "Implementei melhorias em design e integração de sistemas elevando desempenho e confiabilidade.",
      exp3Title: "Analista de Projetos de TI",
      exp3Company: "Systems Design",
      exp3Bullet1: "Apoiei projetos de implementação de sistemas para clientes de pequeno e médio porte.",
      exp3Bullet2: "Colaborei na documentação técnica e especificações funcionais.",
    },
    highlights: {
      label: "Destaques",
      title: "Impacto & Resultados",
      description: "Principais áreas de impacto e contribuição ao longo da carreira profissional.",
      learnMore: "SAIBA MAIS",
      scalableTitle: "Arquitetura Escalável",
      scalableDesc: "Modelagem e evolução de arquiteturas para suportar crescimento de usuários e serviços.",
      multiSectorTitle: "Integração Multi Setor",
      multiSectorDesc: "Entrega de soluções para saúde, finanças e educação com foco em confiabilidade e segurança.",
      techLeadTitle: "Liderança Técnica",
      techLeadDesc: "Gestão de equipe para acelerar entregas com padrão técnico consistente.",
    },
    education: {
      label: "Formação",
      title: "Formação Acadêmica",
      description: "Percurso acadêmico focado em engenharia de software e formação técnica de excelência.",
      edu1Title: "Engenharia de Software",
      edu1Institution: "Escola 42 Luanda",
      edu1Description: "Escola de engenharia de software de referência mundial baseada em peer-learning e projetos reais, sem professores nem aulas tradicionais.",
      edu2Title: "Ensino Médio Técnico de Informática",
      edu2Institution: "Instituto Politécnico Industrial Simione Mucune",
      edu2Description: "Formação técnica com forte componente prática em programação, TIC, redes e manutenção.",
      tagProgramming: "Programação",
      tagTIC: "TIC",
      tagNetworks: "Redes",
      tagMaintenance: "Manutenção",
      tagWebDev: "Desenvolvimento Web",
    },
    contact: {
      label: "Contato",
      title: "Vamos conversar",
      description: "Interessado em trabalhar juntos? Entre em contato e vamos discutir como posso contribuir para o seu projeto.",
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
      errorMessage: "Não foi possível enviar a mensagem. Tente novamente.",
    },
    footer: {
      role: "Software Engineer & Back-End Developer",
      backToTop: "Voltar ao topo",
      copyright: "Todos os direitos reservados.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      highlights: "Highlights",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      available: "Available for projects",
      title1: "Building robust",
      titleHighlight1: "systems",
      title2: "for products that need to",
      titleHighlight2: "scale.",
      subtitle: "I'm Flávio Goncalves, a software developer with 3 years of experience in creating, implementing, and optimizing complex systems. My focus is transforming business requirements into reliable, measurable, and sustainable technical solutions.",
      ctaContact: "Get in touch",
      ctaExperience: "View experience",
      metricYears: "Years of Experience",
      metricEfficiency: "Efficiency Improvement",
      metricTeams: "Teams Led",
      metricSectors: "Sectors Served",
    },
    about: {
      label: "About",
      title: "Professional Profile",
      summaryTitle: "Professional Summary",
      summary: "A committed and innovative professional with a track record in mission-critical systems and continuous improvement of technical operations. My approach combines architectural vision, practical execution, and cross-team collaboration to deliver software with quality, reliability, and real business impact.",
      keyCompetencies: "Key Competencies",
      archVision: "Architectural Vision",
      archVisionDesc: "System design focused on scalability and maintainability",
      practicalExec: "Practical Execution",
      practicalExecDesc: "Hands-on implementation with modern engineering patterns",
      collaboration: "Collaboration",
      collaborationDesc: "Cross-team integration to deliver software with real impact",
      measurability: "Measurability",
      measurabilityDesc: "Reliable and measurable technical solutions for business",
      badgeBackend: "Backend Engineering",
      badgeSystemDesign: "System Design",
      badgeAPIs: "APIs",
      badgeCloud: "Cloud",
      badgeDevOps: "DevOps",
      badgeCICD: "CI/CD",
      badgeObservability: "Observability",
      badgeArchitecture: "Architecture",
      badgeSecurity: "Security",
      badgeTechLead: "Technical Leadership",
    },
    skills: {
      label: "Competencies",
      title: "Skills & Technologies",
      description: "Technical competencies and tools I use to build robust and scalable systems.",
      core: "Core",
      languages: "Languages",
      competencies: "Competencies",
      sysDesign: "System Design",
      backend: "Backend",
      apisRest: "REST APIs",
      architecture: "Architecture",
      integration: "Integration",
      cloud: "Cloud",
      devops: "DevOps",
      cicd: "CI/CD",
      observability: "Observability",
      security: "Security",
      testing: "Testing",
      governance: "Governance",
      compScalable: "Scalable solution planning",
      compLead: "Technical leadership",
      compIntegration: "Systems integration",
      compDocs: "Technical documentation",
      compMonitoring: "Monitoring",
      compPerformance: "Performance",
      compReliability: "Reliability",
    },
    experience: {
      label: "Career",
      title: "Professional Experience",
      description: "Professional trajectory focused on software engineering, systems architecture, and high-impact solution delivery.",
      current: "Current",
      exp1Title: "Systems Designer",
      exp1Company: "Freelancer",
      exp1Bullet1: "Designed and implemented advanced system architectures in a Python trading bot for the financial market, increasing operational efficiency by 40%.",
      exp1Bullet2: "Implemented scalable solutions aligned with business objectives.",
      exp2Title: "Software Developer / Back-End Developer",
      exp2Company: "Génesis Technology",
      exp2Bullet1: "Developed projects for clients in healthcare, finance, and education sectors.",
      exp2Bullet2: "Implemented improvements in design and system integration, elevating performance and reliability.",
      exp3Title: "IT Project Analyst",
      exp3Company: "Systems Design",
      exp3Bullet1: "Supported system implementation projects for small and medium-sized clients.",
      exp3Bullet2: "Collaborated on technical documentation and functional specifications.",
    },
    highlights: {
      label: "Highlights",
      title: "Impact & Results",
      description: "Key impact areas and contributions throughout my professional career.",
      learnMore: "LEARN MORE",
      scalableTitle: "Scalable Architecture",
      scalableDesc: "Modeling and evolving architectures to support user and service growth.",
      multiSectorTitle: "Multi-Sector Integration",
      multiSectorDesc: "Delivering solutions for healthcare, finance, and education with a focus on reliability and security.",
      techLeadTitle: "Technical Leadership",
      techLeadDesc: "Team management to accelerate deliveries with consistent technical standards.",
    },
    education: {
      label: "Education",
      title: "Academic Background",
      description: "Academic path focused on software engineering and technical excellence.",
      edu1Title: "Software Engineering",
      edu1Institution: "Escola 42 Luanda",
      edu1Description: "World-renowned software engineering school based on peer-learning and real projects, with no teachers or traditional classes.",
      edu2Title: "Technical High School in Computer Science",
      edu2Institution: "Instituto Politécnico Industrial Simione Mucune",
      edu2Description: "Technical training with a strong practical component in programming, ICT, networking, and maintenance.",
      tagProgramming: "Programming",
      tagTIC: "ICT",
      tagNetworks: "Networks",
      tagMaintenance: "Maintenance",
      tagWebDev: "Web Development",
    },
    contact: {
      label: "Contact",
      title: "Let's talk",
      description: "Interested in working together? Get in touch and let's discuss how I can contribute to your project.",
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
      role: "Software Engineer & Back-End Developer",
      backToTop: "Back to top",
      copyright: "All rights reserved.",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      experience: "Expérience",
      highlights: "Points forts",
      education: "Formation",
      contact: "Contact",
    },
    hero: {
      available: "Disponible pour projets",
      title1: "Construire des systèmes",
      titleHighlight1: "robustes",
      title2: "pour des produits qui ont besoin de",
      titleHighlight2: "passer à l'échelle.",
      subtitle: "Je suis Flávio Goncalves, développeur logiciel avec 3 ans d'expérience dans la création, l'implémentation et l'optimisation de systèmes complexes. Mon focus est de transformer les exigences métier en solutions techniques fiables, mesurables et durables.",
      ctaContact: "Me contacter",
      ctaExperience: "Voir l'expérience",
      metricYears: "Années d'Expérience",
      metricEfficiency: "Amélioration d'Efficacité",
      metricTeams: "Équipes Dirigées",
      metricSectors: "Secteurs Desservis",
    },
    about: {
      label: "À propos",
      title: "Profil professionnel",
      summaryTitle: "Résumé Professionnel",
      summary: "Professionnel engagé et innovant, avec un historique dans les systèmes critiques et l'amélioration continue des opérations techniques. Mon approche combine vision architecturale, exécution pratique et collaboration inter-équipes pour livrer des logiciels avec qualité, fiabilité et impact réel sur le business.",
      keyCompetencies: "Compétences clés",
      archVision: "Vision Architecturale",
      archVisionDesc: "Conception de systèmes axée sur l'évolutivité et la maintenabilité",
      practicalExec: "Exécution Pratique",
      practicalExecDesc: "Implémentation pratique avec des patterns d'ingénierie modernes",
      collaboration: "Collaboration",
      collaborationDesc: "Intégration inter-équipes pour livrer des logiciels avec un impact réel",
      measurability: "Mesurabilité",
      measurabilityDesc: "Solutions techniques fiables et mesurables pour le business",
      badgeBackend: "Backend Engineering",
      badgeSystemDesign: "System Design",
      badgeAPIs: "APIs",
      badgeCloud: "Cloud",
      badgeDevOps: "DevOps",
      badgeCICD: "CI/CD",
      badgeObservability: "Observabilité",
      badgeArchitecture: "Architecture",
      badgeSecurity: "Sécurité",
      badgeTechLead: "Leadership Technique",
    },
    skills: {
      label: "Compétences",
      title: "Skills & Technologies",
      description: "Carte des compétences techniques et des outils que j'utilise pour construire des systèmes robustes et évolutifs.",
      core: "Core",
      languages: "Langages",
      competencies: "Compétences",
      sysDesign: "System Design",
      backend: "Backend",
      apisRest: "APIs REST",
      architecture: "Architecture",
      integration: "Intégration",
      cloud: "Cloud",
      devops: "DevOps",
      cicd: "CI/CD",
      observability: "Observabilité",
      security: "Sécurité",
      testing: "Testing",
      governance: "Gouvernance",
      compScalable: "Planification de solutions évolutives",
      compLead: "Leadership technique",
      compIntegration: "Intégration de systèmes",
      compDocs: "Documentation technique",
      compMonitoring: "Supervision",
      compPerformance: "Performance",
      compReliability: "Fiabilité",
    },
    experience: {
      label: "Carrière",
      title: "Expérience Professionnelle",
      description: "Trajectoire professionnelle axée sur l'ingénierie logicielle, l'architecture de systèmes et la livraison de solutions à fort impact.",
      current: "Actuel",
      exp1Title: "Designer de Systèmes",
      exp1Company: "Freelancer",
      exp1Bullet1: "J'ai conçu et implémenté des architectures de systèmes avancées dans un robot de trading Python pour le marché financier, augmentant l'efficacité opérationnelle de 40%.",
      exp1Bullet2: "Implémentation de solutions évolutives alignées sur les objectifs métier.",
      exp2Title: "Développeur Logiciel / Développeur Back-End",
      exp2Company: "Génesis Technology",
      exp2Bullet1: "Développement de projets pour des clients des secteurs de la santé, des finances et de l'éducation.",
      exp2Bullet2: "Implémentation d'améliorations dans la conception et l'intégration de systèmes, élevant la performance et la fiabilité.",
      exp3Title: "Analyste de Projets IT",
      exp3Company: "Systems Design",
      exp3Bullet1: "Soutien aux projets d'implémentation de systèmes pour des clients de petite et moyenne taille.",
      exp3Bullet2: "Collaboration à la documentation technique et aux spécifications fonctionnelles.",
    },
    highlights: {
      label: "Points forts",
      title: "Impact & Résultats",
      description: "Principaux domaines d'impact et de contribution tout au long de ma carrière professionnelle.",
      learnMore: "EN SAVOIR PLUS",
      scalableTitle: "Architecture Évolutive",
      scalableDesc: "Modélisation et évolution des architectures pour supporter la croissance des utilisateurs et des services.",
      multiSectorTitle: "Intégration Multi-Secteur",
      multiSectorDesc: "Livraison de solutions pour la santé, les finances et l'éducation avec un focus sur la fiabilité et la sécurité.",
      techLeadTitle: "Leadership Technique",
      techLeadDesc: "Gestion d'équipe pour accélérer les livraisons avec des standards techniques cohérents.",
    },
    education: {
      label: "Formation",
      title: "Formation Académique",
      description: "Parcours académique axé sur l'ingénierie logicielle et l'excellence technique.",
      edu1Title: "Ingénierie Logicielle",
      edu1Institution: "Escola 42 Luanda",
      edu1Description: "École d'ingénierie logicielle de référence mondiale basée sur le peer-learning et les projets réels, sans professeurs ni cours traditionnels.",
      edu2Title: "Lycée Technique en Informatique",
      edu2Institution: "Instituto Politécnico Industrial Simione Mucune",
      edu2Description: "Formation technique avec une forte composante pratique en programmation, TIC, réseaux et maintenance.",
      tagProgramming: "Programmation",
      tagTIC: "TIC",
      tagNetworks: "Réseaux",
      tagMaintenance: "Maintenance",
      tagWebDev: "Développement Web",
    },
    contact: {
      label: "Contact",
      title: "Parlons-en",
      description: "Intéressé par une collaboration ? Contactez-moi et discutons de la façon dont je peux contribuer à votre projet.",
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
      errorMessage: "Impossible d'envoyer le message. Veuillez réessayer.",
    },
    footer: {
      role: "Ingénieur Logiciel & Développeur Back-End",
      backToTop: "Retour en haut",
      copyright: "Tous droits réservés.",
    },
  },
};

export default translations;
