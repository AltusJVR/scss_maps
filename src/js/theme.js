const documentE = document.documentElement;
const button = document.querySelector('.navbar__theme');



function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'blue-theme') {
    setTheme('purple-theme');
  } else {
    setTheme('blue-theme');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'blue-theme') {
    setTheme('blue-theme');
  } else {
    setTheme('purple-theme');
  }
})();

button.addEventListener('click', () => {
  toggleTheme()
})
