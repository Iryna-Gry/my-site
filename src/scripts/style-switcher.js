const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
const styleSwitcherContainer = document.querySelector('.style-switcher');
styleSwitcherToggler.addEventListener('click', () => {
  styleSwitcherContainer.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  if (styleSwitcherContainer.classList.contains('open'))
    styleSwitcherContainer.classList.remove('open');
});
