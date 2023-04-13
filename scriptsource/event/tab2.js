// tab.js ==> forEach로 변경 

// const arr = [1, 2, 3, 4];
// for (let i = 0; i< arr.length; i++) {
//     // 첫번째 요소 가져오기
//     let 변수명 = 배열명[i];
//     console.log(변수명);    
// }

// arr.forEach((변수명, index(i가필요할때))=>{
//     console.log(변수명);
// })

const tabBtns = document.querySelectorAll(".tab-button");
const tabCnts = document.querySelectorAll(".tab-content");

tabBtns.forEach((tabBtn, idx) => {
    
    tabBtn.addEventListener("click",(e) => {
        // 모든 tab-button의 orange제거
        tabBtns.forEach((item)=>{
            item.classList.remove("orange");
        });
        // 현재 클릭이 된 tab-button만 orange부착
        e.target.classList.add("orange");

        // 모든 tab-content의 show 제거
        tabCnts.forEach((tabCnt) => {
            tabCnt.classList.remove("show");
        });
        // 현재 클릭이 된 tab-content순서에 맞는 tab-content보여주기
        tabCnts[idx].classList.add("show");
    });

});

