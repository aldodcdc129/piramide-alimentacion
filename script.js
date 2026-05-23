/* ═══════════════════════════════════════════════════════════
   HEALTHY FOOD PYRAMID — script.js
   Interactive Nutrition Guide · Group of 5 Students
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════════════════════
   DATA — Each pyramid level's complete information
   ══════════════════════════════════════════════════════════ */
const LEVELS = {

  1: {
    emoji:   '🌾',
    badge:   'Level 1 · Base · De la Cruz',
    color:   '#3a7d5f',
    title:   'Carbohydrates',
    student: '👨‍🎓 Presented by: De la Cruz',
    desc:    'Carbohydrates are the body\'s primary source of energy. They are broken down into glucose, which fuels your brain, muscles, and every cell in your body. Choosing whole-grain, complex carbohydrates provides sustained energy without blood sugar spikes.',
    benefits: [
      'Main fuel source for the brain and nervous system',
      'Provides long-lasting energy for physical activity',
      'Dietary fiber supports healthy digestion',
      'B vitamins from whole grains support metabolism',
      'Helps regulate blood sugar levels (complex carbs)',
      'Supports mood and cognitive function',
    ],
    examples: ['Brown Rice', 'Whole Wheat Bread', 'Pasta', 'Oats', 'Potatoes', 'Sweet Potato', 'Corn', 'Quinoa', 'Barley', 'Whole Grain Cereal'],
    freq:    '🍽 Eat regularly as part of every balanced meal. Aim for 6–8 servings per day. Prioritize whole grains over refined options for better nutritional value.',
    meter:   90,
    meterLabel: 'Eat Daily — Highest priority',
    meterColor: '#3a7d5f',
  },

  2: {
    emoji:   '🍎',
    badge:   'Level 2 · Zurita',
    color:   '#52a858',
    title:   'Fruits & Vegetables',
    student: '👩‍🎓 Presented by: Zurita',
    desc:    'Fruits and vegetables are nutritional powerhouses packed with vitamins, minerals, antioxidants, and dietary fiber. They protect the body from disease, support the immune system, and are essential for maintaining a healthy weight and vibrant energy levels.',
    benefits: [
      'Boosts immune system with vitamins A, C, and E',
      'Rich in antioxidants that fight cellular damage',
      'High fiber content supports digestive health',
      'Reduces risk of heart disease and type 2 diabetes',
      'Supports healthy skin, hair, and nails',
      'Low in calories — ideal for healthy weight management',
    ],
    examples: ['Apple', 'Banana', 'Orange', 'Strawberries', 'Mango', 'Broccoli', 'Carrot', 'Spinach', 'Tomato', 'Peas', 'Kiwi', 'Blueberries'],
    freq:    '🥗 Eat several portions every day. Target at least 5 servings (2–3 fruits + 2–3 vegetables). Aim for a colorful variety to maximize different nutrients.',
    meter:   85,
    meterLabel: 'Eat Daily — Very high priority',
    meterColor: '#52a858',
  },

  3: {
    emoji:   '🥛',
    badge:   'Level 3 · Aldo',
    color:   '#e9b040',
    title:   'Dairy Products',
    student: '👨‍🎓 Presented by: Aldo',
    desc:    'Dairy products are an excellent source of calcium, protein, and vitamin D — three nutrients that are essential for building and maintaining strong bones and teeth. They also provide probiotics (in fermented forms like yogurt) that support gut health and immunity.',
    benefits: [
      'Rich in calcium — essential for strong bones and teeth',
      'High-quality complete protein for muscle maintenance',
      'Vitamin D supports calcium absorption and immunity',
      'Fermented dairy (yogurt) provides beneficial probiotics',
      'Potassium helps maintain healthy blood pressure',
      'Supports healthy growth in children and adolescents',
    ],
    examples: ['Whole Milk', 'Low-fat Yogurt', 'Greek Yogurt', 'Cheddar Cheese', 'Mozzarella', 'Cottage Cheese', 'Kefir', 'Fortified Plant Milk'],
    freq:    '🥛 Consume in moderation daily. Aim for 2–3 servings per day. Choose low-fat or non-fat options when possible. Fortified plant-based milks are good alternatives.',
    meter:   60,
    meterLabel: 'Moderate — Daily but controlled',
    meterColor: '#e9b040',
  },

  4: {
    emoji:   '🍗',
    badge:   'Level 4 · Bustamante',
    color:   '#e07840',
    title:   'Proteins',
    student: '👩‍🎓 Presented by: Bustamante',
    desc:    'Proteins are the building blocks of the human body. They are essential for the growth, repair, and maintenance of muscle tissue, organs, skin, and the immune system. A balanced intake of both animal and plant-based proteins ensures all essential amino acids are consumed.',
    benefits: [
      'Essential for muscle growth, repair, and recovery',
      'Supports production of enzymes and hormones',
      'Strengthens immune system function',
      'Iron from meat supports red blood cell production',
      'Promotes satiety — keeps you fuller longer',
      'Critical for healthy development in children',
    ],
    examples: ['Chicken Breast', 'Salmon', 'Tuna', 'Eggs', 'Lean Beef', 'Turkey', 'Lentils', 'Chickpeas', 'Black Beans', 'Tofu', 'Tempeh', 'Peanut Butter'],
    freq:    '🥩 Eat balanced portions daily. Aim for 2–3 servings per day. Include a variety of both animal and plant-based proteins. Limit processed meats and favor lean sources.',
    meter:   65,
    meterLabel: 'Moderate-High — Daily balanced portions',
    meterColor: '#e07840',
  },

  5: {
    emoji:   '🍬',
    badge:   'Level 5 · Tip · Fiorela',
    color:   '#c94040',
    title:   'Fats & Sugars',
    student: '👩‍🎓 Presented by: Fiorela',
    desc:    'Fats and sugars sit at the top of the pyramid as a reminder to limit their intake. While small amounts of healthy fats are necessary for hormonal function and vitamin absorption, trans fats, added sugars, and ultra-processed foods contribute to obesity, diabetes, and cardiovascular disease when consumed excessively.',
    benefits: [
      '⚠️ No significant nutritional benefits from added sugars',
      '⚠️ Trans fats increase bad (LDL) cholesterol levels',
      '⚠️ High sugar intake linked to type 2 diabetes',
      '⚠️ Excess sodium raises blood pressure',
      '⚠️ Highly processed foods lack essential nutrients',
      '💡 Small amounts of healthy fats (olive oil, avocado) are fine',
    ],
    examples: ['Candy & Sweets', 'Sodas & Energy Drinks', 'Cake & Pastries', 'French Fries', 'Potato Chips', 'Burgers', 'Ice Cream', 'Cookies', 'Processed Sausage', 'Sugary Cereals'],
    freq:    '🚫 Limit intake strictly. Maximum 1–2 times per week in small portions. The WHO recommends that free sugars make up less than 5–10% of total daily energy intake.',
    meter:   15,
    meterLabel: 'Occasional only — Limit strictly',
    meterColor: '#c94040',
  },

};

