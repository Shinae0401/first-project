/* ----- \\ side__menu \\ ----- */
$(function () {
  let subMn1 = $(".subMn1");
  let subMn2 = $(".subMn2");
  let subMn1__Btn = $("#subMn1__Btn");
  let subMn2__Btn = $("#subMn2__Btn");
  subMn1__Btn.click(function () {
    subMn1.toggleClass("active");
  });

  subMn2__Btn.click(function () {
    subMn2.toggleClass("active");
  });
});

/* ----- \\ product__software \\ ----- */
let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
let tabsPane = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener("click", function () {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[i].classList.add("active");

  });
};