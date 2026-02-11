<script setup lang="ts">
import { computed, ref } from 'vue';

import PersonCard from '../components/PersonCard.vue';
import PersonModal from '../components/PersonModal.vue';
import { useLocale } from '../i18n';
import { leader, memberGroups, mentors } from '../data/team';
import type { PersonProfile } from '../types';

const { text } = useLocale();

const selectedPerson = ref<PersonProfile | null>(null);

const sortedMembers = computed(() =>
  memberGroups
    .flatMap((group) => group.members)
    .sort((a, b) => {
      const byCohort = (a.cohortYear ?? 0) - (b.cohortYear ?? 0);
      if (byCohort !== 0) {
        return byCohort;
      }
      return a.nameZh.localeCompare(b.nameZh, 'zh-Hans-CN');
    }),
);

const memberCount = computed(() => sortedMembers.value.length);

const teamSummary = computed(() => ({
  zh: `1 位负责人、${mentors.length} 位合作导师、${memberCount.value} 位项目成员`,
  en: `1 project lead, ${mentors.length} collaborative mentors, and ${memberCount.value} research members`,
}));

function openPerson(person: PersonProfile) {
  selectedPerson.value = person;
}
</script>

<template>
  <section class="section page-hero">
    <div class="container">
      <h1>{{ text({ zh: '团队介绍', en: 'Team' }) }}</h1>
      <p class="section-desc">
        {{ text(teamSummary) }}
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="section-title">{{ text({ zh: '项目负责人', en: 'Project Lead' }) }}</h2>
      <PersonCard :person="leader" @open="openPerson" />
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <h2 class="section-title">{{ text({ zh: '合作导师', en: 'Collaborative Mentors' }) }}</h2>
      <div class="card-grid two-cols team-mentor-grid">
        <PersonCard v-for="person in mentors" :key="person.id" :person="person" @open="openPerson" />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="section-title">{{ text({ zh: '项目组成员', en: 'Research Members' }) }}</h2>
      <p class="section-desc">
        {{ text({ zh: '按入学年级升序展示（2024级 → 2025级 → 2026级）。', en: 'Sorted by admission cohort in ascending order (2024 → 2025 → 2026).' }) }}
      </p>
      <div class="card-grid team-member-grid">
        <PersonCard
          v-for="member in sortedMembers"
          :key="member.id"
          :person="member"
          compact
          @open="openPerson"
        />
      </div>
    </div>
  </section>

  <PersonModal :person="selectedPerson" @close="selectedPerson = null" />
</template>
