
const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener("click", function() {
    // Получаем значение введенной почты
    const email = document.getElementById('email-input').value;

    // Создаем объект XMLHttpRequest и отправляем запрос на сервер
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "e.txt");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
      // Обработчик ответа от сервера
      if (xhr.status === 200) {
        // Выводим сообщение об успешной проверке
        const response = JSON.parse(xhr.responseText);
        alert(response.message);
      } else {
        alert("Произошла ошибка при проверке почты.");
      }
    };
    xhr.send(JSON.stringify({email: email}));
  });