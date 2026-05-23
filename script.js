/* ═══════════════════════════════════════════════════════════
   PIRÁMIDE DE ALIMENTACIÓN SALUDABLE — script.js
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ── DATA ──────────────────────────────────────────────── */
const LEVELS = {
  1: {
    badge: 'Nivel 1 · Base',
    color: '#5a9e6f',
    title: 'Frutas, Verduras, Cereales & Agua',
    sub: 'El cimiento de una dieta equilibrada y llena de energía',
    desc: 'La base de la pirámide representa los grupos de alimentos que deben conformar la mayor parte de nuestra alimentación diaria. El agua es el nutriente más esencial; las frutas y verduras aportan vitaminas, minerales y fibra; y los cereales integrales proveen energía sostenida gracias a su índice glucémico bajo.',
    benefits: [
      'Hidratación óptima del organismo',
      'Aporte abundante de vitaminas A, C y K',
      'Fibra dietética para una digestión saludable',
      'Antioxidantes que reducen el riesgo de enfermedades crónicas',
      'Energía estable y duradera gracias a los carbohidratos complejos',
      'Micronutrientes esenciales: hierro, folato, potasio',
    ],
    examples: ['Agua pura', 'Manzana', 'Naranja', 'Plátano', 'Espinaca', 'Brócoli', 'Zanahoria', 'Tomate', 'Avena', 'Arroz integral', 'Quinua', 'Pan integral', 'Lechuga', 'Pimiento', 'Kiwi', 'Fresa'],
    freq: '💧 Agua: 8 vasos (2 litros) al día · 🍎 Frutas: 3–4 porciones diarias · 🥦 Verduras: 4–5 porciones diarias · 🌾 Cereales integrales: 6–8 porciones al día',
  },
  2: {
    badge: 'Nivel 2 · Moderado',
    color: '#e8a838',
    title: 'Proteínas & Lácteos',
    sub: 'Esenciales para construir y reparar tejidos',
    desc: 'Este nivel incluye proteínas de origen animal y vegetal, así como productos lácteos. Las proteínas son los bloques constructores del cuerpo: necesarias para el crecimiento muscular, la producción de enzimas y el correcto funcionamiento del sistema inmunológico. Los lácteos aportan calcio crucial para huesos fuertes.',
    benefits: [
      'Construcción y reparación de músculo y tejidos',
      'Calcio y vitamina D para huesos y dientes fuertes',
      'Hierro hemo de alta biodisponibilidad (carnes)',
      'Vitamina B12 indispensable para el sistema nervioso',
      'Proteínas completas con todos los aminoácidos esenciales',
      'Sensación de saciedad prolongada',
    ],
    examples: ['Pollo a la plancha', 'Salmón', 'Huevos', 'Lentejas', 'Garbanzos', 'Frijoles', 'Tofu', 'Yogurt natural', 'Queso fresco', 'Leche descremada', 'Almendras', 'Maní', 'Nueces', 'Atún en agua'],
    freq: '🥩 Proteínas: 2–3 porciones al día · 🥛 Lácteos: 2–3 porciones diarias · 🥜 Legumbres: al menos 3 veces por semana',
  },
  3: {
    badge: 'Nivel 3 · Con moderación',
    color: '#e07c3a',
    title: 'Grasas Saludables',
    sub: 'Buenas grasas para el corazón y el cerebro',
    desc: 'No todas las grasas son malas. Las grasas insaturadas —presentes en el aceite de oliva, el aguacate y los frutos secos— son fundamentales para la salud cardiovascular, la absorción de vitaminas liposolubles (A, D, E, K) y el correcto funcionamiento del cerebro. La clave está en elegir la calidad y controlar la cantidad.',
    benefits: [
      'Protección cardiovascular (reducción de LDL)',
      'Absorción de vitaminas liposolubles A, D, E, K',
      'Ácidos grasos omega-3 antiinflamatorios',
      'Salud cerebral y función cognitiva',
      'Mantenimiento de la piel y membranas celulares',
      'Regulación hormonal saludable',
    ],
    examples: ['Aceite de oliva extra virgen', 'Aguacate / Palta', 'Nueces', 'Almendras', 'Maní', 'Semillas de chía', 'Semillas de lino', 'Aceite de coco (con moderación)', 'Pescado azul (sardina, salmón)'],
    freq: '🫒 Aceite de oliva: 2–4 cucharadas al día · 🥑 Aguacate: ½ unidad diaria · 🌰 Frutos secos: un puñado (30 g) al día',
  },
  4: {
    badge: 'Nivel 4 · Ocasional',
    color: '#c04040',
    title: 'Azúcar, Gaseosas & Ultraprocesados',
    sub: 'Consumir con moderación extrema o evitar',
    desc: 'La punta de la pirámide agrupa alimentos que aportan calorías vacías: alto contenido de azúcar, sal, grasas trans y aditivos, pero escasos o nulos nutrientes beneficiosos. Su consumo frecuente se asocia a obesidad, diabetes tipo 2, enfermedades cardiovasculares e inflamación crónica. No están prohibidos, pero deben ser una excepción.',
    benefits: [
      '⚠️ No aportan beneficios nutricionales significativos',
      '⚠️ Alto contenido calórico sin micronutrientes',
      '⚠️ Azúcares añadidos elevan el riesgo de diabetes',
      '⚠️ Sodio excesivo daña la presión arterial',
      '⚠️ Grasas trans aumentan el colesterol LDL',
      '⚠️ Aditivos y conservantes de efectos a largo plazo inciertos',
    ],
    examples: ['Refrescos y gaseosas', 'Dulces y caramelos', 'Pasteles y tortas industriales', 'Papas fritas empacadas', 'Embutidos y salchichas', 'Comida rápida', 'Galletas rellenas', 'Helados industriales', 'Salsas procesadas'],
    freq: '🚫 Lo ideal: máximo 1–2 veces por semana y en porciones pequeñas · La OMS recomienda que el azúcar libre no supere el 5–10 % de la ingesta calórica diaria',
  },
};

