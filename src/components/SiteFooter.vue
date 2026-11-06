<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <RouterLink class="footer-brand" to="/" aria-label="CodeWil — início">
        <img
          class="footer-logo"
          :src="theme === 'dark' ? '/img/codewil-logo-white.png' : '/img/codewil-logo-dark.png'"
          alt=""
          aria-hidden="true"
        >
        <span>CodeWil</span>
      </RouterLink>
      <p>© {{ year }} Wilson Acioli. Todos os direitos reservados.</p>
      <nav aria-label="Redes sociais">
        <a href="https://github.com/codewil-json" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/wilsonacioli/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://x.com/WilsonAcioli" target="_blank" rel="noopener noreferrer">Twitter</a>
        <button type="button" class="back-to-top" @click="backToTop">
          Voltar ao topo
          <component :is="'ion-icon'" :icon="arrowUpOutline" aria-hidden="true" />
        </button>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { arrowUpOutline } from 'ionicons/icons';
import { useTheme } from '@/composables/useTheme';

const year = new Date().getFullYear();
const { theme } = useTheme();

function backToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
