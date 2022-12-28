// 회사연혁 on효과

let history = $(".history");

let hisBox = history.find(".his__box");
let menuCount = hisBox.length;
let nav = [];

$(window).on("load", function () {
nav = checkTopOffset();
});
$(window).on("resize", function () {
nav = checkTopOffset();
});


// 해당되는 각각의 영역 상단값 측정
function checkTopOffset() {
let arr = [];
for (var i = 0; i < menuCount; i++) {
    arr[i] = $(hisBox.eq(i)).offset().top;
}
return arr;
}

// 스크롤 event

function getScrollTop() {
  return $(window).scrollTop();
}

$(window).scroll(function () {
    hisBox.each(function() {
        let topObj = $(this).offset().top;

        if (getScrollTop() > topObj - 500) {
          $(this).addClass("over");
          $(this).find(".his__img").addClass("over");
          $(this).find(".his__txt").addClass("over");
        } else if (getScrollTop() < topObj - 500) {
          $(this).removeClass("over");
        }
    });
});