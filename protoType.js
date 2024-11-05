// What is a Prototype?

// In JavaScript, every object has an internal property called [[Prototype]]. 
// This property allows objects to inherit methods and properties from other objects. 
// The object from which another object inherits is known as its prototype.


// example of protoType

let hero = ["thor","spiderMan"];

let heroPower = {
    thor : "hammer",
    spiderMan : "slings",

    getspidePower : function(){
        console.log(`spide power is ${this.spiderMan}`);
    }
}


// Object.prototype.samarth = function(){
//     console.log("samarth is present in all object");
// }
// heroPower.samarth(); // this function is inherite by all the object 


/*** i want to gave my methode acseess to hero only  */
Array.prototype.samarth = function(){
    console.log(" hi i only lisen by hero");
}

hero.samarth();
// heroPower.samarth();


// ********** prototypele inheritence *********
/// accessing to onther object property ////

user = {
    name :"samarth",
    age : 20
}
teacher = {
    available : true
}

teacherNot = {
    isAvailable: false,


    // here i acssess to onther object 
    __proto__ : teacher
}
console.log(teacherNot.available);

teacher.__proto__ = user
console.log(teacher.name);


// **** moderen type inheritence sytax **********

Object.setPrototypeOf(teacherNot,teacher);
console.log(teacherNot.available);

let findLenth = "samarth    ";
String.prototype.trueLenthg = function()
{
    console.log(`${this}`);
    console.log(`true String length is : ${this.trim().length}`);
}
findLenth.trueLenthg();
"pramoda3   ".trueLenthg();


/// now i understand this means what means  [addu yavdu call madbeko addu]

