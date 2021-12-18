const container=document.querySelector(".container")
let rowLenght=50;
let gridSize=rowLenght**2;
let squareSize=`${100/rowLenght}%`
createGrid()
hoverDisplay()
chooseColor()
onClickReset()

function createGrid(){
    for (let i=0 ; i<gridSize ; i++ ) {
        let square=document.createElement("div")
        square.id="square"+i
        square.classList="square"
        square.style.width=squareSize
        square.style.paddingBottom=squareSize
        container.append(square)
    }
}

function hoverDisplay(color='black'){
    const squares=document.querySelectorAll(".square");
    squares.forEach(gridSquare => {
        gridSquare.addEventListener("mouseover" , function(evt) {
            //evt.target.style.background="pink"
            evt.target.style.background=color
            //evt.target.classList.add("squareHovered")
        })
    })
}

function onClickReset(){
const btn=document.querySelector(".btnClear")
     //btn.addEventListener("click", removeHover)
     btn.addEventListener("click", deleteGrid)
     btn.addEventListener("click", chooseGridSize)
     btn.addEventListener("click", createGrid)
     btn.addEventListener("click", function() {hoverDisplay('black')})
    }

function chooseColor(){
    const btns=document.querySelectorAll(".btnColor")
    btns.forEach(btn => {
        btn.addEventListener("click", function() {hoverDisplay(this.textContent)})
        })
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
    rowLenght=window.prompt("Please pick a grid row lenght")
    gridSize=rowLenght**2
    squareSize=`${100/rowLenght}%`
}


    