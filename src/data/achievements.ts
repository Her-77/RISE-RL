import type { AchievementItem } from '../types';

export const achievements: AchievementItem[] = [
  {
    id: 'iclr-2026-rea-rl',
    category: 'published',
    status: 'accepted',
    date: '2026-01',
    title: {
      zh: 'REA-RL：面向高效大推理模型的反思感知在线强化学习',
      en: 'REA-RL: Reflection-Aware Online Reinforcement Learning for Efficient Large Reasoning Models',
    },
    authors: {
      zh: '邓贺烜等',
      en: 'Hexuan Deng et al.',
    },
    venue: {
      zh: 'ICLR 2026',
      en: 'ICLR 2026',
    },
  },
  {
    id: 'neurips-2025-upt',
    category: 'published',
    status: 'accepted',
    date: '2025-12',
    title: {
      zh: 'First SFT, Second RL, Third UPT：多模态大模型推理持续进化',
      en: 'First SFT, Second RL, Third UPT: Continual Improving Multi-Modal LLM Reasoning via Unsupervised Post-Training',
    },
    authors: { zh: '魏来等', en: 'Lai Wei et al.' },
    venue: { zh: 'NeurIPS 2025', en: 'NeurIPS 2025' },
  },
  {
    id: 'emnlp-2025-aquilt',
    category: 'published',
    status: 'accepted',
    date: '2025-10',
    title: {
      zh: 'AQuilt：低成本高相关的数据合成框架',
      en: 'AQuilt: Logic- and Self-Inspection-Driven Data Synthesis for Specialist LLMs',
    },
    authors: { zh: '邓贺烜等', en: 'Hexuan Deng et al.' },
    venue: { zh: 'EMNLP 2025 Main', en: 'EMNLP 2025 Main' },
  },
  {
    id: 'acl-2025-drpruning',
    category: 'published',
    status: 'accepted',
    date: '2025-08',
    title: {
      zh: 'DRPruning：基于分布鲁棒优化的大模型高效剪枝',
      en: 'DRPruning: Efficient Large Language Model Pruning through Distributionally Robust Optimization',
    },
    authors: { zh: '邓贺烜等', en: 'Hexuan Deng et al.' },
    venue: { zh: 'ACL 2025 Main', en: 'ACL 2025 Main' },
  },
  {
    id: 'cvpr-2026-lane',
    category: 'submitted',
    status: 'submitted',
    date: '2026-01',
    title: {
      zh: '多车视角选择与融合的离线地图车道线生成',
      en: 'Offline Map Lane Generation via Multi-Vehicle View Selection and Fusion',
    },
    authors: { zh: '但泽东等', en: 'Zedong Dan et al.' },
    venue: { zh: 'CVPR 2026 投稿', en: 'CVPR 2026 Submission' },
  },
  {
    id: 'kdd-2026-lingde',
    category: 'submitted',
    status: 'submitted',
    date: '2026-01',
    title: {
      zh: 'LingDE：大语言模型驱动的差分进化语言算子',
      en: 'LingDE: Linguistic Operators for Differential Evolution with Large Language Models',
    },
    authors: { zh: '冉清松等', en: 'Qingsong Ran et al.' },
    venue: { zh: 'KDD 2026 Cycle 2 投稿', en: 'KDD 2026 Cycle 2 Submission' },
  },
  {
    id: 'icml-2026-wmllm',
    category: 'submitted',
    status: 'submitted',
    date: '2026-01',
    title: {
      zh: 'WMLLM：统一隐式世界模型驱动的自进化智能体',
      en: 'WMLLM: Empowering Self-Evolving Agents with Unified Implicit World Models',
    },
    authors: { zh: '李仲正、冉清松等', en: 'Zhongzheng Li, Qingsong Ran et al.' },
    venue: { zh: 'ICML 2026 投稿', en: 'ICML 2026 Submission' },
  },
  {
    id: 'icml-2026-mcce',
    category: 'submitted',
    status: 'submitted',
    date: '2026-01',
    title: {
      zh: 'MCCE：多大模型协同共进化框架',
      en: 'MCCE: A Framework for Multi-LLM Collaborative Co-Evolution',
    },
    authors: { zh: '李仲正、冉清松等', en: 'Zhongzheng Li, Qingsong Ran et al.' },
    venue: { zh: 'ICML 2026 投稿', en: 'ICML 2026 Submission' },
    links: [
      {
        label: { zh: 'arXiv 论文', en: 'arXiv' },
        url: 'https://doi.org/10.48550/arXiv.2510.06270',
      },
    ],
  },
  {
    id: 'icml-2026-exllm',
    category: 'submitted',
    status: 'submitted',
    date: '2026-01',
    title: {
      zh: 'ExLLM：经验增强的大模型优化器（分子设计及更多场景）',
      en: 'ExLLM: Experience-Enhanced LLM Optimization for Molecular Design and Beyond',
    },
    authors: { zh: '冉清松等', en: 'Qingsong Ran et al.' },
    venue: { zh: 'ICML 2026 投稿', en: 'ICML 2026 Submission' },
    links: [
      {
        label: { zh: 'arXiv 论文', en: 'arXiv' },
        url: 'https://doi.org/10.48550/arXiv.2502.12845',
      },
    ],
  },
  {
    id: 'icml-2026-cocoreviewbench',
    category: 'submitted',
    status: 'submitted',
    date: '2026-01',
    title: {
      zh: 'CoCoReviewBench：面向 AI Reviewer 的完备性与正确性基准',
      en: 'CoCoReviewBench: A Completeness- and Correctness-Oriented Benchmark for AI Reviewers',
    },
    authors: { zh: '邓贺烜、李奕宸、胡瑞娜、黄德豪等', en: 'Hexuan Deng, Yichen Li, Ruina Hu, Dehao Huang et al.' },
    venue: { zh: 'ICML 2026 投稿', en: 'ICML 2026 Submission' },
  },
  {
    id: 'icml-2026-faithful-step-rl',
    category: 'submitted',
    status: 'submitted',
    date: '2026-01',
    title: {
      zh: 'Stop Rewarding Hallucinated Steps：面向小推理模型的忠实性步骤级强化学习',
      en: 'Stop Rewarding Hallucinated Steps: Faithfulness-Aware Step-Level RL for Small Reasoning Models',
    },
    authors: { zh: '邓贺烜等', en: 'Hexuan Deng et al.' },
    venue: { zh: 'ICML 2026 投稿', en: 'ICML 2026 Submission' },
  },
  {
    id: 'icml-2026-aepo',
    category: 'submitted',
    status: 'submitted',
    date: '2025-12',
    title: {
      zh: 'AEPO：突破强化学习探索瓶颈的任意控熵策略优化',
      en: 'AEPO: Arbitrary Entropy Policy Optimization Breaks the Exploration Bottleneck',
    },
    authors: { zh: '王晨、柏炯昊等', en: 'Chen Wang, Jionghao Bai et al.' },
    venue: { zh: 'ICML 投稿', en: 'ICML Submission' },
  },
  {
    id: 'icml-2026-dcpo',
    category: 'submitted',
    status: 'submitted',
    date: '2025-12',
    title: {
      zh: 'DCPO：分布中心策略优化的探索-利用统一框架',
      en: 'DCPO: Distribution-Centric Policy Optimization for Exploration-Exploitation Trade-off',
    },
    authors: { zh: '王晨、栗照淳、柏炯昊等', en: 'Chen Wang, Zhaochun Li, Jionghao Bai et al.' },
    venue: { zh: 'ICML 投稿', en: 'ICML Submission' },
  },
  {
    id: 'acl-2026-uec-rl',
    category: 'submitted',
    status: 'submitted',
    date: '2025-12',
    title: {
      zh: 'UEC-RL：统一熵控制的目标探索强化学习',
      en: 'UEC-RL: Targeted Exploration via Unified Entropy Control',
    },
    authors: { zh: '王晨等', en: 'Chen Wang et al.' },
    venue: { zh: 'ACL 投稿', en: 'ACL Submission' },
  },
  {
    id: 'icais-2025-conference-support',
    category: 'system',
    status: 'released',
    date: '2025-11',
    title: {
      zh: '协助举办 ICAIS 首届国际 AI 科学家大会',
      en: 'Supported the first ICAIS International AI Scientist Conference',
    },
    description: {
      zh: '项目组成员参与会议组织与会务支持。',
      en: 'Team members contributed to conference organization and operations.',
    },
  },
  {
    id: 'omniscientist-release',
    category: 'system',
    status: 'released',
    date: '2025-11',
    title: {
      zh: '科研智能体系统 OmniScientist 发布',
      en: 'Release of OmniScientist, a research-agent system',
    },
    description: {
      zh: '参与 AI Reviewer 框架设计、代码实现和系统联调。',
      en: 'Contributed to AI reviewer framework design, implementation, and end-to-end integration.',
    },
  },
  {
    id: 'kaiwu-2025-advanced',
    category: 'competition',
    status: 'awarded',
    date: '2025-09',
    title: {
      zh: '腾讯开悟全球公开赛（智能体决策算法-高级）',
      en: 'Tencent Kaiwu Global Competition (Advanced Agent Decision Algorithms)',
    },
    description: {
      zh: '冉念、汪锐、黄德豪、李仲正、冉清松：华北赛区二等奖。',
      en: 'Nian Ran, Rui Wang, Dehao Huang, Zhongzheng Li, Qingsong Ran: North China Regional 2nd Prize.',
    },
  },
  {
    id: 'kaiwu-2025-kernel',
    category: 'competition',
    status: 'awarded',
    date: '2025-11',
    title: {
      zh: '腾讯开悟全球公开赛（AI 芯片算子开发）',
      en: 'Tencent Kaiwu Global Competition (AI Chip Operator Development)',
    },
    description: {
      zh: '冉念、贾天翯：二等奖。',
      en: 'Nian Ran, Tianhe Jia: Second Prize.',
    },
  },
  {
    id: 'aic-2025-model-innovation',
    category: 'competition',
    status: 'awarded',
    date: '2025-12',
    title: {
      zh: 'AIC 2025 算法模型创新赛道',
      en: 'AIC 2025 Algorithm Model Innovation Track',
    },
    description: {
      zh: '汪锐：省二 Rank 3，国赛三等奖。',
      en: 'Rui Wang: Provincial 2nd (Rank 3), National 3rd Prize.',
    },
  },
  {
    id: 'aic-2025-software-innovation',
    category: 'competition',
    status: 'awarded',
    date: '2025-12',
    title: {
      zh: 'AIC 2025 智能软件创新赛道',
      en: 'AIC 2025 Intelligent Software Innovation Track',
    },
    description: {
      zh: '汪锐：省二 Rank 2，国赛一等奖。',
      en: 'Rui Wang: Provincial 2nd (Rank 2), National 1st Prize.',
    },
  },
  {
    id: 'aic-2025-offline-industrial-rl',
    category: 'competition',
    status: 'awarded',
    date: '2025-12',
    title: {
      zh: 'AIC 2025 离线工业强化学习赛道',
      en: 'AIC 2025 Offline Industrial RL Track',
    },
    description: {
      zh: '贾天翯：国赛一等奖。',
      en: 'Tianhe Jia: National 1st Prize.',
    },
  },
  {
    id: 'sinopec-2025',
    category: 'competition',
    status: 'awarded',
    date: '2025-10',
    title: {
      zh: '中国石化人工智能应用创新大赛（公开赛）',
      en: 'Sinopec AI Application Innovation Competition (Open Track)',
    },
    description: {
      zh: '冉念、贾天翯：二等奖。',
      en: 'Nian Ran, Tianhe Jia: Second Prize.',
    },
  },
  {
    id: 'nk2r-2025',
    category: 'competition',
    status: 'ongoing',
    date: '2025-12',
    title: {
      zh: 'NK2R 多肽药物设计赛',
      en: 'NK2R Peptide Drug Design Challenge',
    },
    description: {
      zh: '冉念、李仲正：比赛进行中。',
      en: 'Nian Ran and Zhongzheng Li: competition ongoing.',
    },
  },
];

export const categoryLabels = {
  published: {
    zh: '已发表 / 录用',
    en: 'Published / Accepted',
  },
  submitted: {
    zh: '在投 / 投稿',
    en: 'Submitted',
  },
  system: {
    zh: '系统与项目发布',
    en: 'System Releases',
  },
  competition: {
    zh: '竞赛与获奖',
    en: 'Competitions & Awards',
  },
};

export const statusLabels = {
  published: { zh: '已发表', en: 'Published' },
  accepted: { zh: '已录用', en: 'Accepted' },
  submitted: { zh: '在投', en: 'Submitted' },
  released: { zh: '已发布', en: 'Released' },
  awarded: { zh: '获奖', en: 'Awarded' },
  ongoing: { zh: '进行中', en: 'Ongoing' },
};
