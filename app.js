// var myButton = document.getElementById('myButton');
// var Text = document.getElementById('Text');
//
// var textToShow = "Текст по умолчанию";
//
// myButton.addEventListener('click', () => {
//     var userInput = prompt("Введите текст:");
//     if (userInput !== null) {
//         textToShow = userInput;
//         Text.textContent = textToShow;
//     }
// });



function setLightColor(color) {
    var lights = document.querySelectorAll('.traffic-light div');

    for (var light of lights) {
        light.style.boxShadow = 'none'; // Сбрасываем стили тени для всех светофорных сигналов
    }

    switch (color.toLowerCase()) {
        case 'красный':
        case 'red':
            lights[0].style.boxShadow = '0 0 20px #FF0000'; // Применяем тень для красного света
            alert('STOP');
            break;
        case 'желтый':
        case 'yellow':
            lights[1].style.boxShadow = '0 0 20px #FFFF00'; // Применяем тень для желтого света
            alert('GET READY');
            break;
        case 'зеленый':
        case 'green':
            lights[2].style.boxShadow = '0 0 20px #00FF00'; // Применяем тень для зеленого света
            alert('GO');
            break;
        default:
            alert('Неверный цвет');
            break;
    }
}

var userInput = prompt('Введите цвет светофора ("Красный", "Желтый" или "Зеленый"):');
if (userInput !== null) {
    setLightColor(userInput);
}
