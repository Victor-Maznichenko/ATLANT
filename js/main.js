
//custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', 'top:' +(e.pageY - 8)+'px;left:'+(e.pageX - 8)+'px;');
});


//Parallax images on the page work
document.addEventListener('mousemove', parallax);
function parallax(e){
 this.querySelectorAll('.swiper-slide-active .work__slide-img').forEach(img => {
   const speed = img.getAttribute('data-speed')
   const x = (window.innerWidth - e.pageX*speed)/100
   const y = (window.innerHeight - e.pageY*speed)/100
   var myVar = setTimeout(myTimer, 200);
   function myTimer() {
    img.style.transform = 'translateX(' + x + '%) translateY(' + y + '%)';
  }
});
}

$(function() {

  $('a, input, textarea, button, .pointer').on('mouseenter', function(){
    $('.cursor').addClass('active').removeClass('leave');
  });
  $('a, input, textarea, button, .pointer').on('mouseleave', function(){
    $('.cursor').removeClass('active').addClass('leave');
  });
//page scrolling script
var fullpage = new Swiper('.fullpage', {
  wrapperClass: 'fullpage-wrapper',
  slideClass: 'fullpage-slide',
  direction: 'vertical',
  slidesPerView: 1,
  speed: 800,
  mousewheel: true,
});

//Scroll for fullpage
var scroll = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 'auto',
  freeMode: true,
  nested: true,
  mousewheel: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

  //stylization of the select
  $('.custom-select').styler();

  $('.burger-btn').on('click', function(){
    $('.tab').toggleClass('active');
  });

//page scrolling script
var projectSlider = new Swiper('.projects__slider', {
  wrapperClass: 'projects__slider-wrapper',
  slideClass: 'projects__slide',
  slidesPerView: 'auto',
  spaceBetween: 128,
  centeredSlides: true,
  observeParents: true,
  observeSlideChildren: true,
  observer: true,
  loop: true,
  pagination: {
    el: '.projects__slider-pagination',
    type: 'fraction',
  },
});

//Slider on the page work
var workslider = new Swiper('.work__slider', {
  wrapperClass: 'work__slider-wrapper',
  slideClass: 'work__slide',
  mousewheel: true,
  normalizeSlideIndex: true,
  spaceBetween: 200,
  direction: 'vertical',
  effect: 'fade',
  loop: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  hashNavigation: true,
  pagination: {
    el: '.work__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  on: {
    init: function () {
      $('.work__slider').removeClass('hide');
    },
  },
});


//Gallery for each slide on the page work
$('.work__slide-images, .service__article').each(function(){
  $(this).magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-with-zoom',
    tLoading: 'Loading images #%curr%...',
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    },
    gallery: {
      enabled: true,
      navigateByImgClick: true,
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
  });
})

//Filter styles on click
var filter = $('.filters__item');
filter.on('click', function(){
  filter.removeClass('active');
  $(this).addClass('active');
});

//Slider sponsors on the page about
var sponsorsSlider = new Swiper('.firm__sponsors-slider', {
  wrapperClass: 'firm__sponsors-wrapper',
  slideClass: 'firm__sponsors-slide',
  mousewheel: true,
  spaceBetween: 50,
  slidesPerView: 'auto',
  speed: 1000,
  slidesPerGroup: 5,
  nested: true,
  speed: 500,
  pagination: {
    el: '.firm__sponsors-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.firm__sponsors-next',
    prevEl: '.firm__sponsors-prev',
  },
});


});