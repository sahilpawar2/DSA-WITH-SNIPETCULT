// rest operater
//rest operator sturcturized the elements
// function addnum (a, b, c, ...other){ 
//     console.log(...other)       ////rest operater will store the rested varaibles into an arry 
//     return a + b + c;
// }
// console.log(addnum(1, 2, 4, 5, 7, 8))  ///[5, 7, 8] will be store 


// array desturcturing and rest operater
// let arr = [1, 2, 3, 4, 5, 7];
// let [a, b, c, ...others] = arr; /// array destructuring is is used to extract single element from an array
// console.log(a, b, c, others)   // here we can accses a individual values from an array and the rest of values 
////got store in the form of array by ...rest operater

// //object destructuring and rest operater
// let obj = {a: 1, b:2, c:4, d:5, e:7, f:8} 
// let {a, b, c, ...rest} = obj    /// destructuring an object to extract a single values from it
// console.log(a, b, c, rest) // here we can accses a individual values from an object and the rest of values 
// ////got store in the form of object by ...rest operater

///------------------------------------------------------------------------------------------------------>

// /// Spread operator (...) explanation:
// /// The spread operator is used to spread elements of an "iterable" (like arrays or strings) into individual elements.
// /// It doesn't work directly with objects unless you're copying properties into another object.

// // Spread operator with an array:
// let arr = [1, 3, 4, 5, 6];

// // Using the spread operator to log array elements separately (removes the brackets []):
// console.log(...arr);  // Output: 1 3 4 5 6

// // Without the spread operator, the entire array (with brackets []) is logged:
// console.log(arr);  // Output: [1, 3, 4, 5, 6]

// // Spread operator inside an object literal:
// let obj8 = {...arr};  
// // This creates an object where the array indexes become keys, and the array values become the values in the object.
// console.log(obj8);  // Output: {0: 1, 1: 3, 2: 4, 3: 5, 4: 6}

// // Merging two arrays with the spread operator:
// let arr2 = [21, 34, 56, 78];
// console.log([...arr, ...arr2]);  
// // Output: [1, 3, 4, 5, 6, 21, 34, 56, 78] 
// // The two arrays are merged into one.




// ////spread on str 
// let str = "sAHOL PAWEA"
// console.log(...str)   /// its spread str s A H O L  P A W E A
// console.log(str)

// /// spread operator on obj
// let obj12 = {        
//    name:'sahil',
//    surname: "pawar"
// }
// console.log({...obj12}) ///only iterable can be spread obj always require {}literal
// //console.log(...obj12) /// will give an error

// let obj = {        // The spread operator (...) copies all properties from the 'obj' object into a new object.
//     name : "sahil",   // In this case, {...obj} creates a new object with the same properties as 'obj' (name, company, ref).
//     company : "XYZ",  // After that, you overwrite the 'name' property with a new value ('hiel') while keeping the other properties unchanged.
//     ref :  "actual"      // So, the final object will be: { name: 'hiel', company: 'XYZ', ref: 'actual' }
// }
// console.log({...obj, name: 'hiel'})
// console.log(obj)



// let obj ={}
// let obj6 = null

// if (obj === obj6){
//     console.log('tt')
//  }//else {
// //     console.log("false ");
// // }


// function arrToObeject(arr){
//     let arr2 = arr.flat()
//     let obj = {}
//     console.log(arr2[1])
//     for (let i = 0; i < arr2.length; i+=2) {
//         let a = arr2[i];
//         let  b = arr2[i+1]
//         obj[a] = b
//     }
//     return obj
// }

// console.log(arrToObeject([['a', 2], ['sahil', 3]]))


// function evenArray(arr){
//     let arr2 = arr.filter(num => num%2 ===0)

//     return arr2
// }

// console.log(evenArray([1, 2, 3, 4, 5, 6, 7, 8, 9, ]))


// function annagrams(arr){
//     let arr2 = arr.map(str => str.split('').sort().join(''))
//     let arr1 ;
//     let rersult = []
//     let count = 0
//     for(let i = 0;  i < arr2.length; i++){
//         for(let j = i+1; j < arr2.length; j++){
//             // rersult.push(arr2[i], arr2[j])
//             if(arr2[i] === arr2[j]){
//                rersult.push([arr[i], arr[j]])
//             }
//         }
//     }

//     return rersult
// }
// console.log(annagrams(['cat', 'dog', 'tac', 'god']))


// function groupAnagrams(strs) {
//     let map = {};

//     for (let str of strs) {
//         // Sort the string characters and use as key
//         let sortedStr = str.split('').sort().join('');
//         console.log(sortedStr);
        

//         // If the key doesn't exist, create it; otherwise, push the anagram
//         if (!map[sortedStr]) {
//             map[sortedStr] = [];
//         }
//         map[sortedStr].push(str);
//     }

//     // Convert the map values to an array of grouped anagrams
//     return Object.values(map);
// }

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));



function findMissingNum(arr){
    let start = 0
    while (start < arr.lenght){
        let end = start +1
        let temp;
        if (arr[start] > arr[end]) {
            temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end++
        }
        
    }
    return arr
}

console.log(findMissingNum([3, 0, 1]))