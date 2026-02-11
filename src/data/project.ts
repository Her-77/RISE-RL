import type { LocalizedText, ProjectDirection } from '../types';

export const projectMeta = {
  acronym: 'RISE-RL',
  contactEmail: 'yuewang@bza.edu.cn',
  fullName: {
    zh: '大模型应用驱动下的大规模强化学习算法研究与实践',
    en: 'Research and Practice of Large-Scale Reinforcement Learning Driven by LLM Applications',
  } satisfies LocalizedText,
  acronymExpansion: {
    zh: 'Reasoning Intrinsic Self-Evolving Exploration',
    en: 'Reasoning Intrinsic Self-Evolving Exploration',
  } satisfies LocalizedText,
  shortDescription: {
    zh: '围绕大模型推理与对齐训练，推进可规模化、可复现、可解释的强化学习算法研究与工程落地。',
    en: 'We study scalable, reproducible, and interpretable reinforcement learning for reasoning and alignment in large models.',
  } satisfies LocalizedText,
  mission: {
    zh: '我们致力于连接强化学习基础理论、后训练算法创新与真实系统工程，打造面向下一代智能体的大规模强化学习研究平台。',
    en: 'Our mission is to bridge RL theory, post-training algorithms, and production-grade systems for next-generation intelligent agents.',
  } satisfies LocalizedText,
};

export const homeHighlights: LocalizedText[] = [
  {
    zh: '围绕“强化学习 + 大模型”主线，打通理论推导、算法设计与真实系统验证。',
    en: 'Built around RL + large models, connecting theory, algorithm design, and real-system validation.',
  },
  {
    zh: '依托“负责人-合作导师-成员”协同培养机制，持续产出论文、系统发布与竞赛成果。',
    en: 'A lead-mentor-member collaboration model continuously produces papers, system releases, and competition results.',
  },
  {
    zh: '坚持可复现、可验证的研究范式，强调从后训练算法到场景落地的闭环实践。',
    en: 'We emphasize reproducible and verifiable research, from post-training methods to deployment in practical scenarios.',
  },
];

export const projectDirections: ProjectDirection[] = [
  {
    id: 'foundation',
    title: {
      zh: '强化学习基础理论与算法创新',
      en: 'RL Theory and Algorithmic Foundations',
    },
    summary: {
      zh: '围绕收敛性、泛化性与迁移性，研究高效策略优化与价值评估方法。',
      en: 'We develop efficient policy/value optimization with guarantees on convergence, generalization, and transfer.',
    },
  },
  {
    id: 'llm-rl',
    title: {
      zh: '大模型应用驱动的大规模强化学习',
      en: 'LLM-Driven Large-Scale RL',
    },
    summary: {
      zh: '面向推理与对齐训练，构建统一策略优化框架与工程化训练流程。',
      en: 'We build unified policy optimization frameworks and practical pipelines for reasoning and alignment.',
    },
  },
  {
    id: 'agent-evolution',
    title: {
      zh: '智能体自进化与持续学习',
      en: 'Self-Evolving Agents and Continual Learning',
    },
    summary: {
      zh: '研究反思、记忆、数据合成与持续更新机制，提升长程任务表现。',
      en: 'We study reflection, memory, synthetic data, and continual adaptation for long-horizon tasks.',
    },
  },
  {
    id: 'ai4science',
    title: {
      zh: 'AI4Science 与跨领域应用',
      en: 'AI4Science and Cross-Domain Applications',
    },
    summary: {
      zh: '覆盖科学发现与多模态推理，并持续推进 AI 解 PDE、流体力学、天气预测及可控核聚变相关研究。',
      en: 'Covers scientific discovery and multimodal reasoning, with ongoing research in AI for PDEs, fluid dynamics, weather forecasting, and controllable fusion.',
    },
  },
];