/* ══════════════════════════════════════════════════════════
   DOM REFERENCES
   ══════════════════════════════════════════════════════════ */
const loader       = document.getElementById('loader');
const overlay      = document.getElementById('modalOverlay');
const modal        = document.getElementById('modal');
const modalClose   = document.getElementById('modalClose');
const btnBack      = document.getElementById('btnBack');
const darkBtn      = document.getElementById('darkBtn');
const hamburger    = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobileMenu');
const tiers        = document.querySelectorAll('.pyramid__tier');
const studentBtns  = document.querySelectorAll('.btn-outline[data-level]');

/* ══════════════════════════════════════════════════════════
   LOADER
   ══════════════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => loader.classList.add('hidden'), 800);
});

/* ══════════════════════════════════════════════════════════
   MODAL — OPEN
   ══════════════════════════════════════════════════════════ */
let activeTier = null;

function openModal(level) {
  const d = LEVELS[level];
  if (!d) return;

  // populate header
  const badge = document.getElementById('modalBadge');
  badge.textContent = d.emoji;
  badge.style.background = d.color;

  document.getElementById('modalTitle').textContent   = d.title;
  document.getElementById('modalStudent').textContent = d.student;
  document.getElementById('modalDesc').textContent    = d.desc;
  document.getElementById('modalFreq').textContent    = d.freq;

  // benefits list
  const benEl = document.getElementById('modalBen');
  benEl.innerHTML = '';
  d.benefits.forEach(b => {
    const li = document.createElement('li');
    li.textContent = b;
    benEl.appendChild(li);
  });

  // food example tags
  const exEl = document.getElementById('modalEx');
  exEl.innerHTML = '';
  d.examples.forEach(ex => {
    const span = document.createElement('span');
    span.className = 'food-tag';
    span.textContent = ex;
    exEl.appendChild(span);
  });

  // nutrition meter
  const fill  = document.getElementById('meterFill');
  const label = document.getElementById('meterLabel');
  fill.style.width      = '0%';
  fill.style.background = d.meterColor;
  label.textContent     = d.meterLabel;
  // animate after paint
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fill.style.width = d.meter + '%';
    });
  });

  // show overlay
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // zoom active tier
  if (activeTier) activeTier.classList.remove('active');
  activeTier = document.querySelector(`.tier--${level}`);
  if (activeTier) activeTier.classList.add('active');

  // focus management
  setTimeout(() => modalClose.focus(), 380);
}

