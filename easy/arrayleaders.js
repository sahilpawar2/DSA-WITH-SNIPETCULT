

// function arrayLeaders(arr){
//     let len = arr.length
//     let max = -1

//     for( let i =  len-1 ; i >= 0 ; i-- ){
//         let curr = arr[i]
//         arr[i] = max
//         if( curr>max ){
//             max = curr
//         }
//     }
//     return arr
// }

// console.log(arrayLeaders([400])) //[17,18,5,4,6,1]


// function arrWave (arr){
//     let n = arr.length
//     let i = 0
//     while (i < n-1){  
//         let temp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = temp;
//         i+=2
//     }
//     return arr
// }

// console.log(arrWave([1])) //[2, 4, 7, 8, 9, 10]




function equilibruimPoint(arr){
    
    let n = arr.length 
    let totalSumarr = 0
    let index ;
    if(n <= 2){
        return 1
    }
    for (let i = 0; i <n; i++) {
        totalSumarr += arr[i] 
    }
    let preceesdsum =0
    for (let i = 0; i < n; i++) {
        
        preceesdsum += arr[i]  
        let preceedsumval = preceesdsum - arr[i]
        let exeecedsumval = totalSumarr - preceesdsum
        if (preceedsumval === exeecedsumval) {
            index = i
            break;
        }

    }
    return index
    
}

console.log(equilibruimPoint([1, 3, 5, 2, 2]))
//[1, 3, 5, 2, 2]