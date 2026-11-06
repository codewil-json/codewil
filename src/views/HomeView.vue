<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="container hero-grid">
      <div class="hero-copy" data-reveal>
        <span class="eyebrow">
          Wilson Acioli <span aria-hidden="true">/</span> Desenvolvedor Full Stack
        </span>
        <h1 id="hero-title">Da ideia à<br><span>solução digital.</span></h1>
        <p>
          Crio sites, sistemas web e automações que ajudam empresas a transformar
          ideias em soluções digitais.
        </p>
        <div class="button-row">
          <a class="button button-primary" href="#contact">
            Entrar em contato
            <component :is="'ion-icon'" :icon="arrowForwardOutline" aria-hidden="true" />
          </a>
          <a class="button button-quiet" href="#projects">Conheça meus projetos</a>
        </div>
        <nav class="social-links" aria-label="Redes sociais">
          <a
            href="https://github.com/codewil-json"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <component :is="'ion-icon'" :icon="openOutline" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/wilsonacioli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <component :is="'ion-icon'" :icon="openOutline" aria-hidden="true" />
          </a>
          <a
            href="https://x.com/WilsonAcioli"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter <component :is="'ion-icon'" :icon="openOutline" aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/5582996012515"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp <component :is="'ion-icon'" :icon="openOutline" aria-hidden="true" />
          </a>
        </nav>
      </div>
      <div class="hero-portrait" data-reveal>
        <img
          src="/img/wilson-acioli-corporate.jpg"
          alt="Wilson Acioli em seu ambiente de trabalho"
          fetchpriority="high"
        >
        <div class="hero-caption">
          <strong>Wilson Acioli</strong>
          <span>Desenvolvedor Full Stack</span>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="section" aria-labelledby="about-title">
    <div class="container about-grid" data-reveal>
      <div>
        <span class="eyebrow">Sobre mim</span>
        <h2 id="about-title">Paixão por Engenharia de Software.</h2>
      </div>
      <div class="about-copy">
        <p>
          Sou um desenvolvedor apaixonado por criar soluções tecnológicas que resolvem
          problemas complexos. Com foco no desenvolvimento Web e Mobile, atuo na
          construção de APIs robustas, sistemas corporativos de alta disponibilidade
          e arquiteturas SaaS escaláveis.
        </p>
        <p>
          Acredito que a tecnologia deve ser invisível e eficiente. Minha abordagem
          combina as melhores práticas de Clean Code com as ferramentas mais modernas
          do ecossistema JavaScript e Python, garantindo que cada integração seja
          fluida e cada interface, intuitiva.
        </p>
        <RouterLink class="text-link" to="/about">
          Conheça mais sobre mim
          <component :is="'ion-icon'" :icon="arrowForwardOutline" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>
  </section>

  <section id="skills" class="section section-muted" aria-labelledby="skills-title">
    <div class="container">
      <div class="section-heading" data-reveal>
        <span class="eyebrow">Stack</span>
        <h2 id="skills-title">Especialidades &amp; Ferramentas</h2>
        <p class="section-intro">Tecnologias e ferramentas presentes no meu trabalho.</p>
      </div>
      <div class="skills-grid">
        <article
          v-for="(group, index) in skillGroups"
          :key="group.name"
          class="info-card"
          data-reveal
          :style="{ '--reveal-delay': `${index * 70}ms` }"
        >
          <h3>{{ group.name }}</h3>
          <ul>
            <li v-for="skill in group.skills" :key="skill">{{ skill }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section id="services" class="section" aria-labelledby="services-title">
    <div class="container">
      <div class="section-heading" data-reveal>
        <span class="eyebrow">O que faço</span>
        <h2 id="services-title">Soluções digitais completas de ponta a ponta.</h2>
      </div>
      <div class="service-grid">
        <article
          v-for="(service, index) in services"
          :key="service.name"
          class="service-card"
          data-reveal
          :style="{ '--reveal-delay': `${index * 70}ms` }"
        >
          <span class="service-index">0{{ index + 1 }}</span>
          <h3>{{ service.name }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>

  <section id="process" class="section section-muted" aria-labelledby="process-title">
    <div class="container">
      <div class="section-heading" data-reveal>
        <span class="eyebrow">Metodologia</span>
        <h2 id="process-title">Como eu trabalho</h2>
      </div>
      <ol class="process-list">
        <li
          v-for="(step, index) in processSteps"
          :key="step.name"
          class="process-step"
          data-reveal
          :style="{ '--reveal-delay': `${index * 70}ms` }"
        >
          <span class="step-number">0{{ index + 1 }}</span>
          <h3>{{ step.name }}</h3>
          <p>{{ step.description }}</p>
        </li>
      </ol>
    </div>
  </section>

  <section id="projects" class="section projects-section" aria-labelledby="projects-title">
    <div class="container">
      <div class="section-heading" data-reveal>
        <span class="eyebrow">Trabalho selecionado</span>
        <h2 id="projects-title">Projetos em Destaque</h2>
        <p class="section-intro">Uma seleção de projetos e soluções digitais.</p>
      </div>

      <p v-if="projectsLoading" class="projects-status" role="status">Carregando projetos…</p>
      <div v-else-if="projectError" class="projects-status error-state" role="alert">
        <p>{{ projectError }}</p>
        <button class="button" type="button" @click="loadProjects">Tentar novamente</button>
      </div>
      <p v-else-if="projects.length === 0" class="empty-state" role="status">
        Novos projetos serão publicados em breve.
      </p>
      <div v-else class="project-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>

  <section id="contact" class="section" aria-labelledby="contact-title">
    <div class="container contact-panel">
      <div class="section-heading">
        <span class="eyebrow">Contato</span>
        <h2 id="contact-title">Vamos construir algo incrível?</h2>
        <p class="section-intro">
          Estou disponível para novos projetos, consultorias ou apenas um café virtual
          para discutirmos tecnologia.
        </p>
        <div class="contact-details">
          <a href="mailto:codewil.json@gmail.com">E-mail · codewil.json@gmail.com</a>
          <a
            href="https://wa.me/5582996012515"
            target="_blank"
            rel="noopener noreferrer"
          >WhatsApp · +55 (82) 99601-2515</a>
          <span>Maceió, AL - Brasil</span>
        </div>
      </div>
      <form class="contact-form" @submit.prevent="sendMessage">
        <label for="contact-name">
          Nome Completo
          <input id="contact-name" v-model="contact.name" name="name" autocomplete="name" required>
        </label>
        <label for="contact-email">
          E-mail Corporativo
          <input
            id="contact-email"
            v-model="contact.email"
            name="email"
            type="email"
            autocomplete="email"
            required
          >
        </label>
        <label for="contact-message">
          Sua Mensagem
          <textarea
            id="contact-message"
            v-model="contact.message"
            name="message"
            rows="4"
            required
          ></textarea>
        </label>
        <button class="button button-primary" type="submit">
          {{ contactSending ? 'Enviando…' : 'Enviar mensagem' }}
          <component
            :is="'ion-icon'"
            :class="{ 'is-spinning': contactSending }"
            :icon="contactSending ? syncOutline : arrowForwardOutline"
            aria-hidden="true"
          />
        </button>
        <p
          v-if="contactStatus"
          class="contact-feedback"
          :class="`contact-feedback--${contactStatusType}`"
          :role="contactStatusType === 'error' ? 'alert' : 'status'"
          aria-live="polite"
        >
          {{ contactStatus }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { arrowForwardOutline, openOutline, syncOutline } from 'ionicons/icons';
import ProjectCard from '@/components/ProjectCard.vue';
import useSeo from '@/composables/useSeo';
import { sendContactMessage } from '@/services/contact';
import { getProjects, type Project } from '@/services/projects';

useSeo(
  'Wilson Acioli | Desenvolvedor Full Stack & Soluções Digitais',
  'Desenvolvedor Full Stack especializado em Vue, React, Laravel, Node.js e soluções digitais.',
  '/',
);

const skillGroups = [
  { name: 'Frontend', skills: ['Vue.js', 'React', 'Next.js', 'Angular', 'Tailwind CSS'] },
  { name: 'Backend', skills: ['Node.js', 'Laravel', 'Python', 'FastAPI', 'NestJS'] },
  { name: 'Mobile & Database', skills: ['React Native', 'Flutter', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { name: 'DevOps & Tools', skills: ['Git', 'Docker', 'AWS', 'Linux', 'Figma', 'Vercel'] },
];

const services = [
  {
    name: 'Web Development',
    description: 'Sites, sistemas web e aplicações responsivas desenvolvidas com foco em '
      + 'performance, SEO e experiência do usuário.',
  },
  {
    name: 'Marketing Digital',
    description: 'Estratégias de presença digital que conectam conteúdo, SEO, campanhas e análise '
      + 'de resultados para atrair o público certo e gerar oportunidades.',
  },
  {
    name: 'Sistemas Customizados',
    description: 'Desenvolvimento de softwares sob medida para automatizar processos internos, '
      + 'reduzir custos e aumentar a produtividade.',
  },
  {
    name: 'APIs & Integrações',
    description: 'Criação de APIs RESTful, GraphQL e integração entre sistemas, ERPs, CRMs '
      + 'e serviços de terceiros.',
  },
  {
    name: 'BI & Dashboards',
    description: 'Dashboards estratégicos e indicadores para acompanhamento de métricas, análises '
      + 'e tomada de decisão baseada em dados.',
  },
  {
    name: 'Consultoria Técnica',
    description: 'Consultoria em arquitetura, revisão de código, modernização de sistemas e '
      + 'definição das melhores práticas de desenvolvimento.',
  },
];

const processSteps = [
  { name: 'Descoberta', description: 'Entendimento profundo das necessidades do negócio e definição de requisitos.' },
  { name: 'Planejamento', description: 'Criação de protótipos, escolha da stack e definição da arquitetura do sistema.' },
  { name: 'Desenvolvimento', description: 'Codificação iterativa com revisões constantes e foco em qualidade de software.' },
  { name: 'Entrega', description: 'Deploy em produção, monitoramento e treinamento para utilização do sistema.' },
];

const projects = ref<Project[]>([]);
const projectsLoading = ref(true);
const projectError = ref('');

async function loadProjects() {
  projectsLoading.value = true;
  projectError.value = '';
  try {
    projects.value = await getProjects();
  } catch (error) {
    projectError.value = error instanceof Error
      ? error.message
      : 'Ocorreu um erro ao carregar os projetos.';
  } finally {
    projectsLoading.value = false;
  }
}

onMounted(loadProjects);

const contact = reactive({ name: '', email: '', message: '' });
const contactSending = ref(false);
const contactStatus = ref('');
const contactStatusType = ref<'success' | 'error'>('success');

async function sendMessage() {
  if (contactSending.value) return;

  contactSending.value = true;
  contactStatus.value = '';
  try {
    await sendContactMessage(contact);
    contactStatusType.value = 'success';
    contactStatus.value = 'Mensagem enviada com sucesso. Obrigado pelo contato!';
    contact.name = '';
    contact.email = '';
    contact.message = '';
  } catch {
    contactStatusType.value = 'error';
    contactStatus.value = 'Não foi possível enviar sua mensagem agora. Tente novamente em instantes.';
  } finally {
    contactSending.value = false;
  }
}
</script>
