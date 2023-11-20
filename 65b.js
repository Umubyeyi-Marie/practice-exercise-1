function dayOfWeek(val){
    var answer = "" ; 
    switch (val){
    case "day1":
    answer: "Monday";
    break;
    case "day2": 
        answer: "Tuesday";
        break;
    case "day3":
        answer: "Wednesday";
        break;
    case "day4":
        answer: "Thursday";
        break;
    case "day5":
        answer: "Friday";
        break;
    case "day6":
        answer: "Saturday";
        break;
    case "day7":
        answer: "Sunday";
        break;
                            
    }
    return answer
}
console.log(dayOfWeek("day3"))