import { refs } from './refs';
import { setSectionActive, updateNav } from './aside';

refs.hireMeBtn.addEventListener('click', handleHireMeBtnClick);
function handleHireMeBtnClick(event) {
  setSectionActive(event.target.dataset.name);
  updateNav(event.target.dataset.name);
}
