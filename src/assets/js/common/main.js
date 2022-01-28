$(document).ready(function () {
  let $preloader = $("#page-preloader");
  $preloader.fadeOut(1000);

  /* $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 30) {
      $(".header").addClass(".header__active");
    } else {
      $(".header").removeClass(".header__active");
    }
  }); */

  /* AOS.init({
    once: true,
    anchorPlacement: "bottom-bottom",
    duration: 800,
  });

  onElementHeightChange(document.body, function () {
    AOS.refresh();
  }); */

  /* $("a.go").click(function (e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  }); */

  let swiper = new Swiper(".wrapper-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let popularItem = new Swiper(".popular-item__slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768:{
        slidesPerView: 3,
        spaceBetween: 30
      },
      1100:{
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
  let recomendedItem = new Swiper(".recomended-item__slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      768:{
        slidesPerView: 3,
        spaceBetween: 10
      },
      1100:{
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  });
  let bashSlide = new Swiper(".bash__slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      768:{
        slidesPerView: 3,
        spaceBetween: 10
      },
      1100:{
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  });

  let aboutSwiper = new Swiper(".about-card-slider", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  // let acc = document.querySelectorAll('.accordion')
  // if(acc.length > 0){
  //   for(let i = 0; i<acc.length; i++){
  //     acc[i].addEventListener("click", function() {
  //       this.classList.toggle("active");
  //       let panel = this.nextElementSibling;
  //       if (panel.style.display === "block") {
  //         panel.style.display = "none";
  //       } else {
  //         panel.style.display = "block";
  //       }
  //     });
  //   }
  // };
  $('.accordion-container').each(function(){
    $(this).on('click', function(){
      let panel = $(this).find('.panel')
      let acc = $(this).find('.accordion-btn')
      if(acc.hasClass('active')){
        panel.slideUp(300)
        acc.removeClass('active')

      }else{
        panel.slideDown(300)
        acc.addClass('active')
      }
    })
  })
  
  $('.catalog-category__item').on('click', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

  $('.tabs-button').each(function(index){
    $(this).on('click', function(){
      $('.tabs-button').removeClass('button-ative');
      $(this).addClass('button-ative')
      $('.tab-content').removeClass('tab-active__content').eq(index).addClass('tab-active__content')
    })
  });
  $('.trash').each(function(){
    $(this).on('click', function(){
      $('.product-popup').addClass('popup-active');
    })
  });
  $('.product-info__btn_continue').each(function(){
    $(this).on('click', function(){
      $('.product-popup').removeClass('popup-active');
    })
  });

  let swiper1 = new Swiper(".bath-card-thum", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });

  let swiper2 = new Swiper(".bath-card-swiper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper1,
    },
  })
});
