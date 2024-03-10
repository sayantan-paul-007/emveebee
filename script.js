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
const film_button_mobile = document.querySelector('.film-btn-mobile')
const ott_button_mobile = document.querySelector('.ott-btn-mobile')
const tv_button_mobile = document.querySelector('.tv-btn-mobile')
const audio_button_mobile = document.querySelector('.audio-btn-mobile')
const brand_button_mobile = document.querySelector('.brand-btn-mobile')

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
film_button_mobile.addEventListener('click', function(){
    ott.classList.add("hidden");
    film.classList.remove('hidden');
    tv.classList.add('hidden');
    audio.classList.add('hidden');
    brand.classList.add('hidden');
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
ott_button_mobile.addEventListener('click', function(){
    ott.classList.remove("hidden");
    film.classList.add('hidden');
    tv.classList.add('hidden');
    audio.classList.add('hidden');
    brand.classList.add('hidden');
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
tv_button_mobile.addEventListener('click', function(){
    ott.classList.add("hidden");
    film.classList.add('hidden');
    tv.classList.remove('hidden');
    audio.classList.add('hidden');
    brand.classList.add('hidden');
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
audio_button_mobile.addEventListener('click', function(){
    ott.classList.add("hidden");
    film.classList.add('hidden');
    tv.classList.add('hidden');
    audio.classList.remove('hidden');
    brand.classList.add('hidden');
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
brand_button_mobile.addEventListener('click', function(){
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
function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  }
  
  function selectOption(option) {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    dropdownToggle.textContent = option;
    toggleDropdown();
    // Additional logic for handling the selected option
  }
  
