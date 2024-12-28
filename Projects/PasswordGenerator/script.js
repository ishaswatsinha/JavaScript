const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthNumber = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".GenerateButton");
const copyBtn = document.querySelector("[data-copy");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '-', '_', '=', '+', '[', ']', '{', '}', ';', ':',
    '\'', '"', ',', '.', '<', '>', '/', '?', '\\', '|',
    '~', '`'
  ];

  
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
setIndicator("#ccc");

function handleSlider() {
    inputSlider.value = passwordLength ;
    lengthNumber.textContent = inputSlider.value;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize =((passwordLength - min)*100/(max-min)) +"% 100%";
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxshadow = `0px 0px 12px 5px ${color}`;
}

function getRndInt(min, max) {
return Math.floor(Math.random() * (max - min) +min);
}

function getRandomInt(min, max) {
    return getRndInt(0,9);
}


function getLowerInt() {
    return String.fromCharCode(getRndInt(97,122));
}


function getUpperInt() {
    return String.fromCharCode(getRndInt(65,91));
}


function getSymbols(){
    return symbols[getRndInt(0, symbols.length)];
}


function getStrengthIndicator() {
    let hasUpper = false;
    let hasLower = false;
    let hasNmbr = false;
    let hasSymbl = false;

    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNmbr = true;
    if (symbolsCheck.checked) hasSymbl = true;

    if (hasUpper && hasLower && (hasNmbr || hasSymbl) && passwordLength >= 8 ) {
        setIndicator('#0f0');
    }
    else if ((hasUpper || hasLower) && (hasNmbr || hasSymbl) && passwordLength >= 6 ) {
        setIndicator('#ff0');
    }
    else{
        setIndicator('#f00');
    }
}

async function CopyContent() {
    try{
        await navigator.clipboard.writeText(passwordDisplay.value)
        copyMsg.innerText = "Copied!";
    }
    catch(err){
        copyMsg.innerText = "Failed!";
        console.error(err);
    }
    copyMsg.classList.add("active");
    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}
    
inputSlider.addEventListener("input", (e) => {
    passwordLength = parseInt(e.target.value);
    handleSlider();
});

copyBtn.addEventListener("click", () => {
    if(passwordDisplay.value){
        CopyContent();
    }
});

function handleCheckboxChange() {
        checkCount = 0;
        allCheckBox.forEach((cb) => {
            if(cb.checked) checkCount++;
        });
        // Special condition
        if(passwordLength < checkCount){
            passwordLength = checkCount;
            handleSlider();
        }
};

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckboxChange);
});


function shufflePassword(array){
    // Fisher-Yates Shuffle
    for (let i = Array.length - 1; i >= 0; i--){
        // pick a random index j from 0 to i (Random j)
        const j = Math.floor(Math.random() * (i+1));
         // swapping numbers at  i index or j index
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

generateBtn.addEventListener("click", () => {
    // none of the checkbox are checked
    if(checkCount<= 0) return;

    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the journey to find the new password

    //remove the old password
    password = "";

    // let's put the stuff mentioned by the checkboxes
    // if(uppercaseCheck.checked) {
    //     password += getUpperInt();
    // }
    // if(lowercaseCheck.checked) {
    //     password += getUpperInt();
    // }
    // if(numbersCheck.checked) {
    //     password += getUpperInt();
    // }
    // if(symbolsCheck.checked) {
    //     password += getUpperInt();
    // }

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(getUpperInt);

    if(lowercaseCheck.checked)
        funcArr.push(getLowerInt);

    if(numbersCheck.checked)
        funcArr.push(getRandomInt);

    if(symbolsCheck.checked)
        funcArr.push(getSymbols);

    // Compulsory passwords Addition

    for(let i = 0; i < funcArr.length; i++){
        password += funcArr[i]();
    }

    // Remaining passwords addition
    for(let i = 0; i < (passwordLength - funcArr.length); i++) {
        let randIndex = getRndInt(0,funcArr.length);
        password += funcArr[randIndex]();
    }

    // suffle the password
    password = shufflePassword(Array.from(password));

    // Show in UI
    passwordDisplay.value = password;

    // calulate the strength
    getStrengthIndicator();
    
});