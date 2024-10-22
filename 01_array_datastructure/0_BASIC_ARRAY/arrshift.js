function leftShift(arr){
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        arr[i] = arr[i+1]
    }
    arr[n-1] = 0
    return arr
}
console.log(leftShift([1, 2, 3, 4, 5]))

function rightShift(arr){
    let n = arr.length;
    for (let i = n-1; i > 0; i--){
        arr[i] = arr[i-1]     
    }
    arr[0] = 0
    return arr
}
console.log(rightShift([1, 2, 3, 4, 5]))