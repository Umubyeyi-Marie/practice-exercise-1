function average(arr){
    var sum =0;
    for (let i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    var avg=sum/arr.length;
    return avg;
}
console.log( average([1,2,3,4,5]))