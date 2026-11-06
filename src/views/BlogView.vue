<template>
  <div>
    <header class="container page-intro" data-reveal>
      <span class="eyebrow">Blog CodeWil</span>
      <h1>Tecnologia e desenvolvimento para solucionar desafios reais.</h1>
      <p class="lead">Artigos sobre desenvolvimento, presença digital e soluções para empresas.</p>
    </header>
    <section class="container content-section" aria-label="Artigos">
      <div class="blog-filters" aria-label="Filtrar artigos por categoria">
        <button
          v-for="category in categories"
          :key="category"
          class="filter-button"
          type="button"
          :aria-pressed="selectedCategory === category"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
      <div class="blog-grid">
        <article
          v-for="(post, index) in visiblePosts"
          :key="post.slug"
          class="blog-card"
          data-reveal
          :style="{ '--reveal-delay': `${index * 70}ms` }"
        >
          <div class="blog-card-meta">
            <span>{{ post.category }}</span>
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          </div>
          <h2><RouterLink :to="`/blog/${post.slug}`">{{ post.title }}</RouterLink></h2>
          <p>{{ post.excerpt }}</p>
          <RouterLink class="read-more" :to="`/blog/${post.slug}`">
            Ler artigo
            <component :is="'ion-icon'" :icon="arrowForwardOutline" aria-hidden="true" />
          </RouterLink>
        </article>
      </div>
      <p v-if="visiblePosts.length === 0" class="empty-state" role="status">
        Nenhum artigo encontrado nesta categoria.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { arrowForwardOutline } from 'ionicons/icons';
import useSeo from '@/composables/useSeo';
import { blogPosts } from '@/data/posts';

useSeo(
  'Blog | CodeWil',
  'Artigos sobre tecnologia, desenvolvimento web, SEO e soluções digitais.',
  '/blog',
);

const selectedCategory = ref('Todos');
const categories = ['Todos', ...new Set(blogPosts.map((post) => post.category))];
const visiblePosts = computed(() => (
  selectedCategory.value === 'Todos'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory.value)
));

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T12:00:00Z`));
}
</script>
