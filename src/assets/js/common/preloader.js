$(document).ready(function () {
  let $preloader = $("#page-preloader");
  $preloader.fadeOut(1000);

  /* $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      $("header").addClass("header__active");
    } else {
      $("header").removeClass("header__active");
    }
  }); */

  AOS.init({
    once: true,
    anchorPlacement: "bottom-bottom",
    duration: 800,
  });

  onElementHeightChange(document.body, function () {
    AOS.refresh();
  });
});


