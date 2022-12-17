document.querySelectorAll(".product__main__img").forEach(elem => {
  let x,y, width, height;
  elem.onmouseenter = () => {
    const size = elem.getBoundingClientRect();

    x = size.x;
    y = size.y;
    width = size.width;
    height = size.height;
  };

  elem.onmousemove = e => {
    const horizontal = (e.clientX - x) / width*100;
    const vertical = (e.clientY - y) / height*100;

    elem.style.setProperty("--x", horizontal + "%");
    elem.style.setProperty("--y", vertical + "%");
  }
});



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

