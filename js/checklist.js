// ============================================================
//  TravelMate – checklist.js
//  Interactive travel checklist with progress & localStorage
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  const items = [
    { id: 'id',        icon: '🪪', label: 'Government-issued ID / Aadhar / Passport' },
    { id: 'tickets',   icon: '🎫', label: 'Booking confirmations & itinerary printouts' },
    { id: 'insurance', icon: '🛡️', label: 'Travel insurance documents' },
    { id: 'phone',     icon: '📱', label: 'Phone & charger' },
    { id: 'powerbank', icon: '🔋', label: 'Power bank (fully charged)' },
    { id: 'earphones', icon: '🎧', label: 'Earphones / headphones' },
    { id: 'clothes',   icon: '👕', label: 'Clothes (weather-appropriate)' },
    { id: 'shoes',     icon: '👟', label: 'Comfortable walking shoes' },
    { id: 'jacket',    icon: '🧥', label: 'Jacket or warm layer' },
    { id: 'medicines', icon: '💊', label: 'Prescription medicines & basic first aid' },
    { id: 'water',     icon: '💧', label: 'Reusable water bottle' },
    { id: 'toiletries',icon: '🪥', label: 'Toiletries & personal care items' },
    { id: 'sunscreen', icon: '🧴', label: 'Sunscreen SPF 50+' },
    { id: 'snacks',    icon: '🍫', label: 'Light snacks for the journey' },
    { id: 'cash',      icon: '💵', label: 'Cash & ATM / credit card' },
    { id: 'emergency', icon: '📞', label: 'Emergency contact numbers noted' },
    { id: 'maps',      icon: '🗺️', label: 'Offline maps downloaded' },
    { id: 'camera',    icon: '📷', label: 'Camera or extra phone memory' },
    { id: 'lock',      icon: '🔒', label: 'Luggage lock' },
    { id: 'bag',       icon: '🎒', label: 'Day bag / backpack' },
  ];

  const container = document.getElementById('checklistItems');
  const resetBtn  = document.getElementById('resetChecklist');
  const progFill  = document.getElementById('progressFill');
  const progLabel = document.getElementById('progressLabel');
  const progPct   = document.getElementById('progressPct');

  if (!container) return;

  // Load saved state
  const saved = JSON.parse(localStorage.getItem('tm_checklist') || '{}');
  const state  = {};
  items.forEach(item => { state[item.id] = saved[item.id] || false; });

  function save() {
    localStorage.setItem('tm_checklist', JSON.stringify(state));
  }

  function updateProgress() {
    const done  = Object.values(state).filter(Boolean).length;
    const total = items.length;
    const pct   = Math.round((done / total) * 100);
    if (progFill)  progFill.style.width  = pct + '%';
    if (progLabel) progLabel.textContent = `${done} of ${total} items packed`;
    if (progPct)   progPct.textContent   = pct + '%';
  }

  function renderItems() {
    container.innerHTML = items.map(item => `
      <div class="checklist-item ${state[item.id] ? 'checked' : ''}" data-id="${item.id}">
        <div class="check-box">${state[item.id] ? '✓' : ''}</div>
        <span style="font-size:1.2rem;flex-shrink:0">${item.icon}</span>
        <span class="check-label">${item.label}</span>
      </div>
    `).join('');

    container.querySelectorAll('.checklist-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        state[id] = !state[id];
        el.classList.toggle('checked', state[id]);
        el.querySelector('.check-box').textContent = state[id] ? '✓' : '';
        updateProgress();
        save();
      });
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      items.forEach(item => { state[item.id] = false; });
      save();
      renderItems();
      updateProgress();
    });
  }

  renderItems();
  updateProgress();
});
