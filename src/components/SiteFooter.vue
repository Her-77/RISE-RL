<script setup lang="ts">
import { useLocale } from '../i18n';
import { projectMeta } from '../data/project';

const { text } = useLocale();

const year = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <h3>{{ projectMeta.acronym }}</h3>
        <p>{{ text(projectMeta.shortDescription) }}</p>
      </div>
      <div>
        <h4>{{ text({ zh: '联系', en: 'Contact' }) }}</h4>
        <p>{{ text({ zh: '项目负责人邮箱：', en: 'Lead email: ' }) }}<a :href="`mailto:${projectMeta.contactEmail}`">{{ projectMeta.contactEmail }}</a></p>
      </div>
      <div>
        <h4>{{ text({ zh: '地址', en: 'Address' }) }}</h4>
        <p>
          {{
            text({
              zh: '北京市海淀区大牛房二环路17号院海淀信息科技园C5栋',
              en: 'Building C5, Haidian Information Technology Park, Courtyard No. 17, DaniuFang 2nd Ring Road, Haidian District, Beijing',
            })
          }}
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <small>
          © {{ year }} RISE-RL. {{ text({ zh: '保留所有权利。', en: 'All rights reserved.' }) }}
        </small>
      </div>
    </div>
  </footer>
</template>
