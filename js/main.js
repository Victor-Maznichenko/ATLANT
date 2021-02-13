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

  //page scrolling script
  $('.fullpage').fullpage({
   scrollHorizontally: true,
   scrollOverflow: true,
   sectionSelector: '.page',
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
  speed: 0,
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
$('.work__slide-images').each(function(){
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
var sponsorsSlider = new Swiper('.about__sponsors-slider', {
  wrapperClass: 'about__sponsors-wrapper',
  slideClass: 'about__sponsors-slide',
  mousewheel: true,
  spaceBetween: 50,
  speed: 500,
  loop: true,
  pagination: {
    el: '.about__sponsors-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});
});
