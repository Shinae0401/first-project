// go top 위로가기 버튼 //
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("go-top");
  let progressValue = document.getElementById("go-top-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#fd7e14 ${scrollValue}%, #d7d7d7 ${scrollValue}% )`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// side__menu //
$(function() {
  let wind = $(window),
      sideMenu = $("#side__menu"),
      sideMenuTop = sideMenu.offset().top;

  wind.scroll(function() {
    if ($(this).scrollTop() >= sideMenuTop) {
      sideMenu.addClass("on");
    } else if ($(this).scrollTop() <= sideMenuTop) {
      sideMenu.removeClass("on");
    }
  });    
});
