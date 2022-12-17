let wind = $(window);
let overview1 = $(".overview__1").offset().top - 200;
let companyInfo = $(".o__1__item");

wind.scroll(function () {
  if ($(this).scrollTop() >= overview1) {
    companyInfo.addClass("active");
  } else if ($(this).scrollTop() <= overview1) {
    companyInfo.removeClass("active");
  }
});





