const obj = [
  { name: 'vasya'},
  { name: 'petya'}
];

let [element,index] = obj;

console.log(element);
console.log(index);

//
// function findElement(array, predicate) {
//   for (let [index, element] of array.entries()) { // (1)
//     if (predicate(element)) {
//       return { element, index }; // (2)
//     }
//   }
//   return { element: undefined, index: -1 };
// }
//
// // var a = [7, 8, 6];
// // var result = findElement(a, function (x) {
// //   return x % 2 === 0
// // });
// // var element = result.element; // 8
// // var index = result.index; // 1
//
//
//
// let a = [7, 8, 6];
// let {element, index} = findElement(a, x => x % 2 === 0);
// // element = 8, index = 1
//
// console.log(element);
// console.log(index);
//
