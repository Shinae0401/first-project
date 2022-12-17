// side__menu //

$(function() {
  let wind = $(window),
      sideMenu = $("#side__menu"),
      sideMenuTop = sideMenu.offset().top;

  wind.scroll(function() {
    if ($(this).scrollTop() >= sideMenuTop) {
      sideMenu.addClass("sticky");
    } else if ($(this).scrollTop() <= sideMenuTop) {
      sideMenu.removeClass("sticky");
    }
  });    
});


