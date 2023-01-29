const dayNightBtn = document.querySelector('.day-night');
window.addEventListener('load', () => {
  if (document.body.classList.contains('dark')) {
    dayNightBtn.querySelector('i').classList.add('fa-sun');
  } else {
    dayNightBtn.querySelector('i').classList.add('fa-moon');
  }
});
dayNightBtn.addEventListener('click', () => {
  dayNightBtn.querySelector('i').classList.toggle('fa-sun');
  dayNightBtn.querySelector('i').classList.toggle('fa-moon');
  document.body.classList.toggle('dark');
});
