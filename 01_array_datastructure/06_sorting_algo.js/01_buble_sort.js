function bubbleSort(arr){
    let n = arr.length
    for (let i = 0; i < n; i++) {
        let swaped = false
        for (let j = 0; j < n-i; j++) {
            if(arr[j] > arr[j+1]){
                let swaper = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = swaper
                swaped= true
            }
        } 
        if (!swaped) {
            break
        }
    }
    return arr
}

console.log(bubbleSort([2, 3, 44, 6, 78, 9]));
