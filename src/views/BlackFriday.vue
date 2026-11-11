<template>
  <div class="black-friday-page">
    <section class="campaign-hero">
      <div class="container hero-layout">
        <div class="hero-copy">
          <p class="campaign-kicker">
            <span class="kicker-mark" aria-hidden="true"></span>
            Black Friday <span aria-hidden="true">/</span> CodeWil
          </p>
          <h1>
            Sua próxima ideia
            <span>merece sair do papel.</span>
          </h1>
          <p class="hero-description">
            Aproveite a campanha para planejar seu próximo passo digital.
            Conte o que seu negócio precisa e descubra as condições disponíveis
            para o seu projeto.
          </p>
          <div class="hero-actions">
            <RouterLink class="campaign-button" to="/black-november#pre-orcamento">
              Solicitar pré-orçamento
              <component :is="'ion-icon'" :icon="arrowForwardOutline" aria-hidden="true" />
            </RouterLink>
            <a class="text-link" href="#solucoes">Explorar soluções</a>
          </div>
          <p class="hero-note">
            Atendimento personalizado e sem compromisso.
          </p>
        </div>

        <div class="campaign-art" aria-label="Black Friday CodeWil: seu próximo projeto digital">
          <div class="art-orbit orbit-one"></div>
          <div class="art-orbit orbit-two"></div>
          <div class="art-card">
            <span class="art-overline">BLACK FRIDAY</span>
            <span class="art-divider"></span>
            <strong>Seu projeto.<br>Seu próximo nível.</strong>
            <span class="art-caption">Condições especiais sob consulta</span>
            <span class="art-stamp" aria-hidden="true">CW</span>
          </div>
          <span class="art-spark spark-one" aria-hidden="true">✳</span>
          <span class="art-spark spark-two" aria-hidden="true">✦</span>
        </div>
      </div>
    </section>

    <section id="solucoes" class="solutions-section">
      <div class="container">
        <div class="section-heading">
          <p class="section-kicker">O que podemos criar juntos</p>
          <h2>Soluções para sua próxima fase</h2>
          <p>
            Da primeira presença online à automação de processos, cada projeto
            começa entendendo o que faz sentido para o seu negócio.
          </p>
        </div>

        <div class="solutions-grid">
          <article class="solution-card">
            <span class="solution-index">01</span>
            <component :is="'ion-icon'" :icon="globeOutline" aria-hidden="true" />
            <h3>Presença digital</h3>
            <p>Sites institucionais e lojas virtuais para apresentar sua marca e seus serviços.</p>
          </article>
          <article class="solution-card">
            <span class="solution-index">02</span>
            <component :is="'ion-icon'" :icon="layersOutline" aria-hidden="true" />
            <h3>Sistemas web</h3>
            <p>Plataformas e ferramentas web pensadas para resolver desafios do dia a dia.</p>
          </article>
          <article class="solution-card">
            <span class="solution-index">03</span>
            <component :is="'ion-icon'" :icon="flashOutline" aria-hidden="true" />
            <h3>Automações</h3>
            <p>Integrações para reduzir tarefas manuais e conectar seus processos.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="campaign-cta">
      <div class="container cta-content">
        <div>
          <p class="section-kicker">Vamos tirar sua ideia do papel?</p>
          <h2>O primeiro passo é uma boa conversa.</h2>
          <p>Explique seu desafio e receba um pré-orçamento personalizado.</p>
        </div>
        <RouterLink class="campaign-button" to="/black-november#pre-orcamento">
          Conversar sobre meu projeto
          <component :is="'ion-icon'" :icon="arrowForwardOutline" aria-hidden="true" />
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {
  arrowForwardOutline,
  flashOutline,
  globeOutline,
  layersOutline,
} from 'ionicons/icons';
import useSeo from '@/composables/useSeo';

useSeo(
  'Black Friday | Projetos digitais — CodeWil',
  'Conheça soluções digitais para o seu negócio e solicite um pré-orçamento personalizado para a Black Friday CodeWil.',
  '/black-friday',
);
</script>

<style scoped>
.black-friday-page {
  --campaign-accent: #ff6a36;
  --campaign-glow: rgba(255, 106, 54, 0.18);
  overflow: hidden;
}

.campaign-hero {
  position: relative;
  padding: clamp(72px, 10vw, 128px) 0 clamp(80px, 10vw, 132px);
  background:
    radial-gradient(ellipse at 82% 45%, var(--campaign-glow), transparent 34%),
    linear-gradient(145deg, var(--page), var(--surface-soft));
}

