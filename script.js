let numberofSquares = null;
const resetBtn = document.querySelector('#resetBtn');

resetBtn.addEventListener('click', (event) => {
    numberofSquares = parseInt(prompt('Enter a number'), 10);
    if (isNaN(numberofSquares) || numberofSquares <= 0) {
        alert('Please enter a valid positive number');
        return;
    }

    const mainBox = document.querySelector('#mainBox');
    mainBox.innerHTML = ''; 

    for (let i = 0; i < numberofSquares; i++) {
        const childDiv = document.createElement('div'); 
        childDiv.classList.add('square');
        childDiv.style.backgroundColor = 'blue';
        childDiv.style.width = '50px';
        childDiv.style.height = '50px';
        childDiv.style.margin = '5px';
        mainBox.appendChild(childDiv); 
    }
});
