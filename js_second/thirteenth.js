`use strict`;

let num = +prompt(`Введите число на проверку знака:`);

if( num > 0 ) {
    alert(1);
} else if ( num === 0 ){
    alert(0);
} else {
    alert(-1);
}