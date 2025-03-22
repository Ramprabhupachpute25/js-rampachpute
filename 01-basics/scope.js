const score= 400

if(score <500){
    var power = "fly"
    // console.log(`"my power:${power}"`);
}
// console.log(`"my power:${power}`);
// console.log(`"my power:${power}`);   shift +alt +down arrow

// here the main difference is between let and var keyword
// if we use let keyword,we cannot access it out of block scope 
// but we use var variable keyword then it can be accessed out of block scope... 

// *****code for checking variable value************
// const userEmail="h@hitesh.ai"
// if(userEmail){
//     console.log("got user email");
    
// }
// else{
//     console.log("user not found!");
    
// }

// falsy values :
// false , 0 ,-0 ,Bigint 0n ,null ,undefined ,NaN

// truthy values
// true ,  "0","false"," ",[],{},function(){}

// *******check empty array************

const emptyArray =[]
if (emptyArray.length===0){
    console.log("Array is empty");
    
}

// *******************code to check empty object**************

const emptyObj ={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty!");
    
}