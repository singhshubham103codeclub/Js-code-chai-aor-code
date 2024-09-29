const user={
    username:"hitesh",
    price:999,
    wellcomemessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
// user.wellcomemessage()
// user.username="shubh"
// user.wellcomemessage()
// console.log(this)
// const chai=function(){
//     let user="hitesh"
//     console.log(user.this)
// }
// const chai=()=>{
//     let user="hitesh"
//     console.log(this)
// }
// chai()
// const Addtwo=(num1,num2)=>{
//     return console.log(num1+num2)
// }
// const Addtwo=(num1,num2)=> console.log(num1+num2)

// Addtwo(3,4)
const obj=()=>{name:"allu"}
console,log(obj())