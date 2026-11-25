/**
 * ZenFlip Clock - 3D Mechanical Split-Flap Clock & Focus Room
 * v1.0.5 - Giant Stage Mode + Egg & Coffee Slow Life + Cyber Defuse + Traffic Light Pacing
 */

const I18N = {
  'zh-CN': {
    brand_title: '专注时钟 & 倒计时',
    site_title: '专注时钟 & 倒计时 - 让工位静下来，让时间看得见',
    tab_suffix: '专注时钟',
    lang_btn: 'EN',
    seconds_label: '秒钟',
    title_12h: '切换 12/24 小时制',
    title_seconds: '显示/隐藏秒钟',
    title_fs: '全屏模式 (快捷键 F)',
    title_lang: '切换为英文 / Switch to English',
    exit_fs: '按 F 或 ESC 退出全屏',
    btn_giant: '📺 巨幕',

    // Visual Representations
    visual_flip: '机械翻牌',
    visual_dial: '扫秒表盘',
    visual_sand: '流沙漏斗',
    visual_bomb: '火花炸弹',

    // Modes
    mode_clock: '实时时钟',
    mode_pomodoro: '番茄自习',
    mode_stopwatch: '专注秒表',
    mode_slowlife: '慢生活',
    mode_cyber: '赛博冲刺',

    footer_tip: '💡 双击任意处或按 <span class="kbd-badge">F</span> 键进入极简全屏 · 按 <span class="kbd-badge">M</span> 切换场景',
    footer_slogan: '沉浸专注空间',
    theme_oled: 'OLED 纯黑',
    theme_parchment: '羊皮纸白',
    theme_amber: '暖橘微光',

    // Timer Actions
    btn_start_focus: '开始专注',
    btn_start_timer: '开始计时',
    btn_start_cook: '开始烹调',
    btn_start_cyber: '启动协议',
    btn_pause: '暂停',
    btn_continue: '继续',
    btn_reset: '重置',
    timer_lap: '计次',
    pacing_toggle: '控时灯',
    lap_title: '🏁 计次记录 (Laps)',
    lap_clear: '清空',

    // Pacing Text
    pacing_green: '控时良好 · 状态充沛',
    pacing_amber: '临近尾声 · 注意把握',
    pacing_red: '超时预警 · 尽快收尾',

    // Sounds
    sound_rain: '细雨',
    sound_fireplace: '壁炉',
    sound_cafe: '咖啡馆',
    sound_clock: '钟摆',
    wakelock_on: '防息屏: 开启',
    wakelock_off: '防息屏: 关闭',

    // Status titles
    pomo_work_title: (m) => `🍅 番茄专注 · ${m} 分钟`,
    pomo_short_title: (m) => `☕ 短暂休息 · ${m} 分钟`,
    pomo_long_title: (m) => `🍵 较长休息 · ${m} 分钟`,
    pomo_work_sub: '保持专注，屏蔽干扰',
    pomo_break_sub: '闭目养神，喝口温水',
    pomo_done_title: '🎉 本轮专注完成！',
    pomo_done_sub: '伴学钟声已鸣响，开始享受休息吧',

    stopwatch_title: '⏱️ 专注秒表 · 每一秒皆是积累',
    stopwatch_sub: '巨幕演讲与大屏计时 · 保持心流状态',

    // Slow Life
    slowlife_egg6_title: '🍳 6m 温泉溏心蛋 · 科学慢煮',
    slowlife_egg6_sub: '蛋清刚凝固，蛋黄金黄流心，柔润香浓',
    slowlife_egg8_title: '🥚 8m 软心溏心蛋 · 慢煮计时',
    slowlife_egg8_sub: '经典居酒屋流心拉面蛋质感，软糯不流淌',
    slowlife_egg10_title: '🍳 10m 全熟蛋 · 慢煮计时',
    slowlife_egg10_sub: '蛋白弹韧，蛋黄完全熟化，健身减脂首选',
    slowlife_coffee_title: '☕ 3m 手冲咖啡 · 金杯萃取',
    slowlife_coffee_sub: '4:6 手冲法 · 注入温柔与香气',
    slowlife_tea_title: '🍵 4m 原叶工夫茶 · 悠然慢品',
    slowlife_tea_sub: '茶香四溢，汤色透亮，静心小憩片刻',
    slowlife_done_title: '🍳 烹享完成，趁热品味吧！',
    slowlife_done_sub: '伴随清脆提壶声，享受当下的味蕾治愈',

    // Cyber Defuse
    cyber_title: (m) => `⚡ DEFUSE PROTOCOL · 剩余 ${m} 分钟`,
    cyber_sub: '心流极限冲刺 · 全神经注意力收束中',
    cyber_urgent_title: '⚠️ CRITICAL COUNTDOWN · 核心临界!',
    cyber_urgent_sub: '倒数 10 秒心跳共振 · 准备完成协议',
    cyber_done_title: '💥 MISSION ACCOMPLISHED · 协议解除!',
    cyber_done_sub: '恭喜在极限 Deadline 前成功生还！',

    formatDate: (date) => {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const weekdaysZh = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      return `${year}年${month}月${day}日 ${weekdaysZh[date.getDay()]}`;
    },
    formatSub: (dayOfYear) => `第 ${dayOfYear} 天 · 专注此时时刻`
  },
  'en-US': {
    brand_title: 'Focus Clock & Timer',
    site_title: 'Focus Clock & Timer - Keep Calm and Focused',
    tab_suffix: 'Focus Clock',
    lang_btn: '中',
    seconds_label: 'Seconds',
    title_12h: 'Toggle 12/24 Hour Format',
    title_seconds: 'Show/Hide Seconds',
    title_fs: 'Fullscreen Mode (Press F)',
    title_lang: 'Switch to Chinese / 切换为中文',
    exit_fs: 'Press F or ESC to exit fullscreen',
    btn_giant: '📺 Stage',

    // Visual Representations
    visual_flip: 'Flip Clock',
    visual_dial: 'Stopwatch Dial',
    visual_sand: 'Hourglass',
    visual_bomb: 'Spark Bomb',

    // Modes
    mode_clock: 'Clock',
    mode_pomodoro: 'Pomodoro',
    mode_stopwatch: 'Stopwatch',
    mode_slowlife: 'Slow Life',
    mode_cyber: 'Cyber Defuse',

    footer_tip: '💡 Double-click or press <span class="kbd-badge">F</span> for fullscreen · <span class="kbd-badge">M</span> to switch mode',
    footer_slogan: 'Ambient Focus Room',
    theme_oled: 'OLED Pure Dark',
    theme_parchment: 'Parchment White',
    theme_amber: 'Amber Glow',

    // Timer Actions
    btn_start_focus: 'Start Focus',
    btn_start_timer: 'Start Timer',
    btn_start_cook: 'Start Cook',
    btn_start_cyber: 'Defuse Now',
    btn_pause: 'Pause',
    btn_continue: 'Resume',
    btn_reset: 'Reset',
    timer_lap: 'Lap',
    pacing_toggle: 'Traffic Light',
    lap_title: '🏁 Lap Records',
    lap_clear: 'Clear',

    // Pacing Text
    pacing_green: 'On Track · Great Pacing',
    pacing_amber: 'Approaching End · Wrap Up',
    pacing_red: 'Overtime Alert · Conclude',

    // Sounds
    sound_rain: 'Rain',
    sound_fireplace: 'Fire',
    sound_cafe: 'Cafe',
    sound_clock: 'Tick',
    wakelock_on: 'WakeLock: ON',
    wakelock_off: 'WakeLock: OFF',

    // Status titles
    pomo_work_title: (m) => `🍅 Pomodoro Focus · ${m}m`,
    pomo_short_title: (m) => `☕ Short Break · ${m}m`,
    pomo_long_title: (m) => `🍵 Long Break · ${m}m`,
    pomo_work_sub: 'Stay focused, eliminate distractions',
    pomo_break_sub: 'Rest your eyes, hydrate & stretch',
    pomo_done_title: '🎉 Session Complete!',
    pomo_done_sub: 'Zen chime played. Enjoy your well-earned break!',

    stopwatch_title: '⏱️ Stopwatch & Stage Timer',
    stopwatch_sub: 'Every second counts · Stay in deep flow',

    // Slow Life
    slowlife_egg6_title: '🍳 6m Soft-Boiled Egg · Runny Yolk',
    slowlife_egg6_sub: 'Set white, warm runny yolk, pure culinary perfection',
    slowlife_egg8_title: '🥚 8m Medium Egg · Jammy Yolk',
    slowlife_egg8_sub: 'Classic ramen egg texture, rich and custardy',
    slowlife_egg10_title: '🍳 10m Hard-Boiled Egg',
    slowlife_egg10_sub: 'Firm whites, thoroughly cooked yolk, high protein fuel',
    slowlife_coffee_title: '☕ 3m Pour-Over Coffee · 4:6 Method',
    slowlife_coffee_sub: 'Precision water brew · Gentle aromas unfolding',
    slowlife_tea_title: '🍵 4m Artisan Tea Steep',
    slowlife_tea_sub: 'Fragrant leaves blooming, soothing afternoon break',
    slowlife_done_title: '🍳 Ready to Savor!',
    slowlife_done_sub: 'Freshly prepared. Enjoy this mindful culinary pause',

    // Cyber Defuse
    cyber_title: (m) => `⚡ DEFUSE PROTOCOL · ${m}m Remaining`,
    cyber_sub: 'Terminal Flow State · Deep adrenaline focus',
    cyber_urgent_title: '⚠️ CRITICAL COUNTDOWN · 10 SECONDS!',
    cyber_urgent_sub: 'Heartbeat pulse active · Complete your sprint now',
    cyber_done_title: '💥 MISSION ACCOMPLISHED · PROTOCOL CLEARED!',
    cyber_done_sub: 'Objective secured right before the deadline!',

    formatDate: (date) => {
      const weekdaysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${weekdaysEn[date.getDay()]}, ${monthsEn[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    },
    formatSub: (dayOfYear) => `Day ${dayOfYear} · Focus on the Present`
  }
};

/**
 * Screen Wake Lock Controller
 */
class ScreenWakeLockController {
  constructor() {
    this.wakeLock = null;
    this.enabled = true;
    this.isSupported = 'wakeLock' in navigator;
    this.btnWakeLock = document.getElementById('btn-wakelock');
    this.wakeLockLabel = document.getElementById('wakelock-label');

    this.init();
  }

  async requestLock() {
    if (!this.isSupported || !this.enabled) {
      this.updateUI();
      return false;
    }
    try {
      this.wakeLock = await navigator.wakeLock.request('screen');
      this.wakeLock.addEventListener('release', () => {
        this.wakeLock = null;
        this.updateUI();
      });
      this.updateUI();
      return true;
    } catch (err) {
      console.warn('Wake Lock request notice:', err);
      this.updateUI();
      return false;
    }
  }

  async releaseLock() {
    if (this.wakeLock) {
      try {
        await this.wakeLock.release();
      } catch (e) {}
      this.wakeLock = null;
    }
    this.updateUI();
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.requestLock();
    } else {
      this.releaseLock();
    }
    this.updateUI();
  }

  updateUI(lang = 'zh-CN') {
    if (!this.btnWakeLock) return;
    if (!this.isSupported) {
      this.btnWakeLock.style.display = 'none';
      return;
    }
    const t = I18N[lang] || I18N['zh-CN'];
    const isActive = this.wakeLock && !this.wakeLock.released;

    if (isActive) {
      this.btnWakeLock.classList.add('active');
      if (this.wakeLockLabel) this.wakeLockLabel.textContent = t.wakelock_on;
    } else {
      this.btnWakeLock.classList.remove('active');
      if (this.wakeLockLabel) this.wakeLockLabel.textContent = t.wakelock_off;
    }
  }

  init() {
    if (!this.isSupported) {
      if (this.btnWakeLock) this.btnWakeLock.style.display = 'none';
      return;
    }
    this.requestLock();

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && this.enabled) {
        this.requestLock();
      }
    });

    if (this.btnWakeLock) {
      this.btnWakeLock.addEventListener('click', () => this.toggle());
    }
  }
}

