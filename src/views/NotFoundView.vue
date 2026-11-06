<template>
  <section class="container not-found" data-reveal>
    <div>
      <span class="eyebrow">Erro 404</span>
      <h1>Esta página não existe.</h1>
      <p class="section-intro">O endereço pode ter mudado ou o conteúdo não está disponível.</p>
      <RouterLink class="button button-primary" to="/">Voltar ao início</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import useSeo from '@/composables/useSeo';

useSeo('Página não encontrada | CodeWil', 'A página solicitada não foi encontrada.', '/404');
</script>
