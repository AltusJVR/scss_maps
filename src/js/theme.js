const documentE = document.documentElement;
const button = document.querySelector('.navbar__theme');
const page = window.location.pathname;



function setTheme(themeName) {
  if (page === '/index.html') {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  } else {
    localStorage.setItem('darktheme', themeName)
    document.documentElement.className = themeName;
  }
}


// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-1') {
    setTheme('theme-2');
  } else {
    setTheme('theme-1');
  }
}

function toggleDarkTheme() {
  if (localStorage.getItem('darktheme') === 'dark-theme-1') {
    setTheme('dark-theme-2');
  } else {
    setTheme('dark-theme-1');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (page === 'index.html' && localStorage.getItem('theme') === 'theme-1') {
    setTheme('theme-1');
  } if (page === 'index.html' && localStorage.getItem('theme') === 'theme-2') {
    setTheme('theme-2');
  } if (page === 'dark.html' && localStorage.getItem('darktheme') === 'dark-theme-1') {
    setTheme('dark-theme-1')
  } if (page === 'dark.html' && localStorage.getItem('darktheme') === 'dark-theme-2') {
    setTheme('dark-theme-2')
  }
})();

button.addEventListener('click', () => {
  if (page === '/index.html') {
    toggleTheme()
  } else {
    toggleDarkTheme()
  }
})
