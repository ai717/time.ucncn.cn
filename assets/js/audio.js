/**
 * ZenFlip Clock - Clock Tick Audio Synthesis Engine (Web Audio API)
 * Pure procedural synthesis for authentic mechanical, quartz, pendulum, and chronometer ticks.
 * Zero external audio files, zero network dependencies, sample-accurate timing.
 */

class ClockTickAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.currentTick = localStorage.getItem('zenflip_tick_sound') || 'mute';
    this.volume = parseFloat(localStorage.getItem('zenflip_tick_vol')) || 0.6;
    this.isTickHigh = false; // Alternating tick-tock flag
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setTickSound(tickType) {
    this.currentTick = tickType;
    localStorage.setItem('zenflip_tick_sound', tickType);
    if (tickType !== 'mute') {
      this.ensureContext();
      // Play an instant test tick so user gets auditory feedback
      this.playTick();
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    localStorage.setItem('zenflip_tick_vol', this.volume);
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  /**
   * Main tick entry point: called on every second change
   */
  playTick() {
    if (this.currentTick === 'mute') return;
    this.ensureContext();

    this.isTickHigh = !this.isTickHigh;

    switch (this.currentTick) {
      case 'mechanical':
        this.playMechanicalTick(this.isTickHigh);
        break;
      case 'quartz':
        this.playQuartzTick();
        break;
      case 'pendulum':
        this.playPendulumTick(this.isTickHigh);
        break;
      case 'chrono':
        this.playChronoTick();
        break;
      default:
        break;
    }
  }

  /**
   * 1. 经典机械齿轮发条擒纵系统 (Mechanical Escapement)
   * 双频谐振：Tick (高音) 与 Tock (低音) 交替，带细微金属回弹
   */
  playMechanicalTick(isHigh) {
    const now = this.ctx.currentTime;
    const baseFreq = isHigh ? 2200 : 1650;
    const bodyFreq = isHigh ? 780 : 620;

    // Metal escapement tooth strike (oscillator with fast pitch sweep)
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.4, now + 0.025);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.42 * this.volume, now + 0.001);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.04);

    // Warm wooden / metal case body resonance
    const bodyOsc = this.ctx.createOscillator();
    const bodyGain = this.ctx.createGain();

    bodyOsc.type = 'sine';
    bodyOsc.frequency.setValueAtTime(bodyFreq, now);
    bodyOsc.frequency.exponentialRampToValueAtTime(bodyFreq * 0.7, now + 0.03);

    bodyGain.gain.setValueAtTime(0.0001, now);
    bodyGain.gain.linearRampToValueAtTime(0.28 * this.volume, now + 0.002);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

    bodyOsc.connect(bodyGain);
    bodyGain.connect(this.masterGain);

    bodyOsc.start(now);
    bodyOsc.stop(now + 0.05);
  }

  /**
   * 2. 现代高精度石英指针步进脉冲 (Quartz Step)
   * 极简紧凑的高频冲击，超快瞬态衰减，轻盈现代
   */
  playQuartzTick() {
    const now = this.ctx.currentTime;

    // Filtered noise transient for snappy click
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.015);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(3200, now);
    filter.Q.setValueAtTime(2.5, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.35 * this.volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
  }

  /**
   * 3. 沉稳复古落地大摆钟 (Grandfather Pendulum)
   * 85Hz 重木壳低频共鸣箱体，厚重且安宁
   */
  playPendulumTick(isHigh) {
    const now = this.ctx.currentTime;
    const clickFreq = isHigh ? 1400 : 1150;
    const woodThump = isHigh ? 95 : 82;

    // Heavy low frequency wood chest thump
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();

    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(woodThump, now);
    subOsc.frequency.exponentialRampToValueAtTime(40, now + 0.09);

    subGain.gain.setValueAtTime(0.0001, now);
    subGain.gain.linearRampToValueAtTime(0.55 * this.volume, now + 0.003);
    subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);

    subOsc.connect(subGain);
    subGain.connect(this.masterGain);

    subOsc.start(now);
    subOsc.stop(now + 0.12);

    // Sharp escapement release click
    const clickOsc = this.ctx.createOscillator();
    const clickGain = this.ctx.createGain();

    clickOsc.type = 'triangle';
    clickOsc.frequency.setValueAtTime(clickFreq, now);

    clickGain.gain.setValueAtTime(0.0001, now);
    clickGain.gain.linearRampToValueAtTime(0.32 * this.volume, now + 0.001);
    clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

    clickOsc.connect(clickGain);
    clickGain.connect(this.masterGain);

    clickOsc.start(now);
    clickOsc.stop(now + 0.035);
  }

  /**
   * 4. 金属精密秒表双击音 (Precision Chronometer)
   * 双齿轮咬合：15ms 快速双声金属轻响 (Click-Clack)
   */
  playChronoTick() {
    const now = this.ctx.currentTime;

    const playClick = (timeOffset, freq, vol) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + timeOffset);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, now + timeOffset + 0.015);

      gain.gain.setValueAtTime(0.0001, now + timeOffset);
      gain.gain.linearRampToValueAtTime(vol * this.volume, now + timeOffset + 0.001);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + timeOffset + 0.02);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now + timeOffset);
      osc.stop(now + timeOffset + 0.025);
    };

    // Double pulse: gear engagement and escapement rebound
    playClick(0, 3600, 0.38);
    playClick(0.014, 2800, 0.28);
  }

  /**
   * 倒计时结束时的清脆伴学磬声 / 禅钟
   */
  playZenChime() {
    this.ensureContext();
    const now = this.ctx.currentTime;
    // Harmonic frequencies for bronze singing bowl / chime
    const freqs = [587.33, 880, 1174.66, 1760]; // D5, A5, D6, A6

    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const amp = (0.28 / (idx + 1)) * this.volume;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(amp, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 3.0);
    });
  }

  /**
   * 炸弹倒计时结束时的轰鸣爆发音效 (Procedural Explosion)
   */
  playExplosion() {
    this.ensureContext();
    const now = this.ctx.currentTime;

    // Sub rumble
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(140, now);
    subOsc.frequency.exponentialRampToValueAtTime(28, now + 0.6);

    subGain.gain.setValueAtTime(0.0001, now);
    subGain.gain.linearRampToValueAtTime(0.6 * this.volume, now + 0.02);
    subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

    subOsc.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(now);
    subOsc.stop(now + 0.85);

    // Blast noise burst
    const dur = 0.5;
    const bufferSize = Math.floor(this.ctx.sampleRate * dur);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(150, now + dur);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.55 * this.volume, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    noise.start(now);
  }
}

// Global Clock Audio Engine Instance
window.clockAudio = new ClockTickAudioEngine();
window.playZenBell = () => window.clockAudio.playZenChime();
