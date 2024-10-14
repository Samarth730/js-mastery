const myArray = ["samrth","javaProgramer","employee","honest"];
myArray.forEach(function name(value){
    console.log(value);
})//here we calling a foreach loop on that loop we callin a function

// {we skiping some stuf of code using arraow function in foreach loop}

const value = [2,3,4,5,6,7];
// value.forEach((item)=>{console.log(item);})





// we are using one more techniqe to itirate
function print(item){
    console.log(item);
}
value.forEach(print);//gaveing refrence of anther object

/// array in high order loop

let lotsOfObjeInArray = [{lagName:"java",teacher:"samrth"},{lagName:"python",teacher:"arun"},{lagName:"c#",teacher:"suman"}];
// lotsOfObjeInArray.forEach((item)=>{console.log(item.lagName);});


//[note:here we assing the foreach to the variable and it dose not return and gave undifine so we dont use to foreach loop for assing and get return]
let country = ["INDIA","BRITSH","IRISH","UNITED KINGDOM"];
let values = country.forEach( (item) => {
    // console.log(item);
    return item;

}  )
// console.log(values);//here we cannot use this variable becose it dose not return and to perfom opration in futher;

// **** we use filtter for suc condition chech to perfom any opertion;

let con = [1,2,3,4,5,6,7,8,9]
let ret = con.filter( (num) => (num > 4))
console.log(ret);///we can here filter or check the codition befor we call function;


/// a simple  project using filtter to undestanding how to fillter is used in database;


let books = [
    {
        bookName: "To Kill a Mockingbird",
        genre: "Fiction",
        publishing: "1960",
        edition: "First Edition"
    },
    {
        bookName: "1984",
        genre: "Dystopian",
        publishing: "1949",
        edition: "Second Edition"
    },
    {
        bookName: "The Great Gatsby",
        genre: "Tragedy",
        publishing: "1925",
        edition: "First Edition"
    },
    {
        bookName: "The Catcher in the Rye",
        genre: "Fiction",
        publishing: "1951",
        edition: "First Edition"
    },
    {
        bookName: "Pride and Prejudice",
        genre: "Romance",
        publishing: "1813",
        edition: "First Edition"
    },
    {
        bookName: "Moby-Dick",
        genre: "Adventure",
        publishing: "1851",
        edition: "First Edition"
    }
]
let values2 = books.filter( (book) =>  book.genre === "Adventure" && book.bookName === "Moby-Dick" || book.edition === "eSecond Edition"  )
// values2 = books.filter((book)=> (book.publishing >= 1900))
// values2 = books.filter((book)=> (book.edition === "Second Edition"))

console.log(values2);



// chining in the highOrder loop it can use insted of anter loop 


let mynum = [1,2,3,4,5,6]
let ver = mynum.map((num)=> num*10)
               .map((num)=> num+1)
               .filter((num) => num >= 41)
console.log(ver);

// reduce loop basic defnetion and it's usage in shoping car basicaly stuf when looping and add we can siply call reduce()function 
let array1 = [1,2,3];
let cou = array1.reduce((accu,curent)=> accu+curent,0)
console.log(cou);

let course = [
    {
      courseName:"java",
      price:299,
    },
    {
      courseName:"java",
      price:299,
    },
    {
      courseName:"java",
      price:299,
    }

]
let addCourse = course.reduce((accu,item) => (accu+item.price),0)
console.log(addCourse);












