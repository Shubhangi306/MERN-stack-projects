
console.log("<-----Medium Type JS Problem Solutions----->");
console.log("\n");
console.log("+++++/Question-1/+++++");

//Q1
// var reverse = function(str){
//     //str=str.split('');
//     //str=str.reverse();
//     //str=str.join('');
//     //return str;
//     return str.split('').reverse().join('');
// }

function specialReverse(sentence,letter){
    separateWords=sentence.split(' ');
    for(i=0;i<separateWords.length;i++){
        if(separateWords[i].startsWith(letter)){
           // separateWords[i]=reverse(separateWords[i]);
           separateWords[i]=separateWords[i].split('').reverse().join('');
        }
    }
    return separateWords.join(' ');
}

console.log("function :: specialReverse();");
//Test cases
console.log("word searches are super fun , (s) ::",specialReverse('word searches are super fun','s'));
console.log("first man to walk on moon , (m) ::",specialReverse('first man to walk on moon','m'));
console.log("peter piper picked pickled peppers , (p) ::", specialReverse('peter piper picked pickled peppers','p'));
console.log("the crow was thirsty at three thirty , (t) ::",specialReverse('the crow was thirsty at three thirty','t'));
console.log("We wonder whether W-words would want watching when wordplay was warranted , (w) \n::",specialReverse('We wonder whether W-words would want watching when wordplay was warranted','w'));

console.log("\n");

console.log("+++++/Question-2/+++++");

//Q2
function testJackpot(array){
    let i=0,j=1;
    while(j<array.length){
        if(array[i]===array[j]){
            j++;
        }else{
            return false;
        }
    
    }return true;
    //array.reduce(function(a,b){return(a===b)? true:false;});
}

console.log("function :: testJackpot();");
//Test cases
console.log("['@','@','@','@'] :",testJackpot(['@','@','@','@']));
console.log("['abc','abc','abc','abc'] :",testJackpot(['abc','abc','abc','abc']));
console.log("['SS','SS','SS','SS'] :",testJackpot(['SS','SS','SS','SS']));
console.log("['&&','&','&&&','&&&&'] :",testJackpot(['&&','&','&&&','&&&&']));
console.log("['SS','SS','SS','sS'] :",testJackpot(['SS','SS','SS','sS']));
console.log("['sHoE','sHoE','sHoE','sHoE'] :",testJackpot(['SHoE','SHoE','SHoE','SHoE']));
console.log("['HEy','heLLo','hi','hi'] :",testJackpot(['HEy','heLLo','hi','hi']));
console.log("\n");

console.log("+++++/Question-3/+++++");

//Q3
function removeDuplicates(array){
    var finalArray=[];
    for(let i=0;i<array.length;i++){
        if(!(finalArray.includes(array[i]))){
            finalArray.push(array[i]);
        }
    }return finalArray;
}

console.log(" function :: removeDuplicates();");
//Test cases
console.log("[1 ,0 ,1 ,0 ] :",removeDuplicates([1 ,0 ,1 ,0 ]));
console.log("['The','big','cat'] :",removeDuplicates(['The','big','cat']));
console.log("['John','Taylor','John'] :",removeDuplicates(['John','Taylor','John']));
console.log("['qualms','quack','charlatan','qualms','swindler','qualms','charlatan'] :"
,removeDuplicates(['qualms','quack','charlatan','qualms','swindler','qualms','charlatan']));
console.log("[1,22,44,22,55,33,4,33,666,77,4,55,87,21,23,21,77] :"
,removeDuplicates([1,22,44,22,55,33,4,33,666,77,4,55,87,21,23,21,77]));

//the end