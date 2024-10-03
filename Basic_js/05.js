const coding=["java","cpp","python","swift"]
// coding.forEach(val => {
//     console.log(val)
// });
// coding.forEach(function(value){
//     console.log(value)
// })
// coding.forEach((item)=>{
// console.log(item)
// })
// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })
// array of object-------------
const myCoding=[
    {
        langungeNmae:'javascript',
        langungefileNmae:'js'
    },
    {
        langungeNmae:'java',
        langungefileNmae:'java'
    },
    {
        langungeNmae:'python',
        langungefileNmae:'py'
    }
]
myCoding.forEach((item)=>{
    console.log(item.langungeNmae)
})