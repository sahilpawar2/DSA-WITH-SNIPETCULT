// // insertion element in the array at the given index
// function insertion(arr, element, position){
//   let i = arr.length - 1;
//   while(i >= 0){
//     if(i >= position){
//       arr[i+1] = arr[i]
//       if (i == position) {
//         arr[i] = element;
//       }
//     }
//    i--;
//   }
//   return arr;
// }

console.log(insertion([1, 2, 3, 4, 5, 6], 3, 33))
 
function insertion(arr, position, value) {
  let n = arr.length-1;
  for(let i = n; i>0; i--){
    if(i >= position){
      arr[i+1] =arr[i];
      if (i ==position) {
        arr[i] = value
      }
    }
  }
  return arr
}
