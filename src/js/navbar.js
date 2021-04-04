const navbarLink = document.querySelector('.navbar__links');
const burger = document.querySelector('.burger');
const navLinksA = document.querySelectorAll('.navbar__links a');

const toggle = () => {
  burger.addEventListener('click', () => {
    navbarLink.classList.toggle('navbar__active')
    burger.classList.toggle('toggle')
    navLinksA.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
      }
    });
  })
}

toggle()