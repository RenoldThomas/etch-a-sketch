const container = document.querySelector("#container");

const GRID_SIZE = 16;

//To fill container with # of columns
for (let i = 1; i <= GRID_SIZE; i++) {
    const column = document.createElement("div");
    column.classList.add("rows");

    //To fill column with # of divs
    for (let i = 1; i <= GRID_SIZE; i++) {
        const div = document.createElement("div");
        
        //Add hover over effect for each div
        div.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "red";
        })
        column.appendChild(div);
    }
    container.appendChild(column);
}

