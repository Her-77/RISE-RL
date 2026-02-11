import type { LocalizedText, RecruitmentDirection } from '../types';

export const recruitmentIntro: LocalizedText = {
  zh: '项目组长期面向直博生、硕转博和普博生开放招募。只要研究兴趣在“强化学习 + 大模型”交叉方向，并具备扎实的研究与工程能力，我们都欢迎交流。',
  en: 'We continuously recruit direct-PhD, master-to-PhD, and regular PhD candidates. If your research interests lie at the intersection of RL and large models with solid research and engineering skills, we welcome your application.',
};

export const recruitmentDirections: RecruitmentDirection[] = [
  {
    id: 'foundation',
    title: {
      zh: '强化学习基础理论与算法创新',
      en: 'RL Theory and Algorithmic Foundations',
    },
    summary: {
      zh: '围绕收敛性、泛化性与迁移性，研究高效策略优化与价值评估方法。',
      en: 'Efficient policy/value optimization with focus on convergence, generalization, and transferability.',
    },
    requirements: [
      {
        zh: '具备概率统计、优化、随机过程等数学基础。',
        en: 'Strong mathematical foundation in probability, optimization, and stochastic processes.',
      },
      {
        zh: '具备算法推导与严谨实验分析能力。',
        en: 'Ability in algorithm derivation and rigorous experimental analysis.',
      },
    ],
  },
  {
    id: 'llm-rl',
    title: {
      zh: '大模型应用驱动的大规模强化学习',
      en: 'LLM-Driven Large-Scale RL',
    },
    summary: {
      zh: '面向推理与对齐训练，研究统一策略优化框架与可扩展训练流程。',
      en: 'Unified policy optimization and scalable training pipelines for reasoning and alignment.',
    },
    requirements: [
      {
        zh: '熟悉强化学习基础（策略梯度、价值估计、探索机制等）。',
        en: 'Familiarity with RL fundamentals (policy gradients, value estimation, exploration).',
      },
      {
        zh: '有大模型训练/后训练实践经验或强烈兴趣（PyTorch、分布式优先）。',
        en: 'Experience or strong interest in LLM training/post-training (PyTorch/distributed preferred).',
      },
    ],
  },
  {
    id: 'agent-evolution',
    title: {
      zh: '智能体自进化与持续学习',
      en: 'Self-Evolving Agents and Continual Learning',
    },
    summary: {
      zh: '研究反思、记忆、数据合成与持续更新机制，提升长程任务表现。',
      en: 'Reflection, memory, synthetic data, and continual adaptation for stronger long-horizon performance.',
    },
    requirements: [
      {
        zh: '具备系统实现能力（训练流水线、评测框架、实验管理）。',
        en: 'Strong engineering skills in training pipelines, evaluation, and experiment management.',
      },
      {
        zh: '具备科研写作、问题拆解和跨方向协同能力。',
        en: 'Strong research writing, problem decomposition, and cross-topic collaboration ability.',
      },
    ],
  },
  {
    id: 'ai4science',
    title: {
      zh: 'AI4Science 与跨领域应用',
      en: 'AI4Science and Cross-Domain Applications',
    },
    summary: {
      zh: '覆盖科学发现、多模态推理，并持续推进 AI 解 PDE、流体力学、天气预测及可控核聚变相关研究。',
      en: 'Covers scientific discovery and multimodal reasoning, with ongoing work in AI for PDEs, fluid dynamics, weather forecasting, and controllable fusion.',
    },
    requirements: [
      {
        zh: '具备跨学科研究兴趣，能快速理解真实任务需求。',
        en: 'Strong interdisciplinary motivation and fast adaptation to real task requirements.',
      },
      {
        zh: '具备将算法落地到具体应用场景的执行能力。',
        en: 'Ability to deploy algorithms in practical cross-domain scenarios.',
      },
    ],
  },
];

export const recruitmentApplication = {
  eligibility: {
    zh: '招收类型：直博生、硕转博、普博（仅博士层级）。',
    en: 'Eligibility: direct-PhD, master-to-PhD, and regular PhD applicants only.',
  },
  email: 'yuewang@bza.edu.cn',
  submitInstruction: {
    zh: '请将个人简历（含研究经历、论文发表情况、代表项目）发送至上述邮箱。',
    en: 'Please send your CV (including research experience, publications, and representative projects) to the email above.',
  },
  subjectFormat: {
    zh: '邮件标题格式：姓名 + 报考方向（示例：张三 + 大模型强化学习后训练）',
    en: 'Email subject: Name + Applied Direction (e.g., Alice Zhang + LLM-Driven Large-Scale RL)',
  },
  process: [
    {
      zh: '简历初筛：匹配研究方向与基础能力。',
      en: 'CV screening: fit with research direction and fundamentals.',
    },
    {
      zh: '学术交流：围绕过往研究、论文理解与问题分析能力进行沟通。',
      en: 'Academic interview: discussion on prior work, paper understanding, and problem analysis.',
    },
    {
      zh: '综合评估：根据研究潜力、执行力与团队协作进行评估。',
      en: 'Comprehensive evaluation based on research potential, execution, and collaboration.',
    },
  ],
};
