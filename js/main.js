
//custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', 'top:' +(e.pageY - 8)+'px;left:'+(e.pageX - 8)+'px;');
});
document.addEventListener('mousemove', e => {
  cursor.classList.add('show');
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
  $('.projects__slider, .firm__sponsors-slider').on('mouseenter', function(){
    $('.cursor').addClass('active hide').removeClass('leave');
  });
  $('.projects__slider, .firm__sponsors-slider').on('mouseleave', function(){
    $('.cursor').removeClass('active hide').addClass('leave hidenormal');
  });


//page scrolling script
var fullpage = new Swiper('.fullpage', {
  wrapperClass: 'fullpage-wrapper',
  slideClass: 'fullpage-slide',
  direction: 'vertical',
  allowTouchMove: false,
  slidesPerView: 1,
  speed: 800,
  mousewheel: true,
});

//Hide/show header
fullpage.on('slideChangeTransitionEnd', function(){
  if (fullpage.activeIndex == 0) {
    $('.header').addClass('show');
  } else{
    $('.header').removeClass('show');
  }
});

//Scroll for fullpage
const scroll = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 'auto',
  freeMode: true,
  allowTouchMove: false,
  nested: true,
  mousewheel: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//Remove the stagnant scrolling when adaptive
function resizeScrenn() {
  if ($(window).width() <=  880) {
    fullpage.destroy(true, true);
    scroll.destroy(true, true);
    $('.wrapper').removeClass('wrapper-fullpage').addClass('fullpage-none');
  }
}
resizeScrenn();
$(window).resize(function () {
  resizeScrenn();
});



  //stylization of the select
  $('.custom-select').styler();

  $('.burger-btn').on('click', function(){
    $('.tab').toggleClass('active');
  });

//page scrolling script
const projectSlider = new Swiper('.projects__slider', {
  wrapperClass: 'projects__slider-wrapper',
  slideClass: 'projects__slide',
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  pagination: {
    el: '.projects__slider-pagination',
    type: 'fraction',
  },
  breakpoints: {
    320: {
      spaceBetween: 40,
    },
    521: {
      spaceBetween: 84,
    },
    881: {
      spaceBetween: 128,
    },
  }
});

//Slider on the page work
const workslider = new Swiper('.work__slider', {
  wrapperClass: 'work__slider-wrapper',
  slideClass: 'work__slide',
  mousewheel: true,
  normalizeSlideIndex: true,
  spaceBetween: 200,
  direction: 'vertical',
  allowTouchMove: false,
  effect: 'fade',
  loop: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  hashNavigation: true,
  fadeEffect: {
    crossFade: true
  },
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
const filter = $('.filters__item');
filter.on('click', function(){
  filter.removeClass('active');
  $(this).addClass('active');
});

//Slider sponsors on the page about
const sponsorsSlider = new Swiper('.firm__sponsors-slider', {
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


//Mobile scripts
$(document).on('touchstart', () => {
  $('body').addClass('mobile');
  fullpage.destroy(true, true);
  scroll.destroy(true, true);
  $('.wrapper').removeClass('wrapper-fullpage').addClass('fullpage-none');
});


});

