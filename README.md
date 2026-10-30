# NGCC 候选材料合集: Dragon (hash-07) 与 Thunder (hash-33)

中国 Next Generation Commercial Cryptographic (NGCC) algorithms program Round 1 的两个
hash 候选 **Dragon Hash Family** 与 **Thunder Hash Family** 的公开材料离线合集，
供合作者查阅。抓取日期 2026-10-30。

| candidate | ID | family | ngcc.dev security 状态 |
|---|---|---|---|
| Dragon Hash Family | `hash-07` | Symmetric (permutation-based) | No finding（仍在评审，非安全背书） |
| Thunder Hash Family | `hash-33` | Symmetric (permutation-based) | No finding（仍在评审，非安全背书） |

## 网页 (study pages)

仓库根目录是一个可直接浏览的静态站（GitHub Pages 可直接托管）：

- `index.html` — 双候选 landing 页
- `site.css` — 共用样式
- `dragon/`、`thunder/` — 每个候选五页：
  `index`（概览+新闻+快速事实）、`specification`（参数表+模式+置换）、
  `implementations`（包结构+构建/KAT+核对注记）、`performance`（x86_1 cycles/byte 表+arm_1 链接）、
  `analysis`（安全状态+constant-time+规范核对+本组结果占位）
- `dragon/hero.png`、`thunder/hero.png` — 首页插画（中国龙 / 雷神，AI 生成，
  gpt-image via Codex，2026-10-30，配色与站点一致，无版权第三方元素）

英文为主、每页配中文摘要；数据均出自本仓库镜像的材料（harness 快照与 ngcc.dev 页面）。

## 目录结构

### `ngcc-site/` — ngcc.dev 相关页面离线副本

保留了原站的相对路径结构，用浏览器直接打开即可离线浏览（如
`ngcc-site/reports/hash-07.html`）：

- `reports/hash-07.html`、`reports/hash-33.html` — security 报告页（含官方
  submission archive 与 spec PDF 的链接、官方提交页入口）
- `constant-time/hash-07.html`、`constant-time/hash-33.html` — side-channel
  （constant-time 源码级）审查页，含引用的具体源码行
- `performance/x86_1/`、`performance/arm_1/` — 两台机器（Intel i7-12700 @ 2.1 GHz、
  Qualcomm Snapdragon X Elite @ 2.71 GHz）上每个候选的 cycle-count 明细页，
  以及测量方法说明 `method.html`
- `index.html` 与两个板块 `index.html` — 站点入口与导航（便于理解页面上下文）

未收录：覆盖全部 119 个候选的聚合大表（reports 总表、各机器总表、symmetric
survey），见 ngcc.dev 对应板块。

### `harness/` — ngcc-harness 仓库快照（pinned commit）

取自 <https://github.com/ngcc-dev/ngcc-harness> 的 commit
`dc66c6cb3c06e75bdea0048e21fa4e13c63f00af`（ngcc.dev 页面引用的版本）：

- `hash-07/`、`hash-33/` — 每个候选的完整材料目录：
  - `hash-XX-spec.pdf` — 规格 PDF
  - `pseudocode.md`、`constant_time.md`、`perf_x86_1.md` — ngcc.dev 的分析文档
  - `kat.sha256`、`Makefile` — KAT 校验与构建入口
  - `Dragon/`、`Thunder/` — 官方提交包的完整解包：Reference 与 Additional
    implementations（x86 与 ARM 变体、多个安全强度等级）、KAT 源码与 test vector
- 根部的 `Makefile`、`extract.sh`、`download.sh`、`downloads.csv`、
  `SOURCE_ARCHIVES.md`、`README.md` — harness 的构建入口与官方来源索引
  （`downloads.csv` 记录全部候选官方 zip 的下载 URL、提交页与论坛帖链接）

未收录：harness 仓库中其余 117 个候选目录及 `api/`、`tools/`、`doc/`、
`performance/`、`security/` 等全站目录，需要时请克隆完整仓库。

### `official-archives/` — NICCS 官方提交包原档

- `Dragon.zip`、`Thunder.zip` — NICCS 官网 Round 1 candidates 页面的原始提交包
- `SHA256SUMS.txt` — 下载后计算的 SHA-256（NICCS 未发布官方 checksum，
  此文件仅保证本仓库内文件自洽）

来源：
<https://www.niccs.org.cn/niccs/Proposal/Cryptographic%20Hash%20Algorithms/Round%201%20candidates/>

官方提交页与论坛帖（摘自 harness `downloads.csv`）：

- Dragon: 提交页 <https://www.niccs.org.cn/niccs/Round1Submissions4/pc/content/content_2101539781751689216.html>；
  论坛帖 <https://list.niccs.org.cn/archives/list/crypthashforum@list.niccs.org.cn/thread/GRAHTRUNRC25N7P5QVCBH7CZG47REYZS/>
- Thunder: 提交页 <https://www.niccs.org.cn/niccs/Round1Submissions4/pc/content/content_2101533797931110400.html>；
  论坛帖 <https://list.niccs.org.cn/archives/list/crypthashforum@list.niccs.org.cn/thread/NFFBYY3BQVNNKGZDA6SFJJZHCP6UIZ6Y/>

## 来源与致谢

- [ngcc.dev](https://ngcc.dev) — Markku-Juhani Saarinen 维护的 NGCC 候选独立分析站
  （security findings / performance / constant-time），本仓库镜像其中与两个候选
  相关的页面；相关论文：IACR ePrint [2026/2266](https://eprint.iacr.org/2026/2266)。
- [ngcc-dev/ngcc-harness](https://github.com/ngcc-dev/ngcc-harness) — 上述分析依赖的
  构建与测试工具仓库。
- [NICCS](https://www.niccs.org.cn/) — NGCC 官方提交包与文档的原发布方。

各材料的版权归原提交团队与发布方所有，此处镜像仅用于研究合作。
