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
            //gridSquare.addEventListener() {

            //}
            row.appendChild(gridSquare);
        }
        container.appendChild(row);
    }
}

//let drawSquare = (e) => {
    
//}

createGrid();