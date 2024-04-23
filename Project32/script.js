const resultEl = document.getElementById('result');
const lengthEl = document.getElementById("length");
const uppercaseEL = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");


const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');



const randomFunc = {
    haslower: getRandomLower,
    hasupper: getRandomUpper,
    hasnumber: getRandomNumber,
    hassymbol: getSymbol
}

generateEl.addEventListener('click', () => {
    const length =  + lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEL.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;
    
    resultEl.innerText = generatePassword(hasLower, hasUpper,
    hasNumber, hasSymbol, length);

})

clipboardEl.addEventListener('click', ()=>{
    const textArea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password){ return }

    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert("Password copied to clipboard");


})
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getSymbol(){
    const symbols = '!@#$*<>';
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(haslower, hasupper, hasnumber, hassymbol, pass_len){
    let generatedPassword = '';
    const typesCount = hasupper + haslower + hasnumber + hassymbol;
    const typesArr = [{haslower},{hasupper},{hasnumber}, {hassymbol}]
                    .filter(item => Object.values(item)[0])
    
    if(typesCount <= 0){
        return ''
    }
    for(let i =0; i<pass_len; i+= typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]();

        })
        
    }
    const finalPassword = generatedPassword.slice(0,pass_len);
    return finalPassword

}