/* ── DOM ───────────────────────────────────────────────── */
const overlay    = document.getElementById('modalOverlay');
const modal      = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const btnBack    = document.getElementById('btnBack');
const darkBtn    = document.getElementById('darkBtn');
const soundBtn   = document.getElementById('soundBtn');
const tiers      = document.querySelectorAll('.pyramid__tier');

/* ── STATE ─────────────────────────────────────────────── */
let soundEnabled = false;
let activeTier   = null;

/* ── AUDIO (Web Audio API — no archivos externos) ──────── */
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function createCtx () {
  if (!audioCtx) audioCtx = new AudioCtx();
}

function playClick (freq = 520, dur = 0.12) {
  if (!soundEnabled) return;
  createCtx();
  const osc  = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
  osc.start();
  osc.stop(audioCtx.currentTime + dur);
}

function playClose () { playClick(320, 0.1); }

/* ── MODAL OPEN ────────────────────────────────────────── */
function openModal (level) {
  const d = LEVELS[level];
  if (!d) return;

  playClick(480 + level * 40);

  /* populate */
  document.getElementById('modalBadge').textContent  = d.badge;
  document.getElementById('modalBadge').style.background = d.color;
  document.getElementById('modalTitle').textContent  = d.title;
  document.getElementById('modalSub').textContent    = d.sub;
  document.getElementById('modalDesc').textContent   = d.desc;
  document.getElementById('modalFreq').textContent   = d.freq;

  const benList = document.getElementById('modalBen');
  benList.innerHTML = '';
  d.benefits.forEach(b => {
    const li = document.createElement('li');
    li.textContent = b;
    benList.appendChild(li);
  });

  const exWrap = document.getElementById('modalEx');
  exWrap.innerHTML = '';
  d.examples.forEach(e => {
    const span = document.createElement('span');
    span.className = 'food-tag';
    span.textContent = e;
    exWrap.appendChild(span);
  });

  /* show */
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  modal.setAttribute('aria-label', d.title);
  document.body.style.overflow = 'hidden';

  /* active tier zoom */
  if (activeTier) activeTier.classList.remove('active');
  activeTier = document.querySelector(`.tier--${level}`);
  activeTier.classList.add('active');

  /* focus trap */
  setTimeout(() => modalClose.focus(), 350);
}

/* ── MODAL CLOSE ───────────────────────────────────────── */
function closeModal () {
  playClose();
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (activeTier) {
    activeTier.classList.remove('active');
    activeTier.focus();
    activeTier = null;
  }
}

/* ── EVENT LISTENERS ───────────────────────────────────── */
tiers.forEach(tier => {
  tier.addEventListener('click', () => {
    const level = parseInt(tier.dataset.level, 10);
    openModal(level);
  });
  tier.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const level = parseInt(tier.dataset.level, 10);
      openModal(level);
    }
  });
});

modalClose.addEventListener('click', closeModal);
btnBack.addEventListener('click', closeModal);

/* close on overlay backdrop click */
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});

/* close on Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
});

/* ── DARK MODE ─────────────────────────────────────────── */
function applyTheme (dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  darkBtn.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('pyramidTheme', dark ? 'dark' : 'light');
}

darkBtn.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  applyTheme(!isDark);
  playClick(isDark ? 400 : 600, 0.09);
});

/* restore saved theme */
const savedTheme = localStorage.getItem('pyramidTheme');
if (savedTheme === 'dark') applyTheme(true);

/* ── SOUND TOGGLE ──────────────────────────────────────── */
soundBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundBtn.textContent = soundEnabled ? '🔊' : '🔇';
  localStorage.setItem('pyramidSound', soundEnabled ? '1' : '0');
  if (soundEnabled) {
    createCtx();
    playClick(540, 0.1);
  }
});

/* restore sound preference */
if (localStorage.getItem('pyramidSound') === '1') {
  soundEnabled = true;
  soundBtn.textContent = '🔊';
}

/* ── FOCUS TRAP inside modal ───────────────────────────── */
modal.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const focusable = modal.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  if (e.shiftKey) {
    if (document.activeElement === first) { e.preventDefault(); last.focus(); }
  } else {
    if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
  }
});

/* ── ENTRANCE LOG ──────────────────────────────────────── */
console.log('%c🥗 Pirámide de Alimentación Saludable', 'font-size:1.2rem;color:#5a9e6f;font-weight:bold;');
console.log('Haz clic en cualquier nivel de la pirámide para explorar.');
