const generatePasswordButton = document.querySelector("#generate-password")
const gerenatedPasswordElement = document.querySelector("#generated-password")

generatePasswordButton.addEventListener("click", ()=>{
    generatePassword(getLetterLowerCase,getLetterUpperCase,getNumber,getSymbol); 
})

const getLetterLowerCase = ()=>{
    return(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
}
const getLetterUpperCase = ()=>{
    return(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
}
const getNumber = ()=>{
    return Math.floor(Math.random()*10).toString()
}
const getSymbol = () =>{
    const symbols = "(){}[]!@#$%^&*?.,;:><"
    return symbols[Math.floor(Math.random()*symbols.length)].toString()
}

const generatePassword = (getLetterLowerCase,getLetterUpperCase,getNumber,getSymbol) => {
    let password = ""
    const passwordLenth = 10
    
    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol,
    ]
    
    for (let i = 0; i < passwordLenth; i++) {
        const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();
        password += randomValue;
    }

    gerenatedPasswordElement.style.display="block"
    gerenatedPasswordElement.querySelector("h4").innerText = password
}