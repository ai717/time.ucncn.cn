# ⏳ 专注时钟 & 倒计时 (Focus Clock & Countdown)

> **域名**：[time.ucncn.cn](https://time.ucncn.cn)  
> **Slogan**：让工位静下来，让时间看得见。  
> **核心卖点**：四大拟物视觉形态（3D机械翻牌/扫秒大表盘/晶莹流沙/火花炸弹）、沉浸白噪音、原生防息屏常亮、高停留时长专注空间。  
> **归属模式**：独立二级域名项目（模式 A，与 ucncn.cn 主站解耦，主站 Git 已通过 `.gitignore` 排除本目录）

---

## 📖 核心功能矩阵

1. **三大主分类**：
   - 🕒 **实时时钟**：精准时间校准、12/24 小时制切换、默认匹配 📟 机械翻牌；
   - ⏱️ **专注秒钟**：大屏精准计时与计次记录 (Laps)、红绿灯控时提醒、默认匹配 ⏱️ 扫秒大表盘；
   - ⏳ **倒计时**：常用快捷预设（5m/10m/15m/25m/45m/60m）+ 自定义时分秒面板、默认匹配 💣 火花炸弹 / ⏳ 流沙漏斗。
2. **四大拟物视觉形态 (按 V 自由切换)**：
   - 📟 **机械翻牌** (3D Split-Flap)
   - ⏱️ **扫秒表盘** (Dial Stopwatch with sweeping needle)
   - ⏳ **晶莹流沙** (Glass Hourglass with live trickle)
   - 💣 **火花炸弹** (Fuse Spark Bomb with dynamic burning & explosion)
3. **真实时钟秒针拟真音效**：
   - 纯 Web Audio 实时声学合成，无外部音频文件；
   - 提供 🔇静音、⚙️机械发条、⚡石英脉冲、🪵复古摆钟、⏱️精密秒表五档选择。
4. **防息屏常亮 (Screen Wake Lock)**：
   - 桌面/iPad/手机支架常亮不熄屏。
5. **三套高阶美学配色**：
   - OLED 纯黑、羊皮纸白、暖橘微光。

---

## 🚀 本地开发与预览

纯静态单页面应用，开箱即用：

```bash
cd g:\work\code\website\ucncn\time

# 本地静态服务预览
python -m http.server 8091
```

浏览器打开 `http://localhost:8091` 即可体验。

---

## 🛠️ 后续对话开发指引

在新的开发会话中，直接向 AI 发送指令：
> “我在 `G:\work\code\website\ucncn\time\` 已经规划好了完整产品文档 `PRD.md`，该项目是挂靠 `time.ucncn.cn` 的独立纯前端项目『极简翻页时钟』。请先通读 `PRD.md`，然后按照任务清单的第一阶段，帮我实现 3D 机械翻页动画与时钟核心逻辑。”
