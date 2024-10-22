//Best Approach ; time complexity = O(n)
function removeDuplicates(nums){
    if(nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j]
        }
    }
    nums.length = i+ 1
    return nums.length
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
//explaination of the above approch
// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//  i  j  nums[j] !== nums[i] false so j++
// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//  i     j   nums[j] !== nums[i] true so i++ i=1
// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//     i  j   nums[i] = nums[j]  0, 1 j++ j= 2
// [0, 1, 1, 1, 1, 2, 2, 3, 3, 4] updated array
//     i  j  nums[j] !== nums[i] false so j++ j = 3, j= 4, j++
// [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
//     i           j  nums[j] !== nums[i] true so i++ i=2
// [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
//        i        j  nums[i] = nums[j]  0, 1, 2 j++ j= 6
//------------------------------------------------------------------>

//Worst approach; time complexity = O(n^2)
// function removeDuplicates(nums){
//     let i = 0
//     while(i< nums.length){
//         let j = i +1
//         while (j < nums.length) {
//             if (nums[i] === nums[j]) {
//                 nums.splice(j, 1)
//             }else{
//                 j++
//             }
//         }
//         i++
//     }
//     return nums.length
// }
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
// fruits.splice(1, 1); // Removes 2 elements starting from index 1
// console.log(fruits); // Output: ['Ap

//Explaination of the above algorithm
//  0  1  2  3  4  5  6  7  8  9   => indexes
// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//  i  j  (nums[j]  === nums[i] = true) nums.splice(j, 1)   => positions
// [0, 1, 1, 1, 2, 2, 3, 3, 4] => updated array

//  0  1  2  3  4  5  6  7  8   => indexes
// [0, 1, 1, 1, 2, 2, 3, 3, 4] updated nums array   i++ 
//  i     j = 1 + 1 =2  (nums[j]  === nums[i] = false) j++ j= 3
// [0, 1, 1, 1, 2, 2, 3, 3, 4] => updated array
//  i        j = 1 + 1 =2  (nums[j]  === nums[i] = false) j++ j= 3
// not find equaL 

// i = 1

//  0  1  2  3  4  5  6  7  8   => indexes
// [0, 1, 1, 1, 2, 2, 3, 3, 4] updated nums array   i++  i = 2;
//     i  j = 1 + 1 =3  (nums[j]  === nums[i] = true) nums.splice(j, 1)
//  0  1  2  3  4  5  6  7  8   => indexes
// [0, 1, 1, 2, 2, 3, 3, 4] updated nums array
//     i  j = 1 + 1 = 2  (nums[j]  === nums[i] = true) nums.splice(j, 1)
//[0, 1, 2, 2, 3, 3, 4]
// j till  7 index; false

// i++ i = 2
//  0  1  2  3  4  5  6  7  8   => indexes
// [0, 1, 2, 2, 3, 3, 4] updated nums array   i++  i = 2;
//        i  j = i + 1 =3  (nums[j]  === nums[i] = true) nums.splice(j, 1)   => positions
//  0  1  2  3  4  5  6  7  8   => indexes
// [0, 1, 2, 3, 3, 4] updated nums array
