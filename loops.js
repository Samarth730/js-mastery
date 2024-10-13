//for loop is used fo when we know the exact number of repetaion go for loop

for (let i = 0; i <=10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is print");
    }
    // console.log(element);   
}


//printing the tables 1 to 10 
for (let i = 1; i <=10; i++) {
//    console.log("outer loop:"+i);
   for (let j = 1; j <=10; j++) {
    // console.log(i+"*"+j+"="+j*i);
    
   }
    
}



// printing and read array using for loop

let array = ["samarth","monika","ambika"];
console.log(array.length);/// it start with index 0 it gives lenth of an array size
for (let index = 0; index < array.length; index++) {
    const element = array[index]; //it gave each element of an array
    // console.log(element);
    
}

// break and contineu;

for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log("5 is detected and break");
        break;
    }
   console.log(`value of i is:${index}`);    
}

for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log("5 is detected and continue");
        continue;
    }
   console.log(`value of i is:${index}`);    
}

/// while loop when we dont no the exact number of repetaion and until the condition is atisify we go while loop


// let print = 1;
// while (print<=10) {
//     console.log(`print value:${print}`);
//     print=print+3;
// }

// let myArray = ["samarth","monika","ambika"];
// let arr = 0;
// while (arr<myArray.length) {
//     console.log(`value of array:${myArray[arr]}`);
//     arr++;
    
//}


/// do while in JavaScript do-while loop is used to execute a block of statements continuously until the given condition is true. The do-while loop in Java is similar to while loop except that the condition is checked after the statements are executed,

let score = 1;
do{
    console.log(`value of score:${score}`);
    score++;
}while (score<=10) 


// forOf loop or foreach loop in javaScript it is used for itirate  the each element in array or object we use for of loop;
let me = ["s","a","m","a","r","t","h"]
for (const i of me) {
    // console.log(`${i}`);
    
}


// const greeting = "samarth mg";//remove space and continue
// for (const greeter of greeting) {
//     if(greeter === ' '){      
//         continue;
//     }
//     console.log(greeter);
    
// }



// maps in javascript which holds the collection of key value pair it is know for also unique value pairs duplicate value not allowed
//basic declartion of maps
const map = new Map();
map.set('IN',"india");
map.set('US',"united states");
map.set('FR',"france");
// map.set('IN',"india"); [duplicate value not allowed]
console.log(map);

// looping over maps

for (const [key,value] of map) {
    console.log(key,value);
    
}

// obj over loop 
//to itirate object we use only forin loop
const obj = {
    name:"samarth",
    age:20,
    fullName :"samrth mg"
 
}
// console.log(obj);
for (const key in obj) {
    // console.log(`${key}: ${obj[key]}`);
}


//using forin loop for arrays

let myArray = [1,2,3,4,5,6,7]//we using here in array key it returns index
for (const key in myArray) {
    console.log(key);
}











    
