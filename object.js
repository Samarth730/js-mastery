// in js all the things difine as a object like Array,string class,also function this are all the object we can perfome a operation


// lets supose i declare a function and also i perfome specific object task

function multiple(num){
    return num*5

}
multiple.power = 2//yes function is object and also function is function
console.log(multiple(5));
console.log(multiple.power);
console.log(multiple.prototype);


function createUser(userName,email,password){
    this.userName = userName,
    this.email = email,
    this.password = password
}
// supose i want to create my owen property which do somthing 
/// syntax to create a user difine method
createUser.prototype.increment = function()
{
    this.password++;

}

createUser.prototype.printMe = function()
{
  console.log(`passwodr is : ${this.password}`);

}

let name1 =  new createUser("smarth","@gmail.com",12345)
let name2 = new createUser("pramod","samarh@mail.cpm",23456)
console.log(name1);
console.log(name2);
name1.printMe();
name2.increment();



