let passDay = document.querySelector("#accent");
let meetDay = new Date("2024-03-05");
let today = new Date();
let pDay = Math.floor((today-meetDay)/(1000*60*60*24));
passDay.innerHTML = pDay +"일";

//기념일 계산 함수
function fDay(day){
    let aDay = new Date(2024, 2, 5 + day);
    aDay = new Date(meetDay.getTime()+(day*24*60*60*1000));
    let year = aDay.getFullYear();
    
    let month = aDay.getMonth() + 1;
    month = month < 10 ? "0"+month : month;

    let date = aDay.getDate();
    date = date<10 ? "0"+date : date;
    
    let result =`${year}년 ${month}월 ${date}일`;
    document.querySelector("#date"+day).innerHTML = result;
}
fDay(100);
fDay(200);
fDay(365);
fDay(500);