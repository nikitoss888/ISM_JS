`use strict`;

let message,
    login = prompt(`Ваша должность (логин)?`);

// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }

    login === `Сотрудник` ?
        message = `Привет` :
        login === `Директор` ?
            message = `Здравствуйте` :
            login === `` ?
                message =  `Нет логина` :
                message = ``;

alert(message);