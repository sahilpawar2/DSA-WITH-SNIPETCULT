//Question :-> 
/**Given an array arr of non-negative numbers. The task is to find the first equilibrium point 
 * in an array.The equilibrium point in an array is an index (or position) such that the sum 
 * of all elements before that index is the same as the sum of elements after it.

Note: Return equilibrium point in 1-based indexing. Return -1 if no such point exists.  */

// test cases :->
/**
 * Input: arr[] = [1, 3, 5, 2, 2]
   Output: 3 
   Explanation: The equilibrium point is at position 3 as the sum of elements before it 
   (1+3) = sum of elements after it (2+2). 
 */

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