let userEmail = [];
if (userEmail) {
    console.log("yes got the email");
    }else{
    console.log("do not have user email");
}

// falsy value
// 0,-0,BigInt,0n,false,"",null,undefined,NAN;

// surprize truthy values
// with enclused in string is a truty value " ",'sa',"false","0",function(){},[],{},are the truty values

if(userEmail.length===0)//this is the proper syntax to check truth values
{
    // console.log("array is empty ");
}


//this is simple way to check object is empty or not
const emptyobject = {}//key methad return as a array value and we chech lenth of an array which is truty considertion
if (Object.keys(emptyobject).length===0) {
    console.log("object is empty");
}


//// nullish coalescing operatore //whis use only for nall and undifine

let value;
// value = null ?? 10;
value = undefined ?? 20 ??40;
console.log(value);



// ternary oparatore

let score = 100;
score >400?console.log("test"):console.log("no");

