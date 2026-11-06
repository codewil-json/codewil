<template>
  <a class="skip-link" href="#main-content">Pular para o conteúdo</a>
  <SiteHeader />
  <main id="main-content">
    <RouterView />
  </main>
  <SiteFooter />
</template>

<script setup lang="ts">
import {
  nextTick, onMounted, onUnmounted, watch,
} from 'vue';
import { RouterView, useRoute } from 'vue-router';
import SiteFooter from '@/components/SiteFooter.vue';
import SiteHeader from '@/components/SiteHeader.vue';

const route = useRoute();
let revealObserver: IntersectionObserver | undefined;
let mutationObserver: MutationObserver | undefined;
const observedElements = new WeakSet<Element>();

function observeRevealElements() {
  if (!revealObserver) return;

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
    if (observedElements.has(element)) return;
    observedElements.add(element);
    revealObserver?.observe(element);
  });
}

watch(() => route.fullPath, async () => {
  await nextTick();
  observeRevealElements();
}, { flush: 'post', immediate: true });

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
      element.classList.add('is-revealed');
    });
    return;
  }

  document.documentElement.classList.add('has-scroll-reveal');
  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

  observeRevealElements();
  mutationObserver = new MutationObserver(observeRevealElements);
  const mainContent = document.querySelector<HTMLElement>('#main-content');
  if (mainContent) {
    mutationObserver.observe(mainContent, { childList: true, subtree: true });
  }
});

onUnmounted(() => {
  revealObserver?.disconnect();
  mutationObserver?.disconnect();
  document.documentElement.classList.remove('has-scroll-reveal');
});
</script>
