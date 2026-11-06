import featuredProjects from '@/data/projects';

export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  repositoryUrl?: string;
}

function isProject(value: unknown): value is Project {
  if (typeof value !== 'object' || value === null) return false;

  const project = value as Record<string, unknown>;
  return typeof project.id === 'string'
    && typeof project.name === 'string'
    && typeof project.description === 'string'
    && typeof project.thumbnail === 'string'
    && typeof project.category === 'string'
    && Array.isArray(project.technologies)
    && project.technologies.every((technology) => typeof technology === 'string')
    && (project.demoUrl === undefined || typeof project.demoUrl === 'string')
    && (project.repositoryUrl === undefined || typeof project.repositoryUrl === 'string');
}

function readProjects(response: unknown): Project[] {
  let records = response;

  if (typeof response === 'object' && response !== null && !Array.isArray(response)) {
    const result = response as Record<string, unknown>;
    records = result.data ?? result.items;
  }

  if (!Array.isArray(records) || !records.every(isProject)) {
    throw new Error('A resposta da API de projetos possui um formato inválido.');
  }

  return records;
}

export async function getProjects(): Promise<Project[]> {
  const apiUrl = process.env.VUE_APP_PROJECTS_API_URL;
  if (!apiUrl) return featuredProjects;

  const response = await fetch(apiUrl, {
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Não foi possível carregar os projetos (HTTP ${response.status}).`);
  }

  return readProjects(await response.json());
}
