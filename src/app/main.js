import { convertPixelsToRem } from './utils/convertPixelsToRem.js';

export function run() {
  const anchor = document.querySelector('.anchor-button');
  function setNav() {
    const width = convertPixelsToRem(window.innerWidth);
    anchor.setAttribute('href', width >= 80 ? '#history' : '#def');
  }

  setNav();
  window.addEventListener('resize', setNav);
}