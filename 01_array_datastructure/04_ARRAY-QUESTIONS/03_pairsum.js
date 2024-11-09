function pairSum(nums, target){
    let n = nums.length
    let arr = []
    for(let i = 0; i < n; i++){
        let j = i + 1
        while(j < n){
            if(nums[i] + nums[j] === target){
                return [i, j]
            } 
            j++
        }
    }
    return 
}
console.log(pairSum([11, 15, 2, 7,], 9))
// output = indexes of the pair sum [2, 3]
// time complexity of this algorithm is O(n^2)














// var twoSum = function(nums, target) {
//     let n = nums.length
//     for(let i = 0; i < n-1; i++){
//         let j = i +1
//         while(j< n){
//             let res = nums[i] + nums[j]
//             if (res === target){
//                 return [i, j]
//             } j++
//         }  
//     }
//     return
// };

// console.log(twoSum([1, 2,  3, 4, 5], 7))