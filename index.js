// Задание 1: Кнопка, скрывающая себя
document.getElementById('hideSelf').addEventListener('click', function() {
    this.style.display = 'none';
});

// Задание 2: Скрытие/показа текста
const textElement = document.getElementById('text');
document.getElementById('toggleText').addEventListener('click', function() {
    textElement.style.display = textElement.style.display === 'none' ? 'block' : 'none';
});

// Задание 3: Кнопки с разными событиями
document.getElementById('clickButton').addEventListener('click', function() {
    this.style.backgroundColor = 'lightblue';
    setTimeout(() => { this.style.backgroundColor = ''; }, 500);
});

document.getElementById('mouseoverButton').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});
document.getElementById('mouseoverButton').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

document.getElementById('dblclickButton').addEventListener('dblclick', function() {
    this.style.backgroundColor = 'lightgreen';
    setTimeout(() => { this.style.backgroundColor = ''; }, 500);
});

// Задание 4: Изменение цвета фона при нажатии клавиш
const colors = {
    'r': 'red',
    'g': 'green',
    'b': 'blue',
};

document.addEventListener('keydown', function(e) {
    if (colors[e.key]) {
        document.body.style.backgroundColor = colors[e.key];
    }
});

document.addEventListener('keyup', function() {
    document.body.style.backgroundColor = '';
});

// Задание 5: Перемещение блока
const block = document.getElementById('movable-block');
let posX = 50;
let posY = 300;

document.addEventListener('keydown', function(e) {
    const step = 10;
    
    switch(e.key.toLowerCase()) {
        case 'w':
            posY -= step;
            break;
        case 'a':
            posX -= step;
            break;
        case 's':
            posY += step;
            break;
        case 'd':
            posX += step;
            break;
    }
    
    block.style.left = posX + 'px';
    block.style.top = posY + 'px';
});