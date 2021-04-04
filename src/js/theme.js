const documentE = document.documentElement;
const button = document.querySelector('.navbar__theme');



function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-1') {
    setTheme('theme-2');
  } else {
    setTheme('theme-1');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-1') {
    setTheme('theme-1');
  } else {
    setTheme('theme-2');
  }
})();

button.addEventListener('click', () => {
  toggleTheme()
})
