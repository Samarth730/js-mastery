// Fethures in ES6


// class user{
//     constructor(userName,age,passowerd){
//         this.userName = userName;
//         this.age = age;
//         this.passowerd = passowerd;

//     }

//     encreptedPass(){
//         return `${this.passowerd}Abc`;

//     }

//     changeName(){
//         return`${this.userName.toUpperCase()}`
//     }
// }
// let print = new user("samarht",78,123)
// console.log(print);
// console.log(print.encreptedPass());//this will return a encrypted password to work behaind the seen
// console.log(print.changeName());

// behaind the scene

function users(userName,age,passowerd){
        this.userName = userName;
        this.age = age;
        this.passowerd = passowerd;

}

users.prototype.encreptedPass = function(){
    return `${this.passowerd}Abc`;

}

users.prototype.changeName = function(){
    return `${this.userName.toUpperCase()}`;

}

let use = new users("samarth",34,3456)
console.log(use);
console.log(use.encreptedPass());




//////      inheritence in JS ///////////

class user{
    constructor(userName) {
        this.userName = userName;
        
    }

    logIn(){
        console.log(`USERNAME IS ${this.userName}`);
    }

}

// i just inherit the property from parent class using extend key word

class Teacher extends user{
    constructor(userName,email,passowerd){
        super(userName) // this method is for call the inheited property of parent class
        this.email = email;
        this.passowerd  = passowerd;

    }



    addCoures(){
        console.log(`A new Coures is Added by ${this.userName}`);
    }

}


let sam = new Teacher("Samarth","samarth@gmail.com",123)
sam.addCoures();


let mg = new user("SamarthMg");
// mg.logIn();
// sam.logIn();
console.log(mg instanceof user);
