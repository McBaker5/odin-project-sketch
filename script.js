let dimensions = 640;
const clearButton = document.querySelector('.clear');
const resizeButton = document.querySelector('.resize');
clearButton.addEventListener('click', clearGrid);
resizeButton.addEventListener('click', resizeGrid);

// Create a 16x16 grid with a width and height specified by 'dimensions'
let createGrid = (gridSize) => {
    const container = document.querySelector('.container');
    // Set dimensions of container
    container.style.height = `${dimensions}px`;
    container.style.width = `${dimensions}px`;
    

    for (let i = 0; i < gridSize; i++) {
        // Create a row div that the drawing squares will be placed inside of
        const row = document.createElement('div');
        row.classList.add('row-container');
        for (let j = 0; j < gridSize; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.addEventListener('mouseenter', drawSquare);
            gridSquare.style.height = `${dimensions / gridSize}px`;
            gridSquare.style.width = `${dimensions / gridSize}px`;
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

// Change all squares in the grid back to white
function clearGrid() {
    const container = document.querySelector('.container');
    let rows = container.childNodes;
    for (let row of rows) {
        let squares = row.childNodes;
        for (let square of squares) {
            square.style.backgroundColor = 'white';
        }
    }
}

// Create a new grid with a user specified size
function resizeGrid() {
    clearGrid();
    let gridSize;
    do {
        gridSize = prompt('How many squares on each side?');
    } while (gridSize > 100 || gridSize < 0);
    // delete the current grid
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    createGrid(gridSize);
}

// Create the grid 16x16 when first initialized
createGrid(16);