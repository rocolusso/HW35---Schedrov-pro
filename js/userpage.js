/*
- Собрать данные с формы при ее сабмите
- Сохранить эти данные в качестве объекта внутри localStorage (не забываем о преобразовании в json)
- Создать второй html файл, в котором списком (ul > li) вывести вывести все те данные, которые пользователь ввел в форму ранее
- Если данных нет, то показать соответствующее сообщение
*/
void (function () {
  const loadContent = () => {
    if (!localStorage.getItem('#form')) {
      const errorMessage = () => {
        const div = document.createElement('div');
        div.className = 'error';
        div.innerHTML = 'ERROR : You must to completely the form !!! <a href="./index.html" >Form</a> ';

        document.body.append(div);
      };
      errorMessage();
    } else {
      const data = JSON.parse(localStorage.getItem('#form'));
      const getList = document.querySelector('.user-info');
      const ul = document.createElement('ul');

      const backBtn = document
        .createElement('button');

      backBtn.innerHTML = 'Back to correct';
      backBtn.type = 'submit';

      for (const item in data) {
        const li = document.createElement('li');
        li.innerHTML = `${item} : ${data[item]}`;
        ul.append(li);
      }

      getList.append(ul);
      getList.append(backBtn);

      const backHandler = (e) => {
        e.preventDefault();
        window.location.replace('./index.html');
      };

      document
        .querySelector('button')
        .addEventListener('click', backHandler);
    }
  };

  document.addEventListener('DOMContentLoaded', loadContent);
}());
