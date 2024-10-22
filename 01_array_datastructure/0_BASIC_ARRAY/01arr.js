// function largestEl(arr){
//     let largest = arr[0]
//     let i = 0
//     let second ;
//     while (i < arr.length){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
        

//         i++
//     }
//     return largest
// }

// console.log(largestEl([8, 6, 6,  9]))


function secondLargest(arr){
    let i = 0
    let second = -Infinity;
    let largest = -Infinity;
    if (arr.length < 2) {
        console.log(`${arr} should be atleast 2 element`)
    }
    while(i < arr.length){
        if(arr[i] > largest){
            second = largest;
            largest = arr[i]
        }else if(arr[i] > second && arr[i] < largest){
            second = arr[i]
        }
        i++
    }
    return second
}
let arr = [9, 4, 3, 5, 6, 2, 10]
console.log(secondLargest(arr))