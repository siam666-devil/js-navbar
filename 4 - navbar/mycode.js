let navToggle = document.querySelector('.nav-toggle');
let links = document.querySelector('.links')

navToggle.addEventListener('click', function (e) {
  // if (links.classList.contains('show-links')) {
  //   links.classList.remove('show-links')
  // } else {
  //   links.classList.add('show-links')
  // }
  links.classList.toggle('show-links')
})