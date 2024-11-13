function quickSort(arr, start, end){
    if(start >= end) return;
    let pivot = partition(arr, start, end)
    //left
    quickSort(arr, start, pivot-1);
    //right
    quickSort(arr, pivot+1, end);
}
function partition(arr, start, end){
    let slow = start
    for(let i = start; i< end; i++){
        if(arr[i] < arr[end]){
            [arr[i], arr[slow]] = [arr[slow], arr[i]]
            slow++
        }
    }
    [arr[slow], arr[end]] = [arr[end], arr[slow]]
    return slow
}
let arr2 = [5, 2, 9, 1, 7, 6]
console.log(quickSort(arr2, 0, arr2.length - 1))
console.log(arr2);


//          i   e        i<e !
//[1, 4, 3, 5, 2]
//       s