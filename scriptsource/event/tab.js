// orange 클래스 부착 classList.add / classList.remove
// 탭-버튼0을 누르면 
// 모든 버튼에 붙은 orange 클래스명 제거 
// 탭-버튼0에만 orange 클래스명 부착

// const buttons = document.querySelectorAll(".tab-button");

const tabBtn0 = document.querySelector(".list > li:first-child");
const tabBtn1 = document.querySelector(".list > li:nth-child(2)");
const tabBtn2 = document.querySelector(".list > li:last-child");

const tabCon0 = document.querySelector(".container > div:nth-child(2)");
const tabCon1 = document.querySelector(".container > div:nth-child(3)");
const tabCon2 = document.querySelector(".container > div:nth-child(4)");

tabBtn0.addEventListener("click", () => {
    tabBtn0.classList.add("orange");
    tabBtn1.classList.remove("orange");
    tabBtn2.classList.remove("orange");
    tabCon0.classList.add("show");
    tabCon1.classList.remove("show");
    tabCon2.classList.remove("show");
});

tabBtn1.addEventListener("click", () => {
    tabBtn1.classList.add("orange");
    tabBtn0.classList.remove("orange");
    tabBtn2.classList.remove("orange");
    tabCon1.classList.add("show");
    tabCon0.classList.remove("show");
    tabCon2.classList.remove("show");
});

tabBtn2.addEventListener("click", () => {
    tabBtn2.classList.add("orange");
    tabBtn0.classList.remove("orange");
    tabBtn1.classList.remove("orange");
    tabCon2.classList.add("show");
    tabCon0.classList.remove("show");
    tabCon1.classList.remove("show");
});
