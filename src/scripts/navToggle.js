import { refs } from './refs';

const sectionList = refs.main.querySelectorAll('section');

refs.navTogglerBtn.addEventListener('click', toggleMenu);
export function toggleMenu() {
  refs.aside.classList.toggle('open');
  refs.navTogglerBtn.classList.toggle('open');
  for (let i = 0; i < sectionList.length; i += 1) {
    sectionList[i].classList.toggle('open');
  }
}
