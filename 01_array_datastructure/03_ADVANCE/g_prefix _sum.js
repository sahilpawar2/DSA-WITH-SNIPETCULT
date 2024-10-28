function prefixSumArray(arr) {
    let prefix = new Array(arr.length);
    prefix[0] = arr[0];
    // console.log(prefix[0])
  
    for (let i = 1; i < arr.length; i++) {
      prefix[i] = prefix[i - 1] + arr[i];
    //   console.log(prefix[i])
    }
  
    return prefix;
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const prefix = prefixSumArray(arr1);
  console.log(prefix); 
  
// function suffixSumArray(arr){
//     let n = arr.length
//     let suffix = new Array(n)
//     suffix[n-1] = arr[n-1];
//     // console.log(suffix)
//     for (let i = n-2; i >=  0; i--) {
//         suffix[i] = suffix[i+1] + arr[i]
        
//     }
//     return suffix
// }
//   const arr3 = [1, 2, 3, 4, 5, 6, 7];
//   const suffix = suffixSumArray(arr);
//   console.log(suffix); // [2, 6, 12, 20, 30]


// function subarray(arr) {
//     let n =arr.length;
//     for (let i = 1; i <= n; i++) {
//         for (let j = i; j <=n; j++) {
//             console.log(j)
            
//         }
//     }
// }

// console.log(subarray([1, 2, 3, 4, 5]))

// function subArray(arr){
//     let n = arr.length;
//     for(let i = 0; i< n; i++){
//         let subArr = []
//         for (let j = i; j <n ; j++) {
//             subArr.push(arr[j])
//             console.log(subArr)
//         }
//     }
// }

// // Example usage:
// const arr = [1, 2, 3, 4];
// const subarrays = subArray(arr);
// console.log(subarrays);


// function subArray(arr) {
//   let n = arr.length;
//   for(let i = 0; i < n; i++){
//     let subArr = []
//     for(let j = i; j< n; j++){
//       subArr.push(arr[j])
//       console.log(subArr)
//     }
    
//   }
// }
// const arr = [1, 2, 3, 4];
// const subarrays = subArray(arr);
// console.log(subarrays);


// function prefixSum(arr){
//   let n = arr.length;
//   let prefix =[]
//   prefix[0] = arr[0]
//   console.log(prefix);
//   for (let i = 1; i < n; i++) {
//     prefix[i] = prefix[i-1] + arr[i]
//   }
//   return prefix
  
// }

// console.log(prefixSum([1, 2, 3, 4, 5]))

// function suffixSum(arr){
//   let n = arr.length;
//   let suffix = []
//   suffix[n-1] = arr[n-1]
//   console.log(suffix)
//   for(let i = n-2 ; i >= 0; i--){
//     suffix[i] = suffix[i+1] + arr[i]
//   }
//   return suffix
// }
// console.log(suffixSum([1, 2, 3, 4, 5]))





