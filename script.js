// Create a 16x16 grid
let createGrid = () => {
    const container = document.querySelector('.container');
    for (let i = 0; i < 16; i++) {
        // Create a row div that the drawing squares will be placed inside of
        const row = document.createElement('div');
        row.classList.add('row-container');
        for (let j = 0; j < 16; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.addEventListener('mouseenter', drawSquare);
            row.appendChild(gridSquare);
        }
        container.appendChild(row);
    }
}

// Change the color of a square when it is hovered over
let drawSquare = (e) => {
    if (e.target.style.backgroundColor != 'black') {
        e.target.style.backgroundColor = 'black';
    }
}

createGrid();