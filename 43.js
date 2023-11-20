function sortArrayAscending(arr){
    var sortedArr= arr.sort((a,b)=>a-b);
    return sortedArr;
}
console.log(sortArrayAscending([12,45,56,13,34]))