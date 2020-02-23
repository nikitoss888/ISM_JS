var str = prompt("Введите слово с малой буквы");

alert( ucFirst());

function ucFirst() {

    if( !str ) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}