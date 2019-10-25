
function evenlySpaced(first, second, last) {
    //Provide your solution here

    var smallest = Math.min(first,second,last);
 var medium =  Math.max(first,second,last) - Math.min(first,second,last);
 var largest = Math.max(first,second,last);

 let space1 = smallest - medium;
 let space2 = medium  - largest;
 // return space1 === space2;
 if (space1 === space2){
           return true
       }
       else{
           return false
       }
}

module.exports = evenlySpaced;