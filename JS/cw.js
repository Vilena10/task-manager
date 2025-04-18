// 1
const paragraph = document.querySelector('.test-text');
paragraph.textContent = "Привет, мир! Меня зовут Вилена.";

paragraph.style.backgroundColor = 'tblue';
paragraph.style.color = 'Darkblue';
paragraph.style.border = '2px solid darkblue';

// 2
document.getElementById('email').value = 'mail@mail.ru';
document.getElementById('email').disabled = true;
document.getElementById('remember').checked = true;
document.getElementById('btn').textContent = 'Войти';

// 3
const link = document.createElement('a');
link.href = 'https://portal.midis.info/';
link.textContent = 'ссылка на сайт';
link.target = '_blank';