/* ══════════════════════════════════════════════════════════
   MODAL — CLOSE
   ══════════════════════════════════════════════════════════ */
function closeModal() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (activeTier) {
    activeTier.classList.remove('active');
    activeTier.focus();
    activeTier = null;
  }
}

/* ══════════════════════════════════════════════════════════
   EVENT LISTENERS — PYRAMID TIERS
   ══════════════════════════════════════════════════════════ */
tiers.forEach(tier => {
  // click
  tier.addEventListener('click', () => {
    openModal(parseInt(tier.dataset.level, 10));
  });
  // keyboard
  tier.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(parseInt(tier.dataset.level, 10));
    }
  });
});

/* ── Student cards "Learn More" buttons ─ */
studentBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    openModal(parseInt(btn.dataset.level, 10));
  });
});

/* ── Modal close triggers ─ */
modalClose.addEventListener('click', closeModal);
btnBack.addEventListener('click', closeModal);
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
});

/* ── Focus trap inside modal ─ */
modal.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const focusable = modal.querySelectorAll('button, [tabindex]:not([tabindex="-1"]), a[href]');
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault(); last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault(); first.focus();
  }
});

/* ══════════════════════════════════════════════════════════
   DARK MODE
   ══════════════════════════════════════════════════════════ */
function applyTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  darkBtn.textContent = dark ? '☀️' : '🌙';
  darkBtn.title       = dark ? 'Switch to light mode' : 'Switch to dark mode';
  localStorage.setItem('hfpTheme', dark ? 'dark' : 'light');
}

darkBtn.addEventListener('click', () => {
  applyTheme(document.documentElement.dataset.theme !== 'dark');
});

// restore saved preference
const savedTheme = localStorage.getItem('hfpTheme');
if (savedTheme === 'dark') applyTheme(true);
// respect OS preference if no saved setting
else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme(true);
}

/* ══════════════════════════════════════════════════════════
   MOBILE MENU
   ══════════════════════════════════════════════════════════ */
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
});

// close menu when a link is clicked
mobileMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.setAttribute('aria-hidden', true);
  });
});

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL — Intersection Observer
   ══════════════════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ══════════════════════════════════════════════════════════
   SMOOTH SCROLL for nav links
   ══════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = 80; // header height offset
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ══════════════════════════════════════════════════════════
   HEADER SHADOW ON SCROLL
   ══════════════════════════════════════════════════════════ */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 20
    ? '0 4px 24px rgba(30,26,18,.12)'
    : '0 2px 20px rgba(30,26,18,.06)';
}, { passive: true });

/* ══════════════════════════════════════════════════════════
   CONSOLE GREETING
   ══════════════════════════════════════════════════════════ */
console.log('%c🌿 Healthy Food Pyramid', 'font-size:1.3rem;color:#3a7d5f;font-weight:bold;');
console.log('%c Interactive Nutrition Guide — Group of 5 Students', 'color:#7a6e58;font-size:.9rem;');
console.log('Team: De la Cruz · Zurita · Aldo · Bustamante · Fiorela');
