// function maxSubArray(arr, w){
//     let n = arr.length;
//     let max = -Infinity;
//     let maximum ;
//     for (let i = 0; i <= n-w; i++) {
//         let current =  0;
//         for (let j = i; j <= i+ w-1; j++) {
//                 current += arr[j]
//         }
//         maximum = arrCompare(current, max)
//     }
//     return maximum;
// }

// function arrCompare(current, max){
//     if (current > max) {
//         max = current 
//     }
//     return max
// }
// console.log(maxSubArray([1, 2, 3, 4, 5, 6, 7], 4))

function sliding(arr, w){
    let n = arr.length;
    let max;
    let current = 0;
    for(let i = 0; i<= w-1; i++){
        current += arr[i]
    }
    let maxx = current;
    for(let i =1; i<= n-w; i++){
        current = current - arr[i-1] + arr[i + w-1];
        console.log(current)
    }
    
    if(current > maxx){
        maxx = current;
    }
    return maxx
}
console.log(sliding([1, 2, 3, 4, 5, 6, 7], 4))


let arr = [1, 2, 3, 4, 5]
arr.shift()
console.log(arr)
