function setUsername(userName){
    this.userName = userName
    console.log("called");

}

function creatUser(userName,email,age)
{
    // we neeed to hold the refrence to call 
    // call methode using to call the object refrence in the outSourcing the refrence
    setUsername.call(this,userName)//here we just outSourcing  
    this.email = email
    this.age = age
}

let guru =  new creatUser("samarth","samarth@gmail.com",23)
console.log(guru);