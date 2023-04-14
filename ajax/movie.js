// 오늘 날짜 확인 -1 : 어제날짜를 화면에 기본으로 보여주기 

// 년,월,일 요소 찾아오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

function init() {
    // 날짜 객체 생성 (자바스크립트 내장객체 Date)
    let now = new Date();
    // 년
    let year = now.getFullYear();
    // 월 (0부터 시작함)
    let month = now.getMonth() +1;
    // 일-1
    let day = now.getDate() -1; 

    txtYear.value = year;
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }

    // 한자릿수를 01,02..로 넣어놨는데 .getMonth()랑 .getDate()는 1,2,3..으로 출력하기때문에 if문으로 0을 붙여줘야함
    selMon.value = month;  
    selDay.value = day;
}

init();

