console.log("<-----Easy Type JS Problem Solutions----->");
console.log("\n");
console.log("+++++/Question-1/+++++");

//Q1
function charCount(str1,str2){
    var count=0;
    for (i=0;i<str2.length;i++){
        if(str2[i]==str1){
            count=count+1;
        }
    }return count;
}

console.log("function :: charCount();");
//Test cases
console.log("edabit (a) :",charCount('a','edabit'));
console.log("Chamber of secrets (c) :",charCount('c','Chamber of secrets'));
console.log("big fat bubble (b) :",charCount('b','big fat bubble'));
console.log("shining in the setting sun like pearl upon the ocean (n) :"
,charCount('n','shining in the setting sun like pearl upon the ocean'));
console.log("We wonder whether W-words... (w) :",charCount('w',"We wonder whether W-words would want watching when wordplay was warranted. Wending whichever way works, waylaying wary wordsmiths. While wily wasscally wabbits worry, wonderment without, within, withall will wickedly wot.Why Who would wonder Whispering with wanton, willful wickedness, William waxes waspish. Weathers wicked warts, waspy welts; whatever wanders within wunderkind's way. Waited whenever women walked westward. Walt would've whacked William well.Walt wanted worse wounds wound with wire. Wretched William. Would William want winnings? Whistling wanker. Walt wouldn't waste withering white wattage without wiring William's wares wallward"));
console.log("\n");

//Q2
console.log("+++++/Question-2/+++++");

function addUp(number){
    let sum=0;
    for(i=1;i<=number;i++){
        sum=sum+i;
    }return sum;
}

console.log("function :: addUp();");
//Test cases
console.log("1 to 4 :",addUp(4));
console.log("1 to 13 :",addUp(13));
console.log("1 to 600 :",addUp(600));
console.log("1 to 998 :",addUp(998));
console.log("1 to 329 :",addUp(329));
console.log("\n");

//Q3
console.log("+++++/Question-3/+++++");

function replaceVowel(str){
str = str.replace(/a/g,'1');
str = str.replace(/e/g,'2');
str = str.replace(/i/g,'3');
str = str.replace(/o/g,'4');
str = str.replace(/u/g,'5');
return str;
}

console.log("function :: replaceVowel();");
//Test cases
console.log("karachi :",replaceVowel('karachi'));
console.log("chembur :",replaceVowel('chembur'));
console.log("khandbari :",replaceVowel('khandbari'));
console.log("education :",replaceVowel('education'));
//It's not something random ,it's actually a word please don't misunderstand.
console.log("pneumonoultramicroscopicsilicovolcanoconiosis :",replaceVowel('pneumonoultramicroscopicsilicovolcanoconiosis'));

