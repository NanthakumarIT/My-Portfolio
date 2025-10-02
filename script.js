// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");
  hamburger.textContent = navList.classList.contains("open") ? "✕" : "☰";
});

// Animate skill circles when skills section is visible
(function(){
  const skillCards = document.querySelectorAll('.skill-card');

  // circumference for r=40
  const CIRCUMFERENCE = 2 * Math.PI * 40; // ~251.2

  function animateCard(card){
    if(card.classList.contains('animated')) return;
    const percent = parseInt(card.dataset.percent || '0', 10);
    const bar = card.querySelector('.progress-bar');

    // calculate offset: stroke-dashoffset value to show percent
    const offset = CIRCUMFERENCE * (1 - (percent / 100));
    // set inline to ensure smooth animation from JS
    bar.style.strokeDasharray = CIRCUMFERENCE;
    // start from full hidden (no need, CSS already), then animate to offset
    setTimeout(()=> {
      bar.style.strokeDashoffset = offset;
    }, 60);

    card.classList.add('animated');
  }

  function onScrollCheck(){
    const triggerPoint = window.innerHeight * 0.85;
    skillCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if(rect.top <= triggerPoint) {
        animateCard(card);
      }
    });
  }

  // run on load + scroll
  window.addEventListener('load', onScrollCheck);
  window.addEventListener('scroll', onScrollCheck);
})();
