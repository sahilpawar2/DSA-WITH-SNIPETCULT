//optimize apprach
// function reverseArrLeft(arr, start, end){
//     while(start < end){
//         let  temp = arr[start];
//         arr[start] = arr[end]
//         arr[end] = temp
//         start++;
//         end--;
//     }
//     return arr;
// }
// function rotateArrayLeft (arr, k){
//     let start = 0
//     let  end = arr.length - 1
//     k = k%end
//     reverseArrLeft(arr,start, end-k)
//     reverseArrLeft(arr, k-1,  end)
//     reverseArrLeft(arr, start, end)
//     return arr

// }

// console.log(rotateArrayLeft([1, 2, 3, 4, 5, 6, 7], 4))
// console.log(reverseArr([1, 2, 3, 4, 5], 0, 1))

// function rotateArrayLeft(arr, k){
//     let n = arr.length 
//     k = k%n
//     let extractedArr = new Array(k)
//     for (let i = n-k; i < n; i++) {
//         extractedArr[i-(n-k)] = arr[i]
//     }
//     for (let i = n-1; i >= k; i--) {
//           arr[i] = arr[i-k]
//     } 
//     for (let i = 0; i < k; i++) {
//         arr[i] = extractedArr[i]
//     }
//     return arr;
// }
// console.log(rotateArrayLeft([1, 2, 3, 4, 5, 6, 7], 4))

