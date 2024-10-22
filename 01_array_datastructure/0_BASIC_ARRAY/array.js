// easy way to insert an element in an array
let arr = [1,2, 4, 5, 6, 7, 8]
let insert = 2  // at index 2
arr[0] = insert;
console.log(arr)   


/// using push to insert an element in the last of an array
let arr2 = [1, 2, 3, 4, 5, 6]
arr2.push(96)
console.log(arr2)

// using unshit to insert element in the first of an array
let arr3 = [1, 2, 4, 5, 76, 8, 9, 10]
arr3.unshift(17)
console.log(arr3)



function reverseArr(arr){
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
    return arr
}console.log(reverseArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// function sumProduct(arr) {
//     let sum = 0;
//     let product = 1;
//     let i = 0
//     while (i < arr.length) {
//         sum += arr[i];
//         product *= arr[i];
//         i++
//     }
//     return{
//         sum, product
//     }
// }
// console.log(sumProduct([1, 2, 3, 4, 5]))

// function swapMinMax(arr){
//     let min = Infinity
//     let max = -Infinity
//     let minIdx = 0
//     let maxIdx = 0
//     let i = 0
//     while (i < arr.length) {
//         if (arr[i] < min) {
//             min =arr[i]
//             minIdx = i
//         }if (arr[i] > max) {
//             max = arr[i]
//             maxIdx = i
//         }
//       i++
//     }
//     [arr[minIdx], arr[maxIdx]] = [arr[maxIdx], arr[minIdx]]
//     return arr
// }

// console.log(swapMinMax([1, 2, 53,786 ,1000]))


// function minArr (arr) {
//     let min = Infinity
//     arr.forEach(element => {
//         if (element < min) {
//             min = element
//         }
//     });
//     return min
// }

// console.log(minArr([344, 45, 4, 678, 56, 34, 19, ,1,10005]))

// class MyArray {
//     constructor() {
//       this.length = 0;
//       this.data = {};
//     }
  
//     push(element) {
//       this.data[this.length] = element;
//       this.length++;
//     }
  
//     get(index) {
//       return this.data[index];
//     }
  
//     set(index, element) {
//       this.data[index] = element;
//     }
  
//     pop() {
//       const lastElement = this.data[this.length - 1];
//       delete this.data[this.length - 1];
//       this.length--;
//       return lastElement;
//     }
  
//     // Add more methods as needed (e.g., shift, unshift, splice, etc.)
//   }

//   const arr = new MyArray()
//   arr.push(1)
//   arr.push(2)
//   arr.push(3)

//   console.log(arr)
//   console.log(arr.get(2));




// function reverseStr(str){
//     let newArr =  new Array(str)
//     console.log(newArr)
// //     let start = 0
// //     let end = str.length - 1
// //     while(start < end){
// //         char[start]
// //   }
// }

// console.log(reverseStr('sahil pawar'))