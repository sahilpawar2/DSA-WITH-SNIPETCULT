// function reverseArray(arr, k){
//     for (let i = 0; i < arr.length; i += k) {
//         let start = i
//         let end = i + k-1 
//         let temp;
//         while (start < end) {
//             temp = arr[start];
//             arr[start] = arr[end]
//             arr[end] = temp
//             start++
//             end--
//         }
        
//     }
//     return arr
// }

// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9] , 3))


// function pairSum(arr, target){
//     let n = arr.length
//     let res;
//     for (let i = 0; i < n; i++) {
//         for (let j = i+1; j < n; j++) {
//             if(arr[i]+ arr[j] == target){
//                 res =[i, j]
//             }
//         }
        
//     }
//     return res
// }
// console.log(pairSum([11, 15, 2, 7,], 9))

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