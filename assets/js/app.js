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
    visual_pendulum: '复古摆钟',
    visual_dial: '扫秒表盘',
    visual_sand: '流沙漏斗',
    visual_bomb: '火花炸弹',

    // Modes
    mode_clock: '实时时钟',
    mode_stopwatch: '专注秒钟',
    mode_countdown: '倒计时',

    footer_tip: '💡 双击任意处或按 <span class="kbd-badge">F</span> 键进入极简全屏 · 按 <span class="kbd-badge">M</span> 切换分类 · 按 <span class="kbd-badge">V</span> 切换形态',
    footer_slogan: '专注时钟 & 倒计时',
    theme_oled: 'OLED 纯黑',
    theme_parchment: '羊皮纸白',
    theme_amber: '暖橘微光',

    // Timer Actions
    btn_start_focus: '开始计时',
    btn_start_timer: '开始计时',
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

    // Clock Tick Sounds
    sound_label: '秒针音:',
    tick_mute: '静音',
    tick_mechanical: '机械发条',
    tick_quartz: '石英脉冲',
    tick_pendulum: '复古摆钟',
    tick_chrono: '精密秒表',
    wakelock_on: '防息屏: 开启',
    wakelock_off: '防息屏: 关闭',

    // Custom Time
    custom_time_btn: '自定义',
    custom_time_title: '设定自定义倒计时',
    time_hours: '时',
    time_minutes: '分',
    time_seconds: '秒',
    custom_apply: '确认并载入',

    // Status titles
    countdown_title: (m) => `⏳ 倒计时 · ${m} 分钟`,
    countdown_sub: '保持专注，享受分秒心流',
    countdown_done_title: '🎉 倒计时已结束！',
    countdown_done_sub: '伴学钟声已鸣响，伸个懒腰休息片刻吧',

    stopwatch_title: '⏱️ 专注秒钟 · 每一秒皆是积累',
    stopwatch_sub: '大屏精准扫秒计时 · 保持心流状态',

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
    visual_pendulum: 'Vintage Pendulum',
    visual_dial: 'Stopwatch Dial',
    visual_sand: 'Hourglass',
    visual_bomb: 'Spark Bomb',

    // Modes
    mode_clock: 'Real-time Clock',
    mode_stopwatch: 'Stopwatch',
    mode_countdown: 'Countdown',

    footer_tip: '💡 Double-click or press <span class="kbd-badge">F</span> for fullscreen · <span class="kbd-badge">M</span> switch mode · <span class="kbd-badge">V</span> visual',
    footer_slogan: 'Focus Clock & Timer',
    theme_oled: 'OLED Pure Dark',
    theme_parchment: 'Parchment White',
    theme_amber: 'Amber Glow',

    // Timer Actions
    btn_start_focus: 'Start',
    btn_start_timer: 'Start Timer',
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

    // Clock Tick Sounds
    sound_label: 'Tick Sound:',
    tick_mute: 'Mute',
    tick_mechanical: 'Mechanical',
    tick_quartz: 'Quartz',
    tick_pendulum: 'Pendulum',
    tick_chrono: 'Chrono',
    wakelock_on: 'WakeLock: ON',
    wakelock_off: 'WakeLock: OFF',

    // Custom Time
    custom_time_btn: 'Custom',
    custom_time_title: 'Set Custom Countdown',
    time_hours: 'h',
    time_minutes: 'm',
    time_seconds: 's',
    custom_apply: 'Apply & Load',

    // Status titles
    countdown_title: (m) => `⏳ Countdown · ${m} min`,
    countdown_sub: 'Stay focused and flow in the moment',
    countdown_done_title: '🎉 Countdown Finished!',
    countdown_done_sub: 'Chime has played. Take a short rest!',

    stopwatch_title: '⏱️ Focus Stopwatch',
    stopwatch_sub: 'High-precision sweeping second hand · Deep flow state',
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

    // Preset & Custom Countdown Elements
    this.countdownPresets = document.getElementById('countdown-presets');
    this.countdownPillButtons = document.querySelectorAll('#countdown-presets .btn-timer-pill:not(.btn-custom-trigger)');
    this.btnCustomTrigger = document.getElementById('btn-custom-trigger');
    this.customTimePanel = document.getElementById('custom-time-panel');
    this.btnCloseCustom = document.getElementById('btn-close-custom');
    this.inputCustomHours = document.getElementById('input-custom-hours');
    this.inputCustomMinutes = document.getElementById('input-custom-minutes');
    this.inputCustomSeconds = document.getElementById('input-custom-seconds');
    this.btnApplyCustom = document.getElementById('btn-apply-custom');
    this.btnQuickClear = document.getElementById('btn-quick-clear');
    this.quickChips = document.querySelectorAll('.quick-chip[data-add-sec]');

    this.lapContainer = document.getElementById('lap-container');
    this.lapList = document.getElementById('lap-list');
    this.btnClearLaps = document.getElementById('btn-clear-laps');

    // Clock Tick Sound Pills
    this.soundPills = document.querySelectorAll('.sound-pill');

    // Cards
    this.cards = {
      h1: new FlipCard(document.getElementById('card-h1')),
      h2: new FlipCard(document.getElementById('card-h2')),
      m1: new FlipCard(document.getElementById('card-m1')),
      m2: new FlipCard(document.getElementById('card-m2')),
      s1: new FlipCard(document.getElementById('card-s1')),
      s2: new FlipCard(document.getElementById('card-s2'))
    };

    // Visual Representations Allowed per Mode
    this.modeVisualMap = {
      clock: ['flip', 'pendulum'],
      stopwatch: ['flip', 'dial'],
      countdown: ['flip', 'sand', 'bomb']
    };

    // Visual Representations State & DOM Elements
    this.currentVisual = localStorage.getItem('zenflip_visual') || 'flip';
    this.visualButtons = document.querySelectorAll('.visual-btn');
    this.visualContainers = {
      flip: document.getElementById('visual-container-flip'),
      pendulum: document.getElementById('visual-container-pendulum'),
      dial: document.getElementById('visual-container-dial'),
      sand: document.getElementById('visual-container-sand'),
      bomb: document.getElementById('visual-container-bomb')
    };

    // Pendulum Clock Visual Elements
    this.pendulumHourHand = document.getElementById('pendulum-hour-hand');
    this.pendulumMinuteHand = document.getElementById('pendulum-minute-hand');
    this.pendulumSecondHand = document.getElementById('pendulum-second-hand');
    this.pendulumReadout = document.getElementById('pendulum-readout');
    this.pendulumArm = document.getElementById('pendulum-arm');

    // Dial Visual Elements
    this.dialNeedle = document.getElementById('dial-needle');
    this.dialReadout = document.getElementById('dial-readout');

    // Sand Visual Elements
    this.sandTopPath = document.getElementById('sand-top-path');
    this.sandBottomPath = document.getElementById('sand-bottom-path');
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

    // Initialize Active Clock Tick Sound Pill
    const curTick = window.clockAudio ? window.clockAudio.currentTick : 'mute';
    this.soundPills.forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-tick') === curTick);
    });

    this.updateVisualBarForMode(this.currentMode);
    this.setVisual(this.currentVisual);
  }

  updateVisualBarForMode(mode) {
    const allowed = this.modeVisualMap[mode] || ['flip'];
    this.visualButtons.forEach(btn => {
      const v = btn.getAttribute('data-visual');
      const isAllowed = allowed.includes(v);
      btn.style.display = isAllowed ? '' : 'none';
    });
  }

  // ================= Visual Representation Switching =================
  setVisual(visualName) {
    const allowed = this.modeVisualMap[this.currentMode] || ['flip'];
    if (!allowed.includes(visualName) || !this.visualContainers[visualName]) {
      visualName = allowed[0];
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
    const list = this.modeVisualMap[this.currentMode] || ['flip'];
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
    this.updateHourglass(progress, isRunning, shortStr);

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

    // 4. Vintage Pendulum Clock Update
    if (this.pendulumHourHand && this.pendulumMinuteHand && this.pendulumSecondHand) {
      const h = parseInt(hStr, 10) || 0;
      const m = parseInt(mStr, 10) || 0;
      const s = parseInt(sStr, 10) || 0;
      const ms = Date.now() % 1000;
      const hDeg = (h % 12 + m / 60) * 30;
      const mDeg = (m + s / 60) * 6;
      const sDeg = (s + ms / 1000) * 6;
      this.pendulumHourHand.setAttribute('transform', `rotate(${hDeg.toFixed(1)})`);
      this.pendulumMinuteHand.setAttribute('transform', `rotate(${mDeg.toFixed(1)})`);
      this.pendulumSecondHand.setAttribute('transform', `rotate(${sDeg.toFixed(1)})`);
    }
    if (this.pendulumReadout) {
      this.pendulumReadout.textContent = timeStr;
    }
  }

  updateHourglass(progress, isRunning, timeStr) {
    const p = Math.max(0, Math.min(1, progress));

    // 1. Top bulb sand path
    if (this.sandTopPath) {
      if (p >= 0.995) {
        this.sandTopPath.setAttribute('d', '');
      } else {
        const topY = 30 + p * 144;
        const halfW = 75 * Math.pow(Math.max(0.01, 1 - p * 0.96), 0.45) + 3;
        const leftX = 120 - halfW;
        const rightX = 120 + halfW;
        const dip = p >= 0.94 ? 0 : Math.min(14, (1 - p) * 16);
        const d = `M ${leftX.toFixed(1)},${topY.toFixed(1)} Q 120,${(topY + dip).toFixed(1)} ${rightX.toFixed(1)},${topY.toFixed(1)} C 175,115 140,155 125,175 L 115,175 C 100,155 65,115 ${leftX.toFixed(1)},${topY.toFixed(1)} Z`;
        this.sandTopPath.setAttribute('d', d);
      }
    }

    // 2. Trickle line animation & visibility
    if (this.sandTrickle) {
      const isFlowing = isRunning && p > 0.001 && p < 0.999;
      this.sandTrickle.style.opacity = isFlowing ? '1' : (p >= 0.999 ? '0' : '0.25');
    }

    // 3. Bottom bulb sand mound
    if (this.sandBottomPath) {
      if (p <= 0.003) {
        this.sandBottomPath.setAttribute('d', '');
      } else {
        const peakY = 330 - Math.pow(p, 0.72) * 115;
        const baseHalfW = 16 + Math.pow(p, 0.5) * 59;
        const bLeft = 120 - baseHalfW;
        const bRight = 120 + baseHalfW;
        const d = `M ${bLeft.toFixed(1)},330 Q 120,${peakY.toFixed(1)} ${bRight.toFixed(1)},330 Z`;
        this.sandBottomPath.setAttribute('d', d);
      }
    }

    // 4. Sand readout text below base
    if (this.sandReadout) {
      this.sandReadout.textContent = timeStr;
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

    // Countdown Presets
    this.countdownPillButtons.forEach(pill => {
      pill.addEventListener('click', () => {
        const minutes = parseInt(pill.getAttribute('data-minutes'), 10);
        this.countdownPillButtons.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        if (this.customTimePanel) this.customTimePanel.style.display = 'none';

        this.pauseCountdown();
        this.countdownDuration = minutes * 60;
        this.countdownRemaining = this.countdownDuration;
        this.updateCountdownDisplay(true);
        this.updateProgressBar();
        this.updateModeUI();
      });
    });

    // Custom Time Controls
    this.setupCustomTimeControls();

    // Clock Tick Sound Pills
    this.soundPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const tickType = pill.getAttribute('data-tick');
        this.soundPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        if (window.clockAudio) {
          window.clockAudio.setTickSound(tickType);
        }
      });
    });
  }

  setupCustomTimeControls() {
    if (this.btnCustomTrigger) {
      this.btnCustomTrigger.addEventListener('click', () => {
        const isShown = this.customTimePanel.style.display !== 'none';
        this.customTimePanel.style.display = isShown ? 'none' : 'flex';
        if (!isShown) {
          const h = Math.floor(this.countdownDuration / 3600);
          const m = Math.floor((this.countdownDuration % 3600) / 60);
          const s = this.countdownDuration % 60;
          if (this.inputCustomHours) this.inputCustomHours.value = h;
          if (this.inputCustomMinutes) this.inputCustomMinutes.value = m;
          if (this.inputCustomSeconds) this.inputCustomSeconds.value = s;
        }
      });
    }

    if (this.btnCloseCustom) {
      this.btnCloseCustom.addEventListener('click', () => {
        this.customTimePanel.style.display = 'none';
      });
    }

    if (this.btnQuickClear) {
      this.btnQuickClear.addEventListener('click', () => {
        if (this.inputCustomHours) this.inputCustomHours.value = 0;
        if (this.inputCustomMinutes) this.inputCustomMinutes.value = 0;
        if (this.inputCustomSeconds) this.inputCustomSeconds.value = 0;
      });
    }

    this.quickChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const addSec = parseInt(chip.getAttribute('data-add-sec'), 10) || 0;
        let curH = parseInt(this.inputCustomHours.value, 10) || 0;
        let curM = parseInt(this.inputCustomMinutes.value, 10) || 0;
        let curS = parseInt(this.inputCustomSeconds.value, 10) || 0;
        let total = curH * 3600 + curM * 60 + curS + addSec;

        const newH = Math.floor(total / 3600);
        const newM = Math.floor((total % 3600) / 60);
        const newS = total % 60;

        if (this.inputCustomHours) this.inputCustomHours.value = newH;
        if (this.inputCustomMinutes) this.inputCustomMinutes.value = newM;
        if (this.inputCustomSeconds) this.inputCustomSeconds.value = newS;
      });
    });

    if (this.btnApplyCustom) {
      this.btnApplyCustom.addEventListener('click', () => {
        const h = Math.max(0, parseInt(this.inputCustomHours.value, 10) || 0);
        const m = Math.max(0, Math.min(59, parseInt(this.inputCustomMinutes.value, 10) || 0));
        const s = Math.max(0, Math.min(59, parseInt(this.inputCustomSeconds.value, 10) || 0));
        const total = h * 3600 + m * 60 + s;

        if (total <= 0) return;

        this.pauseCountdown();
        this.countdownDuration = total;
        this.countdownRemaining = total;

        // Deselect presets
        this.countdownPillButtons.forEach(p => p.classList.remove('active'));

        this.customTimePanel.style.display = 'none';
        this.updateCountdownDisplay(false);
        this.updateProgressBar();
        this.updateModeUI();
      });
    }
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
    const modes = ['clock', 'stopwatch', 'countdown'];
    const idx = modes.indexOf(this.currentMode);
    const nextMode = modes[(idx + 1) % modes.length];
    this.setMode(nextMode);
  }

  // ================= Mode Switching Machine =================
  setMode(mode, autoMatchVisual = true) {
    if (this.currentMode === mode) return;
    this.currentMode = mode;

    this.modeButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });

    this.stopClock();
    this.pauseCountdown();
    this.pauseStopwatch();

    // Default element displays
    this.timerActionBar.style.display = 'none';
    if (this.countdownPresets) this.countdownPresets.style.display = 'none';
    if (this.customTimePanel) this.customTimePanel.style.display = 'none';
    this.btnTimerLap.style.display = 'none';
    this.btnPacingToggle.style.display = 'none';
    this.lapContainer.style.display = 'none';
    this.timeProgressBar.style.display = 'none';
    this.pacingBadge.style.display = 'none';

    // Auto-filter visual representation buttons for the new mode
    this.updateVisualBarForMode(mode);
    const allowed = this.modeVisualMap[mode] || ['flip'];

    if (autoMatchVisual) {
      if (mode === 'clock') {
        this.setVisual(this.currentVisual === 'pendulum' ? 'pendulum' : 'flip');
      } else if (mode === 'stopwatch') {
        this.setVisual(this.currentVisual === 'dial' ? 'dial' : 'dial');
      } else if (mode === 'countdown') {
        this.setVisual(['sand', 'bomb'].includes(this.currentVisual) ? this.currentVisual : 'sand');
      }
    } else if (!allowed.includes(this.currentVisual)) {
      this.setVisual(allowed[0]);
    }

    if (mode === 'clock') {
      if (this.meridiemBadge && this.is12Hour) {
        this.meridiemBadge.style.display = 'block';
      }
      this.startClock();
    } else {
      if (this.meridiemBadge) this.meridiemBadge.style.display = 'none';
      this.timerActionBar.style.display = 'flex';

      if (mode === 'countdown') {
        this.countdownPresets.style.display = 'flex';
        this.timeProgressBar.style.display = 'block';
        this.updateCountdownDisplay(false);
      } else if (mode === 'stopwatch') {
        this.btnTimerLap.style.display = 'inline-flex';
        this.btnPacingToggle.style.display = 'inline-flex';
        if (this.laps.length > 0) this.lapContainer.style.display = 'block';
        this.updateStopwatchDisplay(false);
      }
      this.updateModeUI();
    }
  }

  updateModeUI() {
    const t = I18N[this.lang] || I18N['zh-CN'];

    if (this.currentMode === 'clock') {
      this.updateDate(new Date());
    } else if (this.currentMode === 'countdown') {
      const minutes = Math.round(this.countdownDuration / 60);
      this.dateText.textContent = t.countdown_title(minutes);
      this.dateSub.textContent = t.countdown_sub;
      this.updatePlayBtnState(t.btn_start_timer, t.btn_continue);
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
    } else if (this.currentMode === 'countdown' || ['pomodoro', 'slowlife', 'cyber'].includes(this.currentMode)) {
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
    } else if (this.currentMode === 'countdown' || ['pomodoro', 'slowlife', 'cyber'].includes(this.currentMode)) {
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

      // Clock tick sound
      if (window.clockAudio) window.clockAudio.playTick();

      if (this.countdownRemaining <= 0) {
        this.countdownRemaining = 0;
        this.updateCountdownDisplay(true);
        this.updateProgressBar();
        this.pauseCountdown();

        if (this.currentVisual === 'bomb') {
          this.triggerBombBoom();
          if (window.clockAudio) window.clockAudio.playExplosion();
        } else {
          if (window.clockAudio) window.clockAudio.playZenChime();
        }

        const t = I18N[this.lang] || I18N['zh-CN'];
        this.dateText.textContent = t.countdown_done_title;
        this.dateSub.textContent = t.countdown_done_sub;
        document.title = `🔔 ${t.countdown_done_title}`;
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
      document.title = `(${str}) ⏳ ${t.tab_suffix}`;
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

      // Clock tick sound
      if (window.clockAudio) window.clockAudio.playTick();

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

    if (animate && window.clockAudio) {
      window.clockAudio.playTick();
    }
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
