function largestSumSubArr (arr){
    let n = arr.length
    let res = 0
    let max = arr[0]
    for (let i = 0; i < n; i++) {
        res+= arr[i]
        if (res > max) {
            max = res
        }
        if(res < 0){
            res = 0
        }
    }
    return res
}
console.log(largestSumSubArr([5,4,-1,7,8]));

// test cases
// [1]
// [-2,1,-3,4,-1,2,1,-5,4]
// [5,4,-1,7,8]
