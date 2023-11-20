function medianArray(arr){
    arr.sort ((a,b)=>a-b)
    let median = Math.floor(arr.length/2)
    if (arr.length %2 === 0){
        return (arr[median]+arr[median]/2);
        
        
    }else{
        return arr[median];
}
}
console.log( medianArray([9,8,5,4,3]));