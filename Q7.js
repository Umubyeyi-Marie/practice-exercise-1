function smallest(arr){
    var small = arr[0]
    for(let i=1; i<arr.length;i++){
        if(arr[i]<arr[i-1]){
             small = arr[i];
        }
    }
    return sm
}
console.log(smallest([1,2,3,4,5,]))