// what is recursion ?
// re- cursion = simply means that re - calling it self
// so recursion is a function that calls itself
// recursion is a powerful tool for solving problems that have a recursive structure
// recursion is a function that calls itself on every iteration until it reaches a base case that stops the

// for example : -> you had a fuction apple(){......that call itself apple()}
// the above example can create a infinte loop endind you system crash
// so earleir you said that is the powerfull tool to use but it create a infinte loop
// yes until you provide a strong condition
// so let us see how to put an horse shoe to it

// using recurion to create endless loop
// caution dont try at home
// function endless(x){
//     endless(x)
// }
// endless(1)

// // using recursion to create normal loop
// function ball(a){
//     console.log(a);
//     if(a < 10){
//         ball(++a)
//     }
// }
// ball(0)

// // using recusion to create reverse loop
// function apple(x){
//     console.log(x)
//     if(x>0){
//         apple(--x)
//     }
// }
// apple(9)

// working of the recusion depth explaination
// temminalogoies
// stack :-> the memory used by fucntion to perform execution
// stack mainly have push and pop method
// when we call a function it is pushed into the stack
// when we return from a function it is popped from the stack
// so when we call a function it is pushed into the stack and when we return from a function it is popped from the stack and the memory is released
// e = activation record :-> asiginig a exceution context for next fucntion call
// example :->
function call(x) {
  if (x < 10) {
    call(x + 1);
    console.log(x);
  }
}
call(1);

// function factorial(x){
//     let fact = 1 ;
//     let y = 1
//     if(x === 0){
//         return 1
//     }
//     if(x >= y){
//         fact = x * factorial(x-1)
//     }
//     return fact
// }
// console.log(factorial(6))

// console.log(Math.floor(Math.sqrt(4)))
