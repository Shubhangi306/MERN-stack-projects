
console.log("<-----Difficult Type JS Problem Solutions----->");
console.log("\n");
console.log("+++++/Question-1/+++++");

//Q1
function realType(object){
    let array='array';
    if(typeof(object)==='object'){
        if(object===null){
            return 'null';
        }else if(Array.isArray(object)){
            return'array';
        }

    }else{
        return typeof(object);
    }
}

console.log("function :: realType();");
 //Test cases
console.log("1 :",realType(1));
console.log("a :",realType('a'));
console.log("true :",realType(true));
console.log("[] :",realType([]));
console.log("null :",realType(null));
console.log("12345678n :",realType(12345678n));
console.log("function(){return'its a function';} :",realType(function(){return'its a function';}));
let symbol=Symbol('s');
console.log("Symbol(s) :",realType(symbol));

console.log("\n");
console.log("+++++/Question-2/+++++");

//Q2
function numberInStr(array){
    var finalArray=[];
    for(i of array){
        k=i.split(' ').join('');
        for(let j=0;j<k.length;j++){
            if(!(isNaN(k[j]))){
                if(!(finalArray.includes(i)))
                finalArray.push(i);
            }
        }
    }return finalArray;
}

console.log("function :: numberInStr();");
//Test cases
console.log("['1a','a','2b','b'] :",numberInStr(['1a','a','2b','b']));
console.log("['abc','abc10'] :",numberInStr(['abc','abc10']));
console.log("['abc','ab10c','a10bc','bcd'] :",numberInStr(['abc','ab10c','a10bc','bcd']));
console.log("['this is a test','test1'] :",numberInStr(['this is a test','test1']));
console.log("['2/','#|','2#?/','?',' 2'] :",numberInStr(['2/','#|','2#?/','?',' 2']));
console.log("['',';:','42b:;','<>@',' ','333'] :",numberInStr(['',';:','42b:;','<>@',' ','333']));

