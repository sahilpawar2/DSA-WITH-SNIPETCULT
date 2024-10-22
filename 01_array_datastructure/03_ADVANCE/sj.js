// let n = 5
// let string= ""
// for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= i; j++) {
//         string += `@`
//     }
//     string +="\n"
// }
// console.log(string)

// // let n = 5; // Number of rows and columns
// // let string = "";

// // for (let i = 0; i < n; i++) {
// //   for (let j = 0; j < n; j++) {
// //     string += "*";
// //   }
// //   string += "\n";
// // }
// // console.log(string);


// // let length = 5;
// // for (let i = 1; i <= length ; i++) {
// //     let n= " "
// //     for (let j = 1; j <= length; j++) {
// //         n += (i * j) + "\t"
// //     }
// //     console.log(n)
// // }

// // var maxSlidingWindow = function(nums, k) {
// //     let n = nums.length
// //     let s = []
// //     let current = -Infinity
// //     for(let i = 0; i< k ; i++){
// //        if(nums[i] > current){
// //         current = nums[i]
// //        }
// //     }
// //     s.push(current)
    
// //        for (let i = 1; i <=  k ; i++) {
// //         if(nums[i] > current){
// //             current = nums[i]
// //            }
          
// //        }
// //        s.push(current)
    

    
// //     return s
// // };
// // console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))

// function maxSlidingWindow(nums, k) {
//     const deque = [];  // Store indices of useful elements
//     const result = []; // Store the max values for each window

//     for (let i = 0; i < nums.length; i++) {
//         // 1. Remove elements out of this window
//         if (deque.length && deque[0] === i - k) {
//             deque.shift();
//             console.log(deque)
//         }
        

//         // 2. Remove elements smaller than the current element from the back
//         while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
//             deque.pop();
//         }

//         // 3. Add the current element at the back of the deque
//         deque.push(i);

//         // 4. Store the maximum element of the current window
//         if (i >= k - 1) {
//             result.push(nums[deque[0]]);
//         }
//     }

//     return result;
// }

// // Test the function
// const nums = [1, 3, -1, -3, 5, 3, 6, 7];
// const k = 3;
// console.log(maxSlidingWindow(nums, k));  // Output: [3, 3, 5, 5, 6, 7]


function maxSumSubarray(nums, k) {
    let maxSum = 0, windowSum = 0;

    // Calculate sum of first 'k' elements
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    maxSum = windowSum;

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k]; // Add new element, remove old one
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Test
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9
