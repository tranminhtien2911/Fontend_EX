let buttonMinus = document.querySelector(".counter-descrease");
let buttonPlus = document.querySelector(".counter-increase");
let counterNum = document.querySelector(".counter-number");
let counterValue = parseInt(counterNum.textContent);

buttonPlus.addEventListener("click", function(e){
    e.preventDefault();
    if(counterValue >10) ;
    counterValue++;
    counterNum.textContent = counterValue;
    
} )


buttonMinus.addEventListener("click", function(e){
    e.preventDefault();
    if(counterValue <= 0) return 0;
    counterValue--;
    counterNum.textContent = counterValue;
    
    
    
} )