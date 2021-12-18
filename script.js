const container=document.querySelector(".container")
let rowlenght=10;
let gridSize=rowlenght**2;
let squareSize=`${100/rowlenght}%`
createGrid()
hoverDisplay()
onClickReset()

function createGrid(){
    console.log(rowlenght)
    console.log("test1212")
    for (let i=0 ; i<gridSize ;i++ ) {
        let square=document.createElement("div")
        square.id="square"+i
        square.classList="square"
        square.style.width=squareSize
        square.style.paddingBottom=squareSize
        container.append(square)
    }
}

function hoverDisplay(){
    const squares=document.querySelectorAll(".square");
    squares.forEach(gridSquare => {
        gridSquare.addEventListener("mouseover" , function(evt) {
            // evt.target.style.background="pink"
            evt.target.classList.add("squareHovered")
        })
    })
}

function onClickReset(){
const btn=document.querySelector(".btnClear")
     //btn.addEventListener("click", removeHover)
     btn.addEventListener("click", deleteGrid)
     btn.addEventListener("click", chooseGridSize)
     btn.addEventListener("click", createGrid)
     btn.addEventListener("click", hoverDisplay)
    }

function removeHover(){
    const squaresHovered=document.querySelectorAll(".squareHovered")
    squaresHovered.forEach( squareHovered => {
        squareHovered.classList.remove("squareHovered")
    })}

function deleteGrid() {
    const squares=document.querySelectorAll(".square");
    squares.forEach(square=>square.remove())
}

function chooseGridSize() {
    rowlenght=window.prompt("Please pick a grid row lenght")
    gridSize=rowlenght**2
    squareSize=`${100/rowlenght}%`
}

    