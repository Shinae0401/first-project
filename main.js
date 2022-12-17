// 한 페이지에 페이지 링크는 10개로 보여준다.
// 1. 화면에 보여질 페이지 그룹 = Math.ceil(현재 페이지/ 한 화면에 나타낼 페이지 수);
// 2. 화면에 보여질 첫번째 페이지 = 화면에 그려질 마지막 페이지 - (한 화면에 나타낼 페이지 - 1)
//(단, 계산된 값이 0 이하이면 첫번째 페이지는 1이다.)
// 3. 화면에 보여질 마지막 페이지 = 화면에 보여질 페이지 그룹 * 한 화면에 나타낼 페이지
// (단, 계산된 값이 총 페이지수보다 많으면 마지막 페이지는 은 총 페이지 수이다.)
// 4. 총 페이지 수 = Math.ceil(전체 개수/ 한 페이지에 나타낼 데이터 수);
// 한 페이지에 20개씩 게시물을 보여준다.
// 이전, 다음 버튼이 존재한다.
// 처음으로, 마지막으로 버튼이 존재한다.

const rowsPerPage = 10; // 한 페이지에 페이지 링크는 10개로 보여준다.
const rows = document.querySelectorAll("#my-table tbody tr");
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowsPerPage);
const numbers = document.querySelector("#number");

// page arrow
const prevPageBtn = document.querySelector(".prev");
const nextPageBtn = document.querySelector(".next");
let pageActiveIdx = 0; // 현재 보고 있는 페이지그룹
let currentPageNum = 0; // 현재 보고 있는 페이지네이션 번호
let maxPageNum = 3; // 페이지그룹 최대 개수

// 페이지네이션 생성
/*
let c = 대상.innerHTML
대상.innerHTML = <li><a href="">1</a></li>
for(초기값;조건;증감) {}
*/
for (let i = 1; i <= pageCount; i++) {
  // numbers.innerHTML = numbers.innerHTML + `<li><a href="">${i}</a></li>`;
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}

// 페이지네이션 클릭하면 할일
const numberBtn = numbers.querySelectorAll("a");
console.log(numberBtn);

// 페이지네이션 번호 감추기
for (nb of numberBtn) {
  nb.style.display = "none";
}

numberBtn.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // 'a'의 기본기능을 막는다 안써주면 깜빡거림

    // 테이블 출력함수
    //console.log(idx);
    displayRow(idx);
  });
});

// displayRow
function displayRow(idx) {
  /*
    idx 1
    100개 목록
    인덱스번호 0 ~ 9
    slice(start, end)
    slide(0,10)
    nodelist, htmlcollectio -> array로 변경하는 방법
    => Array.from(대상)
    [...대상]
    */
  //let rowsArray = Array.from(rows);
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;
  let rowsArray = [...rows];

  for (ra of rowsArray) {
    ra.style.display = "none";
  }

  let newRows = rowsArray.slice(start, end);
  for (nr of newRows) {
    nr.style.display = "";
  }

  for (nb of numberBtn) {
    nb.classList.remove("active");
  }
  numberBtn[idx].classList.add("active");

  console.log(rowsArray);
}
displayRow(0);

// 페이지네이션 그룹 표시 함수
function displayPage(num) {
  // 페이지네이션 번호 감추기
  for (nb of numberBtn) {
    nb.style.display = "none";
  }
  let totalPageCount = Math.ceil(pageCount/maxPageNum); 
  let pageArr = [...numberBtn];
  let start = num * maxPageNum;
  let end = start + maxPageNum;
  let pageListArr = pageArr.slice(start, end);

  for(let item of pageListArr) {
    item.style.display = "block";
  }
  if (pageActiveIdx == 0) {
    prevPageBtn.style.display = "none";
  } else {
    prevPageBtn.style.display = "block";
  }
  if (pageActiveIdx == totalPageCount - 1) {
    nextPageBtn.style.display = "none";
  } else {
    nextPageBtn.style.display = "block";
  }

}
displayPage(0);

nextPageBtn.addEventListener("click", ()=> {
    let nextPageNum = pageActiveIdx * maxPageNum + maxPageNum;
    displayRow(nextPageNum);
    ++pageActiveIdx;
    displayPage(pageActiveIdx);

});

prevPageBtn.addEventListener("click", () => {
  let nextPageNum = pageActiveIdx * maxPageNum - maxPageNum;
  displayRow(nextPageNum);
  --pageActiveIdx;
  displayPage(pageActiveIdx);
});