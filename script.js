function grid() {
    let side = +prompt("Enter number of squares per side (limit : 100)");
    if (side > 100 || side < 0 || !Number.isInteger(side)) {
        alert("Invalid input");
        return;
    }
    container.replaceChildren();
    for (let i=0;i<(side*side);i++) {
        const square = document.createElement("div");
        square.className = "gridsquare";
        square.style.flex = "1";
        square.style.flexBasis = `calc(100% / ${side})`;
        container.appendChild(square);
    }
}

const container = document.querySelector("#container");
const generate = document.querySelector("#generate");
generate.addEventListener("click",grid)





