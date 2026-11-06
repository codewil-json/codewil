<template>
  <article class="project-card" data-reveal>
    <div class="project-image">
      <img :src="project.thumbnail" :alt="project.name" loading="lazy">
      <span class="project-category">{{ project.category }}</span>
    </div>
    <div class="project-content">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <ul class="tag-list" :aria-label="`Tecnologias de ${project.name}`">
        <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
      </ul>
      <div v-if="project.demoUrl || project.repositoryUrl" class="project-links">
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demonstração
          <component :is="'ion-icon'" :icon="openOutline" aria-hidden="true" />
        </a>
        <a
          v-if="project.repositoryUrl"
          :href="project.repositoryUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositório
          <component :is="'ion-icon'" :icon="openOutline" aria-hidden="true" />
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
/* global defineProps */
import type { Project } from '@/services/projects';
import { openOutline } from 'ionicons/icons';

defineProps<{ project: Project }>();
</script>
