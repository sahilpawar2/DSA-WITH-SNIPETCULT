function removeOccurence(nums, val) {
    let start = 0
    let end = nums.length-1;
    while(start <= end){
        let temp ;
        if(nums[start] === val){
            temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            end--
        }else{
            start++
        }
    }
    nums.length = end + 1
    return nums
    
};

console.log(removeOccurence([3,2,3,5, 6, 2,3],3))