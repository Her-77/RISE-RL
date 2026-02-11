import type { MemberGroup, PersonProfile } from '../types';

export const leader: PersonProfile = {
  id: 'yue-wang',
  nameZh: '汪跃',
  nameEn: 'Yue Wang',
  role: {
    zh: '项目负责人',
    en: 'Project Lead',
  },
  affiliation: {
    zh: '北京中关村学院｜研究员、助理教授',
    en: 'Beijing Zhongguancun Academy | Researcher, Assistant Professor',
  },
  avatar: '/assets/avatars/leader-yue-wang.png',
  email: 'yuewang@bza.edu.cn',
  homepage: 'https://www.bjzgca.edu.cn/teacher/4b6e5ed12ce4492da61c808b9d48a44a',
  bio: {
    zh: '研究聚焦强化学习算法的有效性与效率，以大模型应用为牵引推进大规模强化学习算法研究与工程实践。',
    en: 'His research focuses on effective and efficient reinforcement learning, with LLM-driven large-scale RL research and engineering.',
  },
  keywords: [
    { zh: '策略优化与价值评估', en: 'Policy optimization and value estimation' },
    { zh: '大模型对齐与后训练', en: 'LLM alignment and post-training' },
    { zh: '科学智能与神经 PDE', en: 'AI4Science and neural PDEs' },
  ],
  education: [
    {
      zh: '北京交通大学 信息与计算科学 本科（2011–2015）',
      en: 'B.Sc. in Information and Computing Science, Beijing Jiaotong University (2011–2015)',
    },
    {
      zh: '北京交通大学 概率论与数理统计 博士（2015–2020）',
      en: 'Ph.D. in Probability and Mathematical Statistics, Beijing Jiaotong University (2015–2020)',
    },
  ],
  experience: [
    {
      zh: '微软亚洲研究院研究员（2020–2022）；科学智能中心高级研究员（2022–2025）',
      en: 'Researcher at Microsoft Research Asia (2020–2022); Senior Researcher in AI4Science (2022–2025)',
    },
    {
      zh: '北京新烛时代科技有限公司 联合创始人、CTO（2025–至今）',
      en: 'Co-founder and CTO of New Torch Era Technology (2025–present)',
    },
  ],
  highlights: [
    {
      zh: 'RLChina 2025 Workshop 报告：《从 PPO 到 DPO：统一策略优化框架》',
      en: 'RLChina 2025 Workshop talk: From PPO to DPO with a unified policy optimization view.',
    },
    {
      zh: '代表论文发表于 ICLR、NeurIPS、ICML、TPAMI、AAAI 等。',
      en: 'Selected papers published in ICLR, NeurIPS, ICML, TPAMI, and AAAI.',
    },
  ],
  links: [
    {
      label: {
        zh: '学院主页',
        en: 'Faculty Profile',
      },
      url: 'https://www.bjzgca.edu.cn/teacher/4b6e5ed12ce4492da61c808b9d48a44a',
    },
    {
      label: {
        zh: 'RLChina 2025 Workshop',
        en: 'RLChina 2025 Workshop',
      },
      url: 'http://rlchina.org/rlchina_2025/Workshop.html',
    },
  ],
};

