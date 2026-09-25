// ============================================================
// tips.js – Travel Tips Page Logic
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderGeneralTips();
  initSeasonTabs();
  populateDestTipsSelect();
  initDestTipsSelector();
  renderHighlightTips();
});

function renderGeneralTips() {
  const grid = document.getElementById("generalTipsGrid");
  if (!grid) return;
  GENERAL_TIPS.forEach(tip => {
    const card = document.createElement("div");
    card.className = "gen-tip-card";
    card.innerHTML = `<i class="${tip.icon}"></i><p>${tip.text}</p>`;
    grid.appendChild(card);
  });
}

function populateDestTipsSelect() {
  const sel = document.getElementById("destTipsSelect");
  if (!sel) return;
  DESTINATIONS.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d.id;
    opt.textContent = d.name;
    sel.appendChild(opt);
  });
}

function initDestTipsSelector() {
  const btn = document.getElementById("destTipsBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const val = document.getElementById("destTipsSelect").value;
    const el = document.getElementById("destTipsResult");
    if (!val) {
      el.innerHTML = `<p class="when-empty"><i class='fas fa-info-circle'></i> Please select a destination.</p>`;
      return;
    }
    const dest = DESTINATIONS.find(d => d.id === val);
    if (!dest) return;
    el.innerHTML = `
      <div class="dest-tips-card">
        <div class="dest-tips-card-header" style="background: ${dest.gradient}">
          <span>${dest.emoji}</span>
          <h3>${dest.name} – Travel Tips</h3>
        </div>
        <ul class="dest-tips-list">
          ${dest.tips.map(t => `<li><i class="fas fa-check-circle"></i> ${t}</li>`).join("")}
        </ul>
        <a href="destination-detail.html?dest=${dest.id}" class="btn btn-primary btn-sm">
          <i class="fas fa-compass"></i> Full ${dest.name} Guide
        </a>
      </div>
    `;
    el.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function renderHighlightTips() {
  const grid = document.getElementById("destTipsHighlight");
  if (!grid) return;
  const highlights = ["goa", "manali", "rajasthan", "kerala", "kashmir"];
  highlights.forEach(id => {
    const dest = DESTINATIONS.find(d => d.id === id);
    if (!dest) return;
    const card = document.createElement("div");
    card.className = "highlight-tip-card";
    card.innerHTML = `
      <div class="highlight-tip-header" style="background: ${dest.gradient}">
        <span>${dest.emoji}</span>
        <h4>${dest.name}</h4>
      </div>
      <ul>
        ${dest.tips.slice(0, 3).map(t => `<li><i class="fas fa-check"></i> ${t}</li>`).join("")}
      </ul>
      <a href="destination-detail.html?dest=${dest.id}" class="btn btn-outline btn-sm">All Tips</a>
    `;
    grid.appendChild(card);
  });
}
