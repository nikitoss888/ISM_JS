alert( randomInteger( 1, 3 ));

function randomInteger(min, max) {
    let rand = Math.random() * ( max + 1 - min ) + min;
    return Math.round(rand);
}