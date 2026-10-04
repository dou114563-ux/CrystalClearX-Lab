document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filters button');
  const cards = document.querySelectorAll('.filter-card');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      cards.forEach(card => { card.style.display = filter === 'all' || card.dataset.category === filter ? '' : 'none'; });
    });
  });
});
