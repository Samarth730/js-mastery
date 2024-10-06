// function declaration simply print multiple block of code by calling function
function myFunction()
{
console.log("S");
console.log("a");
console.log("m");
console.log("a");
console.log("r");
}

// refrence means here function name and call function is brackets
myFunction();


// function addSum (number1,number2)
// {
//     console.log(number1+number2);
// }
// addSum(4,3);
// addSum(4,"a"); //when we not specify a type of value then it by cancating with any type


// this is function with return value
function addSum(number1,number2){
    const result = number1+number2;
    return result
}
let result = addSum(4,3);
console.log(result);


// i just here play with sum examples of function
function  login(userName="samrth"){
    // suppose i dosent gave the value of function it will enters here
    if(userName === undefined)
    {
        console.log("plese gave  the value");
        return
    }
     return `${userName},just logedin`
    //  console.log("return dose not conside me becuse of i am affter the return block ");
}
// console.log(login("samarth"));
console.log(login()) //here it's not difine a value result is undeine

// and here ... 3dots are called spred and rest operate 
// this ... make simple to copy value and gives in single parameter
// when we have multiple value of item add in one cart then we use (spred) or (rest)
function cartVlaue(...num){
    return num
}
console.log(cartVlaue(2,3,4,5));


// how to use object in a function and call

// let user = {
//     name:"samarth",
//     item:3,
//     price:400
// }

function objectCallFun(user) //we are passing any name as a paremeter ande acces props on object
{
    return `name is,${user.name},item ${user.item}`;
}
// console.log(objectCall(user));
console.log(objectCallFun({
    name:"samarth",
    item:3
}))


// functions with array

let array = [200,300,400];

function returnSecondValue(myArray){
    return`${myArray[1]}`;

}
// returnSecondValue(array);


console.log(returnSecondValue([0,3,2,4,5]));



