// ============================================================
//  TravelMate – destinations.js
//  Destination listing page: search, filter, render cards
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  const grid        = document.getElementById('destGrid');
  const searchInput = document.getElementById('destSearch');
  const seasonSel   = document.getElementById('seasonFilter');
  const tagFilter   = document.getElementById('tagFilter');
  const countEl     = document.getElementById('destCount');

  let query  = '';
  let season = 'all';
  let tag    = 'all';

  // ── Render ────────────────────────────────────────────────
  function render() {
    const filtered = DESTINATIONS.filter(d => {
      const matchQ = !query ||
        d.name.toLowerCase().includes(query) ||
        d.state.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query) ||
        d.tagline.toLowerCase().includes(query);

      const matchS = season === 'all' || d.bestSeasonLabel.toLowerCase().includes(season.toLowerCase());
      const matchT = tag === 'all' || (d.tags && d.tags.some(t => t.toLowerCase() === tag.toLowerCase()));

      return matchQ && matchS && matchT;
    });

    if (countEl) countEl.textContent = `${filtered.length} destination${filtered.length !== 1 ? 's' : ''} found`;

    grid.innerHTML = filtered.length
      ? filtered.map(d => destCardHTML(d)).join('')
      : `<div class="no-results" style="grid-column:1/-1;text-align:center;padding:4rem 1rem;color:var(--text-muted)">
           <div style="font-size:3rem;margin-bottom:1rem">🔍</div>
           <h3 style="color:var(--text);margin-bottom:.5rem">No destinations found</h3>
           <p>Try a different search term or filter.</p>
         </div>`;

    grid.classList.add('stagger');
  }

  function destCardHTML(d) {
    const tagBadges = (d.tags || []).map(t =>
      `<span class="badge badge-blue">${t}</span>`
    ).join('');

    return `
      <div class="card dest-card" data-id="${d.id}">
        <div style="position:relative;overflow:hidden;height:200px">
          <img src="${d.image}" alt="${d.name}" loading="lazy"
               style="width:100%;height:100%;object-fit:cover;transition:transform .5s"
               onmouseover="this.style.transform='scale(1.07)'"
               onmouseout="this.style.transform='scale(1)'">
          <div style="position:absolute;top:10px;right:10px">
            <span class="badge badge-amber">⭐ ${d.bestSeason}</span>
          </div>
        </div>
        <div class="card-body">
          <div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.6rem">${tagBadges}</div>
          <h3 style="font-size:1.15rem">${d.name}</h3>
          <p style="font-size:.8rem;color:var(--primary);font-weight:600;margin-bottom:.4rem">${d.tagline} · ${d.state}</p>
          <p style="font-size:.875rem;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden">${d.description}</p>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:.75rem;padding-top:.75rem;border-top:1px solid var(--border)">
            <span style="font-size:.8rem;color:var(--text-muted)">🕐 ${d.recommendedDays}</span>
            <a href="destination-detail.html?id=${d.id}" class="btn btn-primary btn-sm">Explore →</a>
          </div>
        </div>
      </div>`;
  }

  // ── Events ────────────────────────────────────────────────
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      query = e.target.value.trim().toLowerCase();
      render();
    });
  }

  if (seasonSel) {
    seasonSel.addEventListener('change', e => {
      season = e.target.value;
      render();
    });
  }

  if (tagFilter) {
    tagFilter.addEventListener('change', e => {
      tag = e.target.value;
      render();
    });
  }

  // Filter pills
  document.querySelectorAll('[data-pill]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-pill]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      tag = pill.dataset.pill;
      render();
    });
  });

  render();
});
