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
    id: 'flask-ecommerce-api',
    name: 'Flask E-commerce API',
    description: 'API RESTful para e-commerce com autenticação, gerenciamento de produtos, carrinho de compras e checkout.',
    thumbnail: '/img/project-flask-ecommerce-api.svg',
    category: 'API',
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'SQLite'],
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
    name: 'Atualização do Portal de Resultados',
    description: 'Correção na API de resultados, melhorias de usabilidade e design, busca por número do concurso, '
      + 'página da Federal e correção de todas as páginas internas.',
    thumbnail: '/img/project-results.png',
    category: 'Web application',
    technologies: ['Vue', 'Bootstrap', 'Node.js', 'Express'],
  },
  {
    id: 'securepass-factory',
    name: 'SecurePass Factory',
    description: 'Aplicação para gerar senhas fortes e personalizadas, com opções de caracteres e controle do comprimento.',
    thumbnail: '/img/project-securepass-factory.png',
    category: 'Web application',
    technologies: ['Vue'],
  },
  {
    id: 'food-delivery',
    name: 'Food Delivery',
    description: 'Interface de delivery de comida com navegação por categorias e apresentação de pratos em uma experiência mobile.',
    thumbnail: '/img/project-food-delivery.svg',
    category: 'Web application',
    technologies: ['Vue'],
  },
];

export default featuredProjects;
