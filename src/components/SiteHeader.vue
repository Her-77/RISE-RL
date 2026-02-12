<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useLocale } from '../i18n';
import type { LocalizedText } from '../types';
import { toAsset } from '../utils/assets';

interface NavLink {
  path: string;
  label: LocalizedText;
}

const route = useRoute();
const router = useRouter();
const { locale, setLocale, text } = useLocale();
const mobileOpen = ref(false);

const navLinks: NavLink[] = [
  {
    path: '/',
    label: {
      zh: '首页',
      en: 'Home',
    },
  },
  {
    path: '/team',
    label: {
      zh: '团队介绍',
      en: 'Team',
    },
  },
  {
    path: '/news',
    label: {
      zh: '动态与成果',
      en: 'News & Results',
    },
  },
  {
    path: '/join',
    label: {
      zh: '加入我们',
      en: 'Join Us',
    },
  },
];

const brandTitle = computed(() =>
  locale.value === 'zh' ? 'RISE-RL 项目组' : 'RISE-RL Research Group',
);

const brandSubtitle = computed(() => 'Reasoning, Intrinsic, Self-Evolving, Exploration');

const headerLogos = [
  {
    src: toAsset('/assets/logos/bza.png'),
    alt: '北京中关村学院',
    link: 'https://www.bjzgca.edu.cn/',
    dark: false,
  },
  {
    src: toAsset('/assets/logos/zgci.png'),
    alt: '中关村人工智能研究院',
    link: 'https://www.zgci.ac.cn/',
    dark: true,
  },
];

watch(
  () => route.path,
  () => {
    mobileOpen.value = false;
  },
);

function navigate(path: string) {
  router.push(path);
}
</script>

<template>
  <header class="site-header">
    <div class="container nav-wrap">
      <div class="header-logo-group">
        <a
          v-for="item in headerLogos"
          :key="item.alt"
          class="header-logo"
          :class="{ dark: item.dark }"
          :href="item.link"
          target="_blank"
          rel="noreferrer"
          :title="item.alt"
        >
          <img :src="item.src" :alt="item.alt" loading="lazy" />
        </a>
      </div>
      <button class="brand" type="button" @click="navigate('/')">
        <span class="brand-mark">{{ brandTitle }}</span>
        <span class="brand-full">{{ brandSubtitle }}</span>
      </button>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="mobileOpen"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="sr-only">Toggle Navigation</span>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="site-nav" :class="{ open: mobileOpen }">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          :class="{ active: route.path === link.path }"
        >
          {{ text(link.label) }}
        </RouterLink>
      </nav>

      <div class="lang-switch">
        <button
          type="button"
          class="lang-btn"
          :class="{ active: locale === 'zh' }"
          @click="setLocale('zh')"
        >
          中文
        </button>
        <button
          type="button"
          class="lang-btn"
          :class="{ active: locale === 'en' }"
          @click="setLocale('en')"
        >
          EN
        </button>
      </div>
    </div>
  </header>
</template>
