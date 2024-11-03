// object literal like having a collection and methode  and also use array using dot operater we can assecs the value
const user = {
    userName:"samarth",
    logedIn:4,
    getUserDetails:function (){
        // console.log("get user detalis");
        console.log(`${this.userName}`);//here we use this for property which i have we are told told the funtinc to acses our property which is exixting
    }
}
console.log(`this is object litral ${user.userName}`);
console.log(user.getUserDetails());


//  this when we use this keyword to searching and maping current context
 


// # cunstructe function/

// useafe of cunstructor is object instence one to multiple instence creating wehen we we are using cun Func

// new key is used for create a new instence after using one cun Function

// supose i want to store the correct manner in the data so now i can use the cunstructer


// const promiseOne = new Promise() //in here i use the new keywod to define a multiple instence with same or one object
 
// ***** create a cunstructer with paramete using this key  *******

function user1(userName,loginCount,isLogedIn){
    this.myUserName = userName;
    this.myloginCount = loginCount;
    this.myLogedIn = isLogedIn;

    


    // call here method
    this.greetUser=()=>{
        console.log(`welcome${this.myUserName}`);
    }

    return this // this is returen a object 
}

let userOne = new user1("samarth",8,"yes");
let userTow = new user1("Prmoda",8,true);//this is not write to like this becouse this is copy write and overide a value 
//we use new key to evry time create a new instence of an object 


//// NOTe: when evre you use new key that create a empty object first
// step 2: cunsturcte function is call becouse of new Key word it can bind the value and return  argument paced and 
// step 3: this key is inject argument 
// step 4: return all this thing as result;


console.log(userOne.constructor);
console.log(userTow instanceof user1);  //instanceof  is return true becouse of same instent of constructer
