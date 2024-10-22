// function count(n) {
//     let count = n;
//     return function  (){
//         return count++
//     }
    
   
// }
// const counter = count(10)
// console.log(counter())
// console.log(counter())



///
// const findTarget = (arr, target) => {
//     let lowIndex = 0;
//     let highIndex = arr.length - 1;

//     while (lowIndex <= highIndex) {
//         let mid = Math.floor((lowIndex + highIndex) / 2); // Corrected mid formula
//         let guess = arr[mid];

//         if (guess === target) {
//             return mid;
//         }
//         if (guess > target) {
//             highIndex = mid - 1;
//         } else {
//             lowIndex = mid + 1; // Corrected lowIndex update
//         }
//     }
//     return -1; // Return -1 if target is not found
// };

// const sahil = findTarget([1, 2, 3, 4, 5], 3);
// console.log(sahil); // Output: 2

// function swap(a,b){
//     let temp;
//     temp = a;
//     a = b;
//     b = temp;
//     return{
//         a , b
//     }
// }
// let a= 2
// let b= 3
// console.log(swap(a,b))



// let n =5
// let feb = 0;
// for(let i=0; i<n; i++){
//     i += feb + i
//     console.log(i)
// }


// var createCounter = function(init) {
//     let presentCount = init;
//     let arr = [];
  
// //     const increment= () => {
// //       return ++presentCount;
// //     }
  
// //     const decrement= () => {
// //         return --presentCount;
// //     }
  
// //     const reset= () => {
// //         return (presentCount = init);
// //     }
  
// //    return(arr.push(increment, reset, decrement))
// //   };

// // console.log(createCounter(5))

// //palindrome of str
// let isPalindrome = (s) => {
//     let word = s.toLowerCase().replace(/[^\w]/g, '');
//     let reverse = word.split('').reverse().join('');
//     let ans;
//     if (reverse === word ) {
//         ans = "isPalindrome"
//     }else {
//         ans = "notPalindrome"
//     }
//     return ans;
// }
// console.log(isPalindrome("Eva, can I see bees in a cave?"))

// //finding the factorial of the n
// let factorial = (n) => {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i   
//     }
//     return result;
// }

// console.log(factorial(5))

// //---------------------------------------------------------------------------------------------
// // finding the targeted value in str //

// // Initialize a counter 'res' to 0 to keep track of character occurrences
// // Loop through each character in the string
// // Check if the current character matches the input character
// // If it matches, increase the counter 'res' by 1
// // After the loop finishes, return the final count of the character
// function countChar(str, char) {
//     let res = 0;
//     for (let i = 0; i < str.length; i++) {
//        if(str[i] === char){
//            res++         ;
//        }
//     }
//     return res;
// }
// console.log(countChar("sahil", "a"))


// //--------------------------------------------------------------------------------------------
// //finding prime no from given range

// // First, create an empty array 'primes' where prime numbers will be stored

// // Helper function - This function will check if a number is prime or not
// // If the number is less than 2, it won't be a prime number

// // Loop from i = 2 up to the square root of the number
// // If the number is divisible by any i, then it's not a prime number
// // If the number is not divisible by any i, then it is a prime number

// // Main function - We look for prime numbers from start to end
// // Each number i is checked using the isPrime() function
// // If the number is prime, it's added to the 'primes' array

// // Once the loop finishes, the primes array is returned

// //code:->

// function isPrimeInRange(s, e) {
//     let arr = []
//     for (let i = s; i <= e; i++) {
//         if (isPrime(i)) {
//             arr.push(i)
//         }
//     }
//     return arr
// }

// function isPrime(n){
//     if (n < 2) return false;
//     for (let i = 2; i<=Math.sqrt(n); i++){
//         if (n%i ===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrimeInRange(12,77))

// let fn = (a,b,c) => (a + b + c)
// var once = function(fn) {
    
//     return function(...args){
//         return fn();
//     }
// };

// console.log(once(1, 2, 3))

// rest operater
// function addnum (a, b, c, ...other){ 
//     console.log(...other)       ////rest operater will store the rested varaibles into an arry 
//     return a + b + c;
// }
// console.log(addnum(1, 2, 4, 5, 7, 8))


// array desturcturing and rest operater
// let arr = [1, 2, 3, 4, 5, 7];
// let [a, b, c, ...others] = arr; /// array destructuring is is used to extract single element from an array
// console.log(a, b, c, others)   // here we can accses a individual values from an array and the rest of values 
////got store in the form of array by ...rest operater

// //object destructuring and rest operater
// let obj = {a: 1, b:2, c:4, d:5, e:7, f:8} 
// let {a, b, c, ...rest} = obj    /// destructuring an object to extract a single values from it
// console.log(a, b, c, rest) // here we can accses a individual values from an object and the rest of values 
// ////got store in the form of object by ...rest operater



// let pyramid = (n) => {
//     let string = "";

//     let print = ()=>{
//         for (let i = 1; i <= n; i++) {
//             for (let j = 0; j < n - i; j++) {
//               string += " ";
//             }
//             for (let k = 0; k < 2 * i - 1; k++) {
//               string += "*";
//             }
//             string += "\n";
//           }
          
//           return string;
//     }
//     return print(n);
// };


// console.log(pyramid(50))


let a = [1, 2, 4, 5, 76,6];
let large = -Infinity
let small = Infinity
for (let i = 0; i < a.length; i++) {
     if(a[i] < small){
      small =i;
     }
     if(a[i] > large){
      large = i
     }  
}
console.log("SMALLEST VAL = ",small,"INDEX")
console.log("LARGEST VAL = ",large, "INDEX") 

