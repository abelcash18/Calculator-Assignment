function displayNumber(abel){
    console.log(abel)
    document.getElementById('firstValue').value+= abel
}



function solveCalculation(){
    let value = 
    document.getElementById('firstValue').value

    let evaluateValue =eval(value)

    document.getElementById('firstValue').value= evaluateValue
  console.log(evaluateValue)
}


function resetButton(){
    document.getElementById("firstValue").value ='';
    document.getElementById("answer").innerHTML ='';
}










// const display = document.getElementById('display');
// const resetBtn = document.getElementById('reset-btn');


// resetBtn.addEventListener('click',()=>{
//     display.value
// })


// let currentNumber = ";
// let previousNumber = ";
// let operation = ";


// resetBtn.addEventListener('click')()=>{
//     displayNumber.value= '0'
//     currentNumber =";
//     previousNumber =";
//     operation ="; 
// }