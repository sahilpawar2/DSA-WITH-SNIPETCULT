function arrWave (arr){
    let n = arr.length
    let i = 0 
    while (i < n){
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        i+=2 
    }
    return arr

}

console.log(arrWave([2, 4, 7, 8, 9, 10])) //[2, 4, 7, 8, 9, 10]
// output = [4, 2, 8, 7, 10, 9]