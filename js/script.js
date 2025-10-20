$("#guess_number").click(function(){
    let number=prompt("Яке число від 0 до 5 загадано?");
    let numberToGuess=Math.floor(Math.random()*6);
    if(number===null){
         return;
    }
     if(number==numberToGuess){
        alert("Правильно! Ти вгадав")
    }
    else{
        alert(`Не вгадав! Було загадано число ${numberToGuess}`)
    }      
    
})