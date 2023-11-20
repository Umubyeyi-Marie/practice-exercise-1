function squareElement (arr){
    let newArray =arr.map(element => element * element);
    return newArray
}
console.log( squareElement ([3,4,6,9,8]));