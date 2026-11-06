import type { Project } from '@/services/projects';

const featuredProjects: Project[] = [
  {
    id: 'gaia-sena',
    name: 'Redesign do Site — Gaia & Sena Advogados Associados',
    description: 'Reformulação da presença digital do escritório, com identidade visual mais sofisticada, '
      + 'navegação clara e comunicação próxima para apresentar sua atuação jurídica.',
    thumbnail: '/img/project-gaia-sena-redesign.png',
    category: 'Website',
    technologies: ['Vue.js', 'Node.js', 'JavaScript'],
  },
  {
    id: 'investloto-analytics-hub',
    name: 'Hub Analítico Executivo (InvestLoto)',
    description: 'MVP que centraliza faturamento, ticket médio e dados transacionais em tempo real, transformando planilhas complexas em decisões ágeis.',
    thumbnail: '/img/project-investloto.png',
    category: 'Dashboard',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'codewil-institutional',
    name: 'Landing Page Institucional (CodeWil)',
    description: 'Página de alta conversão em dark mode focada em atrair empresas, destacando a transformação de processos manuais em automações inteligentes.',
    thumbnail: '/img/project-codewil.png',
    category: 'Website',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'n8n', 'Python'],
  },
  {
    id: 'custom-links',
    name: 'Agregador de Links (Linktree Customizado)',
    description: 'Aplicação web leve de bio link desenvolvida com design system próprio para conectar redes sociais, GitHub, portfólio e contatos diretos.',
    thumbnail: '/img/project-links.png',
    category: 'Web application',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vite'],
  },
  {
    id: 'mega-sena-results',
    name: 'Portal de Resultados (Resultados da Mega-Sena)',
    description: 'Portal dinâmico para desenvolvedores.',
    thumbnail: '/img/project-results.png',
    category: 'Web application',
    technologies: ['Python', 'BeautifulSoup', 'React', 'Tailwind CSS', 'Express'],
  },
  {
    id: 'interactive-ai-course',
    name: 'Landing Page para Curso Interativo de IA no Marketing Digital',
    description: 'Plataforma interativa no estilo slideshow para venda de curso, focada em experiência do usuário fluida e conversão de profissionais.',
    thumbnail: '/img/project-ai-course.png',
    category: 'Website',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lovable', 'Framer Motion'],
  },
];

export default featuredProjects;
