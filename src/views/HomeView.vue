<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import LogoWall from '../components/LogoWall.vue';
import { useLocale } from '../i18n';
import { achievements } from '../data/achievements';
import { institutions } from '../data/institutions';
import { homeHighlights, projectDirections, projectMeta } from '../data/project';
import { teamStats } from '../data/team';
import { toAsset } from '../utils/assets';

const router = useRouter();
const { text } = useLocale();

const stats = computed(() => {
  const published = achievements.filter((item) => item.category === 'published').length;
  const submitted = achievements.filter((item) => item.category === 'submitted').length;
  return [
    {
      label: { zh: '项目负责人', en: 'Project Lead' },
      value: String(teamStats.leaderCount),
    },
    {
      label: { zh: '合作导师', en: 'Collaborative Mentors' },
      value: String(teamStats.mentorCount),
    },
    {
      label: { zh: '项目成员', en: 'Research Members' },
      value: String(teamStats.memberCount),
    },
    {
      label: { zh: '已发表/录用成果', en: 'Published/Accepted Results' },
      value: String(published),
    },
    {
      label: { zh: '在投成果', en: 'Submitted Papers' },
      value: String(submitted),
    },
  ];
});

const latestResults = computed(() =>
  [...achievements]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6),
);

const partnerInstitutions = computed(() => institutions);

const heroBackgroundLogos = [
  {
    src: toAsset('/assets/logos/bza.png'),
    alt: '北京中关村学院',
  },
  {
    src: toAsset('/assets/logos/zgci.png'),
    alt: '中关村人工智能研究院',
  },
];
</script>

<template>
  <section class="hero-section">
    <div class="hero-watermark" aria-hidden="true">
      <img
        v-for="logo in heroBackgroundLogos"
        :key="logo.alt"
        :src="logo.src"
        :alt="logo.alt"
        loading="lazy"
      />
    </div>
    <div class="container hero-grid">
      <div>
        <p class="eyebrow">{{ projectMeta.acronym }}</p>
        <h1>{{ text(projectMeta.fullName) }}</h1>
        <p class="hero-expanded">
          {{ projectMeta.acronym }} = {{ text(projectMeta.acronymExpansion) }}
        </p>
        <p class="hero-summary">{{ text(projectMeta.shortDescription) }}</p>
        <p class="hero-summary">{{ text(projectMeta.mission) }}</p>
        <div class="hero-actions">
          <button class="btn btn-primary" type="button" @click="router.push('/news')">
            {{ text({ zh: '查看成果', en: 'View Results' }) }}
          </button>
          <button class="btn" type="button" @click="router.push('/join')">
            {{ text({ zh: '加入我们', en: 'Join Us' }) }}
          </button>
        </div>
      </div>
      <div class="hero-panel">
        <h2>{{ text({ zh: '研究方向', en: 'Research Directions' }) }}</h2>
        <ul>
          <li v-for="direction in projectDirections" :key="direction.id">
            <h3>{{ text(direction.title) }}</h3>
            <p>{{ text(direction.summary) }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="section-title">{{ text({ zh: '研究与实践特色', en: 'Research Strengths' }) }}</h2>
      <div class="home-highlight-grid">
        <article v-for="item in homeHighlights" :key="item.zh" class="highlight-card">
          <p>{{ text(item) }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <h2 class="section-title">{{ text({ zh: '项目概览', en: 'Project Overview' }) }}</h2>
      <div class="metric-grid">
        <article v-for="item in stats" :key="item.label.zh" class="metric-card">
          <p class="metric-value">{{ item.value }}</p>
          <p>{{ text(item.label) }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head-row">
        <h2 class="section-title">{{ text({ zh: '最新动态与成果', en: 'Latest Updates and Results' }) }}</h2>
        <RouterLink to="/news" class="text-link">{{ text({ zh: '查看全部', en: 'View All' }) }}</RouterLink>
      </div>
      <div class="card-grid two-cols">
        <article v-for="item in latestResults" :key="item.id" class="card card-accent">
          <p class="muted">{{ item.date }} · {{ text(item.venue || { zh: '', en: '' }) }}</p>
          <h3>{{ text(item.title) }}</h3>
          <p v-if="item.authors" class="muted">{{ text(item.authors) }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <h2 class="section-title">{{ text({ zh: '合作机构', en: 'Partner Institutions' }) }}</h2>
      <p class="section-desc">
        {{ text({ zh: '涵盖合作导师所在机构及成员在读/联培院校。', en: 'Including mentor institutions and current joint-training universities of group members.' }) }}
      </p>
      <LogoWall :institutions="partnerInstitutions" />
    </div>
  </section>
</template>
