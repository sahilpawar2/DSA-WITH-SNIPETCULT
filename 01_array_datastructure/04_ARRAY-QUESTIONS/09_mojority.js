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