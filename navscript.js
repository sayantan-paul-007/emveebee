const hamicon = document.querySelector('.ham-icon')
const hammenu = document.querySelector('.ham-menu')
const hamclose = document.querySelector('.close')

hamicon.addEventListener('click', function () {
    hammenu.classList.remove('hidden')
  })
hamclose.addEventListener('click', function () { 
    hammenu.classList.add('hidden')
 })