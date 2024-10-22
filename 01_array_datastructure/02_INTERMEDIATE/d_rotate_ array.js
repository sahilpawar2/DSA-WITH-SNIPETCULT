// function rotateRight(arr, k){
//     let n = arr.length;
//     k %= n
//     let temp = new Array(k);
//     for (let i = n-k; i < n; i++) {
//         temp[i-(n-k)] = arr[i]
//         // console.log(temp)
//     }
//     for (let i = n-1; i >= k; i--) {
//         arr[i] = arr[i - k]
//         // console.log(arr)
//     }
//     for (let i = 0; i < k; i++) {
//         arr[i] = temp[i]   
//         // console.log(arr)
//     }
//     return arr
// }
// let arr = rotateRight([1,2,3,4,5,6,7], 3)
// console.log(arr)

// function reverse(arr, start, end){
//     while(start < end){
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
//     return arr
// }
// function rotate(arr, k){
//     let start = 0;
//     let end = arr.length 
//     k = k%end
//     reverse(arr, start, end-k-1)
//     reverse(arr, end-k, end-1)
//     reverse(arr, start, end-1)
//     return arr
// }
// console.log(rotate([1,2,3,4,5,6,7], 3))

// function rotateleft(arr, k){
//     let n = arr.length;
//     k %= n;
//     let temp = new Array(k);
//     for (let i = 0; i < k; i++) {
//        temp[i] = arr[i]
//        console.log(temp)
//     }
//     for (let i = 0 ; i < n ; i++) {
//         arr[i] = arr[i + k] 
//         console.log(arr)
//     }
//     for (let i = n-k; i < n; i++) {
//         arr[i] = temp[i -(n-k)]
//         console.log(arr)
//     }
//     return arr
// }
// let arr3 = rotateleft([1,2,3,4,5,6,7], 3)
// console.log(arr3)
// function reverse(arr, start, end){
//     while(start < end){
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
//     return arr
// }
// function rotateleft(arr, k){
//     let start = 0;
//     let end = arr.length 
//     k = k%end
//     reverse(arr, start, k-1)
//     reverse(arr, k, end-1)
//     reverse(arr, start, end-1) 
//     return arr
// }
// console.log(rotateleft([1,2,3,4,5,6,7], 3))


// function rotateRight(arr, k) {
//     let n = arr.length;
//     let temp = new Array(k)
//     for(let i = n-k; i < n; i++){
//         temp[i -(n-k)] = arr[i]
//         console.log(temp)
//     }
//     for (let i = n-1; i >= k; i--) {
//         arr[i] = arr[i - k]
//     }
//     for (let i = 0; i < k; i++) {
//         arr[i] = temp[i]
//     }
//     return arr
// }
// console.log(rotateRight([1,2,3,4,5,6,7], 3))

function reverse(arr, start, end){
    while(start < end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++;
        end--;
    }
    return arr;
}

function rotateRight(arr, k){
    start = 0;
    end = arr.length 
    k = k%end
    reverse(arr, start, end-k-1);
    reverse(arr, end-k, end-1)
    reverse(arr, start, end-1)
    return arr
}


let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(rotateRight(arr, 3))