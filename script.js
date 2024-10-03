function grid() {
    let side = +prompt("Enter number of squares per side (limit : 100)");
    if (side > 100 || side < 0 || !Number.isInteger(side)) {
        alert("Invalid input");
        return;
    }
    container.replaceChildren();
    for (let i=0;i<(side*side);i++) {
        const square = document.createElement("div");
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = randomColor();
            let op = e.target.style.opacity;
            e.target.style.opacity = op + 0.1;
            console.log(e.target.style.opacity);
        });
        // square.opacity = "0";
        square.className = "gridsquare";
        square.style.flex = "1";
        square.style.flexBasis = `calc(100% / ${side})`;
        container.appendChild(square);
    }
}

function randomColor() {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}

const container = document.querySelector("#container");
const generate = document.querySelector("#generate");
generate.addEventListener("click",grid)





