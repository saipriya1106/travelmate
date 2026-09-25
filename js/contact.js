// ============================================================
//  TravelMate – contact.js
//  Contact/feedback form with validation
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  const form     = document.getElementById('feedbackForm');
  const success  = document.getElementById('formSuccess');
  if (!form) return;

  // ── Star rating ───────────────────────────────────────────
  let selectedRating = 0;
  const stars = form.querySelectorAll('.star');

  stars.forEach((star, idx) => {
    star.addEventListener('mouseenter', () => highlightStars(idx + 1));
    star.addEventListener('mouseleave', () => highlightStars(selectedRating));
    star.addEventListener('click', () => {
      selectedRating = idx + 1;
      highlightStars(selectedRating);
    });
  });

  function highlightStars(count) {
    stars.forEach((s, i) => s.classList.toggle('active', i < count));
  }

  // ── Validation helpers ────────────────────────────────────
  function showError(fieldId, msg) {
    const el = document.getElementById(fieldId + 'Error');
    const input = document.getElementById(fieldId);
    if (el)    { el.textContent = msg; el.classList.add('show'); }
    if (input) input.classList.add('error');
  }

  function clearError(fieldId) {
    const el    = document.getElementById(fieldId + 'Error');
    const input = document.getElementById(fieldId);
    if (el)    { el.textContent = ''; el.classList.remove('show'); }
    if (input) input.classList.remove('error');
  }

  function clearAllErrors() {
    ['name', 'email', 'message'].forEach(clearError);
    const rateErr = document.getElementById('ratingError');
    if (rateErr) { rateErr.textContent = ''; rateErr.classList.remove('show'); }
  }

  // ── Live validation ───────────────────────────────────────
  ['name', 'email', 'message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => clearError(id));
  });

  // ── Submit ────────────────────────────────────────────────
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearAllErrors();

    const name    = document.getElementById('name')?.value.trim();
    const email   = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();
    let valid = true;

    if (!name || name.length < 2) {
      showError('name', 'Please enter your full name (at least 2 characters).');
      valid = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    }

    if (!message || message.length < 10) {
      showError('message', 'Please write at least 10 characters in your message.');
      valid = false;
    }

    if (selectedRating === 0) {
      const rateErr = document.getElementById('ratingError');
      if (rateErr) { rateErr.textContent = 'Please select a rating.'; rateErr.classList.add('show'); }
      valid = false;
    }

    if (!valid) return;

    // Show success
    form.style.display = 'none';
    if (success) success.style.display = 'block';
  });
});