export const mentors: PersonProfile[] = [
  {
    id: 'xiaoyuan-zhang',
    nameZh: '张霄远',
    nameEn: 'Xiaoyuan Zhang',
    role: { zh: '合作导师', en: 'Collaborative Mentor' },
    participation: {
      zh: '日常指导',
      en: 'Daily Supervision',
    },
    affiliation: {
      zh: '北京中关村学院 导师',
      en: 'Mentor at Beijing Zhongguancun Academy',
    },
    avatar: '/assets/avatars/mentor-xiaoyuan-zhang.png',
    bio: {
      zh: '长期从事多目标优化理论与算法研究，持续参与课题推进与学生指导。',
      en: 'Works on multi-objective optimization theory and algorithm design with continuous student supervision.',
    },
    research: [
      {
        zh: '多目标优化理论与算法',
        en: 'Multi-objective optimization theory and algorithms',
      },
      {
        zh: '软件系统设计与多目标对齐',
        en: 'Software systems and multi-objective alignment',
      },
    ],
    links: [
      {
        label: { zh: '教师主页', en: 'Faculty Page' },
        url: 'https://www.bjzgca.edu.cn/teacher/e5fe81c85189437089edf1c06f010080',
      },
    ],
  },
  {
    id: 'mingyang-yi',
    nameZh: '易鸣洋',
    nameEn: 'Mingyang Yi',
    role: { zh: '合作导师', en: 'Collaborative Mentor' },
    participation: { zh: '日常指导', en: 'Daily Supervision' },
    affiliation: {
      zh: '中国人民大学 信息学院 讲师',
      en: 'Lecturer, School of Information, Renmin University of China',
    },
    avatar: '/assets/avatars/mentor-mingyang-yi.jpg',
    bio: {
      zh: '研究生成式 AI 与大模型理论、算法与应用，具有学术与产业交叉背景。',
      en: 'Studies theory, algorithms, and applications of generative AI and large models.',
    },
    links: [
      {
        label: { zh: '学院主页', en: 'Faculty Page' },
        url: 'https://info.ruc.edu.cn/jsky/szdw/ajxjgcx/jsjkxyjsx1/js3/0f48e176163240c787c01dd85d4cde40.htm',
      },
      {
        label: { zh: '个人主页', en: 'Personal Website' },
        url: 'https://mingyangyi.github.io/',
      },
    ],
    research: [
      { zh: '生成式 AI 与大模型', en: 'Generative AI and large models' },
      { zh: '理论与应用结合', en: 'Theory-practice integration' },
    ],
  },
  {
    id: 'yong-li',
    nameZh: '李勇',
    nameEn: 'Yong Li',
    role: { zh: '合作导师', en: 'Collaborative Mentor' },
    participation: { zh: '联合培养 / 学术合作', en: 'Joint Training / Academic Collaboration' },
    affiliation: {
      zh: '清华大学电子工程系 长聘教授、博士生导师',
      en: 'Tenured Professor, Department of Electronic Engineering, Tsinghua University',
    },
    avatar: '/assets/avatars/mentor-yong-li.jpg',
    bio: {
      zh: '长期从事社会计算、复杂系统、数据科学与智能研究，承担国家级科研项目。',
      en: 'Works on social computing, complex systems, and data intelligence with national-level projects.',
    },
    links: [
      {
        label: { zh: '清华主页', en: 'Tsinghua Homepage' },
        url: 'https://web.ee.tsinghua.edu.cn/liyong/zh_CN/index.htm',
      },
    ],
  },
  {
    id: 'chao-yu',
    nameZh: '于超',
    nameEn: 'Chao Yu',
    role: { zh: '合作导师', en: 'Collaborative Mentor' },
    participation: { zh: '联合培养 / 学术合作', en: 'Joint Training / Academic Collaboration' },
    affiliation: {
      zh: '清华大学深圳国际研究生院 助理教授',
      en: 'Assistant Professor, Tsinghua Shenzhen International Graduate School',
    },
    avatar: '/assets/avatars/mentor-chao-yu.jpg',
    bio: {
      zh: '研究基于强化学习的决策智能，覆盖多智能体、泛化与目标对齐等方向。',
      en: 'Researches RL-based decision intelligence in multi-agent learning, generalization, and alignment.',
    },
    links: [
      {
        label: { zh: '实验室页面', en: 'Lab Page' },
        url: 'https://nicsefc.ee.tsinghua.edu.cn/people/ChaoYu',
      },
    ],
  },
  {
    id: 'weiran-huang',
    nameZh: '黄维然',
    nameEn: 'Weiran Huang',
    role: { zh: '合作导师', en: 'Collaborative Mentor' },
    participation: { zh: '联合培养 / 学术合作', en: 'Joint Training / Academic Collaboration' },
    affiliation: {
      zh: '上海交通大学计算机学院 长聘教轨副教授、博士生导师',
      en: 'Tenure-track Associate Professor, School of CS, Shanghai Jiao Tong University',
    },
    avatar: '/assets/avatars/mentor-weiran-huang.jpg',
    bio: {
      zh: '聚焦大模型高效微调与持续学习，在顶级会议持续发表成果。',
      en: 'Focuses on efficient fine-tuning and continual learning for large models.',
    },
    links: [
      {
        label: { zh: '学院主页', en: 'Faculty Page' },
        url: 'https://www.cs.sjtu.edu.cn/jiaoshiml/huangweiran.html',
      },
      {
        label: { zh: '个人主页', en: 'Personal Website' },
        url: 'https://mifa.sjtu.edu.cn/~weiranhuang/',
      },
    ],
  },
  {
    id: 'shisheng-cui',
    nameZh: '崔世晟',
    nameEn: 'Shisheng Cui',
    role: { zh: '合作导师', en: 'Collaborative Mentor' },
    participation: { zh: '联合培养 / 学术合作', en: 'Joint Training / Academic Collaboration' },
    affiliation: {
      zh: '北京理工大学自动化学院 教授、博士生导师',
      en: 'Professor, School of Automation, Beijing Institute of Technology',
    },
    avatar: '/assets/avatars/mentor-shisheng-cui.png',
    bio: {
      zh: '研究优化与博弈理论、AI 基础理论、无人系统决策与规划。',
      en: 'Works on optimization/game theory, AI foundations, and autonomous system planning.',
    },
    links: [
      {
        label: { zh: '学院主页', en: 'Faculty Page' },
        url: 'https://ac.bit.edu.cn/szdw/jsml/kzllykzgcyjs1/128b67dca01f4298ba99f38f9b9a4e37.htm',
      },
    ],
  },
  {
    id: 'lijun-wu',
    nameZh: '吴郦军',
    nameEn: 'Lijun Wu',
    role: { zh: '合作导师', en: 'Collaborative Mentor' },
    participation: { zh: '联合培养 / 学术合作', en: 'Joint Training / Academic Collaboration' },
    affiliation: {
      zh: '上海人工智能实验室',
      en: 'Shanghai AI Laboratory',
    },
    avatar: '/assets/avatars/mentor-lijun-wu.png',
    bio: {
      zh: '研究兴趣覆盖 LLMs/MLLMs、SFT/RL 以及 AI4Science。',
      en: 'Research interests include LLMs/MLLMs, SFT/RL, and AI4Science.',
    },
    links: [
      {
        label: { zh: '个人主页', en: 'Personal Website' },
        url: 'https://apeterswu.github.io/',
      },
      {
        label: { zh: '实验室信息', en: 'Lab News' },
        url: 'https://www.shlab.org.cn/news/5444225',
      },
    ],
  },
];

