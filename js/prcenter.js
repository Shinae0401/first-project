const imageList = document.querySelector(".image-list");
const btns = document.querySelectorAll(".view-options button");
const imageListItem = document.querySelectorAll(".image-list li");
const active = "active";
const listView = "list-view";
const gridView = "grid-view";
const dNone = "d-none";

// 버튼 활성화
for (const btn of btns) {
  btn.addEventListener("click", function () {
    const parent = this.parentElement;
    document.querySelector(".view-options .active").classList.remove(active);
    parent.classList.add(active);

    if (parent.classList.contains("show-list")) {
      parent.previousElementSibling.previousElementSibling.classList.add(dNone);
      imageList.classList.remove(gridView);
      imageList.classList.add(listView);
    } else {
      parent.previousElementSibling.classList.remove(dNone);
      imageList.classList.remove(listView);
      imageList.classList.add(gridView);
    }
  });
}

// 리스트 너비 조절 Range
const rangeInput = document.querySelector('input[type="range"]');

rangeInput.addEventListener("input", function () {
  //this.value
  document.documentElement.style.setProperty(
    "--minRangeValue",
    `${this.value}px`
  );
  //선택자.style.css속성명 = 값
  //선택자.style.backgroundColor = 'blue';
  //선택자.style.setProperty('background-color', 'blue');
});

// 검색키워드로 필터 적용

const captions = document.querySelectorAll(
  ".image-list figcaption h4"
);
const myArray = [];
let counter = 1;

for (const caption of captions) {
  myArray.push({
    id: counter++,
    text: caption.textContent,
  });
}
console.log(myArray);

const searchInput = document.querySelector('input[type="search"]');
const photosCounter = document.querySelector(".toolbar .counter span");

searchInput.addEventListener("keyup", keyupHandler);
//keydown 누르고 있을 때, keypress 누르는데로 이벤트 발생

function keyupHandler() {
  for (const item of imageListItem) {
    item.classList.add(dNone);
  }
  const keywords = this.value;

  const filteredArray = myArray.filter((el) =>
    el.text.toLowerCase().includes(keywords.toLowerCase())
  ); // filter
  console.log(filteredArray);

  if (filteredArray.length > 0) {
    for (const el of filteredArray) {
      document
        .querySelector(`.image-list li:nth-child(${el.id})`)
        .classList.remove(dNone);
    }
  }
  photosCounter.textContent = filteredArray.length;
}


// pagination
function getPageList(totalPages, page, maxLength) {
    function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    let sideWidth = maxLength < 9 ? 1 : 2;
    let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    let rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
    return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
    return range(1, maxLength - sideWidth - 1).concat(
        0,
        range(totalPages - sideWidth + 1, totalPages)
    );
    }

    if (page <= totalPages - sideWidth - 1 - rightWidth) {
    return range(1, sideWidth).concat(
        0,
        range(
        totalPages - sideWidth - 1 - rightWidth - leftWidth,
        totalPages
        )
    );
    }

    return range(1, sideWidth).concat(
    0,
    range(page - leftWidth, page + rightWidth),
    0,
    range(totalPages - sideWidth + 1, totalPages)
    );
}

$(function () {
    let numberOfItems = $(".image-list li").length;
    let limitPerPage = 8; //page에 보여줄 아이템 수
    let totalPages = Math.ceil(numberOfItems / limitPerPage);
    let paginationSize = 7;
    let currentPage;

    function showPage(whichPage) {
    if (whichPage < 1 || whichPage > totalPages) return false;

    currentPage = whichPage;

    $(".image-list li")
      .hide()
      .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
      .show();

    $(".page_bar li").slice(1, -1).remove();

    getPageList(totalPages, currentPage, paginationSize).forEach(
        (item) => {
        $("<li>")
            .addClass("page-item")
            .addClass(item ? "current-page" : "dots")
            .toggleClass("active", item === currentPage)
            .append(
            $("<a>")
                .addClass("page-link")
                .attr({ href: "javascript:void(0)" })
                .text(item || "...")
            )
            .insertBefore(".next-page");
        }
    );

    $(".previous-page").toggleClass("disable", currentPage === 1);
    $(".next-page").toggleClass(
        "disable",
        currentPage === totalPages
    );
    return true;
    }

    $(".page_bar").append(
      $("<li>")
        .addClass("page-item")
        .addClass("previous-page")
        .append(
          $("<a>")
            .addClass("page-link")
            .attr({ href: "javascript:void(0)" })
            .text("Prev")
        ),
      $("<li>")
        .addClass("page-item")
        .addClass("next-page")
        .append(
          $("<a>")
            .addClass("page-link")
            .attr({ href: "javascript:void(0)" })
            .text("Next")
        )
    );

    $(".main-content").show();
    showPage(1);

    $(document).on(
      "click",
      ".page_bar li.current-page:not(.active)",
      function () {
        return showPage(+$(this).text());
      }
    );

    $(".next-page").on("click", function () {
    return showPage(currentPage + 1);
    });

    $(".previous-page").on("click", function () {
    return showPage(currentPage - 1);
    });
});