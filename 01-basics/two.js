let number=1

while (number<=50) {
   
    if (number%3==0) {
        // console.log(`${number} ,is divisible by 3`);
        
    }
        number++ ;

}


// *******foreach***************  FOREACH METHOD IS USED ON ARRAY 

//CONTAINING  MULTIPLE OBJECTS

const myCoding=[
    {
        languageName:"javascript",
        fileName:"js"
    },
    {
        languageName:"python",
        fileName:"py"
    },    {
        languageName:"ruby",
        fileName:"rb"
    },
];

myCoding.forEach((item) => { 
    // console.log(item.fileName,item.languageName);
});



// letus use filter keyword for som operations on arrays************


let myNums =[1,2,3,4,5,6,7,8,9,10,11]

const newNum=myNums.filter( (num ) => num>5)
    


    
// console.log(newNum);

// **************..........FILTER........*******************


const numbers =[1,2,3,4,5,6,7,8,9 ,10]

const newNo =numbers
    .map((mm) => mm*10)
    .map((mm) => mm+2)
    .filter((mm)=>mm<=50)
             

console.log(newNo);




