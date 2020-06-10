const priceForm = document.querySelector(".js-price-form");
const priceInput = priceForm.querySelector("input");
const LS_PRICE = "price";
const SHOW_P = "showing";
const showPrice = document.querySelector(".js-show-price");

function savePrice(text){
    localStorage.setItem(LS_PRICE, text); 
}

function handlePriceSubmit(event){
    event.preventDefault(); //제출(ENTER)하면 새로고침되는 것 막음
    const userPrice = priceInput.value;
    paintPrice(userPrice);
    savePrice(userPrice);
    console.log(userPrice);
}

function askForPrice(){
    priceForm.classList.add(SHOW_P);
    priceForm.addEventListener("submit", handlePriceSubmit);
}

function paintPrice(text){
    priceForm.classList.remove(SHOW_P);
    showPrice.classList.add(SHOW_P);
    showPrice.innerText = `값 : ${text}`;
}
function loadPrice(){
    const loadedPrice = localStorage.getItem(LS_PRICE);
    if(loadedPrice === null){
        askForPrice();
    } else {
        paintPrice(loadedPrice);
    }
}
function init(){
    loadPrice();
}

init();