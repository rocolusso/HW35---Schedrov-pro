'use strict';
/*
- Собрать данные с формы при ее сабмите
- Сохранить эти данные в качестве объекта внутри localStorage (не забываем о преобразовании в json)
- Создать второй html файл, в котором списком (ul > li) вывести вывести все те данные, которые пользователь ввел в форму ранее
- Если данных нет, то показать соответствующее сообщение
*/
void function () {

    const formSelector = '#form';

    const submitHandler = (e) => {
        e.preventDefault();

        const inputs = e.target.querySelectorAll('input,textarea, select');
        const inputsData = {};

        for (const input of inputs) {
            inputsData[input.name] = input.value;
        }

        localStorage.setItem(
            formSelector,
            JSON.stringify(inputsData)
        );

        window.location.replace("./userpage.html");
    }

    document
        .querySelector(formSelector)
        .addEventListener('submit', submitHandler);


}();