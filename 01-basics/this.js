const user ={
       username:"hitesh",
       price:999,
    
       welcomeMessage : function (){
        console.log(    `${this.username} , welcome to website!`);
       }
}
//   user.welcomeMessage()
//   user.username ="sam"
//   user.welcomeMessage()

//   console.log(this);

//   ********************Arrow Function***************

const chai =  () =>{
    let userName ="hitesh"
    // console.log(this.userName);
    
}
// chai()

const addNum = (num1,num2) =>{
   return num1+num2
}

// orr
 console.log(addNum(8,4))

 const addNums = (num1,num2) =>(num1+num2)
 
  console.log(addNums(8,4))
 
  
 
