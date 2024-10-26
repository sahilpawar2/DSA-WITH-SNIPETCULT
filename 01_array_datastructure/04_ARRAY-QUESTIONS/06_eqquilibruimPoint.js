function equilibruimPoint(arr){
    let n = arr.length
    let totalSum = 0
    let index = -1
    if (n < 2) {
        return 0
    }
    for (let i = 0; i < n; i++) {
        totalSum += arr[i]
    }
    // console.log(totalSum)
    let i = 0
    let preceededSum = 0
    while (i< n) {
      let rightValSum ;
      let leftValSum;
      preceededSum += arr[i]
      rightValSum = preceededSum - arr[i]
      leftValSum = totalSum - preceededSum
      if(rightValSum === leftValSum){
        index = i
        break;
      }
      i++
    }
    return index
}

console.log(equilibruimPoint([2,1,-1, 3, 4, 5]))
// //[1, 3, 5, 2, 2]