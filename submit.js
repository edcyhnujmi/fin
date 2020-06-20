const loadedCode = localStorage.getItem(LS_CODE);
const loadedPrice = localStorage.getItem(LS_PRICE);
//const baseUrl = "file:///C:/Users/sec/Desktop/fin/htmlex.html";취소
//const finalUrl = baseUrl.slice(0, 39) + loadedCode + baseUrl.slice(39);취소
//615라는 값을 종목코드로 입력받아서 file:///C:/Users/sec/Desktop/fin/htmlex615.html가 되도록 함. 취소

//fin.html에서 특정 값 찾아내기
let price = ''
function findPrice(){
    const num = document.querySelector(".no_today").childNodes[1].childElementCount; //숫자, , 포함 몇 개인지 확인
    price = '';
    for (var i=0; i<num; i++) {
        if (document.querySelector(".no_today").childNodes[1].children[i].innerText !== ',') {
            price = price + document.querySelector(".no_today").childNodes[1].children[i].innerText
        }
    }
    console.log(price) 
}

function greaterOrE(){
    const currentPrice = parseInt(price);
    if(currentPrice >= loadedPrice){
        alert(loadedPrice + ' 이상입니다. 현재 값 : ' + currentPrice);
    }
}

function lessOrE(){
    const currentPrice = parseInt(price);
    if(currentPrice <= loadedPrice){
        alert(loadedPrice + ' 이하입니다. 현재 값 : ' + currentPrice);
    }
}

//code price !== null 이상 이하 체크 확인 후 알림
//code의 price 이상/이하일 경우 알림
function checkAll(){
    findPrice();
    const currentPrice = parseInt(price);
    if(localStorage.getItem("code") !== null && 
    localStorage.getItem("price") !== null){
        var radio = document.getElementsByName("gorl");
        if (radio[0].checked === true){
            greaterOrE();
        }
        else if (radio[1].checked === true){
            lessOrE();
        }
        else{
            alert('이상 또는 이하를 선택해주세요.');
        }
    }
    else{
        alert('종목코드와 값을 모두 입력해주세요.');
    }
}

// function submitCheck(){
//     const alertButton = document.getElementsByClassName("sub-btn");
//     alertButton.addEventListener("click", checkAll());
// }
// function init(){
//     submitCheck();
// }

// init();