<script setup lang="ts">
import { computed } from 'vue';

import { useLocale } from '../i18n';
import type { PersonProfile } from '../types';
import { toAsset } from '../utils/assets';

const props = defineProps<{
  person: PersonProfile;
  compact?: boolean;
}>();

const emit = defineEmits<{
  open: [person: PersonProfile];
}>();

const { text, locale } = useLocale();

const displayName = computed(() =>
  locale.value === 'zh'
    ? props.person.nameZh
    : `${props.person.nameZh} (${props.person.nameEn})`,
);

const avatarSrc = computed(() => toAsset(props.person.avatar));

const compactKeywords = computed(() => {
  if (!props.compact || !props.person.keywords?.length) {
    return '';
  }
  const preview = props.person.keywords.slice(0, 2).map((item) => text(item));
  return locale.value === 'zh' ? preview.join('、') : preview.join(' / ');
});
</script>

<template>
  <article class="person-card" :class="{ compact: compact }" @click="emit('open', person)">
    <img :src="avatarSrc" :alt="displayName" loading="lazy" />
    <div class="person-body">
      <h3>{{ displayName }}</h3>
      <p class="person-role">{{ text(person.role) }}</p>
      <p class="person-affiliation">{{ text(person.affiliation) }}</p>
      <p v-if="compactKeywords" class="person-direction">{{ compactKeywords }}</p>
      <p v-if="!compact" class="person-bio">{{ text(person.bio) }}</p>
      <p v-if="!compact && person.email" class="person-email">{{ person.email }}</p>
    </div>
  </article>
</template>
