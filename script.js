document.querySelectorAll('.show-more').forEach(link => {
    link.addEventListener('click', () => {
      const extra = link.previousElementSibling;
      if (extra.style.display === 'none' || extra.style.display === '') {
        extra.style.display = 'block';
        link.textContent = 'Hide extra';
      } else {
        extra.style.display = 'none';
        link.textContent = 'Click for extra';
      }
    });
  });
  
  function filterCards() {
    const query = document.querySelector('input[type="search"]').value.toLowerCase();
    const cards = document.querySelectorAll('#cookie-cards .col');
    let visibleCount = 0;
  
    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(query)) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
  
    document.getElementById('no-results').style.display = visibleCount === 0 ? 'block' : 'none';
  }
  
  document.querySelector('.search-bar button').addEventListener('click', filterCards);
  document.querySelector('input[type="search"]').addEventListener('input', filterCards);
  