export const memberGroups: MemberGroup[] = [
  {
    id: 'latent-reasoning',
    title: {
      zh: '大模型推理与隐空间思考',
      en: 'Latent-Space Reasoning in LLMs',
    },
    members: [
      {
        id: 'zedong-dan',
        nameZh: '但泽东',
        nameEn: 'Zedong Dan',
        role: { zh: '2024级博士生', en: 'PhD Student (Cohort 2024)' },
        cohortYear: 2024,
        affiliation: {
          zh: '中山大学 × 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, Sun Yat-sen University × BZA',
        },
        avatar: '/assets/avatars/member-zedong-dan.jpeg',
        email: 's-dzd24@bza.edu.cn',
        bio: {
          zh: '关注大模型隐空间推理与高效并行思考机制。',
          en: 'Focuses on latent-space reasoning and efficient parallel thinking in LLMs.',
        },
        keywords: [
          { zh: '隐空间推理', en: 'Latent-space reasoning' },
          { zh: 'Soft thinking', en: 'Soft thinking' },
          { zh: '强化学习推理优化', en: 'RL-based reasoning optimization' },
        ],
        education: [
          {
            zh: '中山大学 计算机科学与技术 硕博连读（2022.09–至今）',
            en: 'MS-PhD track in Computer Science, Sun Yat-sen University (2022.09–present)',
          },
        ],
        experience: [
          {
            zh: '百度实习：多车视角选择与融合离线地图车道线生成，mAP 提升超过 10 个百分点。',
            en: 'Baidu internship on multi-vehicle view selection/fusion for offline lane generation, with >10 point mAP gain.',
          },
        ],
        highlights: [
          {
            zh: '相关成果投稿 CVPR 2026。',
            en: 'Related work submitted to CVPR 2026.',
          },
        ],
      },
    ],
  },
  {
    id: 'rl-uncertainty',
    title: {
      zh: '强化学习不确定性与可靠性',
      en: 'Uncertainty and Reliability in RL',
    },
    members: [
      {
        id: 'yuchen-zhang',
        nameZh: '张宇辰',
        nameEn: 'Yuchen Zhang',
        role: { zh: '2024级博士生', en: 'PhD Student (Cohort 2024)' },
        cohortYear: 2024,
        affiliation: {
          zh: '华东师范大学 × 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, East China Normal University × BZA',
        },
        avatar: '/assets/avatars/member-yuchen-zhang.jpeg',
        email: 's-zhangyc24@bza.edu.cn',
        bio: {
          zh: '研究不确定性环境下强化学习的鲁棒性，并探索 Q 值引导的大模型训练。',
          en: 'Studies robust RL under uncertainty and Q-value guided training for large models.',
        },
        keywords: [
          { zh: '强化学习不确定性', en: 'RL uncertainty' },
          { zh: 'Q值建模', en: 'Q-value modeling' },
        ],
        research: [
          {
            zh: 'Conformal Prediction 在强化学习中的应用',
            en: 'Conformal prediction for reinforcement learning',
          },
          {
            zh: '显式 Q 值建模与连续梯度引导解码',
            en: 'Explicit Q modeling and gradient-guided decoding',
          },
        ],
      },
    ],
  },
  {
    id: 'llm-post-training',
    title: {
      zh: '大模型强化学习与后训练',
      en: 'LLM RL and Post-Training',
    },
    members: [
      {
        id: 'jionghao-bai',
        nameZh: '柏炯昊',
        nameEn: 'Jionghao Bai',
        role: { zh: '2024级博士生', en: 'PhD Student (Cohort 2024)' },
        cohortYear: 2024,
        affiliation: {
          zh: '浙江大学 × 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, Zhejiang University × BZA',
        },
        avatar: '/assets/avatars/member-jionghao-bai.jpeg',
        email: 's-bjh24@bza.edu.cn',
        bio: {
          zh: '专注大模型强化学习后训练算法。',
          en: 'Focuses on RL post-training algorithms for large models.',
        },
        keywords: [
          { zh: '大模型后训练', en: 'LLM post-training' },
          { zh: '策略优化', en: 'Policy optimization' },
        ],
        highlights: [
          {
            zh: 'ICML 投稿：AEPO（任意控熵策略优化）',
            en: 'ICML submission: AEPO for arbitrary entropy control.',
          },
          {
            zh: 'ICML 投稿：DCPO（分布中心策略优化）',
            en: 'ICML submission: DCPO for distribution-centric policy optimization.',
          },
        ],
      },
      {
        id: 'zhaochun-li',
        nameZh: '栗照淳',
        nameEn: 'Zhaochun Li',
        role: { zh: '2024级博士生', en: 'PhD Student (Cohort 2024)' },
        cohortYear: 2024,
        affiliation: {
          zh: '北京理工大学 × 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, BIT × BZA',
        },
        avatar: '/assets/avatars/member-zhaochun-li.jpeg',
        email: 's-lzc24@bza.edu.cn',
        bio: {
          zh: '关注 AI 基础理论与 RLHF 泛化分析。',
          en: 'Works on AI fundamentals and theoretical generalization of RLHF.',
        },
        keywords: [
          { zh: 'RL理论分析', en: 'RL theoretical analysis' },
          { zh: '后训练泛化', en: 'Post-training generalization' },
        ],
        highlights: [
          {
            zh: 'ICML 投稿：DCPO；RLHF 泛化性理论分析工作。',
            en: 'ICML submission on DCPO and theoretical work on RLHF generalization.',
          },
        ],
      },
      {
        id: 'chen-wang',
        nameZh: '王晨',
        nameEn: 'Chen Wang',
        role: { zh: '2025级博士生', en: 'PhD Student (Cohort 2025)' },
        cohortYear: 2025,
        affiliation: {
          zh: '南开大学 × 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, Nankai University × BZA',
        },
        avatar: '/assets/avatars/member-chen-wang.jpeg',
        email: 's-wc25@bza.edu.cn',
        homepage: 'https://github.com/597358816',
        bio: {
          zh: '聚焦大模型强化学习后训练与探索控制。',
          en: 'Focuses on post-training and exploration control for LLM RL.',
        },
        keywords: [
          { zh: '大模型强化学习', en: 'LLM reinforcement learning' },
          { zh: '熵控制探索', en: 'Entropy-controlled exploration' },
        ],
        highlights: [
          {
            zh: 'ACL 投稿：UEC-RL，统一熵控制强化学习后训练框架。',
            en: 'ACL submission: UEC-RL, a unified entropy control framework.',
          },
          {
            zh: 'NeurIPS 2025：UPT 持续进化多模态推理。',
            en: 'NeurIPS 2025: continual multimodal reasoning via UPT.',
          },
        ],
      },
      {
        id: 'lai-wei',
        nameZh: '魏来',
        nameEn: 'Lai Wei',
        role: { zh: '2024级博士生', en: 'PhD Student (Cohort 2024)' },
        cohortYear: 2024,
        affiliation: {
          zh: '上海交通大学 × 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, SJTU × BZA',
        },
        avatar: '/assets/avatars/member-lai-wei.jpeg',
        email: 's-wl24@bza.edu.cn',
        homepage: 'https://waltonfuture.github.io/',
        bio: {
          zh: '研究持续强化学习驱动的大语言模型与多模态大模型后训练。',
          en: 'Studies continual RL for post-training LLMs and multimodal models.',
        },
        keywords: [
          { zh: '持续强化学习', en: 'Continual reinforcement learning' },
          { zh: '多模态后训练', en: 'Multimodal post-training' },
        ],
        highlights: [
          {
            zh: 'NeurIPS 2025 论文：First SFT, Second RL, Third UPT。',
            en: 'NeurIPS 2025 paper: First SFT, Second RL, Third UPT.',
          },
          {
            zh: '担任 NeurIPS/ICLR/ICML/CVPR 审稿人。',
            en: 'Serves as reviewer for NeurIPS/ICLR/ICML/CVPR.',
          },
        ],
      },
    ],
  },
  {
    id: 'fine-tuning-operator',
    title: {
      zh: '大模型微调与推理 / 算子优化',
      en: 'LLM Fine-Tuning, Inference, and Operator Optimization',
    },
    members: [
      {
        id: 'tianhe-jia',
        nameZh: '贾天翯',
        nameEn: 'Tianhe Jia',
        role: { zh: '2025级博士生', en: 'PhD Student (Cohort 2025)' },
        cohortYear: 2025,
        affiliation: {
          zh: '中国科学院大学 × 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, UCAS × BZA',
        },
        avatar: '/assets/avatars/member-tianhe-jia.jpeg',
        email: 's-jth25@bza.edu.cn',
        bio: {
          zh: '研究大模型与进化算法结合及 GPU 算子优化。',
          en: 'Works on LLM + evolutionary algorithms and GPU operator optimization.',
        },
        keywords: [
          { zh: '大模型进化算法', en: 'LLM evolutionary methods' },
          { zh: '算子优化', en: 'Operator optimization' },
        ],
        highlights: [
          {
            zh: 'AIC 2025 离线工业强化学习国赛一等奖。',
            en: 'AIC 2025 national first prize in offline industrial RL track.',
          },
          {
            zh: '参与 MLX 版《动手学深度学习》中文项目。',
            en: 'Contributor to the MLX-based Chinese D2L project.',
          },
        ],
      },
      {
        id: 'pengfei-fan',
        nameZh: '范鹏飞',
        nameEn: 'Pengfei Fan',
        role: { zh: '2026级博士生（拟）', en: 'Prospective PhD Student (Cohort 2026)' },
        cohortYear: 2026,
        affiliation: {
          zh: '浙江大学 × 北京中关村学院 联培博士生（拟）',
          en: 'Prospective Joint PhD Student, ZJU × BZA',
        },
        avatar: '/assets/avatars/member-pengfei-fan.jpeg',
        email: '3220104149@zju.edu.cn',
        bio: {
          zh: '关注大模型推理优化与 CUDA 内核级稀疏算子优化。',
          en: 'Studies inference-time optimization for LLMs and sparse CUDA kernels.',
        },
        keywords: [
          { zh: '推理时优化', en: 'Inference-time optimization' },
          { zh: 'CUDA算子稀疏优化', en: 'Sparse CUDA operator optimization' },
        ],
        research: [
          {
            zh: '基于 RL 反馈的微调与推理时优化',
            en: 'RL-feedback fine-tuning and inference-time optimization',
          },
          {
            zh: '长序列计算场景下的稀疏算子设计',
            en: 'Sparse operator design for long-context computation',
          },
        ],
      },
      {
        id: 'yining-zhang',
        nameZh: '张益宁',
        nameEn: 'Yining Zhang',
        role: { zh: '2024级博士生', en: 'PhD Student (Cohort 2024)' },
        cohortYear: 2024,
        affiliation: {
          zh: '中科院自动化所 × 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, CASIA × BZA',
        },
        avatar: '/assets/avatars/member-yining-zhang.jpeg',
        email: 's-zyn24@bza.edu.cn',
        homepage: 'https://yiningzhang2002.github.io/',
        bio: {
          zh: '研究 training-free 条件下记忆机制驱动智能体持续进化，任务聚焦算子优化与科研智能体系统。',
          en: 'Studies training-free memory mechanisms for agent evolution, with tasks focused on operator optimization and scientific-agent systems.',
        },
        keywords: [
          { zh: 'Training-Free Memory', en: 'Training-Free Memory' },
          { zh: '算子优化智能体', en: 'Operator-optimization agents' },
        ],
        highlights: [
          {
            zh: '协助举办 ICAIS 首届国际 AI 科学家大会。',
            en: 'Organizing team member of the first ICAIS conference.',
          },
          {
            zh: '参与 OmniScientist 与 AI reviewer 系统工程实现。',
            en: 'Contributed to engineering of OmniScientist and AI reviewer systems.',
          },
        ],
      },
    ],
  },
  {
    id: 'science-discovery',
    title: {
      zh: '科学发现与黑盒优化（零阶优化/进化算法）',
      en: 'Scientific Discovery and Black-Box Optimization',
    },
    members: [
      {
        id: 'qingsong-ran',
        nameZh: '冉清松',
        nameEn: 'Qingsong Ran',
        role: { zh: '2024级博士生', en: 'PhD Student (Cohort 2024)' },
        cohortYear: 2024,
        affiliation: {
          zh: '同济大学 × 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, Tongji University × BZA',
        },
        avatar: '/assets/avatars/member-qingsong-ran.jpeg',
        email: 's-rqs24@bza.edu.cn',
        bio: {
          zh: '研究基于大语言模型的零阶优化，用于科学结构发现与分子设计。',
          en: 'Studies LLM-based zeroth-order optimization for scientific structure discovery and molecular design.',
        },
        keywords: [
          { zh: '科学发现', en: 'Scientific discovery' },
          { zh: '零阶优化', en: 'Zeroth-order optimization' },
        ],
        highlights: [
          {
            zh: 'KDD 2026 投稿：LingDE。',
            en: 'KDD 2026 submission: LingDE.',
          },
          {
            zh: 'ICML 2026 投稿：WMLLM / MCCE / ExLLM。',
            en: 'ICML 2026 submissions: WMLLM, MCCE, and ExLLM.',
          },
        ],
      },
      {
        id: 'zhongzheng-li',
        nameZh: '李仲正',
        nameEn: 'Zhongzheng Li',
        role: { zh: '2025级博士生', en: 'PhD Student (Cohort 2025)' },
        cohortYear: 2025,
        affiliation: {
          zh: '中科院自动化所 × 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, CASIA × BZA',
        },
        avatar: '/assets/avatars/member-zhongzheng-li.jpeg',
        email: 's-lzz25@bza.edu.cn',
        bio: {
          zh: '专注零阶优化智能体与 LLM Agents 在科学发现中的应用。',
          en: 'Focuses on zeroth-order optimization agents and LLM agents for scientific discovery.',
        },
        keywords: [
          { zh: '零阶优化智能体', en: 'Zeroth-order optimization agents' },
          { zh: 'LLM Agents', en: 'LLM Agents' },
        ],
        highlights: [
          {
            zh: '参与 MCCE、ExLLM、WMLLM 等 ICML 投稿工作。',
            en: 'Contributed to ICML submissions including MCCE, ExLLM, and WMLLM.',
          },
        ],
      },
    ],
  },
  {
    id: 'data-synthesis-online-rl',
    title: {
      zh: '数据合成与在线强化学习',
      en: 'Data Synthesis and Online RL',
    },
    members: [
      {
        id: 'hexuan-deng',
        nameZh: '邓贺烜',
        nameEn: 'Hexuan Deng',
        role: { zh: '2024级博士生', en: 'PhD Student (Cohort 2024)' },
        cohortYear: 2024,
        affiliation: {
          zh: '哈工大（深圳）× 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, HIT Shenzhen × BZA',
        },
        avatar: '/assets/avatars/member-hexuan-deng.png',
        email: 's-dhx24@bza.edu.cn',
        homepage: 'https://hexuandeng.github.io/',
        bio: {
          zh: '聚焦大语言模型数据合成与在线强化学习（Agentic RL）。',
          en: 'Focuses on synthetic data pipelines and online reinforcement learning for LLMs.',
        },
        keywords: [
          { zh: '数据合成', en: 'Data synthesis' },
          { zh: '在线强化学习', en: 'Online reinforcement learning' },
        ],
        highlights: [
          {
            zh: 'ICLR 2026：REA-RL（反思感知在线强化学习）。',
            en: 'ICLR 2026: REA-RL (reflection-aware online RL).',
          },
          {
            zh: 'ACL 2025 Main：DRPruning；EMNLP 2025 Main：AQuilt。',
            en: 'ACL 2025 Main: DRPruning; EMNLP 2025 Main: AQuilt.',
          },
          {
            zh: 'ICML 2026 投稿：CoCoReviewBench 与 Step-Level RL。',
            en: 'ICML 2026 submissions: CoCoReviewBench and step-level RL.',
          },
        ],
      },
    ],
  },
  {
    id: 'multimodal-ai4science',
    title: {
      zh: '多模态推理、评估与 AI4Science',
      en: 'Multimodal Reasoning, Evaluation, and AI4Science',
    },
    members: [
      {
        id: 'rui-wang',
        nameZh: '汪锐',
        nameEn: 'Rui Wang',
        role: { zh: '2025级博士生', en: 'PhD Student (Cohort 2025)' },
        cohortYear: 2025,
        affiliation: {
          zh: '天津大学 × 北京中关村学院 联培硕博',
          en: 'Joint MS-PhD Track Student, Tianjin University × BZA',
        },
        avatar: '/assets/avatars/member-rui-wang.jpg',
        email: 's-wr25@bza.edu.cn',
        bio: {
          zh: '关注多模态推理评估与 AI4Science（3D 医学重建等）。',
          en: 'Works on multimodal reasoning/evaluation and AI4Science applications.',
        },
        keywords: [
          { zh: '多模态推理评估', en: 'Multimodal reasoning evaluation' },
          { zh: 'AI4Science', en: 'AI4Science' },
        ],
        highlights: [
          {
            zh: 'AIC 2025 多项省国奖；腾讯开悟华北赛区二等奖。',
            en: 'Won multiple AIC 2025 awards and Tencent Kaiwu North China runner-up.',
          },
        ],
      },
    ],
  },
  {
    id: 'agent-reliability',
    title: {
      zh: '智能体可靠性与对齐',
      en: 'Agent Reliability and Alignment',
    },
    members: [
      {
        id: 'yichen-li',
        nameZh: '李奕宸',
        nameEn: 'Yichen Li',
        role: { zh: '2024级博士生', en: 'PhD Student (Cohort 2024)' },
        cohortYear: 2024,
        affiliation: {
          zh: '南方科技大学 × 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, SUSTech × BZA',
        },
        avatar: '/assets/avatars/member-yichen-li.jpeg',
        email: 's-lyc24@bza.edu.cn',
        bio: {
          zh: '研究开放域任务中智能体可靠性、偏见与不公平风险。',
          en: 'Studies reliability, bias, and fairness risks of agents in open-domain tasks.',
        },
        keywords: [
          { zh: '智能体可靠性', en: 'Agent reliability' },
          { zh: '安全对齐', en: 'Safety alignment' },
        ],
        experience: [
          {
            zh: '蚂蚁密算实习：隐私计算编译器自动化测试与漏洞分析。',
            en: 'Internship on automated testing and vulnerability analysis for privacy-computing compilers.',
          },
        ],
      },
      {
        id: 'ruina-hu',
        nameZh: '胡瑞娜',
        nameEn: 'Ruina Hu',
        role: { zh: '2025级博士生', en: 'PhD Student (Cohort 2025)' },
        cohortYear: 2025,
        affiliation: {
          zh: '哈工大 × 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, HIT × BZA',
        },
        avatar: '/assets/avatars/member-ruina-hu.jpg',
        email: 's-hrn25@bza.edu.cn',
        bio: {
          zh: '关注合成训练信号在环境缩放中的可靠生成与安全对齐。',
          en: 'Focuses on reliable synthetic training signals and safety alignment under environment scaling.',
        },
        keywords: [
          { zh: '合成训练信号', en: 'Synthetic training signals' },
          { zh: '稳定性与安全对齐', en: 'Stability and safety alignment' },
        ],
      },
    ],
  },
  {
    id: 'robotics-vla',
    title: {
      zh: '机器人抓取与 VLA 强化学习',
      en: 'Robotic Manipulation and VLA Reinforcement Learning',
    },
    members: [
      {
        id: 'dehao-huang',
        nameZh: '黄德豪',
        nameEn: 'Dehao Huang',
        role: { zh: '2024级博士生', en: 'PhD Student (Cohort 2024)' },
        cohortYear: 2024,
        affiliation: {
          zh: '南方科技大学 × 北京中关村学院 联培博士生',
          en: 'Joint PhD Student, SUSTech × BZA',
        },
        avatar: '/assets/avatars/member-dehao-huang.jpeg',
        email: 's-hdh24@bza.edu.cn',
        homepage: 'https://red0orange.github.io/',
        bio: {
          zh: '研究机器人抓取与操作，关注强化学习增强 VLA 模型泛化能力。',
          en: 'Works on robotic manipulation and RL-enhanced VLA models for real-world generalization.',
        },
        keywords: [
          { zh: '机器人操作强化学习', en: 'RL for robotic manipulation' },
          { zh: 'VLA模型', en: 'VLA models' },
        ],
        experience: [
          {
            zh: '曾在商汤科技机器人抓取与操作部门实习并参与算法落地。',
            en: 'Interned at SenseTime on robotic grasping and manipulation deployment.',
          },
        ],
      },
    ],
  },
];

export const teamStats = {
  leaderCount: 1,
  mentorCount: 7,
  memberCount: 16,
};
