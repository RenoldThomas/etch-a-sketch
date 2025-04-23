/**
 * Etch-a-Sketch JavaScript Implementation
 * This script creates an interactive grid that changes color when hovered over
 */

// Select the container element where we'll create our grid
const container = document.querySelector("#container");

// Set the width of the container (in pixels)
container.style.width = "500px";

// Default grid size (16x16)
let GRID_SIZE = 16;

/**
 * Prompts user for a new grid size and rebuilds the grid
 * Maximum allowed size is 100x100 to prevent performance issues
 */
function changeSize() {
    // Prompt user for new grid size with default suggestion of 16
    let newSize = prompt("Please enter desired grid size? (max 100)", 16);
    
    // Convert to number and validate input
    newSize = parseInt(newSize);
    
    // Check if input is valid (a number between 1 and 100)
    if (isNaN(newSize) || newSize < 1) {
        alert("Please enter a valid number greater than 0");
        return;
    }
    
    if (newSize > 100) {
        alert("Maximum grid size is 100. Setting size to 100.");
        newSize = 100;
    }
    
    // Update the global grid size variable
    GRID_SIZE = newSize;
    
    // Rebuild the grid with new size
    makeGrid(GRID_SIZE);
}

/**
 * Creates a grid of specified size
 * @param {number} size - The number of cells per side (creating a size×size grid)
 */
function makeGrid(size) {
    // Clear existing grid elements from container
    container.innerHTML = "";

    // Calculate size of each cell to fit within 500px container
    let cellSize = 500 / size;

    // Create columns
    for (let i = 1; i <= size; i++) {
        // Create a column element
        const column = document.createElement("div");
        column.classList.add("columns");

        // Fill each column with cells
        for (let j = 1; j <= size; j++) {
            // Create a cell element
            const div = document.createElement("div");
            
            // Set dimensions for each cell
            div.style.width = `${cellSize}px`;
            div.style.height = `${cellSize}px`;

            // Add hover effect - change background color when mouse moves over
            div.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "red";
            });
            
            // Add cell to the column
            column.appendChild(div);
        }
        
        // Add the complete column to the container
        container.appendChild(column);
    }
}

// Initialize the grid with default size when page loads
makeGrid(GRID_SIZE);