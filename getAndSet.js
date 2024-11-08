// geter and seter is a methode to provide a acsess for object properte

class user{
    constructor(email,userName){
        this.email = email;
        this.userName = userName;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
    
}
let hi  = new  user("samarth@gmail.com","Samarth");
// console.log(hi);//if i dont want to give accsess to email then i use a methode GETER
// console.log(hi.email)//if we use geter and seter then we need to define how to give the value to user like encripted or public formate


/// function based get and set  syntax  /////////////////

function hii(name,age){
    this._name = name;
    this._age = age;

    // function we can use as a object  why becouse of in js evry property are object

    Object.defineProperty(this,'name',{
        get:function(){
            return this._name.toUpperCase();
        },
        set:function(value){
            this._name = value;

        }
    })


}
let so  = new hii("smarth",23);
console.log(so.name);