.hero-layout {
  display: grid;
  align-items: center;
  gap: clamp(40px, 8vw, 112px);
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.85fr);
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.campaign-kicker,
.section-kicker {
  margin: 0;
  color: var(--campaign-accent);
  font-family: "DM Mono", monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.kicker-mark {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 7px;
  border-radius: 50%;
  background: var(--campaign-accent);
  box-shadow: 0 0 14px var(--campaign-accent);
  vertical-align: 1px;
}

.campaign-kicker > span:last-child {
  padding-inline: 5px;
  color: var(--subtle);
}

.hero-copy h1 {
  max-width: 700px;
  margin: 24px 0;
  font-size: clamp(42px, 6vw, 76px);
  letter-spacing: -0.07em;
  line-height: 1.02;
}

.hero-copy h1 span {
  display: block;
  color: var(--campaign-accent);
}

.hero-description {
  max-width: 510px;
  margin: 0;
  color: var(--muted);
  font-size: clamp(15px, 1.5vw, 17px);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 30px;
}

.campaign-button {
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 22px;
  border: 1px solid var(--campaign-accent);
  border-radius: 4px;
  background: var(--campaign-accent);
  color: #1c100b;
  font-size: 13px;
  font-weight: 800;
  transition: background-color 160ms ease, transform 160ms ease;
}

.campaign-button:hover {
  transform: translateY(-2px);
  background: #ff8155;
}

.campaign-button ion-icon {
  font-size: 18px;
}

.text-link {
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: var(--border);
  text-underline-offset: 5px;
}

.text-link:hover {
  color: var(--text);
}

.hero-note {
  margin: 17px 0 0;
  color: var(--subtle);
  font-size: 11px;
}

.campaign-art {
  position: relative;
  display: grid;
  min-height: 370px;
  place-items: center;
  isolation: isolate;
}

.art-orbit {
  position: absolute;
  z-index: -1;
  width: 290px;
  height: 290px;
  border: 1px solid color-mix(in srgb, var(--campaign-accent) 30%, transparent);
  border-radius: 50%;
}

.orbit-one {
  transform: scale(1.2);
}

.orbit-two {
  transform: scale(1.55);
  opacity: 0.45;
}

.art-card {
  position: relative;
  display: flex;
  width: min(340px, 80%);
  min-height: 280px;
  flex-direction: column;
  justify-content: center;
  padding: 34px;
  border: 1px solid color-mix(in srgb, var(--campaign-accent) 42%, var(--border));
  border-radius: 8px;
  background:
    linear-gradient(
      145deg,
      color-mix(in srgb, var(--surface-raised) 94%, transparent),
      var(--surface)
    ),
    var(--surface);
  box-shadow: 0 32px 90px rgba(0, 0, 0, 0.28), 0 0 55px var(--campaign-glow);
  transform: rotate(3deg);
}

.art-overline {
  color: var(--campaign-accent);
  font-family: "DM Mono", monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.art-divider {
  width: 38px;
  height: 2px;
  margin: 20px 0;
  background: var(--campaign-accent);
}

.art-card strong {
  max-width: 245px;
  font-size: 32px;
  letter-spacing: -0.06em;
  line-height: 1.08;
}

.art-caption {
  margin-top: 22px;
  color: var(--muted);
  font-size: 11px;
}

.art-stamp {
  position: absolute;
  right: 22px;
  bottom: 20px;
  color: var(--campaign-accent);
  font-size: 15px;
  font-weight: 900;
  letter-spacing: -0.08em;
}

.art-spark {
  position: absolute;
  color: var(--campaign-accent);
}

.spark-one {
  top: 50px;
  right: 15%;
  font-size: 25px;
}

.spark-two {
  bottom: 48px;
  left: 10%;
  font-size: 34px;
}

.solutions-section {
  padding: clamp(68px, 9vw, 108px) 0;
  background: var(--page);
}

.section-heading {
  max-width: 640px;
  margin-bottom: 36px;
}

.section-heading h2,
.cta-content h2 {
  margin: 12px 0;
  font-size: clamp(28px, 4vw, 42px);
  letter-spacing: -0.06em;
  line-height: 1.12;
}

.section-heading > p:last-child,
.cta-content > div > p:last-child {
  max-width: 590px;
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

.solutions-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.solution-card {
  position: relative;
  min-height: 220px;
  padding: 27px;
  border: 1px solid var(--border);
  border-radius: 5px;
  background: var(--surface);
  transition: border-color 160ms ease, transform 160ms ease;
}

.solution-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--campaign-accent) 60%, var(--border));
}

.solution-index {
  position: absolute;
  top: 24px;
  right: 24px;
  color: var(--subtle);
  font-family: "DM Mono", monospace;
  font-size: 11px;
}

.solution-card ion-icon {
  width: 25px;
  height: 25px;
  color: var(--campaign-accent);
  font-size: 25px;
}

.solution-card h3 {
  margin: 22px 0 8px;
  font-size: 17px;
  letter-spacing: -0.03em;
}

.solution-card p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.campaign-cta {
  padding: 52px 0;
  border-top: 1px solid var(--border);
  background:
    radial-gradient(ellipse at 90% 50%, var(--campaign-glow), transparent 38%),
    var(--surface-soft);
}

.cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.cta-content h2 {
  margin-bottom: 8px;
  font-size: clamp(24px, 3vw, 34px);
}

.cta-content > .campaign-button {
  flex: 0 0 auto;
}

@media (max-width: 760px) {
  .hero-layout {
    gap: 20px;
    grid-template-columns: 1fr;
  }

  .campaign-art {
    min-height: 330px;
  }

  .solutions-grid {
    grid-template-columns: 1fr;
  }

  .solution-card {
    min-height: 0;
  }

  .cta-content {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 520px) {
  .hero-actions {
    align-items: flex-start;
    flex-direction: column;
    gap: 17px;
  }

  .campaign-button {
    width: 100%;
  }

  .campaign-art {
    min-height: 290px;
  }

  .art-card {
    min-height: 250px;
    padding: 28px;
  }

  .art-card strong {
    font-size: 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
