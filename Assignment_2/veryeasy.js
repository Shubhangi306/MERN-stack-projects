console.log("<-----Very Easy Type JS Problem Solutions----->");
console.log("\n");
console.log("+++++/Question-1/+++++");

//Q1
function convert(minutes){
    //seconds=minutes*60;
    //return seconds;
    return minutes*60;
}

console.log("function :: covert();")
//Test cases
console.log("5 minutes =",convert(5)+' seconds');
console.log("3 minutes =",convert(3)+' seconds');
console.log("2 minutes =",convert(2)+' seconds');
console.log("59 minutes =",convert(59)+' seconds');
console.log("105 minutes =",convert(105)+' seconds');
console.log("\n");

//Q2
console.log("+++++/Question-2/+++++");

function dividesEvenly(a,b){
    if(a%b==0){
        return true;
    }else{
        return false;
    }
}

console.log("function :: dividesEvenly();")
//Test cases
console.log("98%7==0 :",dividesEvenly(98,7));
console.log("85%4==0 :",dividesEvenly(85,4));
console.log("6561%9==0 :",dividesEvenly(6561,9));
console.log("762%4==0 :",dividesEvenly(762,4));
console.log("1444%38==0 :",dividesEvenly(1444,38));
console.log("144%144==0 :",dividesEvenly(144,144));
console.log("\n");


