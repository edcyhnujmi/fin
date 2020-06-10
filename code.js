const codeForm = document.querySelector(".js-code-form");
const codeInput = codeForm.querySelector("input");
const LS_CODE = "code";
const SHOW_C = "showing";
const showCode = document.querySelector(".js-show-code");

function saveCode(text){
    localStorage.setItem(LS_CODE, text); 
}

function handleCodeSubmit(event){
    event.preventDefault(); //제출(ENTER)하면 새로고침되는 것 막음
    const userCode= codeInput.value;
    paintCode(userCode);
    saveCode(userCode);
    console.log(userCode);
}

function askForCode(){
    codeForm.classList.add(SHOW_C);
    codeForm.addEventListener("submit", handleCodeSubmit);
}

function paintCode(text){
    codeForm.classList.remove(SHOW_C);
    showCode.classList.add(SHOW_C);
    showCode.innerText = `종목코드 : ${text}`;
}
function loadCode(){
    const loadedCode = localStorage.getItem(LS_CODE);
    if(loadedCode === null){
        askForCode();
    } else {
        paintCode(loadedCode);
    }
}
function init(){
    loadCode();
}

init();