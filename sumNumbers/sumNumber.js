function sumNumbers (str) {
  // your code goes here...

  
    let arr = str.split('');
  //  arr= [...myStr]; -----spread operator
   
   
      for(let i=0; i<arr.length; i++){
        
         
      if(isNaN(parseInt(arr[i], 10))){
            arr[i] = "_";
               
          }
          
      }
      let arrStr = arr.join('');     
      let arrFinal = arrStr.split('_');     
      let result = arrFinal.map(Number);  
      finalTotal= result.reduce((sum, filter) => {return sum + filter},0);
  return finalTotal;
  
  
    
  }



module.exports = sumNumbers