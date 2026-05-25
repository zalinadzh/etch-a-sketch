const newDiv = document.querySelector('#container');
let newBlock = document.createElement('block');
newBlock.classList.add('block');
newDiv.appendChild(newBlock);

for (let i = 0; i < 256; i++) {
    let newBlock = document.createElement('block');
    newBlock.classList.add('block');
    newDiv.appendChild(newBlock);
}