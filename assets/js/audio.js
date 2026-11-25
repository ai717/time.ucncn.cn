/**
 * ZenFlip Clock - Ambient Audio Engine (Web Audio API)
 * Procedural lossless audio synthesis for rain, fireplace, cafe ambience & ticking
 * Zero network dependencies, zero 404s, infinite seamless loop.
 */

class AmbientAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isMuted = false;

    // Track states
    this.tracks = {
      rain: { active: false, volume: 0.6, gainNode: null, sourceNodes: [] },
      fireplace: { active: false, volume: 0.5, gainNode: null, sourceNodes: [], timer: null },
      cafe: { active: false, volume: 0.4, gainNode: null, sourceNodes: [] },
      clock: { active: false, volume: 0.4, gainNode: null, timer: null, isHigh: false }
    };
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Generate pink noise buffer for rain & ambience
  createPinkNoiseBuffer(durationSec = 5) {
    const bufferSize = this.ctx.sampleRate * durationSec;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  // Generate brown noise buffer for deep fireplace rumbles
  createBrownNoiseBuffer(durationSec = 5) {
    const bufferSize = this.ctx.sampleRate * durationSec;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 2.5; // Gain compensation
    }
    return buffer;
  }

  // ================= 1. Rain Synthesizer =================
  startRain() {
    this.ensureContext();
    const track = this.tracks.rain;
    track.gainNode = this.ctx.createGain();
    track.gainNode.gain.setValueAtTime(track.volume, this.ctx.currentTime);
    track.gainNode.connect(this.masterGain);

    // Pink noise buffer
    const bufferSource = this.ctx.createBufferSource();
    bufferSource.buffer = this.createPinkNoiseBuffer(6);
    bufferSource.loop = true;

    // Bandpass filter for soothing rain tone
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
    filter.Q.setValueAtTime(0.7, this.ctx.currentTime);

    // Highpass filter to eliminate mud
    const hpFilter = this.ctx.createBiquadFilter();
    hpFilter.type = 'highpass';
    hpFilter.frequency.setValueAtTime(400, this.ctx.currentTime);

    bufferSource.connect(filter);
    filter.connect(hpFilter);
    hpFilter.connect(track.gainNode);

    bufferSource.start(0);
    track.sourceNodes = [bufferSource, filter, hpFilter];
    track.active = true;
  }

  stopRain() {
    const track = this.tracks.rain;
    track.sourceNodes.forEach(node => {
      try {
        if (node.stop) node.stop();
        node.disconnect();
      } catch (e) {}
    });
    track.sourceNodes = [];
    track.active = false;
  }

  // ================= 2. Fireplace Synthesizer =================
  startFireplace() {
    this.ensureContext();
    const track = this.tracks.fireplace;
    track.gainNode = this.ctx.createGain();
    track.gainNode.gain.setValueAtTime(track.volume, this.ctx.currentTime);
    track.gainNode.connect(this.masterGain);

    // Low roar background
    const roarSource = this.ctx.createBufferSource();
    roarSource.buffer = this.createBrownNoiseBuffer(6);
    roarSource.loop = true;

    const roarFilter = this.ctx.createBiquadFilter();
    roarFilter.type = 'lowpass';
    roarFilter.frequency.setValueAtTime(260, this.ctx.currentTime);

    roarSource.connect(roarFilter);
    roarFilter.connect(track.gainNode);
    roarSource.start(0);

    track.sourceNodes = [roarSource, roarFilter];
    track.active = true;

    // Random crackle generator
    const scheduleCrackle = () => {
      if (!track.active) return;
      this.playCrackle(track.gainNode);
      const nextDelay = 80 + Math.random() * 450;
      track.timer = setTimeout(scheduleCrackle, nextDelay);
    };
    scheduleCrackle();
  }

  playCrackle(destNode) {
    if (!this.ctx || !destNode) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Sharp burst
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600 + Math.random() * 2400, now);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800 + Math.random() * 2200, now);
    filter.Q.setValueAtTime(4.0, now);

    const crackleVol = 0.08 + Math.random() * 0.25;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(crackleVol, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(destNode);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  stopFireplace() {
    const track = this.tracks.fireplace;
    clearTimeout(track.timer);
    track.sourceNodes.forEach(node => {
      try {
        if (node.stop) node.stop();
        node.disconnect();
      } catch (e) {}
    });
    track.sourceNodes = [];
    track.active = false;
  }

  // ================= 3. Cafe Ambience Synthesizer =================
  startCafe() {
    this.ensureContext();
    const track = this.tracks.cafe;
    track.gainNode = this.ctx.createGain();
    track.gainNode.gain.setValueAtTime(track.volume, this.ctx.currentTime);
    track.gainNode.connect(this.masterGain);

    // Warm room chatter murmur simulation using dual formant filters
    const pinkSource = this.ctx.createBufferSource();
    pinkSource.buffer = this.createPinkNoiseBuffer(6);
    pinkSource.loop = true;

    const f1 = this.ctx.createBiquadFilter();
    f1.type = 'bandpass';
    f1.frequency.setValueAtTime(480, this.ctx.currentTime);
    f1.Q.setValueAtTime(2.5, this.ctx.currentTime);

    const f2 = this.ctx.createBiquadFilter();
    f2.type = 'bandpass';
    f2.frequency.setValueAtTime(1100, this.ctx.currentTime);
    f2.Q.setValueAtTime(3.0, this.ctx.currentTime);

    pinkSource.connect(f1);
    pinkSource.connect(f2);
    f1.connect(track.gainNode);
    f2.connect(track.gainNode);
    pinkSource.start(0);

    track.sourceNodes = [pinkSource, f1, f2];
    track.active = true;
  }

  stopCafe() {
    const track = this.tracks.cafe;
    track.sourceNodes.forEach(node => {
      try {
        if (node.stop) node.stop();
        node.disconnect();
      } catch (e) {}
    });
    track.sourceNodes = [];
    track.active = false;
  }

  // ================= 4. Mechanical Clock Ticking =================
  startClockTick() {
    this.ensureContext();
    const track = this.tracks.clock;
    track.gainNode = this.ctx.createGain();
    track.gainNode.gain.setValueAtTime(track.volume, this.ctx.currentTime);
    track.gainNode.connect(this.masterGain);
    track.active = true;

    const tickLoop = () => {
      if (!track.active) return;
      this.playTick(track.isHigh, track.gainNode);
      track.isHigh = !track.isHigh;
      track.timer = setTimeout(tickLoop, 1000);
    };
    tickLoop();
  }

  playTick(isHigh, destNode) {
    if (!this.ctx || !destNode) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Wood/metal mechanical escapement click
    const freq = isHigh ? 1320 : 1080;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq, now);
    filter.Q.setValueAtTime(8, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.25, now + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(destNode);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  stopClockTick() {
    const track = this.tracks.clock;
    clearTimeout(track.timer);
    track.active = false;
  }

  // ================= Control Interfaces =================
  toggleTrack(trackName) {
    const track = this.tracks[trackName];
    if (!track) return false;

    if (track.active) {
      if (trackName === 'rain') this.stopRain();
      else if (trackName === 'fireplace') this.stopFireplace();
      else if (trackName === 'cafe') this.stopCafe();
      else if (trackName === 'clock') this.stopClockTick();
      return false;
    } else {
      if (trackName === 'rain') this.startRain();
      else if (trackName === 'fireplace') this.startFireplace();
      else if (trackName === 'cafe') this.startCafe();
      else if (trackName === 'clock') this.startClockTick();
      return true;
    }
  }

  setTrackVolume(trackName, volume0to1) {
    const track = this.tracks[trackName];
    if (!track) return;
    track.volume = Math.max(0, Math.min(1, volume0to1));
    if (track.gainNode && this.ctx) {
      track.gainNode.gain.setValueAtTime(track.volume, this.ctx.currentTime);
    }
  }

  // ================= Procedural Special Sound Effects =================
  // 1. Tense Heartbeat for Cyber Defuse Countdown (last 10s)
  playHeartbeat() {
    this.ensureContext();
    const now = this.ctx.currentTime;

    const playThump = (timeOffset, freq, vol) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + timeOffset);
      osc.frequency.exponentialRampToValueAtTime(35, now + timeOffset + 0.12);

      gain.gain.setValueAtTime(0.0001, now + timeOffset);
      gain.gain.exponentialRampToValueAtTime(vol, now + timeOffset + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + timeOffset + 0.15);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now + timeOffset);
      osc.stop(now + timeOffset + 0.16);
    };

    // Double beat: "lub-dub"
    playThump(0, 72, 0.45);
    playThump(0.12, 58, 0.35);
  }

  // 2. Uplifting Cyber Triumph Fanfare (Defused / Mission Accomplished)
  playDefuseSuccess() {
    this.ensureContext();
    const now = this.ctx.currentTime;
    // Major 7th ascending arpeggio (C5, E5, G5, B5, C6)
    const notes = [523.25, 659.25, 783.99, 987.77, 1046.50];

    notes.forEach((freq, idx) => {
      const noteTime = now + idx * 0.09;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.0001, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.28, noteTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 1.2);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(noteTime);
      osc.stop(noteTime + 1.3);
    });
  }

  // 3. Gentle kitchen bubbling simmer click
  playBoilingBubble() {
    this.ensureContext();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    const startFreq = 400 + Math.random() * 500;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(startFreq + 300, now + 0.05);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.15, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.07);
  }
}

// Global Ambient Audio Instance
window.ambientAudio = new AmbientAudioEngine();
