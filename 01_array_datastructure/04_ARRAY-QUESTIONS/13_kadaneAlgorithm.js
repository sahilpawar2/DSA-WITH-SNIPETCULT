// best case approach of time complexity O(n)
// test cases
// [1]
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// [5, 4, -1, -9, 10]
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
console.log(largestSumSubArr([5, 4, -1, -9, 10]));
// logic :->
//  0  1   2  3  4
// [5, 4, -1, -9, 10] loop start i = 0 ; i < 5 ie 4th is last index
//  0  1   2  3  4
// i = 0
// [5, 4, -1, -9, 10]  res = 0
//  i                res += arr[0]  res = 5
// i = 1
// [5, 4, -1, -9, 10]  res = 5
//     i             res += arr[1]  res = 9
// i = 2
// [5, 4, -1, -9, 10]  res = 9
//         i          res += arr[2]  res = 8
// i = 3
// [5, 4, -1, -9, 10]  res = 8
//             i      res += arr[3]  res = -1  if(res < 0) {res = 0} i.e res =0
// i = 4
// [5, 4, -1, -9, 10]  res = 0
//                i   res += arr[4]  res = 10
// imagine res in array = [5, 9, 8, 0, 10]  if (arr[i] > max){ max = arr[i]}
// ans = 10
//------------------------------------------------------------------------------------------------>


// brute force apprach of time complexity O(n^2)
function largestSumSubArr2 (arr){
    let n = arr.length
    let max = arr[0]
    for (let i = 0; i < n; i++) {
        let res = 0
        // if (n < 2) {
        //     return arr[i]
        // }
        for (let j = 0; j < n; j++) {
            res += arr[j]
            if (res > max) {
                max = res
            }
        }
    }
    return max
}
console.log(largestSumSubArr2([-5]))