/// if Statement in js

let isLogedIn = true;
let temprathure = 41;

//codition checking sucssus or not with opertaer (==)
// if(isLogedIn==false)
// {
//     console.log("loged succefully");
// }else {
//      console.log("login unsucssfull");//it will not related to if codition becouse of global scope

// }  

//we are using <= less than or equl to check wethwr correct or not
// if(temprathure <= 41)
// {
//     console.log("temprather is lessthan 40 degree");
// }else {
//      console.log("temprathere is greter");//it will not related to if codition becouse of global scope

// }  
// console.log("executed globaly");//it will not related to if codition becouse of global scope

// operter used as as a checking condition
// ==,<=,<,>,=>,===,!=


// const score =100;
// if(score ===100)
// {
//     const score = "good";
//     console.log(`${score}`);
// }
// else{
//     console.log("not enough");
// }
// console.log(power);//it's not write to call here becose of scope 

//implicit scope we can skip here to {}scope js assuming the scope is there and we can write mulitple line of code using ,
let balence = 200;
// if(balence > 100) console.log("test"),console.log("test2");


//using if-else-if;
// let num1 = 2;
// let num2 = 0;
// let num3 = 1;

// if (num1 > num2 && num1 > num3) {
//     console.log(`${num1} is greater`);
// } 
// else if (num2 > num1 && num2 > num3) {
//     console.log(`${num2} is greater`);
// } 
// else if (num3 > num1 && num3 > num2) {
//     console.log(`${num3} is greater`);
// } 
// else if (num1 == num2 && num1 == num3) {
//     console.log("All are equal");
// } 
// else {
//     console.log("Some numbers are equal, but not all.");
// }


/// we are using && means it's like all are true then it entring code
 
let userlog = true;
let debiteCard = true;
let googleLogin = false;
let emailLogin = true;

if(userlog && debiteCard && 2==2 && googleLogin){
    console.log("allow to purchase");
}

if(googleLogin || emailLogin)//this is pipe to use only one true then execute or enterd
{
    console.log("allow to login with any one");
}

