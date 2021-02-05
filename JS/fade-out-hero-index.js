var heroBg = document.getElementById ('hero-bg')
window.addEventListener ('scroll', function () {
  heroBg.style.opacity = 1 - +window.pageYOffset/250+ ''
  heroBg.style.top = +window.pageYOffset+ 'px'
  heroBg.style.backgroundPositionY = - +window.pageYOffset/2+ 'px'
})