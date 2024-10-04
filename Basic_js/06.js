const coding=["java","cpp","python","swift"]
// const value=coding.forEach((item)=>{
//     console.log(item)
// })
// const value=coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(value)

// <-----------Filter method--------->
// const Mynum=[1,2,3,4,5,6,7,8,9,10]
// const numNew=Mynum.filter((num)=>num>4)
// console.log(numNew)
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((str) => str.length > 6);
// const result = words.filter((str) => { return str.length > 6});
// console.log(result);
const book=[
    {title:'book one',genre:'Non-FIction',Publish:199,Edition:2008},
    {title:'book ontwo',genre:'History',Publish:180,Edition:2001}
]
// const books=book.filter((bk)=>bk.genre=='History')
// const books=book.filter((bk)=>{return bk.Publish>=188})
const books=book.filter((bk)=>{return bk.Publish>=188 && bk.genre=='History'})
console.log(books)