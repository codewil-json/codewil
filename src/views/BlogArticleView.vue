<template>
  <article v-if="post" class="article-layout" data-reveal>
    <RouterLink class="text-link" to="/blog">
      <component :is="'ion-icon'" :icon="arrowBackOutline" aria-hidden="true" />
      Voltar ao blog
    </RouterLink>
    <p class="eyebrow article-category">{{ post.category }}</p>
    <h1>{{ post.title }}</h1>
    <div class="article-meta">
      <span>Wilson Acioli</span>
      <time :datetime="post.date">{{ formatDate(post.date) }}</time>
      <span>{{ readingTime }} min de leitura</span>
    </div>
    <p class="article-summary">{{ post.excerpt }}</p>
    <ul class="article-tags" aria-label="Tópicos do artigo">
      <li v-for="tag in post.tags" :key="tag">{{ tag }}</li>
    </ul>
    <div class="article-content">
      <section v-for="section in post.sections" :key="section.heading">
        <h2>{{ section.heading }}</h2>
        <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
        <ul v-if="section.points?.length">
          <li v-for="point in section.points" :key="point">{{ point }}</li>
        </ul>
      </section>
    </div>
    <div class="button-row">
      <RouterLink class="button button-primary" to="/#contact">Entrar em contato</RouterLink>
      <RouterLink class="button button-quiet" to="/blog">Mais artigos</RouterLink>
    </div>
  </article>
  <section v-else class="container not-found" data-reveal>
    <div>
      <span class="eyebrow">Artigo não encontrado</span>
      <h1>Não encontramos esse conteúdo.</h1>
      <RouterLink class="button button-primary" to="/blog">Voltar ao blog</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { arrowBackOutline } from 'ionicons/icons';
import useSeo from '@/composables/useSeo';
import { getBlogPost } from '@/data/posts';

const route = useRoute();
const post = computed(() => getBlogPost(String(route.params.slug || '')));
const readingTime = computed(() => {
  if (!post.value) return 0;
  const articleText = [
    post.value.title,
    post.value.excerpt,
    ...post.value.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...(section.points || []),
    ]),
  ].join(' ');
  return Math.max(1, Math.ceil(articleText.trim().split(/\s+/).length / 200));
});

watchEffect(() => {
  if (post.value) {
    useSeo(
      `${post.value.title} | CodeWil`,
      post.value.excerpt,
      `/blog/${post.value.slug}`,
    );
  } else {
    useSeo(
      'Artigo não encontrado | CodeWil',
      'O artigo solicitado não foi encontrado.',
      route.path,
    );
  }
});

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T12:00:00Z`));
}
</script>

<style scoped>
.article-category {
  margin-top: 30px;
}

.text-link {
  color: var(--accent);
  font-size: 13px;
  font-weight: 800;
}
</style>
