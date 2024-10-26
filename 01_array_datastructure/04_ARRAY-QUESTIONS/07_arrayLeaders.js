
function arrayLeaders(arr){
    let len = arr.length
    let max = -1

    for( let i =  len-1 ; i >= 0 ; i-- ){
        let curr = arr[i]
        arr[i] = max
        if( curr>max ){
            max = curr
        }
    }
    return arr
}

console.log(arrayLeaders([400])) //[17,18,5,4,6,1]