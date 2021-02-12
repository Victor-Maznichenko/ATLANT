$(function() {

//page scrolling script
$('.fullpage').fullpage({
 scrollHorizontally: true,
 scrollOverflow: true,
 sectionSelector: '.page',
});

  //stylization of the select
  $('.custom-select').styler();

//page scrolling script
// var fullpage = new Swiper('.fullpage', {
//   slideClass: 'fullpage__slide',
//   wrapperClass: 'fullpage__wrapper',
//   direction: 'vertical',
//   slidesPerView: 1,
//   spaceBetween: 30,
//   mousewheel: true,
// });


// FadeIn logo on first page
// fullpage.on('slideChangeTransitionEnd', function(){
//   if ($('.first').hasClass('swiper-slide-active')) {
//     $('.header__bottom-logo').addClass('hide');
//   } else{
//     $('.header__bottom-logo').removeClass('hide');
//   }
// });

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


  $('.work__slide-images').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading images #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
  });


});
