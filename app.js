document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    document.querySelectorAll('.filter-card').forEach(card=>{
      card.style.display=(filter==='all'||card.dataset.category===filter)?'':'none';
    });
  }));
});
