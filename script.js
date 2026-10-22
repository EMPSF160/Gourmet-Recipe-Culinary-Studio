/* ==========================================================================
   GOURMET RECIPE & CULINARY STUDIO - INTERACTIVE LOGIC & ENGINE
   ========================================================================== */

// --- Recipe Database ---
const RECIPES_DATA = [
  {
    id: 'duck-breast',
    title: 'Pan-Roasted Duck Breast with Pomegranate Reduction & Edible Violas',
    frenchTitle: 'Magret de Canard Rôti au Jus de Grenade',
    category: 'entrees',
    difficulty: 'Michelin Level',
    time: '45 mins',
    calories: '620 kcal',
    servingsBase: 2,
    image: 'assets/images/hero_plate.jpg',
    chef: 'Chef Alessandro Broder',
    description: 'Crispy scored Moulard duck breast rendered to medium-rare perfection, glazed with a dark ruby pomegranate reduction, smoked cauliflower mousseline, toasted hazelnuts, and wild micro-violas.',
    flavorNotes: ['Smoked Truffle', 'Ruby Pomegranate', 'Roasted Hazelnut', 'Wild Viola'],
    ingredients: [
      { name: 'Moulard Duck Breast (Aged)', amount: 2, unit: 'breasts' },
      { name: 'Fresh Pomegranate Arils & Juice', amount: 150, unit: 'ml' },
      { name: 'Smoked Cauliflower Floret Puree', amount: 200, unit: 'g' },
      { name: 'Wild Edible Violas & Microgreens', amount: 25, unit: 'g' },
      { name: 'Toasted Piedmont Hazelnuts', amount: 30, unit: 'g' },
      { name: 'Aged Balsamic of Modena (25 yr)', amount: 20, unit: 'ml' },
      { name: 'French Normandy Cultured Butter', amount: 40, unit: 'g' },
      { name: 'Maldon Smoked Sea Salt & Pepper', amount: 1, unit: 'pinch' }
    ],
    steps: [
      'Gently score the duck skin in a fine crosshatch pattern without penetrating the tender breast meat.',
      'Place duck skin-side down in a cold cast iron skillet over gentle medium-low heat, slowly rendering duck fat for 12 minutes until deep amber gold.',
      'Flip duck and sear meat side for 3 minutes with foaming Normandy butter, thyme, and crushed garlic. Rest at 54°C (129°F) for 8 minutes.',
      'Deglaze the pan with reduced pomegranate nectar and 25-year aged balsamic; mount with chilled butter to create a glossy mirror reduction.',
      'Spoon warm smoked cauliflower mousseline onto dark slate; slice duck diagonally, spoon reduction, and crown with wild violas and toasted hazelnuts.'
    ],
    sommelierPairing: {
      wine: 'Domaine de la Romanée-Conti Échezeaux Grand Cru',
      vintage: '2018',
      region: 'Côte de Nuits, Burgundy, France',
      temp: '16°C (61°F)',
      notes: 'Notes of wild cherry, forest floor, and crushed violets that harmonize flawlessly with the gamey richness of the duck and ruby acidity.'
    },
    chefTip: 'Never sear duck in a preheated hot pan. Starting in a cold pan draws out 80% more intramuscular fat for an impeccably glass-crisp skin.'
  },
  {
    id: 'hokkaido-scallops',
    title: 'Seared Hokkaido Scallops with Saffron Emulsion & Oscietra Caviar',
    frenchTitle: 'Coquilles Saint-Jacques au Safran & Caviar',
    category: 'seafood',
    difficulty: 'Advanced',
    time: '30 mins',
    calories: '380 kcal',
    servingsBase: 2,
    image: 'assets/images/scallops_caviar.jpg',
    chef: 'Chef Kenji Takahashi',
    description: 'Sashimi-grade Hokkaido diver scallops flash-caramelized in brown butter, accompanied by an Iranian saffron velouté, crisp sea samphire, and Royal Oscietra caviar with gold leaf.',
    flavorNotes: ['Iranian Saffron', 'Oscietra Caviar', 'Sea Samphire', 'Brown Butter'],
    ingredients: [
      { name: 'Sashimi-Grade Hokkaido Scallops', amount: 6, unit: 'jumbo pieces' },
      { name: 'Royal Oscietra Caviar', amount: 30, unit: 'g' },
      { name: 'Iranian Sargol Saffron Threads', amount: 0.5, unit: 'g' },
      { name: 'Fish Fumet & Double Cream Emulsion', amount: 120, unit: 'ml' },
      { name: 'Fresh Foraged Sea Samphire', amount: 40, unit: 'g' },
      { name: '24K Edible Gold Flakes', amount: 1, unit: 'leaf' },
      { name: 'Clarified Beurre Noisette', amount: 30, unit: 'ml' }
    ],
    steps: [
      'Pat Hokkaido scallops completely dry with linen paper. Lightly dust with fleur de sel immediately before searing.',
      'Bloom saffron strands in warm clarified fish fumet for 15 minutes, then froth with chilled double cream using an immersion aerator.',
      'Heat clarified butter in a copper skillet until shimmering; sear scallops undisturbed for exactly 90 seconds per side for a caramelized crust and translucent center.',
      'Flash-blanch fresh sea samphire for 10 seconds in salted ice water to retain emerald brilliance.',
      'Pool warm saffron velouté in shallow bowls; arrange scallops, crown each with quenelle of Oscietra caviar and delicate 24K gold flakes.'
    ],
    sommelierPairing: {
      wine: 'Batard-Montrachet Grand Cru, Domaine Leflaive',
      vintage: '2020',
      region: 'Puligny-Montrachet, Burgundy',
      temp: '11°C (52°F)',
      notes: 'Unctuous hazelnut, crushed limestone minerality, and vibrant saline finish to lift the decadent sea caviar.'
    },
    chefTip: 'Oscietra caviar should be placed with a mother-of-pearl spoon at room temperature; metal spoons oxidize its delicate oceanic oils.'
  },
  {
    id: 'chocolate-entremet',
    title: 'Grand Cru Dark Chocolate Entremet with Mirror Glaze & Gold Tuile',
    frenchTitle: 'Entremet Chocolat Noir Valrhona & Feuille d’Or',
    category: 'pastry',
    difficulty: 'Master Pastry',
    time: '1h 15m',
    calories: '540 kcal',
    servingsBase: 2,
    image: 'assets/images/haute_pastry.jpg',
    chef: 'Pastry Chef Camille Laurent',
    description: '70% Valrhona Guanaja chocolate mousse with molten raspberry coulis core, crisp hazelnut praline feve, obsidian mirror glaze, and 24K gold foil.',
    flavorNotes: ['Valrhona 70%', 'Wild Raspberry', 'Piedmont Hazelnut', 'Gold Leaf'],
    ingredients: [
      { name: 'Valrhona Guanaja 70% Dark Chocolate', amount: 180, unit: 'g' },
      { name: 'Fresh Raspberry Coulis Infusion', amount: 80, unit: 'ml' },
      { name: 'Hazelnut Praliné & Feuilletine Crunch', amount: 60, unit: 'g' },
      { name: 'Heavy Whipping Cream (36% Fat)', amount: 220, unit: 'ml' },
      { name: 'Dark Cocoa Mirror Glaze Gelatin', amount: 100, unit: 'ml' },
      { name: '24K Edible Gold Leaf', amount: 2, unit: 'sheets' },
      { name: 'Culinary Coulis Infusion Pipette', amount: 2, unit: 'units' }
    ],
    steps: [
      'Prepare the raspberry core in spherical silicone molds; blast freeze at -18°C for 45 minutes.',
      'Temper 70% Valrhona Guanaja chocolate to 31°C, gently folding into whipped cream to yield a velvet airy mousse.',
      'Assemble entremet layers: praline feuilletine base, half chocolate mousse, insert frozen raspberry sphere, top with remaining mousse.',
      'Freeze entremet completely. Warm obsidian mirror glaze to exactly 32°C (89°F) and drape smoothly over frozen entremet.',
      'Garnish with hand-spun chocolate spiral, hazelnut lace tuile, and delicate gold leaf flecks; insert raspberry pipette.'
    ],
    sommelierPairing: {
      wine: 'Taylor Fladgate 30 Year Old Tawny Port',
      vintage: 'Aged Reserve',
      region: 'Douro Valley, Portugal',
      temp: '14°C (57°F)',
      notes: 'Complex dried fig, toasted walnut, and spiced molasses notes accentuating dark cacao bitterness.'
    },
    chefTip: 'For a mirror glaze with zero air bubbles, strain through a 100-mesh fine sieve holding the pour pitcher closely above the surface.'
  },
  {
    id: 'rack-of-lamb',
    title: 'Herb-Encrusted Colorado Lamb Rack with Black Winter Truffle Jus',
    frenchTitle: 'Carré d’Agneau en Croûte d’Herbes & Truffes',
    category: 'entrees',
    difficulty: 'Advanced',
    time: '50 mins',
    calories: '680 kcal',
    servingsBase: 2,
    image: 'assets/images/chef_atelier.jpg',
    chef: 'Chef Alessandro Broder',
    description: 'French-trimmed tender lamb cutlets encrusted with tarragon, chervil, and brioche crumb, served alongside glazed baby heirloom vegetables and Périgord black truffle jus.',
    flavorNotes: ['Périgord Truffle', 'Fresh Tarragon', 'Brioche Herb Crust', 'Shallot Confit'],
    ingredients: [
      { name: 'Prime Lamb Rack (8-bone French Trim)', amount: 1, unit: 'rack' },
      { name: 'Fresh Périgord Black Truffle', amount: 15, unit: 'g' },
      { name: 'Brioche Herb Panko Crumb', amount: 60, unit: 'g' },
      { name: 'Dijon Mustard & Egg Wash', amount: 25, unit: 'g' },
      { name: 'Veal Bone Glace de Viande', amount: 100, unit: 'ml' },
      { name: 'Baby Heirloom Carrots & Leeks', amount: 120, unit: 'g' },
      { name: 'Fresh Thyme & Rosemary Sprigs', amount: 4, unit: 'sprigs' }
    ],
    steps: [
      'Sear the seasoned lamb rack in duck fat until golden brown on all sides. Allow to cool slightly.',
      'Brush with smooth Dijon mustard; press evenly with blended brioche, tarragon, chervil, and parsley crumb.',
      'Roast in an oven at 200°C (400°F) for 14-16 minutes until internal core temperature reaches 52°C (rare) or 56°C (medium-rare).',
      'Simmer rich veal glace de viande with finely shaved fresh black truffles and cold butter mount.',
      'Carve between rib bones into double chops; serve with glazed baby vegetables and ladled truffle jus.'
    ],
    sommelierPairing: {
      wine: 'Château Margaux Premier Grand Cru Classé',
      vintage: '2015',
      region: 'Margaux, Bordeaux, France',
      temp: '17°C (63°F)',
      notes: 'Velvety tannins, cedar smoke, and dark cassis that seamlessly meld with the savory herbaceous lamb.'
    },
    chefTip: 'Rest the lamb on an elevated rack loosely tented with foil for at least 10 minutes; this allows the succulent juices to redistribute evenly.'
  },
  {
    id: 'molecular-caviar-beet',
    title: 'Smoked Heritage Beetroot Tartare with Truffle Snow & Balsamic Pearls',
    frenchTitle: 'Tartare de Betterave Fumée & Perles Balsamiques',
    category: 'modern',
    difficulty: 'Modernist',
    time: '40 mins',
    calories: '290 kcal',
    servingsBase: 2,
    image: 'assets/images/studio_interior.jpg',
    chef: 'Chef Kenji Takahashi',
    description: 'Hickory-cold-smoked golden and chioggia beets hand-diced with shallot confit, nitrogen-frozen truffle snow, molecular balsamic pearls, and micro-shiso.',
    flavorNotes: ['Smoked Chioggia', 'Molecular Balsamic', 'Truffle Snow', 'Piedmont Hazelnut'],
    ingredients: [
      { name: 'Heritage Golden & Chioggia Beets', amount: 300, unit: 'g' },
      { name: 'Sodium Alginate & Balsamic Pearls', amount: 20, unit: 'g' },
      { name: 'Truffle Oil Nitrogen Powder Snow', amount: 15, unit: 'g' },
      { name: 'Shallot & Capers Confit', amount: 30, unit: 'g' },
      { name: 'Cold-Pressed Hazelnut Oil', amount: 20, unit: 'ml' },
      { name: 'Micro Shiso Leaves & Radish Sprouts', amount: 15, unit: 'g' }
    ],
    steps: [
      'Roast heritage beets in rock salt crust at 180°C for 1 hour until tender, then chill and peel.',
      'Expose diced beets to cold applewood smoke in a culinary smoking dome for 10 minutes.',
      'Dress tartare with hazelnut oil, finely minced shallots, crushed toasted hazelnuts, and fleur de sel.',
      'Prepare spherified balsamic pearls using calcium lactate and sodium alginate bath.',
      'Pack tartare in ring mold; unmold and shower with frozen white truffle snow and balsamic spheres.'
    ],
    sommelierPairing: {
      wine: 'Domaine Dujac Morey-Saint-Denis Premier Cru',
      vintage: '2019',
      region: 'Burgundy, France',
      temp: '15°C (59°F)',
      notes: 'Earthy bramble berry notes, subtle spice, and crisp natural acidity complement the sweet smoked beet notes.'
    },
    chefTip: 'Roasting root vegetables on a bed of rock salt draws out excess humidity, amplifying their intrinsic sweetness threefold.'
  },
  {
    id: 'grand-cru-pairing-flight',
    title: 'Sommelier Grand Cru Flight with Artisanal Fromage Selection',
    frenchTitle: 'Dégustation Grands Crus & Fromages d’Alpage',
    category: 'seafood',
    difficulty: 'Sommelier Special',
    time: '20 mins',
    calories: '410 kcal',
    servingsBase: 2,
    image: 'assets/images/wine_sommelier.jpg',
    chef: 'Master Sommelier Marcus Vance',
    description: 'Curated 4-flight vertical tasting paired with 36-month aged Comté, raw milk Roquefort, truffled Brie de Meaux, and wild honeycomb.',
    flavorNotes: ['Aged Comté 36m', 'Wild Honeycomb', 'Truffled Brie', 'Vintage Bordeaux'],
    ingredients: [
      { name: 'Aged Comté Marcel Petite Fort Saint Antoine', amount: 80, unit: 'g' },
      { name: 'Truffled Brie de Meaux AOC', amount: 70, unit: 'g' },
      { name: 'Artisanal Roquefort Gabriel Coulet', amount: 50, unit: 'g' },
      { name: 'Single-Origin Mountain Honeycomb', amount: 40, unit: 'g' },
      { name: 'Walnut & Fig Sourdough Crisps', amount: 6, unit: 'pieces' },
      { name: 'Sommelier Grand Cru Flight Pourings', amount: 4, unit: 'glasses' }
    ],
    steps: [
      'Temper cheeses at ambient salon temperature (19°C / 66°F) for 45 minutes to unlock complex volatile aromas.',
      'Slice Comté at 45-degree angle to accentuate tyrosine crystals; break Roquefort into rustic flakes.',
      'Pour 75ml of each flight into tailored varietal crystal stemware, starting with crisp mineral whites progressing to bold reds.',
      'Guide guests through the sensory pairing sequence: aroma exploration, palate cleansing, cheese tasting, and wine sip.',
      'Finish with dark port pairing alongside the blue Roquefort and mountain honeycomb.'
    ],
    sommelierPairing: {
      wine: 'Château d’Yquem Premier Cru Supérieur Sauternes',
      vintage: '2011',
      region: 'Sauternes, Bordeaux, France',
      temp: '10°C (50°F)',
      notes: 'Honeyed apricot, candied citrus peel, and botrytis complexity that creates pure bliss with blue cheeses.'
    },
    chefTip: 'Never serve fine cheese straight out of refrigeration; cold temperature mutes up to 60% of aromatics and fat solubility.'
  }
];

