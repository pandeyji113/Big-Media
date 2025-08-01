
document.querySelector('form')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});

// for portolio view more button
 function toggleCards() {
  const moreCards = document.querySelector('.more-cards');
  const btn = document.querySelector('.view-more-btn');

  if (moreCards.classList.contains('d-none')) {
    moreCards.classList.remove('d-none');
    btn.textContent = "View Less";
  } else {
    moreCards.classList.add('d-none');
    btn.textContent = "View More";
  }
}
