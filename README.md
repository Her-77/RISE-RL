# RISE-RL 项目组官网

RISE-RL（Reasoning Intrinsic Self-Evolving Exploration）项目组官网源码。  
主题：**大模型应用驱动下的大规模强化学习算法研究与实践**。

## 技术栈

- Vue 3 + Vite + TypeScript
- Vue Router（Hash 路由，适配 Gitee Pages）
- 全量中英双语（默认中文，记忆上次语言）
- 数据驱动内容结构（负责人/导师/成员/成果/招募）

## 页面结构

- `/#/` 首页
- `/#/team` 团队介绍
- `/#/news` 动态与成果
- `/#/join` 加入我们

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物位于 `dist/`。

## 部署到 Gitee Pages（组织仓库）

目标路径示例：`https://zgc-webcompetition.gitee.io/RISE-RL/`

1. 在组织 `zgc-webcompetition` 下创建仓库 `RISE-RL`。
2. 在本地执行 `npm run build`，生成 `dist/`。
3. 推送代码到仓库，并确保 Pages 使用 `dist` 目录（或单独 Pages 分支存放 `dist` 内容）。
4. 在仓库页面进入 `服务 -> Gitee Pages`。
5. 选择要部署的分支与目录（推荐目录：`dist`）。
6. 启动服务，等待发布完成后访问页面。

## 路径与 404 说明

- `vite.config.ts` 已配置 `base: '/RISE-RL/'`。
- 当前使用 Hash 路由，刷新不会触发服务端路由 404。
- 若改为 History 路由，需额外配置服务端回退规则。

## 数据来源

本仓库根目录中的以下资料已结构化进前端数据层：

- `汪跃-项目负责人.md`
- `合作导师团队.md`
- `个人简介汇总.md`
- `动态与成果.md`

## 资源说明

- 主办方 Logo 使用本地文件：
  - `北京中关村学院院徽+书法字体组合.png`
  - `北京人工智能研究院院徽+书法组合.png`
- 团队头像已统一本地化到 `public/assets/avatars/`。
- 机构 Logo 墙支持“有图显示、无图文字占位”。

## 后续建议

1. 完成英文文本人工校对（术语与姓名拼写）。
2. 根据组织最终仓库名调整 `vite.config.ts` 中的 `base`（若仓库名变化）。
3. 持续在 `src/data/*.ts` 中维护成果与成员更新。
