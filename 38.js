function removeDuplicates(arr){
    return[...new Set(arr)];
}
console.log(removeDuplicates([2,3,3,4,5,6,7]))