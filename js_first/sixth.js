var str = prompt("Введите для проверки на спам (viagra или xxx..xx)");

alert( antiSpam( str ));

function antiSpam( spam ) {
    spam = str.toLowerCase();
    return spam.includes( `viagra` ) || spam.includes( `xxx` );
}