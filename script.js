let gridLength = null;
const resetBtn = document.querySelector('#resetBtn');

resetBtn.addEventListener('click', () => {
    gridLength = parseInt(prompt('Enter a number for grid side'));
    if (isNaN(gridLength) || gridLength <= 0) {
        alert('Please enter a valid positive number');
        return;
    }

    const mainBox = document.querySelector('#mainBox');
    mainBox.innerHTML = ''; 

    const squareSize = 100 / gridLength; 

    for (let i = 0; i < gridLength * gridLength; i++) {
        const childDiv = document.createElement('div');
        childDiv.classList.add('square');
        childDiv.style.width = `${squareSize}%`;
        childDiv.style.height = `${squareSize}%`;
        mainBox.appendChild(childDiv);
    }
});
