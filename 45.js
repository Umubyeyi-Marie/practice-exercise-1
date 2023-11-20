function sumOfEvenNbr(array){
let sumOfEvenNbr =0;
for ( i=0; i<array.length; i++){
    if(array[i]%2===0){
        sumOfEvenNbr+=array[i];
    }
}
return sumOfEvenNbr
}
console.log(sumOfEvenNbr([2,3,4,5,6,7,8]))