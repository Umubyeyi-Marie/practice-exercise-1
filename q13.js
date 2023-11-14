function displayPattern(size) {
    for (i=0; i < size ;i++){
        let row ='';
    
    for (j = 0; j < size ;j++){
        if ( i===0|| i=== size -1|| j ===0 || j === size -1){
            row += '1';

        }else{
            row += '0';

        }
    }
console.log(row);
}
}
displayPattern(5)