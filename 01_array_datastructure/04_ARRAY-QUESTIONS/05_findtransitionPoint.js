function transitionPoint(arr){
    let n = arr.length
    let index = -1
    let i = 0;
    while(i < n){
      if(arr[i] !== 0){
        index = i
        break;
      }
      i++
    }
    return index
  }
  console.log(transitionPoint([0, 0, 0, 1, 1]))