`use strict`;

let answer = prompt(`Какое официальное название JavaScript (регистр важен)?`, `ыыы`);
if( answer === "ECMAScript" ) {
    alert(`Правильно!`);
} else {
    alert(`Вы не знаете? \"ECMAScript\"-же!`);
}