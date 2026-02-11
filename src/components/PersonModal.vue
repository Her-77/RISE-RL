<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, watch } from 'vue';

import { useLocale } from '../i18n';
import type { PersonProfile } from '../types';
import { toAsset } from '../utils/assets';
import { memberFullProfiles } from '../data/memberFullProfiles';
import { renderProfileMarkdown } from '../utils/markdown';

const props = defineProps<{
  person: PersonProfile | null;
}>();

const emit = defineEmits<{
  close: [];
}>();

const { locale, text } = useLocale();

const displayName = computed(() => {
  if (!props.person) {
    return '';
  }
  return locale.value === 'zh'
    ? props.person.nameZh
    : `${props.person.nameZh} (${props.person.nameEn})`;
});

const avatarSrc = computed(() => (props.person ? toAsset(props.person.avatar) : ''));
const memberFullProfile = computed(() => {
  if (!props.person) {
    return null;
  }
  return memberFullProfiles[props.person.nameZh] ?? null;
});
const fullProfileHtml = computed(() =>
  memberFullProfile.value ? renderProfileMarkdown(text(memberFullProfile.value)) : '',
);

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    emit('close');
  }
}

watch(
  () => props.person,
  (next) => {
    if (typeof document === 'undefined') {
      return;
    }
    document.body.style.overflow = next ? 'hidden' : '';
  },
);

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <Teleport to="body">
    <div v-if="person" class="modal-mask" @click.self="emit('close')">
      <article class="modal-panel" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" @click="emit('close')">×</button>
        <div class="modal-header">
          <img :src="avatarSrc" :alt="displayName" loading="lazy" />
          <div>
            <h3>{{ displayName }}</h3>
            <p>{{ text(person.role) }}</p>
            <p>{{ text(person.affiliation) }}</p>
            <p v-if="person.participation" class="pill">{{ text(person.participation) }}</p>
            <p v-if="person.email">
              {{ text({ zh: '联系方式：', en: 'Contact: ' }) }}
              <a :href="`mailto:${person.email}`">{{ person.email }}</a>
            </p>
          </div>
        </div>

        <section v-if="memberFullProfile">
          <div class="profile-markdown" v-html="fullProfileHtml"></div>
        </section>

        <template v-else>
          <section>
            <h4>{{ text({ zh: '简介', en: 'Profile' }) }}</h4>
            <p>{{ text(person.bio) }}</p>
          </section>

          <section v-if="person.keywords?.length">
            <h4>{{ text({ zh: '关键词', en: 'Keywords' }) }}</h4>
            <div class="tag-row">
              <span v-for="keyword in person.keywords" :key="keyword.zh" class="tag">{{ text(keyword) }}</span>
            </div>
          </section>

          <section v-if="person.education?.length">
            <h4>{{ text({ zh: '教育背景', en: 'Education' }) }}</h4>
            <ul>
              <li v-for="item in person.education" :key="item.zh">{{ text(item) }}</li>
            </ul>
          </section>

          <section v-if="person.experience?.length">
            <h4>{{ text({ zh: '科研/工作经历', en: 'Experience' }) }}</h4>
            <ul>
              <li v-for="item in person.experience" :key="item.zh">{{ text(item) }}</li>
            </ul>
          </section>

          <section v-if="person.research?.length">
            <h4>{{ text({ zh: '研究方向', en: 'Research Focus' }) }}</h4>
            <ul>
              <li v-for="item in person.research" :key="item.zh">{{ text(item) }}</li>
            </ul>
          </section>

          <section v-if="person.highlights?.length">
            <h4>{{ text({ zh: '代表成果与亮点', en: 'Selected Highlights' }) }}</h4>
            <ul>
              <li v-for="item in person.highlights" :key="item.zh">{{ text(item) }}</li>
            </ul>
          </section>

          <section v-if="person.links?.length">
            <h4>{{ text({ zh: '相关链接', en: 'Links' }) }}</h4>
            <ul>
              <li v-for="link in person.links" :key="link.url">
                <a :href="link.url" target="_blank" rel="noreferrer">{{ text(link.label) }}</a>
              </li>
            </ul>
          </section>
        </template>
      </article>
    </div>
  </Teleport>
</template>
