// // promise is an  object representing  eventhul complicion or failure of an asynchresne operaropn



// // creation of promisis
// const promiseOne = new Promise((resolve,reject)=>{
//     //do async task
//     // like DB call , cryptography,network 
//     setTimeout(()=>{
//         console.log("asinc function is good");
//         resolve()//this resolve fun is call to then and my work is over and now you can come
//     },1000);
   
// });//promise like a call back hell it means it cantin a function and take a 2 parameter [resolve and reject]

// // now i cansume the promised
// promiseOne.then(function(){
//     console.log("resolve function");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("asinc task is call");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("asinc is resolve");
// })


// // how data consaption in resolve function 
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({userName:"Samarth",age:20,email:"ssamarth"}) //we can asing data to call and array function in this resolve
//     },1000)
// }) 
// promiseThree.then(function(user){
//     console.log(user);
// })



const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let user = false
        if(!user){
            resolve({userName:"Samm",age:23,email:"ssaaka@gmail"})

        }
        else{
            reject("Error:somthing went wrong");
        }
    })
})
promiseFour.then(function(user){
      console.log(user);
      return user.userName;
}).then((userName)=>{
    console.log(userName);

}).catch(function(error){
    console.log(error);
});


// ************ both are same you chose which is easy to you*********


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let user = false
        if(!user){
            resolve({userName:"Samm",age:23,email:"ssaaka@gmail"})

        }
        else{
            reject("Error:somthing went wrong");
        }
    })
});
async function consume(){
    try {
        let res = await promiseFive
        console.log(res);
        
    } catch (error) {
        console.log(error);
    }
}
consume();