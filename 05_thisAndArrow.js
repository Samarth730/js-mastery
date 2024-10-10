const add = {
    userName:"Samarth",
    price:299,

    myLogin:function(){
       
        console.log(`${this.userName}`,"welcome to myLogin page");
        // console.log(this); //this is refer to current contest or instance like varible waht holeds in current sithuvation
    }

}
// add.myLogin();
// add.userName="monika";
// add.myLogin();
// console.log(this);//here this environment return a empty object in same in browesr return a value simply (windos)that is simple in return  globale object

///This keyword is not use in the function scope or block or it not refferd a corrent context here//
function home(userName2){
    userName2:"samarth";
    console.log(this);
}
// home();

const home2 = function (){
   userName2:"samarth"
   console.log(this);
}
// home();

// in arraow function this is return {}empty parenthis to mean here not represent as a globel object
 const home3 =(userName2="samarth")=>{
    // userName2:"samarth";
    console.log(this.userName2);
}
//home();



///simple to declare a arrow function to return add value
// in this arraow function we have currlyBracess it have return type
// const addValue = (num1,num2)=>{
//    return num1+num2;
// }
// console.log(addValue(4,3));


//implicit arrow function without having a scope and it assuming having return type

// const addValue = (num1,num2)=> num1+num2;

const addValue =(num1,num2)=> (num1+num2) //we return and wrap in the parenthiss becouse of returning sumtime diffrent datatype
const addValue2AndObject =(num1,num2)=> ({userName:"samarth"}) //we return and wrap in the parenthiss becouse of returning sumtime diffrent datatype

//console.log(addValue(3,2));
console.log(addValue2AndObject(3,4));



