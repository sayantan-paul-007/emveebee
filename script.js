const film = document.querySelector('.film-section')
const ott = document.querySelector('.ott-section')
const tv = document.querySelector('.tv-section')
const audio = document.querySelector('.audio-section')
const brand = document.querySelector('.brand-section')
const film_button = document.querySelector('.film-btn')
const ott_button = document.querySelector('.ott-btn')
const tv_button = document.querySelector('.tv-btn')
const audio_button = document.querySelector('.audio-btn')
const brand_button = document.querySelector('.brand-btn')
const hamicon = document.querySelector('.ham-icon')
const hammenu = document.querySelector('.ham-menu')
const hamclose = document.querySelector('.close')
hamicon.addEventListener('click', function () {
    hammenu.classList.add('show-ham-menu')
  })
hamclose.addEventListener('click', function () { 
    hammenu.classList.remove('show-ham-menu')
 })
film_button.addEventListener('click', function(){
    ott.classList.add("hidden");
    film.classList.remove('hidden');
    tv.classList.add('hidden');
    audio.classList.add('hidden');
    brand.classList.add('hidden');
    film_button.classList.add('bg-neutral','text-primary')
    ott_button.classList.remove('bg-neutral','text-primary')
    audio_button.classList.remove('bg-neutral','text-primary')
    tv_button.classList.remove('bg-neutral','text-primary')
    brand_button.classList.remove('bg-neutral','text-primary')
})
ott_button.addEventListener('click', function(){
        ott.classList.remove("hidden");
        film.classList.add('hidden');
        tv.classList.add('hidden');
        audio.classList.add('hidden');
        brand.classList.add('hidden');
        film_button.classList.remove('bg-neutral','text-primary')
        film_button.classList.add('text-neutral')
    ott_button.classList.add('bg-neutral','text-primary')
    audio_button.classList.remove('bg-neutral','text-primary')
    tv_button.classList.remove('bg-neutral','text-primary')
    brand_button.classList.remove('bg-neutral','text-primary')
})
tv_button.addEventListener('click', function(){
    ott.classList.add("hidden");
    film.classList.add('hidden');
    tv.classList.remove('hidden');
    audio.classList.add('hidden');
    brand.classList.add('hidden');
    film_button.classList.remove('bg-neutral','text-primary')
    film_button.classList.add('text-neutral')
    ott_button.classList.remove('bg-neutral','text-primary')
    audio_button.classList.remove('bg-neutral','text-primary')
    tv_button.classList.add('bg-neutral','text-primary')
    brand_button.classList.remove('bg-neutral','text-primary')
})
audio_button.addEventListener('click', function(){
    ott.classList.add("hidden");
    film.classList.add('hidden');
    tv.classList.add('hidden');
    audio.classList.remove('hidden');
    brand.classList.add('hidden');
    film_button.classList.remove('bg-neutral','text-primary')
    film_button.classList.add('text-neutral')
    ott_button.classList.remove('bg-neutral','text-primary')
    audio_button.classList.add('bg-neutral','text-primary')
    tv_button.classList.remove('bg-neutral','text-primary')
    brand_button.classList.remove('bg-neutral','text-primary')
})
brand_button.addEventListener('click', function(){
    ott.classList.add("hidden");
    film.classList.add('hidden');
    tv.classList.add('hidden');
    audio.classList.add('hidden');
    brand.classList.remove('hidden');
    film_button.classList.remove('bg-neutral','text-primary')
    film_button.classList.add('text-neutral')
    ott_button.classList.remove('bg-neutral','text-primary')
    audio_button.classList.remove('bg-neutral','text-primary')
    tv_button.classList.remove('bg-neutral','text-primary')
    brand_button.classList.add('bg-neutral','text-primary')
})
// Form Validation
