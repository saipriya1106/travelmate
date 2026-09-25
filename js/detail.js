// ============================================================
// detail.js – Destination Detail Page Logic
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  const params = new URLSearchParams(window.location.search);
  const destId = params.get("dest");

  const dest = DESTINATIONS.find(d => d.id === destId);
  const content = document.getElementById("detailContent");

  if (!dest) {
    content.innerHTML = `
      <div class="container" style="padding: 80px 20px; text-align:center;">
        <i class="fas fa-exclamation-triangle" style="font-size:3rem; color:#e74c3c;"></i>
        <h2>Destination Not Found</h2>
        <p>The destination you're looking for doesn't exist.</p>
        <a href="destinations.html" class="btn btn-primary">← Back to Destinations</a>
      </div>
    `;
    return;
  }

  document.title = `${dest.name} – TravelMate`;
  renderDestinationDetail(dest, content);
});

function renderDestinationDetail(dest, container) {
  container.innerHTML = `
    <!-- DEST HERO -->
    <div class="detail-hero" style="background: ${dest.gradient}">
      <div class="detail-hero-overlay"></div>
      <div class="detail-hero-content">
        <div class="detail-breadcrumb">
          <a href="index.html">Home</a> <i class="fas fa-chevron-right"></i>
          <a href="destinations.html">Destinations</a> <i class="fas fa-chevron-right"></i>
          <span>${dest.name}</span>
        </div>
        <span class="detail-emoji">${dest.emoji}</span>
        <h1>${dest.name}</h1>
        <p class="detail-tagline">${dest.tagline}</p>
        <div class="detail-hero-meta">
          <span><i class="fas fa-tag"></i> ${dest.category}</span>
          <span><i class="fas fa-calendar-check"></i> Best: ${dest.bestSeason}</span>
          <span><i class="fas fa-clock"></i> ${dest.duration}</span>
        </div>
      </div>
    </div>

    <!-- QUICK INFO STRIP -->
    <div class="quick-info-strip">
      <div class="container">
        <div class="quick-info-grid">
          <div class="qi-item">
            <i class="fas fa-star"></i>
            <div><span>Best Season</span><strong>${dest.recommendedSeason}</strong></div>
          </div>
          <div class="qi-item">
            <i class="fas fa-calendar-alt"></i>
            <div><span>Best Months</span><strong>${dest.recommendedMonths.slice(0, 3).join(", ")}...</strong></div>
          </div>
          <div class="qi-item">
            <i class="fas fa-clock"></i>
            <div><span>Recommended Stay</span><strong>${dest.duration}</strong></div>
          </div>
          <div class="qi-item">
            <i class="fas fa-wallet"></i>
            <div><span>Budget/day</span><strong>${dest.budget.budget}</strong></div>
          </div>
        </div>
      </div>
    </div>

    <!-- MAIN CONTENT -->
    <div class="container detail-container">

      <!-- ABOUT -->
      <section class="detail-section" id="about">
        <div class="detail-section-header">
          <i class="fas fa-info-circle"></i>
          <h2>About ${dest.name}</h2>
        </div>
        <div class="detail-about-grid">
          <div class="about-text">
            <p>${dest.about}</p>
            <div class="culture-box">
              <h4><i class="fas fa-landmark"></i> Culture & Speciality</h4>
              <p>${dest.culture}</p>
            </div>
          </div>
          <div class="about-sidebar">
            <div class="sidebar-card">
              <h4>Quick Facts</h4>
              <ul class="facts-list">
                <li><i class="fas fa-map-marker-alt"></i> <strong>Category:</strong> ${dest.category}</li>
                <li><i class="fas fa-calendar-check"></i> <strong>Best Season:</strong> ${dest.bestSeason}</li>
                <li><i class="fas fa-clock"></i> <strong>Duration:</strong> ${dest.duration}</li>
                <li><i class="fas fa-hiking"></i> <strong>Suitable for:</strong> ${dest.suitableFor}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- BEST TIME TO VISIT -->
      <section class="detail-section" id="besttime">
        <div class="detail-section-header">
          <i class="fas fa-calendar-alt"></i>
          <h2>Best Time to Visit</h2>
        </div>
        <div class="season-cards-row">
          <div class="season-card ${dest.recommendedSeason.includes('Summer') ? 'season-recommended' : ''}">
            <div class="season-card-icon"><i class="fas fa-sun"></i></div>
            <h4>Summer</h4>
            <p>${dest.weather.summer}</p>
            ${dest.recommendedSeason.includes('Summer') ? '<span class="recommended-badge">✓ Recommended</span>' : ''}
          </div>
          <div class="season-card ${dest.recommendedSeason.includes('Monsoon') ? 'season-recommended' : ''}">
            <div class="season-card-icon"><i class="fas fa-cloud-rain"></i></div>
            <h4>Monsoon</h4>
            <p>${dest.weather.monsoon}</p>
            ${dest.recommendedSeason.includes('Monsoon') ? '<span class="recommended-badge">✓ Recommended</span>' : ''}
          </div>
          <div class="season-card ${dest.recommendedSeason.includes('Winter') ? 'season-recommended' : ''}">
            <div class="season-card-icon"><i class="fas fa-snowflake"></i></div>
            <h4>Winter</h4>
            <p>${dest.weather.winter}</p>
            ${dest.recommendedSeason.includes('Winter') ? '<span class="recommended-badge">✓ Recommended</span>' : ''}
          </div>
          <div class="season-card ${dest.recommendedSeason.includes('Spring') ? 'season-recommended' : ''}">
            <div class="season-card-icon"><i class="fas fa-seedling"></i></div>
            <h4>Spring/Autumn</h4>
            <p>Pleasant transition months with moderate weather.</p>
            ${dest.recommendedSeason.includes('Spring') || dest.recommendedSeason.includes('Autumn') ? '<span class="recommended-badge">✓ Recommended</span>' : ''}
          </div>
        </div>
        <div class="why-visit-box">
          <i class="fas fa-lightbulb"></i>
          <div>
            <strong>Why visit in ${dest.recommendedSeason}?</strong>
            <p>${dest.whyVisit}</p>
          </div>
        </div>
        <div class="best-months-section">
          <strong><i class="fas fa-calendar"></i> Recommended Months:</strong>
          <div class="month-chips mt-8">
            ${dest.recommendedMonths.map(m => `<span class="month-chip">${m}</span>`).join("")}
          </div>
        </div>
      </section>

      <!-- PLACES TO VISIT -->
      <section class="detail-section" id="places">
        <div class="detail-section-header">
          <i class="fas fa-map-marker-alt"></i>
          <h2>Places to Visit</h2>
        </div>
        <div class="places-grid">
          ${dest.places.map((place, idx) => `
            <div class="place-card">
              <div class="place-card-num">${idx + 1}</div>
              <div class="place-card-content">
                <h4>${place}</h4>
                <p>A must-visit attraction in ${dest.name}.</p>
                <span class="place-type-badge"><i class="fas fa-map-pin"></i> ${dest.category}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- LOCAL FOOD -->
      <section class="detail-section" id="food">
        <div class="detail-section-header">
          <i class="fas fa-utensils"></i>
          <h2>Local Food & Cuisine</h2>
        </div>
        <div class="food-grid">
          ${dest.food.map(item => `
            <div class="food-item-card">
              <div class="food-icon"><i class="fas fa-utensils"></i></div>
              <h4>${item}</h4>
            </div>
          `).join("")}
        </div>
        <div class="experiences-section">
          <h4><i class="fas fa-star"></i> Local Experiences</h4>
          <ul class="experiences-list">
            ${dest.localExperiences.map(exp => `<li><i class="fas fa-check-circle"></i> ${exp}</li>`).join("")}
          </ul>
        </div>
      </section>

      <!-- HOW TO REACH -->
      <section class="detail-section" id="reach">
        <div class="detail-section-header">
          <i class="fas fa-route"></i>
          <h2>How to Reach</h2>
        </div>
        <div class="reach-grid">
          <div class="reach-card">
            <div class="reach-icon"><i class="fas fa-plane"></i></div>
            <h4>By Air</h4>
            <p>${dest.howToReach.air}</p>
          </div>
          <div class="reach-card">
            <div class="reach-icon"><i class="fas fa-train"></i></div>
            <h4>By Train</h4>
            <p>${dest.howToReach.train}</p>
          </div>
          <div class="reach-card">
            <div class="reach-icon"><i class="fas fa-road"></i></div>
            <h4>By Road</h4>
            <p>${dest.howToReach.road}</p>
          </div>
        </div>
        <div class="transport-box">
          <h4><i class="fas fa-bus"></i> Local Transportation in ${dest.name}</h4>
          <p>${dest.transportation}</p>
        </div>
      </section>

      <!-- BUDGET GUIDE -->
      <section class="detail-section" id="budget">
        <div class="detail-section-header">
          <i class="fas fa-wallet"></i>
          <h2>Budget Guide</h2>
        </div>
        <p class="budget-note"><i class="fas fa-info-circle"></i> Approximate per-person per-day estimates including food and local transport. Excludes travel to/from destination.</p>
        <div class="budget-grid">
          <div class="budget-card budget-low">
            <div class="budget-icon"><i class="fas fa-backpack"></i></div>
            <h4>Budget</h4>
            <p class="budget-amount">${dest.budget.budget}</p>
            <p>Hostels, local dhabas, public transport.</p>
          </div>
          <div class="budget-card budget-mid">
            <div class="budget-icon"><i class="fas fa-suitcase"></i></div>
            <h4>Moderate</h4>
            <p class="budget-amount">${dest.budget.moderate}</p>
            <p>Mid-range hotels, local restaurants, hired transport.</p>
          </div>
          <div class="budget-card budget-high">
            <div class="budget-icon"><i class="fas fa-gem"></i></div>
            <h4>Premium</h4>
            <p class="budget-amount">${dest.budget.premium}</p>
            <p>Luxury hotels, fine dining, private vehicles.</p>
          </div>
        </div>
      </section>

      <!-- TRAVEL TIPS -->
      <section class="detail-section" id="tips">
        <div class="detail-section-header">
          <i class="fas fa-lightbulb"></i>
          <h2>Travel Tips for ${dest.name}</h2>
        </div>
        <div class="detail-tips-grid">
          ${dest.tips.map(tip => `
            <div class="detail-tip-card">
              <i class="fas fa-check-circle"></i>
              <p>${tip}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- BACK / EXPLORE MORE -->
      <div class="detail-actions">
        <a href="destinations.html" class="btn btn-outline"><i class="fas fa-arrow-left"></i> All Destinations</a>
        <a href="food.html?dest=${dest.id}" class="btn btn-primary"><i class="fas fa-utensils"></i> Explore Food</a>
        <a href="checklist.html" class="btn btn-secondary"><i class="fas fa-clipboard-check"></i> Travel Checklist</a>
      </div>

    </div><!-- /detail-container -->
  `;
}