/**
 * Procedural Zen Tibetan singing bowl chime (Web Audio)
 */
function playZenBell() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const now = ctx.currentTime;

    const harmonics = [
      { freq: 587.33, gain: 0.35, decay: 3.2 },
      { freq: 880.00, gain: 0.22, decay: 2.6 },
      { freq: 1174.66, gain: 0.12, decay: 1.8 }
    ];

    harmonics.forEach(({ freq, gain, decay }) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gainNode.gain.setValueAtTime(0.0001, now);
      gainNode.gain.exponentialRampToValueAtTime(gain, now + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + decay + 0.1);
    });
  } catch (err) {
    console.warn('Audio chime notice:', err);
  }
}

class FlipCard {
  constructor(element) {
    this.element = element;
    this.staticTop = element.querySelector('.static-top .digit-char');
    this.staticBottom = element.querySelector('.static-bottom .digit-char');
    this.staticBottomShadow = element.querySelector('.static-bottom-shadow');
    this.leaf = element.querySelector('.flip-leaf');
    this.leafFront = element.querySelector('.leaf-front .digit-char');
    this.leafBack = element.querySelector('.leaf-back .digit-char');

    this.currentValue = null;
    this.isFlipping = false;
    this.animTimeout = null;

    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    if (this.leaf) {
      this.leaf.addEventListener('animationend', this.onAnimationEnd);
    }
  }

