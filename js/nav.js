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

// ham__btn //
$(function () {
  let hamburger = $(".hamburger"),
      overlayMenu = $(".overlay__menu");

  hamburger.click(function () {
    $(this).toggleClass("is-active");
    overlayMenu.toggleClass("active");
  });


});



$(function () {
  let overlayMenu1 = $(".overlay__menu > ul > li");

  overlayMenu1.click(function () {
    if($(this).hasClass("on")) {
      $(this).removeClass("on");
    }else {
      $(this).addClass("on");
    }
  });
});


