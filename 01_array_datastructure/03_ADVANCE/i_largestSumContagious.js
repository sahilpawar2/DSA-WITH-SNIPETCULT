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

function largestSumSubArr(arr){
    let n = arr.length;
    let max = -Infinity;
    for(let i= 0; i< n; i++){
        let prefix = 0;
        for (let j = i; j < n; j++) {
            prefix += arr[j]
            if (prefix > max) {
                max = prefix
            }
        }
    }
    return max
}

console.log(largestSumSubArr([4, -6, 2, 8]))

//[4, -6, 2, 8]