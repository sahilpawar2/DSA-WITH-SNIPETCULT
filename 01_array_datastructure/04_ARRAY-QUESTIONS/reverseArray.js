// function reverseSubArr(nums, k){
//     let n = nums.length 
//     for (let i = 0; i < n-1; i += k) {
//         let start = i;
//         let end = k + i -1
//         let temp;
//         while(start< end){
//             temp = nums[start]
//             nums[start] = nums[end]
//             nums[end] = temp
//             start++
//             end--
//         }
        
//     }
//     return nums
// }

// console.log(reverseSubArr([1, 2, 3, 4, 5, 6, 7, 8, 9] , 3))


function pairSum(nums, target){
    let n = nums.length
    for (let i = 0; i < n-1; i++) {;
        let j = i+1;
        while(j< n){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
            j++
        }
    }
    return
}
console.log(pairSum([11, 15, 2, 7,], 9))

let majorityElement = function(nums) {
    let mojority = 0
    for(let i = 0; i< nums.length; i++){
        let j = i + 1
        while(j < nums.length){
            let k
            if(nums[i] == nums[j]){
                  k += j
                if(k> mojority){
                    mojority = k
                }
            }
            j++
        }
    }
    return mojority
};

console.log(majorityElement([3]))

var twoSum = function(nums, target) {
    let i =0
    let expected = 0
    while (i < nums.length- 1){
        for (let j = i +1; j < nums.length ; j++){
            if (nums[i] + nums[j] == target){
                return [i, j]
            }
        }
        i++
    }
    return 
};