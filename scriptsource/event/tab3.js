// tab.js ==> 이벤트 버블링 방식을 사용  / event3파일에서 배움
// 이벤트 버블링 : 자식에서 발생한 이벤트가 부모로 전달 
// e.target : 이벤트가 일어난 대상
// e.currentTarget : 이벤트가 일어난대상 + 버블링된 대상


// 이벤트 대상(tab-button) => 부모(ul) 에게 이벤트가 전달
const tabParent = document.querySelector(".list");
const tabBtns = document.querySelectorAll(".tab-button");
const tabCnts = document.querySelectorAll(".tab-content");

// tabBtns.forEach((tabBtn) => {
//     tabBtn.addEventListener("click", (e) => {
//         console.log(e.currentTarget.className);
//     });    
// });

function tabOpen(idx) {

// 모든 tab-button의 orange제거
tabBtns.forEach((item)=>{
    item.classList.remove("orange");
});

// 모든 tab-content의 show 제거
tabCnts.forEach((tabCnt) => {
    tabCnt.classList.remove("show");
});

// 현재 클릭이 된 tab-button만 orange부착
tabBtns[idx].classList.add("orange");

// 현재 클릭이 된 tab-content순서에 맞는 tab-content보여주기
tabCnts[idx].classList.add("show");

};



// tabParent.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.className);
//     // console.log(e.target);

//     if(e.target == tabBtns[0]) {
//         tabOpen(0);
//     } else if(e.target == tabBtns[1]) {
//         tabOpen(1);
//     } else {
//         tabOpen(2);
//     }
// });


// data- 이용 : 조건문 안쓰려고 
// data- : 전역속성
// - 다음에는 이름은 자유롭게 사용 (대문자는 안됨)
// 예를들어서
//<h1 data-index-number="1234">헤드</h1>
// data-index-number 라고 이름을 지정했으면 가져올때는 dataset.indexNumber
// 스크립트에서 접근
// const h1 = document.querySelector(h1);
// h1.dataset.indexNumber
tabParent.addEventListener("click", (e) => {
    // 이벤트가 일어난 data- 값을 가져오기
    tabOpen(e.target.dataset.id);
});

