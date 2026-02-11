<script setup lang="ts">
import { useLocale } from '../i18n';
import {
  recruitmentApplication,
  recruitmentDirections,
  recruitmentIntro,
} from '../data/recruitment';

const { text } = useLocale();
</script>

<template>
  <section class="section page-hero">
    <div class="container">
      <h1>{{ text({ zh: '加入我们', en: 'Join Us' }) }}</h1>
      <p class="section-desc">{{ text(recruitmentIntro) }}</p>
      <p class="section-desc emphasis">{{ text(recruitmentApplication.eligibility) }}</p>
      <a class="btn btn-primary cta-btn" :href="`mailto:${recruitmentApplication.email}`">
        {{ text({ zh: '发送申请邮件', en: 'Send Application Email' }) }}
      </a>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="section-title">{{ text({ zh: '研究方向与招收要求', en: 'Research Tracks and Requirements' }) }}</h2>
      <div class="card-grid two-cols">
        <article v-for="direction in recruitmentDirections" :key="direction.id" class="card">
          <h3>{{ text(direction.title) }}</h3>
          <p>{{ text(direction.summary) }}</p>
          <ul>
            <li v-for="req in direction.requirements" :key="req.zh">{{ text(req) }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <h2 class="section-title">{{ text({ zh: '申请方式', en: 'Application' }) }}</h2>
      <div class="card-grid two-cols">
        <article class="card">
          <h3>{{ text({ zh: '联系方式', en: 'Contact' }) }}</h3>
          <p>
            {{ text({ zh: '项目负责人邮箱：', en: 'Lead Email: ' }) }}
            <a :href="`mailto:${recruitmentApplication.email}`">{{ recruitmentApplication.email }}</a>
          </p>
          <p>{{ text(recruitmentApplication.submitInstruction) }}</p>
          <p><strong>{{ text(recruitmentApplication.subjectFormat) }}</strong></p>
        </article>

        <article class="card">
          <h3>{{ text({ zh: '流程说明', en: 'Selection Process' }) }}</h3>
          <ol>
            <li v-for="step in recruitmentApplication.process" :key="step.zh">
              {{ text(step) }}
            </li>
          </ol>
        </article>
      </div>
    </div>
  </section>
</template>
