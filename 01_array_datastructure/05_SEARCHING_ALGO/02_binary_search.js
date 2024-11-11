function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let position = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      position = mid;
      break;
    } else if(arr[mid] < target){
        start = mid + 1
    } else {
        end = mid - 1
    }
  }
  return position;
}
let my = [12, 22, 44, 51, 52, 80, 100, 103, 560];
let see = 12;
console.log(binarySearch(my, see));