// --- Wine Pairing Matrix Data ---
const PAIRING_DATABASE = {
  duck: {
    dishName: 'Canard Rôti aux Violettes & Pomegranate Jus',
    wineName: 'Domaine de la Romanée-Conti Échezeaux',
    region: 'Côte de Nuits, Burgundy, France · Vintage 2018',
    grape: '100% Pinot Noir (Single Vineyard)',
    temp: '16°C (61°F)',
    glass: 'Riedel Burgundy Grand Cru Stem',
    notes: 'Intensely fragrant aromatics of wild crushed cherries, violet petals, damp autumn forest floor, and warm oriental spice. The silky tannins cut through the crispy duck breast while respecting the pomegranate reduction.',
    rule: 'The Sommelier Rule: High-acid, perfumed Pinot Noir elevates game fowl without overpowering nuanced floral notes.'
  },
  scallops: {
    dishName: 'Pan-Seared Hokkaido Scallops & Caviar',
    wineName: 'Batard-Montrachet Grand Cru, Domaine Leflaive',
    region: 'Puligny-Montrachet, Burgundy · Vintage 2020',
    grape: '100% Chardonnay (Biodynamic)',
    temp: '11°C (52°F)',
    glass: 'Riedel Montrachet Crystal Glass',
    notes: 'Exquisite bouquet of toasted brioche, lemon verbena, crushed wet limestone, and roasted hazelnut. Sensational salinity perfectly echoes the Oscietra caviar and sweet scallop core.',
    rule: 'The Sommelier Rule: Rich buttery seared mollusks demand a mineral-driven, grand cru white with balanced oak integration.'
  },
  lamb: {
    dishName: 'Herb-Encrusted Colorado Lamb Rack & Truffle Jus',
    wineName: 'Château Margaux Premier Grand Cru Classé',
    region: 'Margaux, Bordeaux, France · Vintage 2015',
    grape: '87% Cabernet Sauvignon, 8% Merlot, 3% Cabernet Franc, 2% Petit Verdot',
    temp: '17°C (63°F)',
    glass: 'Bordeaux Grand Cru Goblet',
    notes: 'Opulent notes of blackcurrant, dark tobacco box, fresh cedar, and violet graphite. Seamless tannins embrace the rich herb crust and earthiness of Périgord winter truffle.',
    rule: 'The Sommelier Rule: Game and lamb proteins require structured tannins and cedar depth that only mature Left Bank Bordeaux achieves.'
  },
  chocolate: {
    dishName: 'Valrhona Grand Cru Dark Chocolate Entremet',
    wineName: 'Taylor Fladgate 30-Year-Old Tawny Port',
    region: 'Douro Valley, Portugal · Solera Wood Aged',
    grape: 'Touriga Nacional, Touriga Franca, Tinta Roriz',
    temp: '14°C (57°F)',
    glass: 'Porto Digestif Snifter',
    notes: 'Amber mahogany hue with intoxicating aromas of dried mission figs, roasted hazelnuts, orange peel, and warm molasses. Balances the 70% dark cacao bitterness effortlessly.',
    rule: 'The Sommelier Rule: Dessert wines must always be noticeably sweeter than the dessert itself, otherwise they taste hollow.'
  }
};

