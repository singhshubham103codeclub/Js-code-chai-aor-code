const arr=[1,2,3,4]
// const totalval=arr.reduce(function(acc,currval){
//     return acc+currval
// },0)
// const totalval=arr.reduce((acc,currval)=>acc+currval,0)
// console.log(totalval)
const course=[
    {itemName:'js course',
        price:900
    },
    {itemName:'py course',
        price:1000
    },
    {itemName:'data science course',
        price:1900
    }
]
const totalprice= course.reduce((acc,item)=>acc+item.price,0)
console.log(totalprice)