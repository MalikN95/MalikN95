$(document).ready((function(){$("#page-preloader").fadeOut(1e3);new Swiper(".wrapper-slider",{pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".popular-item__slider",{slidesPerView:4,spaceBetween:30,breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:3,spaceBetween:10},1100:{slidesPerView:4,spaceBetween:10}}}),new Swiper(".recomended-item__slider",{slidesPerView:4,spaceBetween:30,breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:3,spaceBetween:10},1100:{slidesPerView:4,spaceBetween:10}}}),new Swiper(".about-card-slider",{cssMode:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"},mousewheel:!0,keyboard:!0});$(".accordion-container").each((function(){$(this).on("click",(function(){let e=$(this).find(".panel"),t=$(this).find(".accordion-btn");t.hasClass("active")?(e.slideUp(300),t.removeClass("active")):(e.slideDown(300),t.addClass("active"))}))})),$(".catalog-category__item").on("click",(function(){$(this).addClass("active"),$(this).siblings().removeClass("active")})),$(".tabs-button").each((function(e){$(this).on("click",(function(){$(".tabs-button").removeClass("button-ative"),$(this).addClass("button-ative"),$(".tab-content").removeClass("tab-active__content").eq(e).addClass("tab-active__content")}))})),$(".trash").each((function(){$(this).on("click",(function(){$(".product-popup").addClass("popup-active")}))})),$(".product-info__btn_continue").each((function(){$(this).on("click",(function(){$(".product-popup").removeClass("popup-active")}))}));let e=new Swiper(".bath-card-thum",{loop:!0,spaceBetween:30,slidesPerView:3,freeMode:!0,watchSlidesProgress:!0});new Swiper(".bath-card-swiper",{loop:!0,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:e}})}));