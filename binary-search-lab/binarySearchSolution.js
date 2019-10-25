

    function binarySearch(array, number) {
        //Type your solutions here
      let theIndex = "";
      let count = 0;
      var r = array.length-1;
      var p = 0;
      var q = 0;
      
      
      
      while(p <= r){
         q = Math.floor((p+r) / 2);
        if (array[q] == number){
         theIndex = array.findIndex(function(i){
          return i === number;
         });
        
         
          return {index: theIndex, count};
        }else if (array[q] < number){
           p = q + 1;
           count += 1;
        }else {
           r = q - 1;
           count += 1;
        }
      }
      if (!array.includes(number)){
        return {index: -1, count};
      }
      }
    
module.exports = binarySearch;