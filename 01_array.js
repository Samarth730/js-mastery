const country = ["japan","india","africa","rome"];
const state = ["karnataka","tokiyo","sudan","europe"]
// country.push(state);//When you use push(state), you are adding the entire state array as a single element.
// console.log(country);
// console.log(country.length);//it's finding the country element
// console.log(country[4][1]);//we can accsees through index


const merge = country.concat(state);
// console.log(merge[3]);

const dish = ["panipori","gobi"]
//we can use anther methode to concatinate tow or more elements in single size return new valuse of array;
const towOrmore  = [...country,...state,...dish];
// console.log(towOrmore[8]);


const nestedArrray = [1,2,3,4,[2,4,5,6,[45,6,8]],[0,2,3,4,5,["samrth","fool",true]]]
// console.log(nestedArrray.flat(Infinity));//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.


console.log(Array.isArray([1,2]));//here this isarray are return boolean value to check array or not;
console.log(Array.from("samarth"));//here this from function return new array;
console.log(Array.from({name:"samarth"}));//it's we difine what type of array we want to return (like key value paire)

const number1 = 200;
const number2 = 300;
const number3 = 400;
console.log(Array.of(number1,number2,number3));//Returns a new array from a set of elements.
