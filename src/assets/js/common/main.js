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
  let acc = document.querySelectorAll('.accordion')
  if(acc.length > 0){
    for(let i = 0; i<acc.length; i++){
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  };
  
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
  })
});
