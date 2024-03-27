// input 상자 접근
let uid = document.querySelector("#user-id");
let pw = document.querySelector("#user-pw1");
let pwc = document.querySelector("#user-pw2");

// 입력상자에 값이 바뀌는 이벤트 발생하면
// 이벤트 핸들러(함수) 연결
uid.onchange = idCheak;
pw.onchange = pwCheak;
pwc.onchange = pwCompare;
// id 길이 체크
function idCheak(){
 let idL = uid.value.length;
 if(idL<3||idL>10){
    alert(`아이디는 3~10글자 사이입니다.`);
    uid.select();
 }
}

//비밀번호 길이 체크

function pwCheak(){
 let pwL = pw.value.length;
 if(pwL<4){
    alert(`비밀번호는 4글자 이상입니다.`);
    pw.value = "";
    pw.focus();
 }
}

// 비밀번호가 맞는지 확인
function pwCompare(){
if(pw.value!==pwc.value){
    alert(`비밀번호가 일치하지 않습니다.`)
    pwc.value = "";
    pwc.focus();
}
}