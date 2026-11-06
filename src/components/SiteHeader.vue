<template>
  <header class="site-header">
    <div class="container header-inner">
      <RouterLink class="brand" to="/" aria-label="CodeWil — início">
        <img
          class="brand-mark"
          :src="theme === 'dark' ? '/img/codewil-logo-white.png' : '/img/codewil-logo-dark.png'"
          alt=""
          aria-hidden="true"
        >
        <span class="brand-copy">
          <strong>CodeWil</strong>
          <!-- <span>Wilson Acioli</span> -->
        </span>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :class="{ 'is-open': menuOpen }"
        :aria-expanded="menuOpen"
        aria-controls="primary-navigation"
        :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
      </button>

      <nav
        id="primary-navigation"
        class="primary-navigation"
        :class="{ 'is-open': menuOpen }"
        aria-label="Navegação principal"
      >
        <RouterLink
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          :class="{ active: isActive(item) }"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </RouterLink>
        <button
          class="theme-toggle"
          type="button"
          :aria-label="theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'"
          @click="toggleTheme"
        >
          <component
            :is="'ion-icon'"
            :icon="theme === 'dark' ? sunnyOutline : moonOutline"
            aria-hidden="true"
          />
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  onMounted, onUnmounted, ref, watch,
} from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { moonOutline, sunnyOutline } from 'ionicons/icons';
import { useTheme } from '@/composables/useTheme';

interface NavigationItem {
  label: string;
  to: string;
  section?: string;
}

const navItems: NavigationItem[] = [
  { label: 'Sobre', to: '/#about', section: 'about' },
  { label: 'Skills', to: '/#skills', section: 'skills' },
  { label: 'Serviços', to: '/#services', section: 'services' },
  { label: 'Projetos', to: '/#projects', section: 'projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contato', to: '/#contact', section: 'contact' },
];

const route = useRoute();
const { theme, toggleTheme } = useTheme();
const menuOpen = ref(false);
const activeSection = ref('');
let sectionObserver: IntersectionObserver | undefined;
let previousBodyOverflow = '';

function closeMenu() {
  menuOpen.value = false;
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu();
}

watch(menuOpen, (isOpen) => {
  if (isOpen) {
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = previousBodyOverflow;
  }
});

function isActive(item: NavigationItem) {
  if (item.section) {
    return route.path === '/' && activeSection.value === item.section;
  }
  return route.path === '/blog' || route.path.startsWith('/blog/');
}

function observeSections() {
  sectionObserver?.disconnect();
  if (route.path !== '/') return;

  const sections = [...document.querySelectorAll<HTMLElement>(
    '#about, #skills, #services, #projects, #contact',
  )];
  if (!sections.length) return;

  sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((first, second) => second.intersectionRatio - first.intersectionRatio);
    if (visible[0]) activeSection.value = visible[0].target.id;
  }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5] });
  sections.forEach((section) => sectionObserver?.observe(section));
}

watch(() => route.path, () => {
  menuOpen.value = false;
  activeSection.value = '';
  window.setTimeout(observeSections, 0);
});

onMounted(observeSections);
onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => {
  sectionObserver?.disconnect();
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = previousBodyOverflow;
});
</script>