  setDigit(newVal, animate = true) {
    newVal = String(newVal);

    if (this.currentValue === null || !animate) {
      this.currentValue = newVal;
      this.staticTop.textContent = newVal;
      this.staticBottom.textContent = newVal;
      this.leafFront.textContent = newVal;
      this.leafBack.textContent = newVal;
      return;
    }

    if (this.currentValue === newVal) {
      return;
    }

    const oldVal = this.currentValue;
    this.currentValue = newVal;

    if (this.isFlipping) {
      this.finishFlipImmediate();
    }

    this.isFlipping = true;

    this.staticTop.textContent = newVal;
    this.staticBottom.textContent = oldVal;
    this.leafFront.textContent = oldVal;
    this.leafBack.textContent = newVal;

    this.leaf.classList.remove('is-flipping');
    void this.leaf.offsetWidth;
    this.leaf.classList.add('is-flipping');

    clearTimeout(this.animTimeout);
    this.animTimeout = setTimeout(() => {
      if (this.isFlipping) {
        this.onAnimationEnd();
      }
    }, 600);
  }

  onAnimationEnd() {
    clearTimeout(this.animTimeout);
    if (!this.isFlipping) return;

    this.staticBottom.textContent = this.currentValue;
    this.leaf.classList.remove('is-flipping');
    this.isFlipping = false;
  }

  finishFlipImmediate() {
    clearTimeout(this.animTimeout);
    this.leaf.classList.remove('is-flipping');
    this.staticBottom.textContent = this.currentValue;
    this.staticTop.textContent = this.currentValue;
    this.isFlipping = false;
  }
}

class ZenFlipClock {
  constructor() {
    this.is12Hour = localStorage.getItem('zenflip_is12h') === 'true';
    this.showSeconds = localStorage.getItem('zenflip_seconds') !== 'false';
    this.theme = localStorage.getItem('zenflip_theme') || 'oled';
    this.lang = localStorage.getItem('zenflip_lang') || 'zh-CN';
    this.currentMode = 'clock'; // 'clock' | 'pomodoro' | 'stopwatch' | 'slowlife' | 'cyber'

    // General Countdown State (Pomodoro, Slowlife, Cyber)
    this.countdownDuration = 25 * 60;
    this.countdownRemaining = 25 * 60;
    this.countdownType = 'work';
    this.countdownIsRunning = false;
    this.countdownTimerId = null;

    // Stopwatch Engine State
    this.stopwatchSeconds = 0;
    this.stopwatchIsRunning = false;
    this.stopwatchTimerId = null;
    this.laps = [];
    this.lastLapSeconds = 0;

    // Clock Engine State
    this.clockTimerId = null;

    // Traffic Light Pacing State
    this.pacingEnabled = true;

    // Screen Wake Lock Instance
    this.wakeLockCtrl = new ScreenWakeLockController();

    // DOM Elements
    this.clockWrapper = document.getElementById('clock-wrapper');
    this.meridiemBadge = document.getElementById('meridiem-badge');
    this.dateText = document.getElementById('date-text');
    this.dateSub = document.getElementById('date-sub');
    this.btn12h = document.getElementById('btn-12h');
    this.btnSeconds = document.getElementById('btn-seconds');
    this.secondsLabel = document.getElementById('seconds-label');
    this.btnFullscreen = document.getElementById('btn-fullscreen');
    this.btnGiant = document.getElementById('btn-giant');
    this.btnLang = document.getElementById('btn-lang');
    this.langLabel = document.getElementById('lang-label');
    this.themeDots = document.querySelectorAll('.theme-dot');
    this.fsExitHint = document.getElementById('fs-exit-hint');
    this.footerTipText = document.getElementById('footer-tip-text');
    this.footerSlogan = document.getElementById('footer-slogan');
    this.metaThemeColor = document.querySelector('meta[name="theme-color"]');

    // Progress Bar & Pacing Badge
    this.timeProgressBar = document.getElementById('time-progress-bar');
    this.progressFill = document.getElementById('progress-fill');
    this.pacingBadge = document.getElementById('pacing-badge');
    this.pacingText = document.getElementById('pacing-text');
    this.btnPacingToggle = document.getElementById('btn-pacing-toggle');
    this.pacingToggleLabel = document.getElementById('pacing-toggle-label');

    // Modes & Timer Action Elements
    this.modeButtons = document.querySelectorAll('.mode-btn');
    this.timerActionBar = document.getElementById('timer-action-bar');
    this.btnTimerToggle = document.getElementById('btn-timer-toggle');
    this.timerToggleIcon = document.getElementById('timer-toggle-icon');
    this.timerToggleLabel = document.getElementById('timer-toggle-label');
    this.btnTimerReset = document.getElementById('btn-timer-reset');
    this.timerResetLabel = document.getElementById('timer-reset-label');
    this.btnTimerLap = document.getElementById('btn-timer-lap');
    this.timerLapLabel = document.getElementById('timer-lap-label');

    // Preset Groups
    this.pomoPresets = document.getElementById('pomo-presets');
    this.slowlifePresets = document.getElementById('slowlife-presets');
    this.cyberPresets = document.getElementById('cyber-presets');

    this.pomoPillButtons = document.querySelectorAll('.btn-timer-pill[data-pomo-type]');
    this.slowlifePillButtons = document.querySelectorAll('.btn-timer-pill[data-slowlife-type]');
    this.cyberPillButtons = document.querySelectorAll('.btn-timer-pill[data-cyber-type]');

    this.lapContainer = document.getElementById('lap-container');
    this.lapList = document.getElementById('lap-list');
    this.btnClearLaps = document.getElementById('btn-clear-laps');

    // Ambient Sound Pills
    this.ambientPills = document.querySelectorAll('.ambient-pill');

    // Cards
    this.cards = {
      h1: new FlipCard(document.getElementById('card-h1')),
      h2: new FlipCard(document.getElementById('card-h2')),
      m1: new FlipCard(document.getElementById('card-m1')),
      m2: new FlipCard(document.getElementById('card-m2')),
      s1: new FlipCard(document.getElementById('card-s1')),
      s2: new FlipCard(document.getElementById('card-s2'))
    };

    // Visual Representations State & DOM Elements
    this.currentVisual = localStorage.getItem('zenflip_visual') || 'flip';
    this.visualButtons = document.querySelectorAll('.visual-btn');
    this.visualContainers = {
      flip: document.getElementById('visual-container-flip'),
      dial: document.getElementById('visual-container-dial'),
      sand: document.getElementById('visual-container-sand'),
      bomb: document.getElementById('visual-container-bomb')
    };

    // Dial Visual Elements
    this.dialNeedle = document.getElementById('dial-needle');
    this.dialReadout = document.getElementById('dial-readout');

    // Sand Visual Elements
    this.sandFillTop = document.getElementById('sand-fill-top');
    this.sandFillBottom = document.getElementById('sand-fill-bottom');
    this.sandTrickle = document.getElementById('sand-trickle');
    this.sandReadout = document.getElementById('sand-readout');

    // Bomb Visual Elements
    this.bombFuseBurn = document.getElementById('bomb-fuse-burn');
    this.bombSpark = document.getElementById('bomb-spark');
    this.bombReadout = document.getElementById('bomb-readout');
    this.bombBoomOverlay = document.getElementById('bomb-boom-overlay');

    this.initTheme();
    this.initLanguage();
    this.initUI();
    this.bindEvents();
    this.startClock();
  }

