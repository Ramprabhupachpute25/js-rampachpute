function addnumber (number1 , number2){
//   let result=number1 + number2
//   console.log("hitesh");
  
  return number1 +number2;
    
} 

const result= addnumber(3,2)
//  console.log("result:",result);

// addnumber(3,2);
// values we are passing in function definition are parameters.
// values passing in function calling are arguments.
// return fuction ke bad me kuchh bhi likha to wo print/ run nhi hoga.

function userlogin(username ="sammy"){
   if(!username){
    console.log("please enter a valid username");
    return
    
   }
    return  `${username}  just logged in!`

}
console.log(userlogin());


