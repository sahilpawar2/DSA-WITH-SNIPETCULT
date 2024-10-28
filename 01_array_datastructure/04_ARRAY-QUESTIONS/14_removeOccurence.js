function removeOccurence(nums, val) {
    let start = 0
    let end = nums.length-1
    while (start  <= end){
        if(nums[start] === val){
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            end--  
        }else{
            start ++
        }
    }
    nums.length = end +1
    return nums
    // return end + 1
    
};

console.log(removeOccurence([3,2,3,5, 6, 2,3],3))