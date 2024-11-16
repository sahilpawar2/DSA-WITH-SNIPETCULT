// function rob(nums) {
//     let n = Math.ceil(nums.length/2)
//     let sum = 0
//     for (let i = 0; i < n; i++) {
//         sum += nums[i] + nums[i+2]
//         console.log(sum);
        
        
//     }
    
// };
// console.log(rob([2,7,9,3,1]))

//linear search



// function threeSum(nums) {
//     let i = 0
//     let j = i+1
//     let k = nums.length-1
//     let result = []
//     while(i < k){
//         let sum = 0
//         sum = nums[i] + nums[j] + nums[k]
//         if(sum === 0){
//             let res = [nums[i], nums[j], nums[k]]
//             result.push(res)
//             return result;
//         }else if(sum > 0){
//             --k
//         } else if(sum < 0){
//             ++j
//         }else{
//             ++i
//         }
//     }
//     return
// };
// console.log(threeSum([-1,0,1,2,-1,-4]))

let sahil = [-1,0,1,2,-1,-4]
sahil.sort((a, b)=>   a -b)
console.log(sahil);
