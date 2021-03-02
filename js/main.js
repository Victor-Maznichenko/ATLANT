
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
  //Remove the cursor scrolling when adaptive
  function resizeScrennn() {
    if ($(window).width() <=  920) {
      $('body').addClass('mobile');
    }
  }
  resizeScrennn();
  $(window).resize(function () {
    resizeScrennn();
  });

  //Mobile scripts
  $(document).on('touchstart', () => {
    $('body').addClass('mobile');
  });


  //Animation header
  $(window).scroll(function(){
    if($(window).scrollTop() > 60){
      $('.header').removeClass('show');
    } else{
      $('.header').addClass('show');
    }
  });

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

  $('.burger-btn').on('click', function(){
    $('.tab').toggleClass('active');
  });

//Select region
$('.header-reg__top').on('click', function(){
  $(this).parent().toggleClass('active');
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
  observer: true,
  observeSlideChildren: true,
  observeParents: true,
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
  breakpoints: {
    320: {
      spaceBetween: 25,
      slidesPerGroup: 2,
      speed: 300,
    },
    881: {
      spaceBetween: 40,
      slidesPerGroup: 3,
      speed: 300,
    },
    1100: {
      spaceBetween: 50,
      slidesPerGroup: 5,
      speed: 1000,
    },
  }
});

});

