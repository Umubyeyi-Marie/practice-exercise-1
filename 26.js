//Write a function that calculates the factorial of a number//
function calculateFactorial(num){
    if (num<0){
        return "num is not defined";
    }else if(num===0||num===1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}
console.log(calculateFactorial(5));