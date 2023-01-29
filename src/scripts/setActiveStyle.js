export const colorSet = document.querySelector('[data-color-set]');

export const setActiveStyle = event => {
  const activeColor = event.target.dataset.colorSkin;
  localStorage.setItem('color', activeColor);
  const root = document.querySelector(':root');
  root.style.setProperty('--skin-color', activeColor);
};

colorSet.addEventListener('click', setActiveStyle);

if (localStorage.getItem('color')) {
  const activeColor = localStorage.getItem('color');
  const root = document.querySelector(':root');
  root.style.setProperty('--skin-color', activeColor);
} else {
  return;
}
