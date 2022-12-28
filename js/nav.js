// header //
$(function () {
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
});

// searchTop //
$(function () {
  let searchBtn = document.querySelector(".searchBtn");
  let closeBtn = document.querySelector(".closeBtn");
  let searchBox = document.querySelector(".searchBox");

  searchBtn.onclick = function () {
    searchBox.classList.add("active");
    closeBtn.classList.add("active");
  };
  closeBtn.onclick = function () {
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
  };
});

// ham__btn, overlay-navigation//
$(function () {
  let hamburger = $(".hamburger");
  (overlay_navigation = $(".overlay-nav")),
    (nav_item_1 = $(".menu_1_list:nth-child(1)")),
    (nav_item_2 = $(".menu_1_list:nth-child(2)")),
    (nav_item_3 = $(".menu_1_list:nth-child(3)")),
    (nav_item_4 = $(".menu_1_list:nth-child(4)")),
    (nav_item_5 = $(".menu_1_list:nth-child(5)"));
  nav_item_6 = $(".menu_1_list:nth-child(6)");

  hamburger.click(function () {
    $(this).toggleClass("is-active");
    overlay_navigation.toggleClass("overlay-active");
    if (overlay_navigation.hasClass("overlay-active")) {
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
      nav_item_6
        .removeClass("slide-in-nav-item-delay-5-reverse")
        .addClass("slide-in-nav-item-delay-5");
    } else {
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
      nav_item_6
        .removeClass("slide-in-nav-item-delay-5")
        .addClass("slide-in-nav-item-delay-5-reverse");
    }
  });
});

$(function () {
  let menu_1 = $(".menu_1 li a");
  let menu_2 = $(".menu_2 li a");

  menu_1.click(function () {
    let menu_3 = $(this).next(".menu_2");
    menu_3.toggle("active");
  });

  menu_2.click(function () {
    let menu_4 = $(this).next(".menu_3");
    menu_4.toggle("active");
  });
});
