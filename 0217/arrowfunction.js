const name = "Michael"

function myFunction1(name){
    console.log("hello" + name)
}

function myFunction11(){
    console.log("hello1" + name)
}

const myFunction2 = function(name){
    console.log("hello" + name)
    return name}

const myFunction22 = function(){
    console.log("hello2" + name)
    return name}

const myFunction3 = (name)=>{
    console.log("hello"+ name)
    return name
};
const myFunction33 = ()=>{
    console.log("hello3"+ name)
    return name
};

myFunction1(name)
myFunction2(name)
myFunction3(name)
myFunction11()
myFunction22()
myFunction33()