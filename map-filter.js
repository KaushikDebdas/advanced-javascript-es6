const numbers = [3,4,5,6,7,8];

// Square system 01
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// Square system 02
// function Square(element){
//     return element * element;
// }
// console.log(Square);

// Square system 03
// const result = numbers.map(function(element){
//     return element * element;
// })
// console.log(result);

// Square system 04 ARROW
const result = numbers.map(x => x* x)
console.log(result);

// Filter
const bigger = numbers.filter(x => x > 5);
console.log(bigger);