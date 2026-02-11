import type { LocalizedText } from '../types';

export const memberFullProfiles: Record<string, LocalizedText> = {
  '但泽东': {
    zh: `- 邮箱：s-dzd24@bza.edu.cn

#### 教育背景

- 中山大学，计算机科学与技术，硕博连读在读，计算机学院（2022.09–至今）
- 中山大学，信息与计算科学，本科，计算机学院（2019.09–2022.07）
- 中山大学，数学类，本科，数学学院（珠海）（2018.09–2019.07）

#### 科研 / 项目经历

- 面向**图像文本生成任务的连续指示学习**：在无预训练 backbone 的条件下，通过学习一系列高表达力提示，实现跨数据集迁移并兼顾抗遗忘，已投稿 IJCV。
- 百度实习：参与**多车视角选择与融合的离线地图车道线生成系统**，针对远距离与遮挡导致的精度下降问题，提出基于不确定性引导的多车视角选择与融合策略，认为选择比盲目融合更重要，使车道线 mAP 提升超过 10 个百分点；项目成果在部门季度会上获得表彰并投稿 CVPR 2026。

#### 研究方向

整体兴趣集中在**大模型的隐空间推理方式**，注重推理的并行性和效率，当前主要关注四个方面：

1. 隐空间推理及其训练范式：后训练（COCONUT 隐式 CoT）；预训练（CALM next-vector prediction）。
2. 隐空间推理的 test time scaling：Soft thinking 及后续改进。
3. 隐空间推理与其他大模型技术结合：Soft thinking × 投机采样。
4. 推理过程优化与多轨迹采样：将 soft thinking 与 GFlowNet/GRPO 等强化学习方法结合，探索在保持多样性的前提下实现高效并行思考。

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '张宇辰': {
    zh: `- 邮箱：s-zhangyc24@bza.edu.cn

#### 教育背景

- 华东师范大学，统计学，直博，统计学院（2024.09–至今）
- 南京师范大学，统计学，本科，数学科学学院（2020.09–2024.07）

#### 科研 / 项目经历

- 2024 年至今：就读于华东师范大学统计学院，主要研究方向为 **Conformal Prediction 在强化学习中的应用**，致力于提升强化学习算法在不确定性环境下的鲁棒性与可靠性。
- 2025 年 9 月：加入中关村学院“大模型应用驱动下的大规模强化学习算法研究与实践”项目组。

#### 研究方向

整体兴趣集中在**将强化学习中的 Q 值引入大模型训练中**，注重算法在长程任务中的**训练稳定性**与**推理可控性**，当前主要关注四个方面：

1. **显式 Q 值建模与 Max-free 训练范式**：提出基于**期望回归**与 $\Delta Q$ **增量学习**的去迭代训练框架，实现显式 Q 值在大模型上的鲁棒建模。
2. **推理阶段的连续梯度引导**：构建基于 $\nabla Q$ **连续梯度引导**的混合解码引擎，利用朗之万采样规避配分函数 $Z$ 的计算瓶颈。
3. **长程思维链的层级化规划**：探索从 Token 级短视决策向 **Segment 级宏观规划**的层级跃迁，实现基于 Draft-Rerank 的长程思维导航。
4. **稀疏奖励下的高效探索与判别**：融合显式 Q 值与**树状搜索（MCTS）**机制，解决高维空间下的“全对全错”同质化难题，大幅提升样本效率。

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '柏炯昊': {
    zh: `- 邮箱：s-bjh24@bza.edu.cn
- 方向/关键词：大模型强化学习；后训练

#### 教育背景

- 浙江大学，人工智能，学士学位（2020–2024）
- 浙江大学，计算机科学与技术，博士（预计 2024–2029）
- 北京中关村学院，“大模型应用驱动下的大规模强化学习算法研究与实践”项目组，博士（预计 2024–2029）

#### 研究方向

- 大模型强化学习的后训练相关技术

#### 研究成果

1. 【ICML submission】Arbitrary Entropy Policy Optimization Breaks The Exploration Bottleneck of Reinforcement Learning
   - Chen Wang\*, Zhaochun Li\*, **Jionghao Bai\***, Ge Lan, Shisheng Cui, Zhou Zhao, Yue Wang
   - 提出了 LLM 强化学习后训练中的任意控熵算法 AEPO。使用完整的策略梯度作为正则代替传统的熵正则，确保正则项在优化过程中永远不会处于主导地位。
2. 【ICML submission】Distribution-Centric Policy Optimization Dominates Exploration-Exploitation Trade-off
   - Zhaochun Li\*, Chen Wang\*, **Bai Jionghao\***, Guanting Dong, Shisheng Cui, Ge Lan, Zhou Zhao, Yue Wang
   - 证明在 LLM 强化学习后训练中，相较于单个样本，由样本总体所形成的期望梯度占主导地位，并依此提出完全 on-policy 的熵控制算法 DCPO。

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '栗照淳': {
    zh: `- 邮箱：s-lzc24@bza.edu.cn
- 方向/关键词：AI 基础与理论；RL 算法及其泛化性研究

#### 教育背景

- 北京理工大学，自动化，学士学位（2020–2024）
- 北京理工大学，控制科学与控制工程，博士（预计 2024–2029）
- 北京中关村学院，“大模型应用驱动下的大规模强化学习算法研究与实践”项目组，博士（预计 2024–2029）

#### 研究方向

专注于 AI 基础理论研究。重点关注大模型时代下，不同算法、不同范式的泛化性（ID、OOD）分析，以及 LLM 后训练算法的不足与改进。

#### 研究成果

1. 【ICML submission】Distribution-Centric Policy Optimization Dominates Exploration-Exploitation Trade-off
   - **Zhaochun Li**\*, Chen Wang**\***, Bai Jionghao\*, Guanting Dong, Shisheng Cui, Ge Lan, Zhou Zhao, Yue Wang
   - 证明在 LLM 强化学习后训练中，相较于单个样本，由样本总体所形成的期望梯度占主导地位，并依此提出完全 on-policy 的熵控制算法 DCPO。
2. 【ICML submission】Towards a Theoretical Understanding to the Generalization of RLHF
   - **Zhaochun Li**\*, Mingyang Yi, Yue Wang, Shisheng Cui, Yong Liu
   - 建立 RLHF 端到端泛化性分析框架，并证明 RLHF 算法的泛化性误差与样本量之间的关系，分析得到泛化性误差阶为 $\tilde{\mathcal{O}}(\frac{1}{\sqrt{n}})$。

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '王晨': {
    zh: `- 邮箱：s-wc25@bza.edu.cn
- 个人主页：https://github.com/597358816
- 小红书号：95311800308
- 方向/关键词：强化学习；大模型强化学习

#### 教育背景

- 北京中关村学院（2025–2029）
- 南开大学，软件工程，工学博士（2025–2029），研究方向：强化学习
- 南开大学，软件工程，工学硕士（2022–2025），研究方向：理论计算机科学
- 南开大学，软件工程，工学学士（2018–2022），研究方向：区块链

#### 研究方向

- 大模型强化学习后训练算法技术研究

#### 研究成果

1. 【ICML submission】Arbitrary Entropy Policy Optimization Breaks The Exploration Bottleneck of Reinforcement Learning
   - **Chen Wang\***, Zhaochun Li\*, Jionghao Bai\*, Ge Lan, Shisheng Cui, Zhou Zhao, Yue Wang
   - 提出 LLM 强化学习后训练中的任意控熵算法 AEPO。使用完整的策略梯度作为正则代替传统的熵正则，确保正则项在优化过程中永远不会处于主导地位。
2. 【ACL submission】Targeted Exploration via Unified Entropy Control for Reinforcement Learning
   - **Chen Wang**, Lai Wei, Yanzhi Zhang, Chenyang Shao, Zedong Dan, Weiran Huang, Ge Lan, Yue Wang
   - 提出 UEC-RL：兼顾探索与稳定、在 LLM 和 VLM 上通用的强化学习后训练框架，由搜索器与稳定器共同控制。
3. 【Applied Mathematics and Computation】Two graphs: Resolving the periodic reversibility of one-dimensional finite cellular automata
   - **Chen Wang**, Junchi Ma, Chao Wang, Defu Lin, Weilin Chen
   - 提出双图算法，证明一维有限细胞自动机的可逆性是有周期的，并给出高效算法。
4. 【ICML submission】Distribution-Centric Policy Optimization Dominates Exploration-Exploitation Trade-off
   - Zhaochun Li\*, **Chen Wang\***, Bai Jionghao\*, Guanting Dong, Shisheng Cui, Ge Lan, Zhou Zhao, Yue Wang
   - 证明在 LLM 强化学习后训练中，相较于单个样本，由样本总体所形成的期望梯度占主导地位，并依此提出完全 on-policy 的熵控制算法 DCPO。
5. 【SIAM Journal on Matrix Analysis and Applications submission】Determinants and Inverses of banded Toeplitz Matrices over Fp Are Periodic
   - **Chen Wang**, Chao Wang
   - 证明有限域上带状 Toeplitz 矩阵的行列式和逆有周期性，且可在 O(1) 复杂度内求得（相较于矩阵阶 n）。
6. 【NeurIPS 2025】First SFT, Second RL, Third UPT: Continual Improving Multi-Modal LLM Reasoning via Unsupervised Post-Training
   - Lai Wei, Yuting Li, **Chen Wang**, Yue Wang, Linghe Kong, Weiran Huang, Lichao Sun
   - 无监督强化学习后训练，并提出“先 SFT，后 RL，无监督作为后训练”的持续进化训练范式。
7. 【Theoretical Computer Science】Decision algorithms for reversibility of 1D cellular automata under reflective boundary conditions
   - Chen Wang, Junchi Ma, Chao Wang, Defu Lin, Weilin Chen
   - 一维反射边界细胞自动机的可逆性判定算法。

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '魏来': {
    zh: `- 邮箱：s-wl24@bza.edu.cn
- 个人主页：https://waltonfuture.github.io/
- 方向/关键词：持续强化学习；大语言模型/多模态大模型后训练

#### 教育背景

- 上海交通大学，物理与天文学院，本科
- 上海交通大学，计算机学院，2024 级直博生
- 北京中关村学院，2024 级直博生

#### 研究方向

- 基于持续强化学习的大语言模型和多模态大模型后训练

#### 研究成果及工作经历

- 【NeurIPS 2025】First SFT, Second RL, Third UPT: Continual Improving Multi-Modal LLM Reasoning via Unsupervised Post-Training  
  Lai Wei, Yuting Li, Chen Wang, Yue Wang, Linghe Kong, Weiran Huang, Lichao Sun
- 【NeurIPS 2024】Diff-eRank: A Novel Rank-Based Metric for Evaluating Large Language Model  
  Lai Wei\*, Zhiquan Tan\*, Chenghai Li, Jindong Wang, Weiran Huang
- 【SCI-FM@ICLR 2025】Diabetica: Adapting Large Language Model to Enhance Multiple Medical Tasks in Diabetes Care and Management  
  Lai Wei\*, Zhen Ying\*, Muyang He\*, Yutong Chen, Qian Yang, Yanzhe Hong, Jiaping Lu, Kaipeng Zheng, Shaoting Zhang, Xiaoying Li, Weiran Huang, Ying Chen
- 【Artificial Intelligence for Engineering】InstructionGPT-4: A 200-Instruction Paradigm for Fine-Tuning MiniGPT-4
  Lai Wei, Zihao Jiang, Weiran Huang, Lichao Sun

#### 奖项

- 中国科协青年科技人才培育工程博士生专项计划（2025）
- 国家人工智能学院创新臻益奖学金（2025）
- 蚂蚁燧石精英人才计划（2025）
- 上海交通大学计算机学院三好学生（2025）
- NeurIPS Scholar Award（2025）
- 上海交通大学优秀毕业生（2024）

#### 学术社区服务

- 受邀担任 NeurIPS 2025、ICLR 2025/2026、ICML 2026、CVPR 2026、ECCV 2026 审稿人

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '贾天翯': {
    zh: `- 邮箱：s-jth25@bza.edu.cn
- 方向/关键词：大模型 + 进化算法；GPU 算子优化

#### 教育背景

- 北京邮电大学，人工智能学院，本科（2021.09–2025.07）
  - 专业及 GPA：人工智能，3.72/4.0
- 中国科学院大学，工程科学学院，2025 级博士研究生（2025.09–至今）
  - 导师：刘扬教授
- 北京中关村学院，2025 级博士研究生（2025.09–至今）
  - 项目导师：汪跃

#### 研究兴趣

- 大模型 + 进化算法
- GPU 算子优化

#### 奖项

- 北京邮电大学：校级三好学生、校级优秀学生干部、优秀团员、本科优秀学生奖学金
- 北京邮电大学人工智能学院：暑期社会实践先进个人、优秀个人项目（2023）
- 第二十六届中国机器人及人工智能大赛：人形机器人创新挑战赛全国选拔赛一等奖
- 国家级大学生创新创业训练计划项目：律帆风顺——律所数字化信息综合平台
- 2025 全球校园人工智能算法精英大赛（AIC 2025）算法挑战赛离线工业强化学习一等奖
- 2025 中国石化人工智能应用创新大赛（公开赛）二等奖
- 2025 腾讯开悟人工智能全球公开赛暨第七届全国高校计算机能力挑战赛人工智能赛：AI 芯片算子开发二等奖

#### 工作经历

- Apple Intern：针对 Sales 工作场景开发 Agent；深度参与撰写基于 MLX 的《动手学深度学习》（Dive into Deep Learning）中文项目：https://github.com/jiyzhang/mlx-d2l-zh（2024.12–2025.06）

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '范鹏飞': {
    zh: `- 邮箱：3220104149@zju.edu.cn
- 方向/关键词：大模型微调与推理；RL 反馈；推理时优化；CUDA 内核级算子稀疏优化

#### 教育背景

- 浙江大学，本科（2022.09.01–至今）
- 中国科学院大学，计算技术研究所，直博（预计 2026.09.01 入学）
- 北京中关村学院，直博（预计 2026.09.01 入学）

#### 研究兴趣

1. 大模型微调与推理相关技术：目前主要关注基于 RL 反馈的算法以及推理时优化。
2. CUDA 内核级算子稀疏优化：希望解决大规模计算场景（长视频推断、大规模仿真等）中算力和显存的资源约束问题。

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '冉清松': {
    zh: `- 邮箱：s-rqs24@bza.edu.cn
- 方向/关键词：科学发现；零阶优化

#### 教育背景

- 同济大学，交通工程，本科（2018.09–2022.09）
- 同济大学，城市交通，硕士研究生（2023.09–2024.09）
- 同济大学，交通运输工程，博士研究生（2024.09–至今）
- 北京中关村学院，人工智能，博士研究生联培（2024.09–至今）

#### 研究方向

专注于基于大语言模型的零阶优化方法，用于解决数学结构发现、小分子药物等领域的超大规模、抽象模态、具有黑盒性特点的优化问题。

#### （中关村相关）研究成果

1. 【KDD 2026 Cycle 2 Sub】LingDE: Linguistic Operators for Differential Evolution with Large Language Models**Qingsong Ran**, Zhongzheng Li, Shikun Feng, Xiaoyuan Zhang**\***, Jinbiao Nie, Nian Ran, Wenhao Li, Yue Wang, Wanjing Ma
2. 【ICML 2026 Sub】WMLLM: Empowering Self-Evolving Agents with Unified Implicit World ModelsZhongzheng Li, **Qingsong Ran**, Shikun Feng, Nian Ran, Wenhao Li, Jinbiao Nie, Xiaoyuan Zhang**\***, Yue Wang, Xiaoguang Zhao
3. 【ICML 2026 Sub】MCCE: A Framework for Multi-LLM Collaborative Co-EvolutionRan, N.\*; Li, Z.**\***; Wang, Y.; **Ran, Q.**; Zhang, X.; Feng, S.; Allmendinger, R.; Zhao, X. arXiv October 6, 2025. https://doi.org/10.48550/arXiv.2510.06270
4. 【ICML 2026 Sub】ExLLM: Experience-Enhanced LLM Optimization for Molecular Design and Beyond
   Ran, N.; Wang, Y.; Zhang, X.; Li, Z.; **Ran, Q.**; Li, W.; Allmendinger, R. arXiv October 8, 2025. https://doi.org/10.48550/arXiv.2502.12845

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '李仲正': {
    zh: `- 邮箱：s-lzz25@bza.edu.cn
- 方向/关键词：零阶优化智能体；LLM Agents；科学发现

#### 教育背景

- 浙江大学，自动化，学士（2020–2024）
- 中国科学院自动化研究所，人工智能方向博士（与北京中关村学院联合培养，2024–2029）

#### 研究方向

- 专注于 LLM Agents 用于科学发现、算法设计、序列决策等优化场景，致力于搭建通用问题多目标求解器
- 使用强化学习增强 agent 能力

#### 研究成果及工作经历

- 【ICML 2026 Sub】MCCE: A Framework for Multi-LLM Collaborative Co-EvolutionRan, N.\*; **Li, Z.\***; Wang, Y.; Ran, Q.; Zhang, X.; Feng, S.; Allmendinger, R.; Zhao, X. arXiv October 6, 2025. https://doi.org/10.48550/arXiv.2510.06270大小模型协同用于科学发现
- 【ICML 2026 Sub】ExLLM: Experience-Enhanced LLM Optimization for Molecular Design and BeyondRan, N.; Wang, Y.; Zhang, X.; **Li, Z**.; Ran, Q.; Li, W.; Allmendinger, R. arXiv October 8, 2025. https://doi.org/10.48550/arXiv.2502.12845基于经验利用的优化器系统
- 【ICML 2026 Sub】WMLLM: Empowering Self-Evolving Agents with Unified Implicit World Models
  世界模型能力增强的优化系统

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '张益宁': {
    zh: `- 邮箱：s-zyn24@bza.edu.cn
- 个人主页：https://yiningzhang2002.github.io/
- 方向/关键词：大语言模型智能体（LLM Agents）；Training-Free Learning with Memory

#### 教育背景

- 北京理工大学，计算机科学与技术，学士学位（2020–2024）
- 中国科学院自动化研究所，多模态人工智能系统全国重点实验室，博士（预计 2024–2029）
- 北京中关村学院，“大模型应用驱动下的大规模强化学习算法研究与实践”项目组，博士（预计 2024–2029）

#### 工作经历

- 2025 年 9 月：加入中关村学院“大模型应用驱动下的大规模强化学习算法研究与实践”项目组。
- 2025 年 11 月：作为 Organizing Team 成员协助举办 ICAIS 首届国际 AI 科学家大会。
- 2025 年 11 月：作为联合作者发布全球首个科研智能体系统 OmniScientist；作为项目工程师辅助设计 AI reviewer 框架并参与编写项目代码，完成前后端联调、功能完善与测试，使论文评审系统顺利对外提供服务。

#### 研究方向

主要研究大语言模型驱动的智能体系统（LLM Agents），关注在 training-free（无参数更新、无 reward model）条件下，如何通过 Memory 机制支撑模型在复杂决策与搜索任务中的能力持续演化。

核心研究问题：Memory 能否作为一种隐式学习机制，在不更新模型参数的前提下，提升大模型在跨任务、跨实例与跨上下文条件下的泛化与推理能力。围绕这一目标，研究重点包括：Memory 的构造与表征机制、无显式奖励下的策略进化机制、Memory 与语义推理协同的搜索剪枝理论。

相关研究在多个高复杂度应用场景中展开验证，包括算子优化（Operator Optimization）与科研智能体/论文评审系统（AI Reviewer、OmniScientist），以系统化评估 Memory 驱动智能体在结构化搜索与高语义决策任务中的通用性与边界。

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '邓贺烜': {
    zh: `- 邮箱：s-dhx24@bza.edu.cn
- 个人主页：https://hexuandeng.github.io/
- 方向/关键词：大语言模型；数据合成与利用；在线强化学习（Agentic RL）

#### 教育背景

- 南开大学（天津），工学学士，人工智能学院智能科学与技术专业（特色班）（2018.09–2022.07）平均学分绩点 3.79/4，学院排名 8/129
- 哈尔滨工业大学（深圳，广东），工学硕士，计算机科学与技术学院/计算与智能研究院（2022.09–2024.07）导师：张民，刘学博，张梅山
- 哈尔滨工业大学（深圳，广东），工学博士在读，计算机科学与技术学院/计算与智能研究院（2024.09–2027.06（预计））导师：张民，刘学博
- 北京中关村学院（北京），工学博士在读，联培参与强化学习算法研究与实践项目（2024.09–2027.06（预计））导师：汪跃
- 获 2025 年研究生国家奖学金

#### 实习经历

- 京东集团 - 京东科技 - 探索研究院（北京），科研实习/算法工程师岗（2021.11–2022.05）企业导师：丁亮，陶大程
  - 调研同声传译系统方向，提出单语数据利用策略，发表 AAAI 2023 论文一篇
- 腾讯科技（深圳）- TEG 技术工程事业群 - AI Lab（深圳），交互翻译组实习生（2023.07–2024.12）企业导师：焦文祥，涂兆鹏
  - 提出检测大模型新词能力的基准测试构建方法，发表 NeurIPS 2024 D&B 论文一篇
  - 阅读大模型训练与剪枝代码，添加训练数据及损失函数加权策略，发表 ACL 2025 Main 论文一篇

#### 研究工作

聚焦**大语言模型**，以**数据合成与利用**为切入点，关注对问题的完善定义及简单有效的解决方案。近期关注方向为在线强化学习，后续研究计划围绕 Agentic RL。

1. Improving Simultaneous Machine Translation with Monolingual Data（AAAI 2023）Author：**Hexuan Deng**, Liang Ding, Xuebo Liu, Meishan Zhang, Dacheng Tao, Min Zhang
   - 证明整句机翻数据训练同声传译模型的局限性，蒸馏单语数据更适合同传
   - 借鉴人类译员策略，提出更优单语数据选择方法，降低幻觉现象
2. **NewTerm**: Benchmarking Real-Time New Terms for Large Language Models with Annual Updates（NeurIPS 2024 D&B）Author：**Hexuan Deng**, Wenxiang Jiao, Xuebo Liu, Min Zhang, Zhaopeng Tu
   - 新知识/新词涌现限制大模型实时性，测试构建困难
   - 利用数据合成 pipeline 构建 benchmark，实现低成本年度更新与系统级评价
   - 构建新词 NLU 测试数据并揭示现有模型缺陷
3. **NewTerm++**: Evaluating and Improving Large Language Models on Real-Time New Terms（TASLP Submission）Author：**Hexuan Deng**, Wenxiang Jiao, Chunhao Tian, Xuebo Liu, Min Zhang, Zhaopeng Tu
   - 证明知识编辑与 RAG 方法难以处理新词问题
   - 提出数据合成方案强调上下文重要性，仅用 LoRA 微调即可全面超越相关 baseline
4. **DRPruning**: Efficient Large Language Model Pruning through Distributionally Robust Optimization（ACL 2025 Main）Author：**Hexuan Deng**, Wenxiang Jiao, Xuebo Liu, Min Zhang, Zhaopeng Tu
   - 结构化剪枝导致跨领域性能不均衡退化并引入偏差
   - 引入并改进分布鲁棒剪枝方法，动态调整训练预期，提高数据利用效率
5. **REA-RL**: Reflection-Aware Online Reinforcement Learning for Efficient Large Reasoning Models（ICLR 2026）Author：**Hexuan Deng**, Wenxiang Jiao, Xuebo Liu, Jun Rao, Min Zhang
   - 为解决过度思考，分析长度奖励在组内/固定长度计算的不足
   - 定义“必要思考路径”，在线数据合成，对非必要部分针对性惩罚以避免丧失反思
   - 添加反思奖励，避免以丧失反思换取更短路径；在不降性能前提下平均缩短响应 35%
6. **CoCoReviewBench**: A Completeness- and Correctness-Oriented Benchmark for AI Reviewers（ICML 2026 Submission）Author：**Hexuan Deng**\*, Xiaopeng Ke\*, Yichen Li\*, Ruina Hu\*, Dehao Huang, Derek F. Wong, Yue Wang, Xuebo Liu, Min Zhang
   - AI Reviewer 评价难：仅基于 LLM 存在 bias，且相似性不等于正确性
   - 揭示人类意见不全面性与冲突性及潜在错误，使其不适合作 gold reference
   - 基于 Agent 的数据合成构建类别级评价，并用同行讨论做人类标注、删除错误意见
   - 发现现有方案在正确性与深入性上仍需改善；推理模型在 AI Reviewer 上更有优势
7. **AQuilt**: Weaving Logic and Self-Inspection into Low-Cost, High-Relevance Data Synthesis for Specialist LLMs（EMNLP 2025 Main）Author：Xiaopeng Ke, **Hexuan Deng**, Xuebo Liu, Jun Rao, Zhenxi Song, Jun Yu, Min Zhang
   - 指导柯潇鹏（2024 级哈工深硕士），用数据合成将无标注数据转为有标注数据，提升训练效率并缓解专有领域数据缺乏
   - 与其合作完成 ICML 投稿论文一篇（潇鹏为共一二作）
8. Stop Rewarding Hallucinated Steps: Faithfulness-Aware Step-Level Reinforcement Learning for Small Reasoning Models（ICML 2026 Submission）Author：Shuo Nie\*, **Hexuan Deng**\*, Chao Wang, Ruiyu Fang, Xuebo Liu, Shuangyong Song, Yu Li, Min Zhang, Xuelong Li
   - 指导聂硕（2025 级哈工深硕士），发现小推理模型幻觉更严重，设计显式与隐式步骤奖励以缓解

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '汪锐': {
    zh: `- 邮箱：s-wr25@bza.edu.cn
- 方向/关键词：多模态推理与评估；AI4Science

#### 教育背景

- 天津大学 × 北京中关村学院：硕博连读在读，关注多模态推理和评估、AI4Science（2025.03–至今）
- 天津大学 × 国防科技创新研究院：主要方向为多模态语音识别（2023.09–2025.03）
- 合肥工业大学，电子信息科学与技术，本科（2019.09–2023.07）

#### 科研 / 项目经历

- SSEGLip & SSEGLip4adapt：针对未见说话人泛化问题，通过解耦说话人身份和语义信息，在零样本与小样本两方面分别提出 SSEGLip 与 SSEGLip4adapt 方法，提高跨被试语义识别性能。
- 国防科技创新研究院实习：作为主要研发人员参与音视智能耳机的算法设计改进、模型训练、测试与部署全流程，确保多复杂场景下的实际性能；研发实物在第 49 届日内瓦国际发明展获金奖及特别奖。

#### 近来关注

- Multimodal reasoning
- AI review for coding（Think with multimodal）
- AI4Science：3D medical reconstruction

#### 竞赛

- AIC 2025：省奖 3 项，国一 1 项，国三 1 项
- 2025 Tencent Kaiwu Comp：华北赛区二等奖

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '李奕宸': {
    zh: `- 邮箱：s-lyc24@bza.edu.cn
- 方向/关键词：智能体可靠性；偏见与不公平风险；隐私计算编译器测试

#### 教育背景

- 中关村学院 × 南方科技大学，机器人与智能制造方向，博士（在读，2024.09–预计 2028.06）
- 香港科技大学，计算机科学与工程，硕士（2022.08–2024.06）
- 浙江大学伊利诺伊大学厄巴纳香槟校区联合学院，电子与计算机工程，学士（2018.08–2022.06）

#### 科研 / 项目经历

- 蚂蚁密算实习：利用自动化测试方法，发现其商用隐私计算编译器上的多个效率问题，并实现一套高效自动化漏洞机制分析算法（2024.10–2025.03）。
- 围绕隐私计算编译器的自动化测试方法展开研究：发现多个主流隐私计算编译器的编译错误漏洞；提交漏洞报告后被官方认证并修复。
- 针对模型压缩技术的鲁棒性问题检测及修复展开研究。

#### 研究方向

主要研究方向聚焦于开放域任务中智能体的可靠性问题。目前重点关注智能体在科研任务执行过程中对 AI 生成内容的偏好现象，并围绕由此引发的偏见与不公平风险，开展相应的检测与缓解方法研究。

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '胡瑞娜': {
    zh: `- 邮箱：s-hrn25@bza.edu.cn
- 方向/关键词：合成训练信号；环境缩放；稳定性与安全对齐

#### 教育背景

- 北京中关村学院 × 哈尔滨工业大学：博士研究生
- 本硕就读于哈尔滨工业大学

#### 研究方向

主要研究方向聚焦于智能体合成训练信号的可靠生成与利用。重点关注环境缩放过程中合成信号引入的噪声与分布偏移问题，及其对智能体学习稳定性与安全对齐的深层影响，以支撑智能体的稳定自进化。

---`,
    en: 'Detailed profile is available in Chinese version.',
  },
  '黄德豪': {
    zh: `- 邮箱：s-hdh24@bza.edu.cn
- 个人主页：https://red0orange.github.io/
- 方向/关键词：机器人抓取与操作；视觉-语言-动作（VLA）；强化学习

#### 教育背景

- 中关村学院 × 南方科技大学（SUSTech），机器人与智能制造方向，博士（在读，2024.09–预计 2027.06）
- 南方科技大学（SUSTech），电子科学与技术，硕士（2022.08–2024.06）
- 华南师范大学，信息工程，学士（2018.08–2022.06）

#### 科研 / 项目经历

围绕机器人抓取与操作相关的感知方向开展研究工作并发表论文。曾在商汤科技机器人抓取与操作部门实习，参与机器人抓取与操作算法的部署与落地。

#### 研究方向

围绕机器人抓取与操作展开研究，当前关注将强化学习方法用于视觉-语言-动作（VLA）模型，提升模型在真实环境中的交互能力与任务泛化能力。`,
    en: 'Detailed profile is available in Chinese version.',
  },
};
