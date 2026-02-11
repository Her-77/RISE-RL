<script setup lang="ts">
import { ref } from 'vue';

import { useLocale } from '../i18n';
import type { InstitutionItem } from '../types';
import { toAsset } from '../utils/assets';

defineProps<{
  institutions: InstitutionItem[];
}>();

const { text } = useLocale();
const brokenLogos = ref<Record<string, boolean>>({});

function markBroken(id: string) {
  brokenLogos.value[id] = true;
}
</script>

<template>
  <div class="logo-wall">
    <a
      v-for="institution in institutions"
      :key="institution.id"
      class="logo-card"
      :href="institution.website"
      target="_blank"
      rel="noreferrer"
    >
      <div class="logo-area" :class="{ 'logo-area-dark': institution.logoDark }">
        <img
          v-if="institution.logo && !brokenLogos[institution.id]"
          :src="toAsset(institution.logo)"
          :alt="text(institution.name)"
          loading="lazy"
          @error="markBroken(institution.id)"
        />
        <span v-else class="logo-fallback">{{ text(institution.name).slice(0, 6) }}</span>
      </div>
      <p>{{ text(institution.name) }}</p>
    </a>
  </div>
</template>
