array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 78];
number= 5;

function binarySearch(array, number) {

    var final = {
        "index": 0,
        "count": 0   
    };

var start = 0;
var end = array.length -1 ;
var middle = Math.floor((start + end)/2);
while(array[middle] !== number && start <= end){
    if (array[middle] > number){
        end = middle -1;
    }else{
        start = middle + 1;
    }
    middle = Math.floor((start + end)/2);
    return final.count = count++;
}
if(array[middle] !== number){
    return final.index = -1;
}
return final.index = middle;

}

console.log(binarySearch(array, number));
