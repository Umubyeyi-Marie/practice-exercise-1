function squareElement(arr) {
    let NewArray= arr.map(element => element * element);
   return NewArray
}
console.log( squareElement([2,3,4]));