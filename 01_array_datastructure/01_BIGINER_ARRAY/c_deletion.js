// function deletion (arr, position) {
//   let size = arr.length 
  
//   while(position < size){
//     arr[position] = arr[position + 1]
//     position++;
//   }
//   size = arr.length-1
//   arr.pop(size)
//   console.log(arr)
  
// }
// console.log(deletion([12, 45, 6, 7, 78, 89], 4))

// function deletion(arr, position){
//   let n = arr.length 
//   for(let i = position; i< n; i++){
//     arr[i] = arr[i +1]
    
//   }
  
//   arr.pop()
//   return arr
// }
// console.log(deletion([12, 45, 6, 7, 78, 89], 2))

// function removeOccruence(arr, value) {
//     let size = arr.length
//     let i = 0
//     while(i < size){
//       if(arr[i] === value){
//         for (let j = i; j < size; j++){
//           arr[j] = arr[j + 1];
//         }
//         size--;
//       }else{
//         i++
//       }
//     }
//     arr.length = size
//     return arr
//   }
//   console.log(removeOccruence([1, 3, 4, 65, 4, 5, 6 , 4, 8 , 4], 4))
  
// let n = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
// var addToArrayForm = function(num, k) {
//   let sum = BigInt(num.join('')) + BigInt(k);
//   let result = Array.from(sum)
//   return result
// };

// console.log(addToArrayForm(n , 34))



// function removeOccruence(arr, value){
//   let n = arr.length;
//   for (let i = 0; i < n; ) {
//     if (arr[i] == value) {
//       for (let j = i; j < n; j++){
//         arr[j] = arr[j+1]
//       }
//       n--
//       arr.length = n
//     } else {
//       i++
//     }
//   }
//   return arr
// }
// console.log(removeOccruence([1, 3, 4, 65, 4, 5, 6 , 4, 8 , 4], 4))




// function removeDuplicates(nums){
//   let n = nums.length
//   let i = 0
//   while(i< n){
//     let j = i+1
//     while(j<n){
//       if(nums[j] === nums[i]){
//         nums[j] = nums[j+1]
//       }else{
//         j++
//       }
//     }
//     i++
//   }
//   return nums
// }

function removeDuplicates(nums){
  if(nums.length ==0) return 0;
  let i =0
  for(let j = 1; j < nums.length; j++){
    if(nums[i] !== nums[j]){
      i++;
      nums[i] = nums[j]
    }
  }
  nums.length = i+1;
  return nums.length
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));


// console.log(removeOccurence([0,0,1,1,1,2,2,3,3,4]))