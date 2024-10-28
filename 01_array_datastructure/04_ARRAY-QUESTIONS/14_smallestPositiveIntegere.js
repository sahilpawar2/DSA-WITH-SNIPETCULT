function sortArray(arr) {
    // Sort the array in ascending order using a compare function
    arr.sort((a, b) => a - b);
    return arr;
}

console.log(sortArray([1,2,0]))