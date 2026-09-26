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
