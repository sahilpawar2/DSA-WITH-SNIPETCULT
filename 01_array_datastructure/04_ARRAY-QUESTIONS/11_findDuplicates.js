// function findDuplicate(nums) {
//     let res ;
//     let i = 0;
//     while(i < nums.length){
//         for (let j = i +1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 res = nums[i]
//             }
//         }
//         i++
//     }
//     return res
// };

// console.log(findDuplicate([8, 9, 10, 9 , 3, 1, 2]))



function findDulpicate2 (nums){
    let res ;
    let slow = 0
    let fast = 0
    while (slow !== fast && fast !== nums.length - 1) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }
    return res
}
console.log(findDulpicate2([8, 9, 10, 9 , 3, 1, 2]))