<template>
  <div>
    <header class="container page-intro" data-reveal>
      <span class="eyebrow">Sobre mim</span>
      <h1>Paixão por Engenharia de Software.</h1>
      <p class="lead">Wilson Acioli · Desenvolvedor Full Stack</p>
    </header>
    <section class="container content-section" data-reveal>
      <div class="about-grid">
        <div data-reveal>
          <img
            class="about-portrait"
            src="/img/wilson-acioli-color.jpg"
            alt="Retrato de Wilson Acioli"
            loading="lazy"
          >
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
          <p>
            Meu trabalho abrange desenvolvimento web e mobile, APIs, sistemas
            customizados, BI e dashboards, além de consultoria técnica.
          </p>
          <div class="button-row">
            <RouterLink class="button button-primary" to="/#contact">Entrar em contato</RouterLink>
            <RouterLink class="button button-quiet" to="/#projects">Ver projetos</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import useSeo from '@/composables/useSeo';

useSeo(
  'Sobre | Wilson Acioli — CodeWil',
  'Conheça Wilson Acioli, desenvolvedor Full Stack com foco em soluções web e mobile.',
  '/about',
);
</script>

<style scoped>
.about-portrait {
  width: min(100%, 340px);
  max-height: 470px;
  margin: 0 auto;
  border: 1px solid var(--border);
  border-radius: 48% 48% 20px 20px;
  object-fit: cover;
  object-position: center 24%;
  transition: transform 360ms ease, filter 360ms ease, box-shadow 360ms ease;
}

.about-portrait:hover {
  transform: scale(1.025);
  filter: saturate(1.08);
  box-shadow: var(--shadow);
}

.text-link {
  display: inline-flex;
  gap: 8px;
  margin-top: 6px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 800;
}
</style>
