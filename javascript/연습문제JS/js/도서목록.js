// 입력상자와 버튼에 접근
let book = document.querySelector("#book");
let addBtn = document.querySelector("#add");

// 도서 목록 저장 배열 생성
let books = [];

// 추가 버튼에 클릭 이벤트 연결
addBtn.onclick = addArr;

// 배열에 도서 목록 추가
function addArr() {
    if (book.value == "") {
        alert("책 제목을 입력하세요.")
    } else {
        if (books.indexOf(book.value) == -1) {
            books.push(book.value);
            book.value = "";
            book.focus();
            show();
        } else {
            alert(`이미 등록된 도서 입니다.`);
            book.value = "";
            book.focus();
        }
    }
}
// 문서에 도서목록 출력(<ul><li>)
function show() {
    let list = "<ul>";
    for (let i = 0; i < books.length; i++) {
        list += `<li>${books[i]}<span class="del" id=${i}>삭제</span></li>`;
    }
    list += `</ul>`;
    document.querySelector("#bookList").innerHTML = list;
    // 삭제 대상
    let delList = document.querySelectorAll(".del");
    for (let ele of delList) {
        ele.onclick = remov;
    }
}
// 문서에 도서 목록 삭제
function remov() {
    let arrIdx = this.getAttribute("id");
    books.splice(arrIdx, 1);
    show();
}