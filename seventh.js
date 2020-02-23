var str = prompt("Введите фразу для усечения");
var max = +prompt("Введите число символов для урезания лишних");

alert( slicer( max ) );

function slicer(maximum) {
    var phrase;
    if (str.length > maximum) {
         phrase = str.slice(0, maximum - 1) + `…`;
    }
    return phrase;
}