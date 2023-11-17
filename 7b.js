function smallest(arr){
    var sorted = arr.sort((a,b)=>a-b);
    return sorted[0];
}
console.log(smallest([1,3,5,7]));