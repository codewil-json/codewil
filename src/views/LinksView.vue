<template>
  <section class="container links-page">
    <header class="links-profile" data-reveal>
      <img
        class="links-avatar"
        src="/img/wilson-acioli-bw.jpg"
        alt="Retrato em preto e branco de Wilson Acioli"
        fetchpriority="high"
      >
      <span class="availability">Disponível para projetos</span>
      <h1>Wilson Acioli</h1>
      <p>@codewil.dev · Product Designer &amp; Dev.</p>
      <div class="links-chips" aria-label="Áreas de atuação">
        <span v-for="skill in linkSkills" :key="skill">{{ skill }}</span>
      </div>
    </header>
    <nav class="social-card-list" aria-label="Meus links">
      <a
        v-for="(item, index) in links"
        :key="item.title"
        class="social-card"
        data-reveal
        :style="{ '--reveal-delay': `${index * 70}ms` }"
        :href="item.href"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noopener noreferrer' : undefined"
      >
        <span class="social-card-copy">
          <strong>{{ item.title }}</strong>
          <span>{{ item.description }}</span>
        </span>
        <component
          class="social-card-arrow"
          :is="'ion-icon'"
          :icon="openOutline"
          aria-hidden="true"
        />
      </a>
    </nav>
    <p class="links-credit">Feito com <span aria-label="amor">♥</span> por CodeWil</p>
  </section>
</template>

<script setup lang="ts">
import useSeo from '@/composables/useSeo';
import { openOutline } from 'ionicons/icons';

useSeo(
  'Links | CodeWil',
  'Links de Wilson Acioli: portfólio, redes sociais e contato profissional.',
  '/links',
);

const linkSkills = [
  'Product Design',
  'Figma',
  'UI / UX',
  'Design System',
  'Frontend',
  'Prototipagem',
  'Backend',
];

const links = [
  {
    title: 'Meu Portfólio', description: 'Projetos, cases e experimentos', href: '/', external: false,
  },
  {
    title: 'Instagram', description: 'Bastidores e conteúdo tech', href: 'https://instagram.com/wilacioli', external: true,
  },
  {
    title: 'GitHub', description: 'Projetos mais recentes', href: 'https://github.com/acioliwilson', external: true,
  },
  {
    title: 'LinkedIn', description: 'Vamos nos conectar', href: 'https://www.linkedin.com/in/wilsonacioli', external: true,
  },
  {
    title: 'Fale comigo', description: 'Aberto para novos projetos', href: 'mailto:codewil.json@gmail.com', external: false,
  },
];
</script>

<style scoped>
.links-credit {
  margin: 25px 0 0;
  color: var(--subtle);
  font-size: 11px;
  text-align: center;
}

.links-credit span {
  color: #e78392;
}
</style>
