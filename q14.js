function displayPattern (size){
    for (i=0; i<size ;i++){
        size="";
        for (j=0; j<size; j++){
            if (i===j){
                size += "1";
            }else{
                size += " ";
            }
        }
}
}
displayPattern(5);