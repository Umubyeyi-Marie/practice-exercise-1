function capitalizeArray(arr){
    var cap = [];
    for ( i=0 ; i < arr.length; i++){
        cap[i] = arr[i].toUpperCase();
    }
    return cap;
}
console.log(capitalizeArray(["marie","anny"])) 