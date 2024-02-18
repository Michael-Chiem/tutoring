
//map

let myArray =[1,2,3,4,5,6,7,8,9,10]
myArray.map( function(e){ 
    
    return e*2})
    
    
    let myArrayNew = myArray.map(e=>"apple"+ e)
    
    for(let i=0; i<myArray.length; i++){
        myArray[i] = "apple"+ myArray[i]
    }
    
    
    console.log(myArray)
    console.log(myArrayNew)
    
    