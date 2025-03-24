const myItem =[

    {product:"sugar" ,
        price:99
    },
    {product:"poha" ,
        price:75
    },
    {product:"coconut" ,
        price:159
    },
    {product:"turmeric",
        price:39
    },
]

const total = myItem.reduce ((acc ,item)=>
    
     acc+item.price,0);
console.log(total);
