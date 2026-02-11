<script setup lang="ts">
import { computed, ref } from 'vue';

import { useLocale } from '../i18n';
import { achievements, categoryLabels, statusLabels } from '../data/achievements';
import type { AchievementCategory } from '../types';

const { text } = useLocale();

const selectedCategory = ref<'all' | AchievementCategory>('all');

const categories: Array<'all' | AchievementCategory> = [
  'all',
  'published',
  'submitted',
  'system',
  'competition',
];

const filteredItems = computed(() => {
  const base =
    selectedCategory.value === 'all'
      ? achievements
      : achievements.filter((item) => item.category === selectedCategory.value);

  return [...base].sort((a, b) => b.date.localeCompare(a.date));
});

const counts = computed(() => ({
  all: achievements.length,
  published: achievements.filter((item) => item.category === 'published').length,
  submitted: achievements.filter((item) => item.category === 'submitted').length,
  system: achievements.filter((item) => item.category === 'system').length,
  competition: achievements.filter((item) => item.category === 'competition').length,
}));
</script>

<template>
  <section class="section page-hero">
    <div class="container">
      <h1>{{ text({ zh: '动态与成果', en: 'News & Results' }) }}</h1>
      <p class="section-desc">
        {{ text({ zh: '覆盖论文录用/投稿、系统发布与竞赛获奖动态（2025–至今）。', en: 'Covering papers, submissions, releases, and competition achievements since 2025.' }) }}
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="tab-row">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="tab-btn"
          :class="{ active: selectedCategory === cat }"
          @click="selectedCategory = cat"
        >
          <template v-if="cat === 'all'">
            {{ text({ zh: '全部', en: 'All' }) }} ({{ counts.all }})
          </template>
          <template v-else>
            {{ text(categoryLabels[cat]) }} ({{ counts[cat] }})
          </template>
        </button>
      </div>

      <div class="timeline-list">
        <article v-for="item in filteredItems" :key="item.id" class="timeline-card">
          <header>
            <p class="muted">{{ item.date }}</p>
            <span class="status-pill">{{ text(statusLabels[item.status]) }}</span>
          </header>
          <h3>{{ text(item.title) }}</h3>
          <p v-if="item.venue" class="muted">{{ text(item.venue) }}</p>
          <p v-if="item.authors" class="muted">{{ text(item.authors) }}</p>
          <p v-if="item.description">{{ text(item.description) }}</p>

          <ul v-if="item.links?.length" class="link-list">
            <li v-for="link in item.links" :key="link.url">
              <a :href="link.url" target="_blank" rel="noreferrer">{{ text(link.label) }}</a>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