  // ================= Theme Management =================
  initTheme() {
    this.setTheme(this.theme);
  }

  setTheme(themeName) {
    this.theme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);

    this.themeDots.forEach(dot => {
      if (dot.getAttribute('data-theme-val') === themeName) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    const themeColors = {
      oled: '#09090b',
      parchment: '#f4f1ea',
      amber: '#14100d'
    };
    if (this.metaThemeColor) {
      this.metaThemeColor.setAttribute('content', themeColors[themeName] || '#09090b');
    }

    localStorage.setItem('zenflip_theme', themeName);
  }

  cycleTheme() {
    const order = ['oled', 'parchment', 'amber'];
    const idx = order.indexOf(this.theme);
    const nextTheme = order[(idx + 1) % order.length];
    this.setTheme(nextTheme);
  }

  // ================= Language (i18n) Management =================
  initLanguage() {
    this.setLanguage(this.lang);
  }

  setLanguage(lang) {
    if (!I18N[lang]) lang = 'zh-CN';
    this.lang = lang;
    const t = I18N[lang];

    if (this.langLabel) this.langLabel.textContent = t.lang_btn;
    if (this.btnLang) this.btnLang.title = t.title_lang;
    if (this.secondsLabel) this.secondsLabel.textContent = t.seconds_label;
    if (this.btnSeconds) this.btnSeconds.title = t.title_seconds;
    if (this.btn12h) this.btn12h.title = t.title_12h;
    if (this.btnFullscreen) this.btnFullscreen.title = t.title_fs;
    if (this.btnGiant) this.btnGiant.textContent = t.btn_giant;
    if (this.fsExitHint) this.fsExitHint.textContent = t.exit_fs;
    if (this.footerTipText) this.footerTipText.innerHTML = t.footer_tip;
    if (this.footerSlogan) this.footerSlogan.textContent = t.footer_slogan;
    if (this.timerResetLabel) this.timerResetLabel.textContent = t.btn_reset;
    if (this.timerLapLabel) this.timerLapLabel.textContent = t.timer_lap;
    if (this.pacingToggleLabel) this.pacingToggleLabel.textContent = t.pacing_toggle;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    const oledDot = document.querySelector('.theme-dot[data-theme-val="oled"]');
    const parchDot = document.querySelector('.theme-dot[data-theme-val="parchment"]');
    const amberDot = document.querySelector('.theme-dot[data-theme-val="amber"]');
    if (oledDot) oledDot.title = t.theme_oled;
    if (parchDot) parchDot.title = t.theme_parchment;
    if (amberDot) amberDot.title = t.theme_amber;

    this.wakeLockCtrl.updateUI(this.lang);
    this.updateModeUI();

    localStorage.setItem('zenflip_lang', lang);
  }

  toggleLanguage() {
    const nextLang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
    this.setLanguage(nextLang);
  }

  // ================= UI Initialization =================
  initUI() {
    if (this.is12Hour) {
      document.body.classList.add('mode-12h');
      this.btn12h.classList.add('active');
      this.btn12h.textContent = '12H';
    } else {
      document.body.classList.remove('mode-12h');
      this.btn12h.classList.remove('active');
      this.btn12h.textContent = '24H';
    }

    if (!this.showSeconds) {
      document.body.classList.add('hide-seconds');
      this.btnSeconds.classList.remove('active');
    } else {
      document.body.classList.remove('hide-seconds');
      this.btnSeconds.classList.add('active');
    }

    this.setVisual(this.currentVisual);
  }

  // ================= Visual Representation Switching =================
  setVisual(visualName) {
    if (!this.visualContainers[visualName]) {
      visualName = 'flip';
    }
    this.currentVisual = visualName;
    localStorage.setItem('zenflip_visual', visualName);

    this.visualButtons.forEach(btn => {
      const isMatch = btn.getAttribute('data-visual') === visualName;
      btn.classList.toggle('active', isMatch);
    });

    Object.entries(this.visualContainers).forEach(([name, container]) => {
      if (container) {
        container.classList.toggle('active', name === visualName);
      }
    });

    // Refresh display immediately for the newly selected visual
    if (this.currentMode === 'clock') {
      this.tickClock(false);
    } else if (this.currentMode === 'stopwatch') {
      this.updateStopwatchDisplay(false);
    } else {
      this.updateCountdownDisplay(false);
    }
  }

  cycleVisual() {
    const list = ['flip', 'dial', 'sand', 'bomb'];
    const idx = list.indexOf(this.currentVisual);
    const nextVisual = list[(idx + 1) % list.length];
    this.setVisual(nextVisual);
  }

  updateVisualSync(hStr, mStr, sStr, progress, isRunning = true) {
    const timeStr = `${hStr}:${mStr}:${sStr}`;
    const shortStr = `${mStr}:${sStr}`;

    // 1. Dial Stopwatch Update
    if (this.dialNeedle) {
      let angle = (parseInt(sStr, 10) % 60) * 6;
      if (this.currentMode === 'clock') {
        const ms = Date.now() % 1000;
        angle = (parseInt(sStr, 10) + ms / 1000) * 6;
      }
      this.dialNeedle.style.transform = `rotate(${angle}deg)`;
    }
    if (this.dialReadout) {
      this.dialReadout.textContent = timeStr;
    }

    // 2. Sand Hourglass Update
    if (this.sandFillTop && this.sandFillBottom) {
      const clampedProg = Math.max(0, Math.min(1, progress));
      const topHeight = Math.round((1 - clampedProg) * 82);
      const bottomHeight = Math.round(clampedProg * 78);
      this.sandFillTop.style.height = `${topHeight}%`;
      this.sandFillBottom.style.height = `${bottomHeight}%`;
    }
    if (this.sandTrickle) {
      this.sandTrickle.classList.toggle('paused', !isRunning || progress >= 1);
    }
    if (this.sandReadout) {
      this.sandReadout.textContent = shortStr;
    }

    // 3. Fuse Bomb Update
    if (this.bombFuseBurn && this.bombSpark) {
      const clampedProg = Math.max(0, Math.min(1, progress));
      const totalLen = 145;
      const burnOffset = totalLen * (1 - clampedProg);
      this.bombFuseBurn.style.strokeDasharray = `${totalLen}`;
      this.bombFuseBurn.style.strokeDashoffset = `${burnOffset}`;

      try {
        const pt = this.bombFuseBurn.getPointAtLength(totalLen * (1 - clampedProg));
        this.bombSpark.style.left = `${pt.x}px`;
        this.bombSpark.style.top = `${pt.y}px`;
      } catch (err) {
        this.bombSpark.style.left = `${12 + clampedProg * 118}px`;
        this.bombSpark.style.top = `${18 + Math.sin(clampedProg * Math.PI) * 30}px`;
      }
      this.bombSpark.style.display = clampedProg >= 1 ? 'none' : 'block';
    }
    if (this.bombReadout) {
      this.bombReadout.textContent = shortStr;
    }
  }

  triggerBombBoom() {
    if (this.bombBoomOverlay) {
      this.bombBoomOverlay.style.display = 'flex';
      setTimeout(() => {
        if (this.bombBoomOverlay) this.bombBoomOverlay.style.display = 'none';
      }, 1600);
    }
  }

  // ================= Event Bindings =================
  bindEvents() {
    // Theme Dots Selection
    this.themeDots.forEach(dot => {
      dot.addEventListener('click', () => {
        this.setTheme(dot.getAttribute('data-theme-val'));
      });
    });

    // Language Toggle
    if (this.btnLang) {
      this.btnLang.addEventListener('click', () => this.toggleLanguage());
    }

    // Giant Stage Mode
    if (this.btnGiant) {
      this.btnGiant.addEventListener('click', () => {
        document.body.classList.toggle('giant-stage');
        this.btnGiant.classList.toggle('active');
      });
    }

    // Toggle 12H / 24H
    this.btn12h.addEventListener('click', () => {
      this.is12Hour = !this.is12Hour;
      localStorage.setItem('zenflip_is12h', this.is12Hour);
      this.initUI();
      if (this.currentMode === 'clock') {
        this.tickClock(false);
      }
    });

    // Toggle Seconds
    this.btnSeconds.addEventListener('click', () => {
      this.showSeconds = !this.showSeconds;
      localStorage.setItem('zenflip_seconds', this.showSeconds);
      this.initUI();
      if (this.showSeconds && this.currentMode === 'clock') {
        this.tickClock(false);
      }
    });

    // Fullscreen Toggle Button
    this.btnFullscreen.addEventListener('click', () => this.toggleFullscreen());

    // Double-click to toggle fullscreen
    document.addEventListener('dblclick', (e) => {
      if (e.target.closest('button, a, input, .ambient-pill')) return;
      this.toggleFullscreen();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.target.matches('input, textarea')) return;

      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        this.toggleFullscreen();
      } else if (e.code === 'Space') {
        if (this.currentMode !== 'clock') {
          e.preventDefault();
          this.toggleTimer();
        }
      } else if (e.key === 'r' || e.key === 'R') {
        if (this.currentMode !== 'clock') {
          e.preventDefault();
          this.resetTimer();
        }
      } else if (e.key === 'l' || e.key === 'L') {
        if (this.currentMode === 'stopwatch') {
          e.preventDefault();
          this.recordLap();
        }
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        this.cycleMode();
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        this.cycleTheme();
      } else if (e.key === 'v' || e.key === 'V') {
        e.preventDefault();
        this.cycleVisual();
      }
    });

