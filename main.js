// Execute script after page load
window.onload = function digital_fn() {
  let toggle = document.querySelector('.nav-toggle');
  let collapse = document.querySelector('.nav-collapse');

  toggle.addEventListener('click', function (e) {
    collapse.classList.toggle('active');
  });
};
