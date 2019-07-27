(function() {
  
  let accordions = document.querySelectorAll('.sidenav-dropdown');

  accordions.forEach(function(element, i) {
    element.addEventListener('click', function() {
      const panel = element.querySelector('.dropdown-panel');
      if (panel.style.maxHeight) {
        element.classList.remove('open');
        panel.style.maxHeight = null;
      } else {
        element.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  let btn = document.querySelector('.btn-display');
  let sidenav = document.querySelector('.sidenav');
  btn.addEventListener('click', function(e) {
    sidenav.classList.toggle('is-open');
  });
  
})();
