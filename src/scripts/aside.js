import { refs } from './refs';
import { toggleMenu } from './navToggle';

const sectionList = refs.main.querySelectorAll('section');
const navList = refs.navContainer.querySelectorAll('li');
function setLinkActive(event) {
  for (let i = 0; i < navList.length; i += 1) {
    navList[i].querySelector('a').classList.remove('active');
  }
  const activeLink = event.target;

  activeLink.classList.add('active');
  setSectionActive(activeLink.dataset.name);
  if (window.innerWidth < 1200) {
    toggleMenu();
  }
}

refs.navContainer.addEventListener('click', setLinkActive);

export function setSectionActive(id) {
  const sectionActive = document.getElementById(`${id}`);

  for (let i = 0; i < sectionList.length; i += 1) {
    sectionList[i].classList.remove('back-section');
    if (sectionList[i].classList.contains('active')) {
      sectionList[i].classList.add('back-section');
    }
    sectionList[i].classList.remove('active');
  }

  sectionActive.classList.add('active');
}
export function updateNav(name) {
  for (let i = 0; i < navList.length; i += 1) {
    const link = navList[i].querySelector('a');
    link.classList.remove('active');
    if (name === link.dataset.name) {
      link.classList.add('active');
    }
  }
}
