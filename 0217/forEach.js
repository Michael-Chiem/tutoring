


const myArray =[1,2,3,4,5,6,7,8,9,10]

//forEach

myArray.forEach( apple => console.log(apple))


myArray.forEach( function(){ console.log("apple")})
myArray.forEach(()=> console.log("apple"))

for(let i=0; i<myArray.length; i++){
    console.log('apple')
}


//[].forEach(function(){do sth. loop through the array }) 