// --- Web Audio Synthesizer (Zero External Dependencies) ---
class CulinarySoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playGentleChime(freq = 587.33, duration = 0.35) { // D5
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playLuxuryArpeggio() {
    if (!this.enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playGentleChime(freq, 0.4), idx * 80);
    });
  }

  playTimerAlert() {
    if (!this.enabled) return;
    const alertNotes = [880, 880, 1174.66, 1174.66];
    alertNotes.forEach((freq, idx) => {
      setTimeout(() => this.playGentleChime(freq, 0.5), idx * 160);
    });
  }
}

const soundEngine = new CulinarySoundEngine();

// --- Main Application State ---
let currentTheme = localStorage.getItem('culinary_theme') || 'dark';
let activeRecipe = null;
let currentServings = 2;
let timerInterval = null;
let timerSeconds = 300; // 5 mins default
let timerRunning = false;

// --- DOM Initializer ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderRecipes('all');
  initFilterTabs();
  initAtelierTabs();
  initPairingStudio();
  initBookingSuite();
  initCulinaryTimer();
  initScrollSpy();
  initHeaderScroll();
  initAudioToggle();
  initModals();
  initMobileNav();
});

// --- Theme Management ---
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('culinary_theme', currentTheme);
      soundEngine.playGentleChime(currentTheme === 'dark' ? 440 : 880);
      showToast(`Switched to ${currentTheme === 'dark' ? 'Midnight Truffle (Dark)' : 'Alabaster Cream (Light)'} Mode`);
    });
  });
}

