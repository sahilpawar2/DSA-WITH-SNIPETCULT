function recursion (str){
    let n = str.length 
    
    if(n <= 1){
        return str
    }
    return str[n-1] + recursion(str.slice(0, -1)) 
}
console.log(recursion("sahil"))





// function power(base, index){
//     if(base <= index){
//         console.log(base);
//        power(base * base +1, index ) ;   
       
//     }
    
// }
// power(2, 3)




// let str = 'sahil'
// console.log(str.length -1);

// let str2 = '';
// for (let i = str.length-1; i >= 0 ; i--) {
//     str2 += str[i]
// }
// console.log(str2);
