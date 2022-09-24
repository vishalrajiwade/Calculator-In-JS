let newNum = '';
let result = 0;

function insert(num){ 
  newNum = newNum + num;
  console.log(newNum);
  document.querySelector('.textview').value = newNum;
}
  
function equals(){
  if(newNum.includes('+')){
    let operands = newNum.split("+");
    for (const operand of operands) {
      console.log("Result" +result);
      if(result == 0){
        result += Number(operand);
      } else {
        result += Number(operand);
      } 
    }
    newNum = String(result);
    console.log("New Num" +newNum);
    document.querySelector('.textview').value = result;
    result = 0
  }

  if(newNum.includes('-')){
    let operands = newNum.split("-");
    for (const operand of operands) {
      if(result == 0){
        result += Number(operand);
      } else {
        result -= Number(operand);
      }  
    }
    newNum = String(result);
    console.log("New Num" +newNum);
    document.querySelector('.textview').value = result;  
    result = 0
  }

  if(newNum.includes('*')){
    let operands = newNum.split("*");
    for (const operand of operands) {
      if(result == 0){
        result += Number(operand);
      } else {
        result *= Number(operand);
      }  
    }
    newNum = String(result);
    console.log("New Num" +newNum);
    document.querySelector('.textview').value = result;  
    result = 0
  }
  if(newNum.includes('/')){
    let operands = newNum.split("/");
    for (const operand of operands) {
      if(result == 0){
        result += Number(operand);
      } else {
        result /= Number(operand);
      }  
    }
    newNum = String(result);
    console.log("New Num" +newNum);
    document.querySelector('.textview').value = result;  
    result = 0 
  }

  if(newNum.includes('%')){
    let operands = newNum.split("%");
    for (const operand of operands) {
      if(result == 0){
        result += Number(operand);
      } else {
        result = result * (Number(operand) / 100);
      }  
    }
    newNum = String(result);
    console.log("New Num" +newNum);
    document.querySelector('.textview').value = result;  
    result = 0
  }
   
}

function clean(){
  document.querySelector('.textview').value = '';
  newNum = '';
  result = 0;
}
  
function back(){
  newNum = newNum.substring(0, newNum.length - 1);
  document.querySelector('.textview').value = newNum;
}


