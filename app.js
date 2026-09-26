const toggle = document.querySelector('.mobile-toggle');
const header = document.querySelector('.nav');
if (toggle && header) toggle.addEventListener('click', () => header.classList.toggle('open'));

document.querySelectorAll('.nav nav a').forEach(link => link.addEventListener('click', () => header?.classList.remove('open')));

const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('#project-list .card');
if (filterButtons.length && cards.length) {
  filterButtons.forEach(btn => btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      card.dataset.hidden = filter !== 'all' && card.dataset.category !== filter ? 'true' : 'false';
    });
  }));
}

// Image fallback: remote reference images can be unavailable in some regions or
// blocked by a CDN. Keep a local project thumbnail as a graceful fallback.
const pathPrefix = window.location.pathname.includes('/projects/') ? '../' : '';
document.querySelectorAll('img[src*="upload.wikimedia.org"], img[src*="i.ebayimg.com"]').forEach(img => {
  img.addEventListener('error', () => {
    const text = `${img.alt || ''} ${img.getAttribute('src') || ''}`.toLowerCase();
    let fallback = 'assets/thumb-web.svg';
    if (text.includes('dell') || text.includes('motherboard')) fallback = 'assets/thumb-dell.svg';
    else if (text.includes('raspberry') || text.includes('pi 4')) fallback = 'assets/thumb-pi.svg';
    else if (text.includes('esp32') || text.includes('solar')) fallback = 'assets/thumb-solar.svg';
    img.src = `${pathPrefix}${fallback}`;
  }, { once: true });
});
