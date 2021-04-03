const styles = window.getComputedStyle(document.documentElement);
const initialColorValue = styles.getPropertyValue('--highlight-color');
const rootStyle = document.documentElement.style;
const body = document.querySelector('body');
const button = document.querySelector('button');
console.log(initialColorValue)
console.log(rootStyle)

button.addEventListener('click', () => {
  if (rootStyle.getPropertyValue('--highlight-color') === initialColorValue) {
    rootStyle.setProperty('--highlight-color', 'rgb(255, 255, 25)')
    console.log(rootStyle)
    console.log(initialColorValue)
  } else {
    rootStyle.removeProperty('--highlight-color')
    rootStyle.setProperty('--highlight-color', `${initialColorValue}`)
    console.log(rootStyle)
    console.log(initialColorValue)
  }
})