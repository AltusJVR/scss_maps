const documentE = document.documentElement;
const button = document.querySelector('.navbar__theme');

button.addEventListener('click', (e) => {
  e.preventDefault();
  if (documentE.className === 'purple-theme') {
    e.stopPropagation()
    documentE.classList.remove('purple-theme')
    documentE.classList.add('blue-theme')
  } else {
    e.stopPropagation()
    documentE.classList.remove('blue-theme')
    documentE.classList.add('purple-theme')
  }
})
