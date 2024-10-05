// **singleton object declaration 
// const user = new Object()
// console.log(user);
// ** non singleton or literal object declartion

const user = {}
user.name = "samarth";
user.email = "samarthmg@gmail.com";
user.islogin = false;
// console.log(user);


//nested object accssesing
let reguser = {
    name:"samarth",
    userFullName:{
        firstName:"samarth",
        lastName:"mg",
        fullName:{
            fullName:"samarth mg"
        }
    }
    }
    // console.log(reguser.userFullName.fullName);



const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
obj3 = {5:"d",6:"e"};
const obj4 = {obj1,obj2};
// console.log(obj4);//this will not correct syntax to asing into target or new object tow or mor object

const obj5 = Object.assign({},obj1,obj2,obj3); //NOTE:this is write to combine tow or more object
console.log(obj5);
// console.log(obj5==obj1);


const arraObj =[{name:"samarth",id:1,age:20},{email:"samarth@gmail.com"}]
console.log(arraObj[1]);


console.log(user);
console.log(Object.keys(arraObj));
console.log(Object.values(user));
console.log(Object.entries(user));
// check if "name"property is exist
console.log(user.hasOwnProperty('name'))


// object-de-structhure

const value = {
    email:"samarth@gmail.com",
    phno:901894444,
    age:20
}
// console.log(value.email); //simple to accsseing but we have on more syntax to write this

const {email:email } = value;
console.log(email); // object de-structure is a js technic to extract propertis from object and assing into a variable;






   