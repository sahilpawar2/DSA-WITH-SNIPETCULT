// function twoSum(arr, target){
//     let left = 0;
//     let right = arr.length -1
//     let current = 0;
//     while(left < right){
//         current = arr[left] + arr[right]
//         if(current == target){
//             return[arr[left], arr[right]]
//         } else if(current < target){
//             left++;
//         }else{
//             right--
//         }
//     }
// }

// console.log(twoSum([1, 2, 3, 4, 5, 6 , 10, 12], 17))


function reverseArr(arr){
    let start = 0;
    let end = arr.length -1
    for (let i = start; i < end;) {
        let temp = arr[i]
        arr[i] = arr[end]
        arr[end] = temp
        i++;
        end--;
    }
    return arr
}
console.log(reverseArr([1, 2, 3, 4, 5, 6, 7]))

// function threeSumClosest(nums, target) {
//     // Step 1: Sort the array to use two-pointer technique
//     nums.sort((a, b) => a - b);
//     console.log(nums)
//     let closestSum = Infinity;

//     // Step 2: Traverse the array with one pointer (i)
//     for (let i = 0; i < nums.length - 2; i++) {
//         let left = i + 1; // Second pointer (left)
//         let right = nums.length - 1; // Third pointer (right)

//         // Step 3: Use two-pointer approach within the loop
//         while (left < right) {
//             const sum = nums[i] + nums[left] + nums[right];

//             // If the sum is exactly equal to target, return it
//             if (sum === target) return sum;

//             // Update the closest sum if this sum is nearer to target
//             if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
//                 closestSum = sum;
//             }

//             // Move pointers based on the sum value
//             if (sum < target) {
//                 left++; // Increase the sum by moving left pointer right
//             } else {
//                 right--; // Decrease the sum by moving right pointer left
//             }
//         }
//     }

//     return closestSum;
// }

// // Example usage:
// console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output: 2
// // console.log(threeSumClosest([0, 0, 0], 1));      // Output: 0
