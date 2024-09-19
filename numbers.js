let num = 2;
console.log(typeof num);

let num2 = new Number(23);
console.log( typeof num2);

// explicit canvertion in string or any data type

let cansider = num2.toString();
console.log(cansider);

let antherMethode = cansider;
console.log(antherMethode.charAt(1));
console.log(antherMethode.includes(23));
console.log(antherMethode.indexOf(2));
console.log(antherMethode.toUpperCase());


let exp = new Number(149,600,'000' );
console.log(exp.toExponential());



///// date and time /////


// here date is an object and we use to find date to use new 

// we can many wayes to create a date and we follow somw imstruction to it 

const day =  Date();
console.log(day.toString().day);


