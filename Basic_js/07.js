const Mynum=[1,2,3,4,5,6,7,8,9,10]
// const nums=Mynum.map((n)=>n+10)
// const nums=Mynum.map((n)=>n+10)
//                 .map((num)=>num*2)
const nums=Mynum.map((n)=>n+10)
                .map((num)=>num*2)
                .filter((fil)=>fil>=30)
console.log(nums)