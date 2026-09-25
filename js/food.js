// ============================================================
// food.js – Food & Local Experiences Page Logic
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderAllFood(DESTINATIONS);
  renderCulturalExperiences();
  initFoodSearch();
  
  // If a dest param is present, scroll to it
  const params = new URLSearchParams(window.location.search);
  const destId = params.get("dest");
  if (destId) {
    setTimeout(() => {
      const el = document.getElementById(`food-${destId}`);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }
});

function renderAllFood(list) {
  const grid = document.getElementById("foodAllGrid");
  const noRes = document.getElementById("foodNoResults");
  if (!grid) return;
  grid.innerHTML = "";

  if (list.length === 0) {
    noRes.classList.remove("hidden");
    return;
  }
  noRes.classList.add("hidden");

  list.forEach(dest => {
    const card = document.createElement("div");
    card.className = "food-dest-card";
    card.id = `food-${dest.id}`;
    card.innerHTML = `
      <div class="food-dest-header" style="background: ${dest.gradient}">
        <span>${dest.emoji}</span>
        <div>
          <h3>${dest.name}</h3>
          <p>${dest.tagline}</p>
        </div>
      </div>
      <div class="food-dest-body">
        <div class="food-dishes-section">
          <h4><i class="fas fa-utensils"></i> Famous Dishes</h4>
          <div class="food-chips">
            ${dest.food.map(f => `<span class="food-chip">${f}</span>`).join("")}
          </div>
        </div>
        <div class="food-exp-section">
          <h4><i class="fas fa-star"></i> Local Experiences</h4>
          <ul>
            ${dest.localExperiences.map(e => `<li><i class="fas fa-check-circle"></i> ${e}</li>`).join("")}
          </ul>
        </div>
        <a href="destination-detail.html?dest=${dest.id}" class="btn btn-outline btn-sm">
          <i class="fas fa-compass"></i> Full ${dest.name} Guide
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderCulturalExperiences() {
  const grid = document.getElementById("culturalGrid");
  if (!grid) return;
  const culturalHighlights = [
    { name: "Ganga Aarti", dest: "Varanasi", emoji: "🙏", desc: "The evening prayer ceremony at Dashashwamedh Ghat on the Ganges is one of India's most moving spiritual experiences." },
    { name: "Kathakali Dance", dest: "Kerala", emoji: "💃", desc: "Ancient classical dance form of Kerala combining music, vocal performance and mime. A true cultural spectacle." },
    { name: "Puppet Show", dest: "Rajasthan", emoji: "🎭", desc: "Traditional Rajasthani Kathputli puppet shows tell ancient tales through colourful wooden puppets." },
    { name: "Shikara Ride", dest: "Kashmir", emoji: "⛵", desc: "A ride on a traditional Shikara boat across the beautiful Dal Lake at sunset is an unforgettable experience." },
    { name: "Kullu Dussehra", dest: "Manali", emoji: "🎉", desc: "The Kullu Dussehra festival is celebrated for 7 days with processions, folk music and cultural performances." },
    { name: "Houseboat Stay", dest: "Kerala", emoji: "🛶", desc: "Spending a night on a traditional Kerala houseboat (Kettuvallam) drifting through the backwaters is truly memorable." },
    { name: "Camel Safari", dest: "Rajasthan", emoji: "🐪", desc: "A camel ride through the Thar Desert near Jaisalmer at sunset offers a magical desert experience." },
    { name: "Toy Train Ride", dest: "Darjeeling", emoji: "🚂", desc: "The UNESCO-listed Darjeeling Himalayan Railway is not just a train ride — it's a journey through living history." }
  ];
  culturalHighlights.forEach(item => {
    const card = document.createElement("div");
    card.className = "cultural-card";
    card.innerHTML = `
      <div class="cultural-emoji">${item.emoji}</div>
      <h4>${item.name}</h4>
      <span class="cultural-dest-tag">${item.dest}</span>
      <p>${item.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function initFoodSearch() {
  const searchInput = document.getElementById("foodSearch");
  const btn = document.getElementById("foodSearchBtn");

  function doSearch() {
    const val = (searchInput ? searchInput.value : "").toLowerCase().trim();
    if (!val) {
      renderAllFood(DESTINATIONS);
      return;
    }
    const filtered = DESTINATIONS.filter(dest =>
      dest.name.toLowerCase().includes(val) ||
      dest.food.some(f => f.toLowerCase().includes(val)) ||
      dest.localExperiences.some(e => e.toLowerCase().includes(val))
    );
    renderAllFood(filtered);
  }

  if (btn) btn.addEventListener("click", doSearch);
  if (searchInput) searchInput.addEventListener("keyup", e => { if (e.key === "Enter") doSearch(); });
}
