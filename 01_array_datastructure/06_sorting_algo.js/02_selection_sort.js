function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let smallIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[smallIdx]) {
        smallIdx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[smallIdx];
    arr[smallIdx] = temp;
  }
  return arr;
}
console.log(selectionSort([4, 1, 5, 2, 3]));

// s  j
//[4, 1, 5, 2, 3] arr[i] < arr[s]  arr[s] = 1  s = 1
// [1, 4, 5, 2, 3]
