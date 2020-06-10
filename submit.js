//code price !== null 이상 이하 체크 확인 후 알림
//code의 price 이상/이하일 경우 알림
const currentValue = 10000;
const price = localStorage.getItem("price");
console.log(price);

function greaterOrE(){
    if(price >= currentValue){
        alert('greater or equal');
    }
}

function lessOrE(){
    if(price <= currentValue){
        alert('less or equal');
    }
}

function checkAll(){
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