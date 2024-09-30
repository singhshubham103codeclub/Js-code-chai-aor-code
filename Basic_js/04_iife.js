// Immediately Invoke Function Expression (IIFE)
// function chai(){
//     console.log("be connected")
// }
// chai()
//  named (IIFE)
(function chai(){
    console.log("be connected")
})();
// arrow function
(()=>{
    console.log("hello")
})();
// unnamed (IIFE) with perameter
((name)=>{
    console.log(`hello${name}`)
})("hitesh")