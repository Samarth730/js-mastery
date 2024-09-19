console.log("hello,world");
console.log("Well done");
const account =1209;
let accountid = "a email";
var finish = "not ";
// name ="samarth";




finish = "sam";
console.table([account,finish]);


// datatypes

let score = true

// console.log(typeof score);

// esy conversion
// "33" => 3
let myConversion = 2;
let Score = Number("hitesgh2");
// console.log(typeof Score);

// console.log(2+2+"3");
let name  = "samrth";
let lastName = "mg";
let fullName = Boolean(name +  lastName);
let a = 5;
let b;
b = Symbol(21);
a = Symbol(21);
console.log(a);
console.log(b===a);


////heap and stack memory ////
// basicaly stack represent or it collect a call by value which means the copy value
// there are tow types of memory allocation primiteve and non premeiteve
// premiteve data type {string,int,number,bigint}
// non-premiteve{objects,array,functions}


// example of stack

let myName = "samarhta";
let anatherName = myName;
anatherName  = "goale"
// console.log(anatherName);
// console.log(myName);






let user = {
    name1 : "samarth",
    email : "samrth@gmail.com"

}
let userone = user;
userone.email = "mg@gmail.com";

console.log(user.email);
// console.log(userone.email);


 ///  //string// ///////

let you = "iam";
let me ="you";
// console.log(you+me); it's not good to syntacx to cancatienate other sting

// modren method to concatinate
console.log(`hellow ${you} and ${me}"bro"`);

// string declare syntacx
let hero = new String("shaktiman");
console.log(hero[0]);
console.log(hero.__proto__);
console.log(hero.length);
console.log(hero.toUpperCase());
console.log(hero.charAt(2));
// console.log(hero.charCodeAt(2,4))
console.log(hero.slice(1,4));


let towstring = hero.substring(1,4);
console.log(towstring);


let triemex = "   derend   ";
console.log(triemex.trimEnd());


// replacing any value in string 
let regex = "http://samath@20%";
console.log(regex.replace("//","!!"));


// caparing with tow equla or not check
let camare = regex.includes("http://samath@20%");
console.log(camare);







