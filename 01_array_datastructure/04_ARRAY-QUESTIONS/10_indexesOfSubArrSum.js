///best apporach two pointer logic    target = 12
// lp
//[1, 2, 3, 7, 5]  //{curr =+ rp} rp++ // curr = 1 
// rp
// lp
//[1, 2, 3, 7, 5]  //{curr =+ rp} rp++ // curr = 3
//    rp
// lp
//[1, 2, 3, 7, 5]  //{curr =+ rp} rp++ // curr = 6
//       rp
// lp
//[1, 2, 3, 7, 5]  //{curr =+ rp} rp++ // curr = 13      if curr > target && lp <= rp   use while loop
//          rp
// lp
//[1, 2, 3, 7, 5]  //{curr =+ rp} rp++ // curr = 13     curr - lp  curr= 13 - 1  = 12  lp ++
//          rp
//    lp
//[1, 2, 3, 7, 5]  //{curr =+ rp} rp++ // curr = 13     curr - lp  curr= 13 - 1  = 12
//          rp

function subArrSum(arr, target){
    let left = 0
    let currr = 0
    let index = -1
    for(let right = 0; right < arr.length; right++){
        currr += arr[right]
        while(currr > target && left <= right){
            currr -= arr[left]
            left++ 
        }
        if (currr === target) {
            return [left+1, right+1]
        }
    }
    return index
}

console.log(subArrSum([26, 3, 28, 7], 52)) //[1, 2, 3, 7, 5]













// function subArrSum(arr, target){
//     let n = arr.length
//     // let res = []
//     let index = null
//     for (let i = 0; i < n; i++){
//         let res = 0
//         for (let j = i; j < n; j++) {
//             // res.push(arr[j])
//             res += arr[j]
//             if(res === target){
//                 index = [i+1, j+1]
//                 return index
//             }
//             // console.log(res)  
//         }
           
//     }
//    return index
// }
// console.log(subArrSum([1,2,3,7,5], 12));


// function subArrSum(arr, target){
//     let n = arr.length
//     // let res = []
//     let index = null
//     for (let i = 0; i < n; i++){
//         let res = 0
//         for (let j = i; j < n; j++) {
//             // res.push(arr[j])
//             res += arr[j]
//             if(res === target){
//                 index = [i+1, j+1]
//                 return index
//             }
//             console.log(res)  
//         }
           
//     }
// //    return index
// }
// console.log(subArrSum([1,2,3,7,5], 12));
