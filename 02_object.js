// in js object we have a to declare this in 2 types [1] is singloton,[2]is canstructer;

const mySymb = Symbol("key1");

const jsUser = {
    name:"Samarth",
    "full name":"Samarth mg",
    [mySymb]:"site",// here it's accseing and adding a symbole datetype
    email:"samarthmg@gmail.com",
    age:20,
    login:false,
    loginDate:["monday","sunday"]
}
// this is the declaretion of object and It is defined using the literal syntax ;

// now we have to accsse property of object;

console.log(jsUser.email);//basicaly it's not write methode access obj
console.log(jsUser["email"]);//it's write syntax for accsseing
console.log(jsUser["full name"]);
console.log(jsUser[mySymb]);

// changing values in objects

jsUser.email = "smarth@goodl.com";
Object.freeze(jsUser);//it's a freeze value do not changing in any condition;
jsUser.email = "Samarth@gpt.com";
console.log(jsUser);