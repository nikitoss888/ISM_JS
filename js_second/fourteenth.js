`use strict`;

let result;

// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }

let a = +prompt(`Число а:`);
let b = +prompt(`Число b:`);

a + b < 4 ? result = 'Мало' : result = 'Много';
alert(result);