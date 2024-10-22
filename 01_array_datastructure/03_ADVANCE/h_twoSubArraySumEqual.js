// function twoSubArrSum (arr) {
//     let n = arr.length;
//     let result= null;
//     for (let i = 0; i < n-1; i++) {
//       let sum1 = 0;
//       let sum2 = 0;
//       for (let j = 0; j <=i ; j++) {
//         sum1 += arr[j]
//       }
//       for (let j = i+1; j < n; j++) {
//         sum2 += arr[j]
//       }
//       if (sum1 === sum2) {
//         result = `Yess ${sum1} === ${sum2}`
//         break;
//       }
//     }
//     return result
//   }
  
//   console.log(twoSubArrSum([3, 4, -2, 5, 8, 20, -10, 8]))


function  twoSubArrSum (arr) {
    let n = arr.length;
    let  result= null;
    let totalsum =0
    for (let i = 0; i < n; i++) {
        totalsum += arr[i]     
    }
    let prefix = 0;
    for (let i = 0; i < n; i++) {
       prefix += arr[i]
       let ans = 0;
       ans = totalsum - prefix
       if (prefix === ans) {
        result = `Yess ${prefix} === ${ans}`
       }
       
    }
    return result

}

console.log(twoSubArrSum([3, 4, -2, 5, 8, 20, -10, 8]))
