// function allSubArray(arr) {
//   let n = arr.length
//   for (let i = 0; i < n; i++) {
//    let subArr = []
//    for (let j = i; j < n; j++) {
//       subArr.push(arr[j])
//       console.log(subArr)
//    }
//   //  console.log(subArr)
//   }
// }

// console.log(allSubArray([1, 2, 3, 4, 5]))

// function largestSumSubArr(arr){
//     let n = arr.length;
//     let max = -Infinity;
//     let res = []
//     for(let i= 0; i< n; i++){
//         let prefix = 0;
//         for (let j = i; j < n; j++) {
//             // res.push(arr[j])
//             // console.log(res)
//             prefix += arr[j]
//             if (prefix > max) {
//                 max = prefix
//                 res = [arr[i], arr[j]]
//             }
//         }
//     }
//     console.log(res)
//     return max
// }
// console.log(largestSumSubArr([3, 4, -5, 8, -12, 7, 6, -2]))

//[4, -6, 2, 8]


//kadane's algorithm


function  largestSumSubArr2(arr){
    let n = arr.length 
    let large = 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if(n < 2){
            return arr[i]
        }
        sum += arr[i]
        if(sum < 0){
            sum = 0
        }
        if(sum > large){
            large = sum
        }
        // console.log(sum)
    }
    
    return large
}
 console.log(largestSumSubArr2([-1]))  //[3, 4, -5, 8, -12, 7, 6, -2]