// --- Audio Toggle ---
function initAudioToggle() {
  const audioBtns = document.querySelectorAll('.audio-toggle-btn');
  function updateAudioButtonStates() {
    audioBtns.forEach(btn => {
      btn.style.opacity = soundEngine.enabled ? '1' : '0.4';
    });
  }
  updateAudioButtonStates();

  audioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      soundEngine.enabled = !soundEngine.enabled;
      updateAudioButtonStates();
      if (soundEngine.enabled) {
        soundEngine.playGentleChime(700);
        showToast('Culinary Sound Feedback: Enabled');
      } else {
        showToast('Culinary Sound Feedback: Muted');
      }
    });
  });
}

// --- Recipe Rendering & Filtering ---
function renderRecipes(category = 'all') {
  const container = document.getElementById('recipes-cards-container');
  if (!container) return;

  const filtered = category === 'all' 
    ? RECIPES_DATA 
    : RECIPES_DATA.filter(r => r.category === category);

  container.innerHTML = filtered.map(recipe => `
    <article class="recipe-card" data-id="${recipe.id}">
      <div class="recipe-img-container">
        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
        <span class="recipe-badge-difficulty">${recipe.difficulty}</span>
        <span class="recipe-badge-time">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          ${recipe.time}
        </span>
      </div>
      <div class="recipe-body">
        <span class="recipe-category-tag">${recipe.frenchTitle}</span>
        <h3 class="recipe-title">${recipe.title}</h3>
        <p class="recipe-desc">${recipe.description}</p>
        
        <div class="recipe-flavor-notes">
          ${recipe.flavorNotes.map(n => `<span class="flavor-chip">${n}</span>`).join('')}
        </div>

        <div class="recipe-footer">
          <div class="recipe-chef-author">
            <span class="recipe-chef-avatar">É</span>
            <span>${recipe.chef}</span>
          </div>
          <button class="btn btn-outline btn-sm view-recipe-btn" onclick="openRecipeModal('${recipe.id}')">
            View Technique
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      soundEngine.playGentleChime(620);
      renderRecipes(category);
    });
  });
}

// --- Recipe Studio Modal & Servings Scaler ---
window.openRecipeModal = function(recipeId) {
  const recipe = RECIPES_DATA.find(r => r.id === recipeId);
  if (!recipe) return;

  activeRecipe = recipe;
  currentServings = recipe.servingsBase;

  const modal = document.getElementById('recipe-modal');
  const modalHero = document.getElementById('modal-recipe-hero');
  const modalTitle = document.getElementById('modal-recipe-title');
  const modalFrench = document.getElementById('modal-recipe-french');
  const modalDesc = document.getElementById('modal-recipe-desc');
  const modalChef = document.getElementById('modal-recipe-chef');
  const modalWine = document.getElementById('modal-wine-content');
  const modalTip = document.getElementById('modal-chef-tip');

  if (modalHero) modalHero.src = recipe.image;
  if (modalTitle) modalTitle.textContent = recipe.title;
  if (modalFrench) modalFrench.textContent = recipe.frenchTitle;
  if (modalDesc) modalDesc.textContent = recipe.description;
  if (modalChef) modalChef.textContent = `Curated by ${recipe.chef}`;
  if (modalTip) modalTip.textContent = recipe.chefTip;

  if (modalWine && recipe.sommelierPairing) {
    modalWine.innerHTML = `
      <div style="background: var(--bg-tertiary); padding: 18px; border-radius: var(--radius-md); border-left: 3px solid var(--accent-gold); margin-bottom: 24px;">
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.14em; color: var(--accent-gold); font-weight: 600; display: block; margin-bottom: 4px;">Sommelier Cellar Recommendation</span>
        <h4 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--text-primary); margin-bottom: 4px;">${recipe.sommelierPairing.wine} (${recipe.sommelierPairing.vintage})</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">${recipe.sommelierPairing.region} · Serve at ${recipe.sommelierPairing.temp}</p>
        <p style="font-size: 0.9rem; font-style: italic; color: var(--text-secondary);">${recipe.sommelierPairing.notes}</p>
      </div>
    `;
  }

  updateIngredientsDisplay();
  renderCookingSteps(recipe.steps);

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  soundEngine.playLuxuryArpeggio();
};

function updateIngredientsDisplay() {
  if (!activeRecipe) return;
  const listEl = document.getElementById('modal-ingredients-list');
  const countEl = document.getElementById('modal-servings-count');
  if (countEl) countEl.textContent = `${currentServings} Guests`;

  const scaleFactor = currentServings / activeRecipe.servingsBase;

  if (listEl) {
    listEl.innerHTML = activeRecipe.ingredients.map(ing => {
      const calculated = (ing.amount * scaleFactor);
      const displayAmount = calculated % 1 === 0 ? calculated : calculated.toFixed(1);
      return `
        <div class="ingredient-item">
          <span>${ing.name}</span>
          <span class="ingredient-qty">${displayAmount} ${ing.unit}</span>
        </div>
      `;
    }).join('');
  }
}

window.adjustServings = function(delta) {
  if (!activeRecipe) return;
  const newServings = currentServings + delta;
  if (newServings >= 1 && newServings <= 16) {
    currentServings = newServings;
    soundEngine.playGentleChime(750);
    updateIngredientsDisplay();
  }
};

function renderCookingSteps(steps) {
  const stepsEl = document.getElementById('modal-steps-list');
  if (!stepsEl) return;

  stepsEl.innerHTML = steps.map((step, idx) => `
    <div class="cooking-step-item" onclick="toggleStepCompleted(this)">
      <span class="step-num-badge">${idx + 1}</span>
      <p style="font-size: 0.94rem; color: var(--text-secondary); line-height: 1.6;">${step}</p>
    </div>
  `).join('');
}

window.toggleStepCompleted = function(element) {
  element.classList.toggle('completed');
  soundEngine.playGentleChime(920);
};

// --- Culinary Timer ---
function initCulinaryTimer() {
  const timerDisplay = document.getElementById('timer-display');
  const startBtn = document.getElementById('timer-start-btn');
  const resetBtn = document.getElementById('timer-reset-btn');

  function updateTimerText() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    if (timerDisplay) {
      timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
  }

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      soundEngine.playGentleChime(660);
      if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        startBtn.textContent = 'Start';
      } else {
        timerRunning = true;
        startBtn.textContent = 'Pause';
        timerInterval = setInterval(() => {
          if (timerSeconds > 0) {
            timerSeconds--;
            updateTimerText();
          } else {
            clearInterval(timerInterval);
            timerRunning = false;
            startBtn.textContent = 'Start';
            soundEngine.playTimerAlert();
            showToast('⏰ Atelier Culinary Timer has expired!');
          }
        }, 1000);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      clearInterval(timerInterval);
      timerRunning = false;
      timerSeconds = 300;
      if (startBtn) startBtn.textContent = 'Start';
      updateTimerText();
      soundEngine.playGentleChime(440);
    });
  }

  updateTimerText();
}

// --- Atelier Facilities Tabs ---
function initAtelierTabs() {
  const tabBtns = document.querySelectorAll('.atelier-tab-btn');
  const title = document.getElementById('atelier-tab-title');
  const desc = document.getElementById('atelier-tab-desc');
  const img = document.getElementById('atelier-tab-img');

  const content = {
    hearth: {
      title: 'The Fire Hearth & Master Induction Stations',
      desc: 'Featuring 12 private chef workstations appointed with handcrafted copper cookware, French induction zones, salamanders, and custom ventilation hoods for precision thermal control.',
      img: 'assets/images/studio_interior.jpg'
    },
    cellar: {
      title: 'The Sommelier Grand Vault & Tasting Room',
      desc: 'Housing over 2,400 rare Grand Cru and Premier Cru vintages, maintained at dual constant temperatures (12°C and 16°C) under high-filtration argon preservation.',
      img: 'assets/images/wine_sommelier.jpg'
    },
    pastry: {
      title: 'The Pastry Atelier & Sugar Sculpture Lab',
      desc: 'Equipped with cold Italian Carrara marble slabs for tempering, blast shock-freezers down to -40°C, and dedicated sugar-pulling infrared lamps.',
      img: 'assets/images/haute_pastry.jpg'
    }
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tabKey = btn.getAttribute('data-atelier-tab');
      const data = content[tabKey];
      if (data) {
        if (title) title.textContent = data.title;
        if (desc) desc.textContent = data.desc;
        if (img) img.src = data.img;
        soundEngine.playGentleChime(700);
      }
    });
  });
}

// --- Wine & Flavor Pairing Atelier ---
function initPairingStudio() {
  const buttons = document.querySelectorAll('.dish-pick-btn');
  const wineName = document.getElementById('pairing-wine-name');
  const wineRegion = document.getElementById('pairing-wine-region');
  const wineGrape = document.getElementById('pairing-wine-grape');
  const wineTemp = document.getElementById('pairing-wine-temp');
  const wineNotes = document.getElementById('pairing-wine-notes');
  const wineRule = document.getElementById('pairing-wine-rule');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.getAttribute('data-dish-key');
      const pairing = PAIRING_DATABASE[key];
      if (pairing) {
        if (wineName) wineName.textContent = pairing.wineName;
        if (wineRegion) wineRegion.textContent = pairing.region;
        if (wineGrape) wineGrape.textContent = pairing.grape;
        if (wineTemp) wineTemp.textContent = pairing.temp;
        if (wineNotes) wineNotes.textContent = pairing.notes;
        if (wineRule) wineRule.textContent = pairing.rule;
        soundEngine.playGentleChime(800);
      }
    });
  });
}

// --- Reservation & Booking Suite ---
function initBookingSuite() {
  const tabs = document.querySelectorAll('.booking-tab-btn');
  const form = document.getElementById('atelier-booking-form');
  const guestSelect = document.getElementById('booking-guests');
  const tierSelect = document.getElementById('booking-tier');
  const wineOption = document.getElementById('booking-wine-pairing');
  const priceDisplay = document.getElementById('booking-total-price');
  const experienceLabel = document.getElementById('booking-experience-label');

  let activeType = 'dining'; // 'dining' or 'masterclass'

  function calculatePrice() {
    const guests = parseInt(guestSelect ? guestSelect.value : 2, 10);
    const tierPrice = parseInt(tierSelect ? tierSelect.value : 220, 10);
    const hasWine = wineOption && wineOption.checked ? 95 : 0;
    const total = guests * (tierPrice + hasWine);
    if (priceDisplay) {
      priceDisplay.textContent = `$${total.toLocaleString()}`;
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeType = tab.getAttribute('data-booking-type');
      if (experienceLabel) {
        experienceLabel.textContent = activeType === 'dining' 
          ? 'Private Atelier Dining Experience' 
          : 'Hands-On Culinary Masterclass';
      }
      soundEngine.playGentleChime(640);
      calculatePrice();
    });
  });

  if (guestSelect) guestSelect.addEventListener('change', calculatePrice);
  if (tierSelect) tierSelect.addEventListener('change', calculatePrice);
  if (wineOption) wineOption.addEventListener('change', calculatePrice);

  calculatePrice();

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('booking-name').value || 'Honored Guest';
      const guestEmail = document.getElementById('booking-email').value || 'client@haute.com';
      const guestDate = document.getElementById('booking-date').value || 'Upcoming Date';
      const guestCount = guestSelect.value;
      const refCode = 'ETOILE-' + Math.floor(100000 + Math.random() * 900000);

      const confirmModal = document.getElementById('confirmation-modal');
      const confirmDetails = document.getElementById('confirmation-details');

      if (confirmDetails) {
        confirmDetails.innerHTML = `
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--badge-bg); border: 1.5px solid var(--accent-gold); display: inline-flex; align-items: center; justify-content: center; color: var(--accent-gold); font-size: 1.8rem; margin-bottom: 12px;">✓</div>
            <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--text-primary); margin-bottom: 6px;">Reservation Confirmed</h3>
            <p style="color: var(--text-muted); font-size: 0.95rem;">Confirmation Reference: <strong style="color: var(--accent-gold);">${refCode}</strong></p>
          </div>
          <div style="background: var(--bg-tertiary); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); line-height: 1.8; font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 24px;">
            <p><strong>Guest:</strong> ${guestName}</p>
            <p><strong>Experience:</strong> ${activeType === 'dining' ? 'Private Tasting Salon' : 'Hands-On Masterclass'}</p>
            <p><strong>Date & Seating:</strong> ${guestDate} (Evening 19:30)</p>
            <p><strong>Party Size:</strong> ${guestCount} Guests</p>
            <p><strong>Estimated Total:</strong> ${priceDisplay.textContent}</p>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted); text-align: center;">A formal invitation and sommelier questionnaire have been sent to <strong>${guestEmail}</strong>.</p>
        `;
      }

      if (confirmModal) {
        confirmModal.classList.add('open');
        document.body.style.overflow = 'hidden';
        soundEngine.playLuxuryArpeggio();
      }
    });
  }
}

// Masterclass quick reserve button trigger
window.bookClassPreset = function(className) {
  const bookingSection = document.getElementById('reservations');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
    const classTab = document.querySelector('[data-booking-type="masterclass"]');
    if (classTab) classTab.click();
    showToast(`Masterclass selected: ${className}`);
  }
};

// --- Modals Management ---
function initModals() {
  const modals = document.querySelectorAll('.modal-backdrop');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  const closeBtns = document.querySelectorAll('.modal-close-btn');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentModal = btn.closest('.modal-backdrop');
      if (parentModal) {
        parentModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });
}

// --- Mobile Navigation ---
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const closeBtn = document.getElementById('mobile-nav-close');
  const links = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    drawer?.classList.add('open');
    backdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
    soundEngine.playGentleChime(600);
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    backdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  links.forEach(l => {
    l.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
    }
  });
}

// --- Scroll Spy & Header Effect ---
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

// --- Toast Notification Helper ---
function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span style="color: var(--accent-gold); font-size: 1.1rem;">✦</span>
    <span>${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