    // Visual Mode Buttons
    this.visualButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const visual = btn.getAttribute('data-visual');
        this.setVisual(visual);
      });
    });

    // Crown click in Dial Mode triggers play/pause
    const dialCrown = document.getElementById('dial-crown');
    if (dialCrown) {
      dialCrown.addEventListener('click', () => {
        if (this.currentMode !== 'clock') {
          this.toggleTimer();
        }
      });
    }

    // Fullscreen Change
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        document.body.classList.add('is-fullscreen');
        this.btnFullscreen.classList.add('active');
      } else {
        document.body.classList.remove('is-fullscreen');
        this.btnFullscreen.classList.remove('active');
      }
    });

    // Mode Selector Buttons
    this.modeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');
        this.setMode(mode);
      });
    });

    // Timer Action Buttons
    if (this.btnTimerToggle) {
      this.btnTimerToggle.addEventListener('click', () => this.toggleTimer());
    }
    if (this.btnTimerReset) {
      this.btnTimerReset.addEventListener('click', () => this.resetTimer());
    }
    if (this.btnTimerLap) {
      this.btnTimerLap.addEventListener('click', () => this.recordLap());
    }
    if (this.btnClearLaps) {
      this.btnClearLaps.addEventListener('click', () => this.clearLaps());
    }
    if (this.btnPacingToggle) {
      this.btnPacingToggle.addEventListener('click', () => {
        this.pacingEnabled = !this.pacingEnabled;
        this.btnPacingToggle.classList.toggle('active', this.pacingEnabled);
        this.updatePacingUI();
      });
    }

    // 1. Pomodoro Presets
    this.pomoPillButtons.forEach(pill => {
      pill.addEventListener('click', () => {
        const minutes = parseInt(pill.getAttribute('data-minutes'), 10);
        const type = pill.getAttribute('data-pomo-type');
        this.selectCountdownPreset(this.pomoPillButtons, pill, type, minutes);
      });
    });

    // 2. Slow Life Presets (Eggs & Coffee)
    this.slowlifePillButtons.forEach(pill => {
      pill.addEventListener('click', () => {
        const minutes = parseInt(pill.getAttribute('data-minutes'), 10);
        const type = pill.getAttribute('data-slowlife-type');
        this.selectCountdownPreset(this.slowlifePillButtons, pill, type, minutes);
      });
    });

    // 3. Cyber Defuse Presets
    this.cyberPillButtons.forEach(pill => {
      pill.addEventListener('click', () => {
        const minutes = parseInt(pill.getAttribute('data-minutes'), 10);
        const type = pill.getAttribute('data-cyber-type');
        this.selectCountdownPreset(this.cyberPillButtons, pill, type, minutes);
      });
    });

    // Ambient Sound Pills
    this.ambientPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const sound = pill.getAttribute('data-sound');
        if (window.ambientAudio) {
          const isActive = window.ambientAudio.toggleTrack(sound);
          if (isActive) {
            pill.classList.add('active');
          } else {
            pill.classList.remove('active');
          }
        }
      });
    });
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen request failed:', err);
        document.body.classList.toggle('is-fullscreen');
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => console.warn(err));
      }
    }
  }

  cycleMode() {
    const modes = ['clock', 'pomodoro', 'stopwatch', 'slowlife', 'cyber'];
    const idx = modes.indexOf(this.currentMode);
    const nextMode = modes[(idx + 1) % modes.length];
    this.setMode(nextMode);
  }

  // ================= Mode Switching Machine =================
  setMode(mode) {
    if (this.currentMode === mode) return;
    this.currentMode = mode;

    document.body.classList.remove('mode-cyber', 'cyber-urgent');

    this.modeButtons.forEach(btn => {
      if (btn.getAttribute('data-mode') === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    this.stopClock();
    this.pauseCountdown();
    this.pauseStopwatch();

    // Default element displays
    this.timerActionBar.style.display = 'none';
    this.pomoPresets.style.display = 'none';
    this.slowlifePresets.style.display = 'none';
    this.cyberPresets.style.display = 'none';
    this.btnTimerLap.style.display = 'none';
    this.btnPacingToggle.style.display = 'none';
    this.lapContainer.style.display = 'none';
    this.timeProgressBar.style.display = 'none';
    this.pacingBadge.style.display = 'none';

    if (mode === 'clock') {
      if (this.meridiemBadge && this.is12Hour) {
        this.meridiemBadge.style.display = 'block';
      }
      this.startClock();
    } else {
      if (this.meridiemBadge) this.meridiemBadge.style.display = 'none';
      this.timerActionBar.style.display = 'flex';

      if (mode === 'pomodoro') {
        this.pomoPresets.style.display = 'flex';
        this.timeProgressBar.style.display = 'block';
        this.selectDefaultPreset(this.pomoPillButtons, 'work', 25);
      } else if (mode === 'slowlife') {
        this.slowlifePresets.style.display = 'flex';
        this.timeProgressBar.style.display = 'block';
        this.selectDefaultPreset(this.slowlifePillButtons, 'egg6', 6);
      } else if (mode === 'cyber') {
        document.body.classList.add('mode-cyber');
        this.cyberPresets.style.display = 'flex';
        this.timeProgressBar.style.display = 'block';
        this.selectDefaultPreset(this.cyberPillButtons, 'cyber5', 5);
      } else if (mode === 'stopwatch') {
        this.btnTimerLap.style.display = 'inline-flex';
        this.btnPacingToggle.style.display = 'inline-flex';
        if (this.laps.length > 0) this.lapContainer.style.display = 'block';
        this.updateStopwatchDisplay(false);
      }
      this.updateModeUI();
    }
  }

  selectDefaultPreset(pillGroup, type, minutes) {
    pillGroup.forEach(p => {
      const isMatch = p.getAttribute('data-pomo-type') === type ||
                      p.getAttribute('data-slowlife-type') === type ||
                      p.getAttribute('data-cyber-type') === type;
      p.classList.toggle('active', isMatch);
    });
    this.countdownType = type;
    this.countdownDuration = minutes * 60;
    this.countdownRemaining = this.countdownDuration;
    this.updateCountdownDisplay(false);
    this.updateProgressBar();
  }

  selectCountdownPreset(pillGroup, clickedPill, type, minutes) {
    this.pauseCountdown();
    this.countdownType = type;
    this.countdownDuration = minutes * 60;
    this.countdownRemaining = this.countdownDuration;

    pillGroup.forEach(pill => pill.classList.remove('active'));
    clickedPill.classList.add('active');

    this.updateCountdownDisplay(true);
    this.updateProgressBar();
    this.updateModeUI();
  }

  updateModeUI() {
    const t = I18N[this.lang] || I18N['zh-CN'];

    if (this.currentMode === 'clock') {
      this.updateDate(new Date());
    } else if (this.currentMode === 'pomodoro') {
      const minutes = Math.round(this.countdownDuration / 60);
      if (this.countdownType === 'work') {
        this.dateText.textContent = t.pomo_work_title(minutes);
        this.dateSub.textContent = t.pomo_work_sub;
      } else if (this.countdownType === 'shortBreak') {
        this.dateText.textContent = t.pomo_short_title(minutes);
        this.dateSub.textContent = t.pomo_break_sub;
      } else {
        this.dateText.textContent = t.pomo_long_title(minutes);
        this.dateSub.textContent = t.pomo_break_sub;
      }

      this.updatePlayBtnState(t.btn_start_focus, t.btn_continue);
    } else if (this.currentMode === 'slowlife') {
      if (this.countdownType === 'egg6') {
        this.dateText.textContent = t.slowlife_egg6_title;
        this.dateSub.textContent = t.slowlife_egg6_sub;
      } else if (this.countdownType === 'egg8') {
        this.dateText.textContent = t.slowlife_egg8_title;
        this.dateSub.textContent = t.slowlife_egg8_sub;
      } else if (this.countdownType === 'egg10') {
        this.dateText.textContent = t.slowlife_egg10_title;
        this.dateSub.textContent = t.slowlife_egg10_sub;
      } else if (this.countdownType === 'coffee') {
        this.dateText.textContent = t.slowlife_coffee_title;
        this.dateSub.textContent = this.getCoffeePhasePrompt();
      } else if (this.countdownType === 'tea') {
        this.dateText.textContent = t.slowlife_tea_title;
        this.dateSub.textContent = t.slowlife_tea_sub;
      }

      this.updatePlayBtnState(t.btn_start_cook, t.btn_continue);
    } else if (this.currentMode === 'cyber') {
      const minutes = Math.round(this.countdownDuration / 60);
      if (this.countdownRemaining <= 10 && this.countdownRemaining > 0 && this.countdownIsRunning) {
        this.dateText.textContent = t.cyber_urgent_title;
        this.dateSub.textContent = t.cyber_urgent_sub;
      } else {
        this.dateText.textContent = t.cyber_title(minutes);
        this.dateSub.textContent = t.cyber_sub;
      }

      this.updatePlayBtnState(t.btn_start_cyber, t.btn_continue);
    } else if (this.currentMode === 'stopwatch') {
      this.dateText.textContent = t.stopwatch_title;
      this.dateSub.textContent = t.stopwatch_sub;

      if (this.stopwatchIsRunning) {
        this.timerToggleIcon.textContent = '⏸';
        this.timerToggleLabel.textContent = t.btn_pause;
        this.btnTimerToggle.classList.add('is-running');
      } else {
        this.timerToggleIcon.textContent = '▶';
        this.timerToggleLabel.textContent = this.stopwatchSeconds > 0 ? t.btn_continue : t.btn_start_timer;
        this.btnTimerToggle.classList.remove('is-running');
      }

      this.updatePacingUI();
    }
  }

  updatePlayBtnState(startText, resumeText) {
    const t = I18N[this.lang] || I18N['zh-CN'];
    if (this.countdownIsRunning) {
      this.timerToggleIcon.textContent = '⏸';
      this.timerToggleLabel.textContent = t.btn_pause;
      this.btnTimerToggle.classList.add('is-running');
    } else {
      this.timerToggleIcon.textContent = '▶';
      this.timerToggleLabel.textContent = (this.countdownRemaining < this.countdownDuration && this.countdownRemaining > 0)
        ? resumeText
        : startText;
      this.btnTimerToggle.classList.remove('is-running');
    }
  }

  getCoffeePhasePrompt() {
    const rem = this.countdownRemaining;
    if (rem >= 150) return '☕ 阶段 1：闷蒸 30s（40g 温水唤醒）';
    if (rem >= 105) return '☕ 阶段 2：第一次注水（柔和冲至 120g）';
    if (rem >= 60) return '☕ 阶段 3：第二次注水（均匀冲至 200g）';
    return '☕ 阶段 4：最后滴滤萃取中 · 芳香扑鼻';
  }

  // ================= Progress & Pacing Logic =================
  updateProgressBar() {
    if (!this.progressFill || !this.timeProgressBar) return;
    if (this.currentMode === 'clock') {
      this.timeProgressBar.style.display = 'none';
      return;
    }

    if (this.currentMode === 'stopwatch') {
      this.timeProgressBar.style.display = 'none';
      return;
    }

    this.timeProgressBar.style.display = 'block';
    const percent = Math.max(0, Math.min(100, (this.countdownRemaining / this.countdownDuration) * 100));
    this.progressFill.style.width = `${percent}%`;

    // Dynamic color indicator
    if (this.currentMode === 'cyber') {
      this.progressFill.style.backgroundColor = percent <= 15 ? '#ef4444' : '#22c55e';
    } else {
      this.progressFill.style.backgroundColor = 'var(--accent-color)';
    }

    this.updatePacingUI();
  }

  updatePacingUI() {
    if (!this.pacingBadge) return;
    if (!this.pacingEnabled || this.currentMode === 'clock') {
      this.pacingBadge.style.display = 'none';
      return;
    }

    const t = I18N[this.lang] || I18N['zh-CN'];
    this.pacingBadge.style.display = 'inline-flex';
    this.pacingBadge.classList.remove('pacing-green', 'pacing-amber', 'pacing-red');

    if (this.currentMode === 'stopwatch') {
      const sec = this.stopwatchSeconds;
      if (sec < 300) {
        this.pacingBadge.classList.add('pacing-green');
        this.pacingText.textContent = t.pacing_green;
      } else if (sec < 900) {
        this.pacingBadge.classList.add('pacing-amber');
        this.pacingText.textContent = t.pacing_amber;
      } else {
        this.pacingBadge.classList.add('pacing-red');
        this.pacingText.textContent = t.pacing_red;
      }
    } else {
      const ratio = this.countdownRemaining / this.countdownDuration;
      if (ratio > 0.3) {
        this.pacingBadge.classList.add('pacing-green');
        this.pacingText.textContent = t.pacing_green;
      } else if (ratio > 0.1) {
        this.pacingBadge.classList.add('pacing-amber');
        this.pacingText.textContent = t.pacing_amber;
      } else {
        this.pacingBadge.classList.add('pacing-red');
        this.pacingText.textContent = t.pacing_red;
      }
    }
  }

  // ================= Timer Actions =================
  toggleTimer() {
    if (this.currentMode === 'stopwatch') {
      if (this.stopwatchIsRunning) {
        this.pauseStopwatch();
      } else {
        this.startStopwatch();
      }
    } else if (['pomodoro', 'slowlife', 'cyber'].includes(this.currentMode)) {
      if (this.countdownIsRunning) {
        this.pauseCountdown();
      } else {
        this.startCountdown();
      }
    }
  }

  resetTimer() {
    if (this.currentMode === 'stopwatch') {
      this.pauseStopwatch();
      this.stopwatchSeconds = 0;
      this.lastLapSeconds = 0;
      this.clearLaps();
      this.updateStopwatchDisplay(true);
      this.updateModeUI();
      const t = I18N[this.lang] || I18N['zh-CN'];
      document.title = t.site_title;
    } else if (['pomodoro', 'slowlife', 'cyber'].includes(this.currentMode)) {
      this.pauseCountdown();
      document.body.classList.remove('cyber-urgent');
      this.countdownRemaining = this.countdownDuration;
      this.updateCountdownDisplay(true);
      this.updateProgressBar();
      this.updateModeUI();
      const t = I18N[this.lang] || I18N['zh-CN'];
      document.title = t.site_title;
    }
  }

  // ================= Unified Countdown Logic =================
  startCountdown() {
    if (this.countdownRemaining <= 0) {
      this.countdownRemaining = this.countdownDuration;
    }
    this.countdownIsRunning = true;
    this.updateModeUI();

    clearInterval(this.countdownTimerId);
    this.countdownTimerId = setInterval(() => {
      this.countdownRemaining--;

      // Cyber mode heartbeat in last 10 seconds
      if (this.currentMode === 'cyber') {
        if (this.countdownRemaining <= 10 && this.countdownRemaining > 0) {
          document.body.classList.add('cyber-urgent');
          if (window.ambientAudio) window.ambientAudio.playHeartbeat();
        } else {
          document.body.classList.remove('cyber-urgent');
        }
      }

      if (this.countdownRemaining <= 0) {
        this.countdownRemaining = 0;
        this.updateCountdownDisplay(true);
        this.updateProgressBar();
        this.pauseCountdown();
        document.body.classList.remove('cyber-urgent');
        this.triggerBombBoom();

        const t = I18N[this.lang] || I18N['zh-CN'];

        if (this.currentMode === 'cyber') {
          if (window.ambientAudio) window.ambientAudio.playDefuseSuccess();
          this.dateText.textContent = t.cyber_done_title;
          this.dateSub.textContent = t.cyber_done_sub;
          document.title = `💥 ${t.cyber_done_title}`;
        } else if (this.currentMode === 'slowlife') {
          playZenBell();
          this.dateText.textContent = t.slowlife_done_title;
          this.dateSub.textContent = t.slowlife_done_sub;
          document.title = `🍳 ${t.slowlife_done_title}`;
        } else {
          playZenBell();
          this.dateText.textContent = t.pomo_done_title;
          this.dateSub.textContent = t.pomo_done_sub;
          document.title = `🔔 ${t.pomo_done_title}`;
        }
        return;
      }

      this.updateCountdownDisplay(true);
      this.updateProgressBar();
      this.updateModeUI();

      // Sync Tab Title
      const t = I18N[this.lang] || I18N['zh-CN'];
      const m = Math.floor(this.countdownRemaining / 60);
      const s = this.countdownRemaining % 60;
      const str = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      const icon = this.currentMode === 'cyber' ? '⚡' : (this.currentMode === 'slowlife' ? '🍳' : '🍅');
      document.title = `(${str}) ${icon} ${t.tab_suffix}`;
    }, 1000);
  }

  pauseCountdown() {
    this.countdownIsRunning = false;
    clearInterval(this.countdownTimerId);
    this.updateModeUI();
  }

  updateCountdownDisplay(animate = true) {
    const hours = Math.floor(this.countdownRemaining / 3600);
    const minutes = Math.floor((this.countdownRemaining % 3600) / 60);
    const seconds = this.countdownRemaining % 60;

    const hStr = String(hours).padStart(2, '0');
    const mStr = String(minutes).padStart(2, '0');
    const sStr = String(seconds).padStart(2, '0');

    this.cards.h1.setDigit(hStr[0], animate);
    this.cards.h2.setDigit(hStr[1], animate);
    this.cards.m1.setDigit(mStr[0], animate);
    this.cards.m2.setDigit(mStr[1], animate);
    this.cards.s1.setDigit(sStr[0], animate);
    this.cards.s2.setDigit(sStr[1], animate);

    const progress = this.countdownDuration > 0
      ? 1 - (this.countdownRemaining / this.countdownDuration)
      : 0;
    this.updateVisualSync(hStr, mStr, sStr, progress, this.countdownIsRunning);
  }

  // ================= Stopwatch Logic & Laps =================
  startStopwatch() {
    this.stopwatchIsRunning = true;
    this.updateModeUI();

    clearInterval(this.stopwatchTimerId);
    this.stopwatchTimerId = setInterval(() => {
      this.stopwatchSeconds++;
      this.updateStopwatchDisplay(true);
      this.updatePacingUI();

      const t = I18N[this.lang] || I18N['zh-CN'];
      const h = Math.floor(this.stopwatchSeconds / 3600);
      const m = Math.floor((this.stopwatchSeconds % 3600) / 60);
      const s = this.stopwatchSeconds % 60;
      const str = h > 0
        ? `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
        : `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      document.title = `(${str}) ⏱️ ${t.tab_suffix}`;
    }, 1000);
  }

  pauseStopwatch() {
    this.stopwatchIsRunning = false;
    clearInterval(this.stopwatchTimerId);
    this.updateModeUI();
  }

  recordLap() {
    if (this.currentMode !== 'stopwatch' || this.stopwatchSeconds === 0) return;

    const total = this.stopwatchSeconds;
    const split = total - this.lastLapSeconds;
    this.lastLapSeconds = total;

    const formatSec = (sec) => {
      const h = Math.floor(sec / 3600);
      const m = Math.floor((sec % 3600) / 60);
      const s = sec % 60;
      return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    const lapNum = this.laps.length + 1;
    this.laps.unshift({
      index: lapNum,
      totalStr: formatSec(total),
      splitStr: `+${formatSec(split)}`
    });

    this.renderLaps();
  }

  renderLaps() {
    if (this.laps.length === 0) {
      this.lapContainer.style.display = 'none';
      return;
    }
    this.lapContainer.style.display = 'block';
    this.lapList.innerHTML = this.laps.map(l => `
      <div class="lap-item">
        <span class="lap-idx">#${l.index}</span>
        <span class="lap-split">${l.splitStr}</span>
        <span class="lap-time">${l.totalStr}</span>
      </div>
    `).join('');
  }

  clearLaps() {
    this.laps = [];
    this.lastLapSeconds = 0;
    this.renderLaps();
  }

  updateStopwatchDisplay(animate = true) {
    const hours = Math.floor(this.stopwatchSeconds / 3600);
    const minutes = Math.floor((this.stopwatchSeconds % 3600) / 60);
    const seconds = this.stopwatchSeconds % 60;

    const hStr = String(hours).padStart(2, '0');
    const mStr = String(minutes).padStart(2, '0');
    const sStr = String(seconds).padStart(2, '0');

    this.cards.h1.setDigit(hStr[0], animate);
    this.cards.h2.setDigit(hStr[1], animate);
    this.cards.m1.setDigit(mStr[0], animate);
    this.cards.m2.setDigit(mStr[1], animate);
    this.cards.s1.setDigit(sStr[0], animate);
    this.cards.s2.setDigit(sStr[1], animate);

    const progress = (this.stopwatchSeconds % 60) / 60;
    this.updateVisualSync(hStr, mStr, sStr, progress, this.stopwatchIsRunning);
  }

  // ================= Real-time Clock Logic =================
  getTimeData() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let meridiem = '';
    if (this.is12Hour) {
      meridiem = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      if (hours === 0) hours = 12;
    }

    const hStr = String(hours).padStart(2, '0');
    const mStr = String(minutes).padStart(2, '0');
    const sStr = String(seconds).padStart(2, '0');

    return {
      now,
      hours: hStr,
      minutes: mStr,
      seconds: sStr,
      meridiem
    };
  }

  updateDate(date) {
    const t = I18N[this.lang] || I18N['zh-CN'];

    if (this.dateText) {
      this.dateText.textContent = t.formatDate(date);
    }

    if (this.dateSub) {
      const start = new Date(date.getFullYear(), 0, 0);
      const diff = date - start;
      const oneDay = 1000 * 60 * 60 * 24;
      const dayOfYear = Math.floor(diff / oneDay);
      this.dateSub.textContent = t.formatSub(dayOfYear);
    }
  }

  tickClock(animate = true) {
    if (this.currentMode !== 'clock') return;
    const data = this.getTimeData();

    this.cards.h1.setDigit(data.hours[0], animate);
    this.cards.h2.setDigit(data.hours[1], animate);
    this.cards.m1.setDigit(data.minutes[0], animate);
    this.cards.m2.setDigit(data.minutes[1], animate);

    if (this.showSeconds) {
      this.cards.s1.setDigit(data.seconds[0], animate);
      this.cards.s2.setDigit(data.seconds[1], animate);
    }

    if (this.is12Hour && this.meridiemBadge) {
      this.meridiemBadge.textContent = data.meridiem;
    }

    this.updateDate(data.now);

    const sec = parseInt(data.seconds, 10);
    const progress = (sec + (Date.now() % 1000) / 1000) / 60;
    this.updateVisualSync(data.hours, data.minutes, data.seconds, progress, true);
  }

  startClock() {
    this.tickClock(false);

    const scheduleNextTick = () => {
      if (this.currentMode !== 'clock') return;
      const now = Date.now();
      const delay = 1000 - (now % 1000);

      this.clockTimerId = setTimeout(() => {
        this.tickClock(true);
        scheduleNextTick();
      }, delay);
    };

    scheduleNextTick();
  }

  stopClock() {
    clearTimeout(this.clockTimerId);
  }
}

// Boot up clock once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.zenClock = new ZenFlipClock();
});
