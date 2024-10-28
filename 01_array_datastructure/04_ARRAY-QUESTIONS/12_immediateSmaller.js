function immediateSmaller(arr, n){
    for (let i = 0; i < n; i++) {
        if(arr[i] > arr[i+1]){
            arr[i] = arr[i+1]
        }else{
            arr[i] = -1
        }
    }
    arr[n-1] = -1
    return arr
}



// function immediateSmaller(arr,n){
//     //code here
//     let i = 0
//     while (i < n){
//         if(arr[i] > arr[i+1]){
//             arr[i] = arr[i+1]
//         }
//         else{
//             arr[i] = -1
//         }
//         i++
//     }
//     arr[n-1]= -1
//     return arr
//  }

 console.log(immediateSmaller([4, 2, 1, 5, 3], 5))

// let arr = [4, 2, 1, 5, 3]
// arr[0] = arr[0+1]
// console.log(arr)