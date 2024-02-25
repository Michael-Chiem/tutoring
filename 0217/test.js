const name = "Michael"

// function myFunction  () {
//     console.log(name);
// }



// myFunction();

// const last = "Chiem"

// const myFunction1 = () => {
//     console.log(last);
// document.getElementById('function').innerHTML = `<h3>${last}</h3>`   

// }

// myFunction1();


function myFunction1  () {console.log(name);}

const myFunction = () => {console.log(name);}

myFunction();
myFunction1();



var person = {
    name: "Hodor",
    saySomething: function() {
        // console.log(this.name + " is thinking...");
        document.getElementById('function').innerHTML = (this.name + " is thinking...");
      setTimeout(function() {
        document.getElementById('second').innerHTML = (this.name + "!");
        // console.log(this.name + "!");
      }, 3000);
    }
  };
  
 person.saySomething();