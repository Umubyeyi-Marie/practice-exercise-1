function countVowels(string){
    vowels= "aeiouAEUIO";
    count =0;
    for (i=0; i<string.length;i++){
        if(vowels.includes(string[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("bienvenue"))