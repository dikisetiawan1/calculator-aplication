const calculatorScreen = document.querySelector(".calculator-screen");


const updateScreen = (number ) => {
    calculatorScreen.value = number
}





const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {

    number.addEventListener("click",(event) => {
        updateScreen(event.target.value);
    })
    
});



