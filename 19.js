function countString(word){
    var splitArr = word.split("");
    var a=0;
    for( let i=0; i< splitArr.length;i++){
        if(splitArr[i] === " "){
            a++;
        }
        var total =splitArr.length -a;
    }
    console.log(total);
}
countString("aline");