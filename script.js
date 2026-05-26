

function createGrid(size) {
    const newDiv = document.querySelector('#container');
    newDiv.innerHTML = '';
    let squareSize = 100 / size;
    for (let i = 0; i < size * size; i++) {
        const newBlock = document.createElement('div');
        newBlock.classList.add('block');
        newBlock.style.flex = `0 0 ${squareSize}%`;
        newBlock.style.height = `${squareSize}%`;
        newBlock.addEventListener('mouseover', function() {
            newBlock.style.backgroundColor = 'yellow';
        });
        newDiv.appendChild(newBlock)
    }
}
createGrid(16);
const btn = document.querySelector('#reset-button');
btn.addEventListener('click', () => {
    let input = prompt('Введите количество квадратов на сторону (макс. 100):');
    let size = parseInt(input);
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert('Пожалуйста, введите число от 1 до 100!');
    }
});