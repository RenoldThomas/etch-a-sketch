const container = document.querySelector("#container");
container.style.width = "500px";

let GRID_SIZE = 16;

function changeSize() {
    GRID_SIZE = prompt("Please enter desired grid size? (max 100)", 16);
    makeGrid(GRID_SIZE);
}

function makeGrid(size) {
    container.innerHTML = "";

    let cellSize = 500 / size;

    //To fill container with # of columns
    for (let i = 1; i <= size; i++) {
        const column = document.createElement("div");
        column.classList.add("columns");

        //To fill column with # of divs
        for (let j = 1; j <= size; j++) {
            const div = document.createElement("div");

            div.style.width = `${cellSize}px`;
            div.style.height = `${cellSize}px`;

            //Add hover over effect for each div
            div.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "red";
            })
            column.appendChild(div);
        }
        container.appendChild(column);
    }
}

makeGrid(GRID_SIZE);