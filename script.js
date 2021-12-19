const container=document.querySelector(".container")
let rowLenght=50;
let gridSize=rowLenght**2;
let squareSize=`${100/rowLenght}%`
createGrid()
toggleContainerGrid(true)
hoverDisplay()
chooseColor()
Eraser()
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
function toggleContainerGrid(onOff) {
    const gridContainer=document.querySelector(".container")
    if (onOff) {
        gridContainer.classList.add("gridContainer")
    }
    else {
        gridContainer.classList.remove("gridContainer")
    }
}
function hoverDisplay(color='black'){
    const squares=document.querySelectorAll(".square");
    squares.forEach(gridSquare => {
        gridSquare.addEventListener("mouseover" , function(evt) {
            if (color==="Rainbow") {
                evt.target.style.background=randomHexColor();
                console.log("rainbow fail")
            }
            else {
            evt.target.style.background=color;
            console.log(`this is ${color}`)
            }
        })
    })
}


function onClickReset(){
const btn=document.querySelector(".btnClear")
     btn.addEventListener("click", deleteGrid)
     btn.addEventListener("click", function() {toggleContainerGrid(false)})
     btn.addEventListener("click", chooseGridSize)
     btn.addEventListener("click", createGrid)
     btn.addEventListener("click", function() {toggleContainerGrid(true)})
     btn.addEventListener("click", function() {hoverDisplay('black')})
    }

function chooseColor(){
    const btns=document.querySelectorAll(".btnColor")
    btns.forEach(btn => {
        btn.addEventListener("click", function() {hoverDisplay(this.textContent)})
        })
    }

function Eraser(){
    const btn=document.querySelector(".btnEraser")
    btn.addEventListener("click", function() {hoverDisplay("white")})  
}

function deleteGrid() {
    const squares=document.querySelectorAll(".square");
    squares.forEach(square=>square.remove())
}

function chooseGridSize() {
    rowLenght=window.prompt("Please pick a grid row lenght")
    gridSize=rowLenght**2
    squareSize=`${100/rowLenght}%`
}


function randomHexColor(){
    const randomHexColor='#000000'
    //const hexConversion={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:"a",11:"b",12:"c",13:"d",14:"e",15:"f"}
    //return randomHexColor.replace(/0/g,  function(){return hexConversion[Math.floor(Math.random()*16)]})
    return randomHexColor.replace(/0/g,  function(){return Math.floor(Math.random()*16).toString(16)})
}
