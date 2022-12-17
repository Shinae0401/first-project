let wHeight = $(window).height();
let dHeight = $(document).height();
let navHeight = $("header").outerHeight();
let lastScrollTop = 0;
let moveScroll;

$(window).scroll(function (event) {
  // 스크롤을 감지
  moveScroll = true;
});

setInterval(function () {
  // 스크롤 감지를 0.25마다 실행
  if (moveScroll) {
    hasScroll();
    moveScroll = false;
  }
}, 250);

function hasScroll() {
  let wScroll = $(this).scrollTop();

  if (wScroll > lastScrollTop && wScroll > navHeight) {
    //스크롤을 내렸을 때
    $("header").addClass("on");
  } else {
    //스크롤을 올렸을 때
    if (wScroll + wHeight < dHeight) {
      $("header").removeClass("on");
    }
  }
  lastScrollTop = wScroll;
}

$(".open-overlay").click(function () {
  var overlay_navigation = $(".overlay-navigation"),
    nav_item_1 = $(".navigation li:nth-of-type(1)"),
    nav_item_2 = $(".navigation li:nth-of-type(2)"),
    nav_item_3 = $(".navigation li:nth-of-type(3)"),
    nav_item_4 = $(".navigation li:nth-of-type(4)"),
    nav_item_5 = $(".navigation li:nth-of-type(5)"),
    top_bar = $(".bar-top"),
    middle_bar = $(".bar-middle"),
    bottom_bar = $(".bar-bottom");

  overlay_navigation.toggleClass("overlay-active");
  if (overlay_navigation.hasClass("overlay-active")) {
    top_bar.removeClass("animate-out-top-bar").addClass("animate-top-bar");
    middle_bar
      .removeClass("animate-out-middle-bar")
      .addClass("animate-middle-bar");
    bottom_bar
      .removeClass("animate-out-bottom-bar")
      .addClass("animate-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-up")
      .addClass("overlay-slide-down");
    nav_item_1
      .removeClass("slide-in-nav-item-reverse")
      .addClass("slide-in-nav-item");
    nav_item_2
      .removeClass("slide-in-nav-item-delay-1-reverse")
      .addClass("slide-in-nav-item-delay-1");
    nav_item_3
      .removeClass("slide-in-nav-item-delay-2-reverse")
      .addClass("slide-in-nav-item-delay-2");
    nav_item_4
      .removeClass("slide-in-nav-item-delay-3-reverse")
      .addClass("slide-in-nav-item-delay-3");
    nav_item_5
      .removeClass("slide-in-nav-item-delay-4-reverse")
      .addClass("slide-in-nav-item-delay-4");
  } else {
    top_bar.removeClass("animate-top-bar").addClass("animate-out-top-bar");
    middle_bar
      .removeClass("animate-middle-bar")
      .addClass("animate-out-middle-bar");
    bottom_bar
      .removeClass("animate-bottom-bar")
      .addClass("animate-out-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-down")
      .addClass("overlay-slide-up");
    nav_item_1
      .removeClass("slide-in-nav-item")
      .addClass("slide-in-nav-item-reverse");
    nav_item_2
      .removeClass("slide-in-nav-item-delay-1")
      .addClass("slide-in-nav-item-delay-1-reverse");
    nav_item_3
      .removeClass("slide-in-nav-item-delay-2")
      .addClass("slide-in-nav-item-delay-2-reverse");
    nav_item_4
      .removeClass("slide-in-nav-item-delay-3")
      .addClass("slide-in-nav-item-delay-3-reverse");
    nav_item_5
      .removeClass("slide-in-nav-item-delay-4")
      .addClass("slide-in-nav-item-delay-4-reverse");
  }
});


// lang__menu
$(".selected__lang").click(function () {
  let dropdownLang = $(".dropdown__lang");

  if (dropdownLang.hasClass("show")) {
    dropdownLang.removeClass("show");
  } else {
    dropdownLang.addClass("show");
  }
});

$(".ham").click(function () {
  $(this).toggleClass("active");
  let mainNavGnb = $(".main__nav .gnb");

  if (mainNavGnb.hasClass("show")) {
    mainNavGnb.removeClass("show");
  } else {
    mainNavGnb.addClass("show");
  }
});



$(".menu__item__list").click(function () {
  let subMenu = $(this).next(".sub__menu");
  let menuItem = $(this).parent();
  subMenu.toggle("show1");
  

  if (menuItem.hasClass("active")) {
    menuItem.removeClass("active");
    $(this).css("color", "");
  } else {
    menuItem.addClass("active");
    $(this).css("color", "#fd7e14");
  }
});



$(".sub__menu__list a").click(function () {
  let moreSubMenu = $(this).next(".more__sub__menu");
  moreSubMenu.toggle("show2");
});

