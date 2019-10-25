//This function takes three parameters, the first is a number and the second and third are arrays.
//The second parameter is an array of operations which cold contain one or more of "+", "-", and "*"
//The third array is an arry of numbers which are the second participants in the operations
//If you encounter an unknown command in the second array, return -1.

function interpret(operand1, operators = [], operand2) {

  var result = operand1;
  for (let i = 0; i < operators.length; i++) {
    if(operators[i] === "+"){
      result = result + operand2[i];
    }else if(operators[i] === "*"){
      result = result * operand2[i];
    }else if(operators[i] === "-"){
      result = result - operand2[i];
    }else{
      return -1;
    }
    
    
  }
  return result;
  /* operand2.forEach(function(operandLast){
 
    operators.forEach(function(operator){
      if (operator === '+') {
       result = operand1 + operandLast;
      }
   });
 }); */
     
    
    /* switch (operator) {
      case "+":
        {

        }
    } */
    // }
/* 
for(let i=0; i<=second.length; i++){
    for(let j=0; j<=third.length; j++){
      var  totally = first(second[i])(third[j]);
      
    }
    return totallySum;
    
} */

}
// console.log(interpret(21,["+", "+"],[3,2]));

module.exports = interpret;