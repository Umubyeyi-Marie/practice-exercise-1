function countConsonants(string){
    consonants="qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM";
    count =0;
    for (i=0 ;i<string.length ; i++){
      if(consonants.includes(string[i])) {
        count++;
    }
}
return count;
}
console.log(countConsonants("bienvenue"));