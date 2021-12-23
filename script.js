const container=document.querySelector(".container")
let rowLenght=50;
let gridSize=rowLenght**2;
let squareSize=`${100/rowLenght}%`
createGrid()
gridShape()
toggleContainerGrid(true)
hoverDisplay()
chooseColor()
Eraser()
onClickReset()

function createGrid(){
    for (let i=0 ; i<gridSize ; i++ ) {
        let square=document.createElement("div")
        square.id="square"+i
        square.classList.add("square")
        square.classList.add("pixel")
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
    const pixels=document.querySelectorAll(".pixel");
    pixels.forEach(gridSquare => {
        gridSquare.addEventListener("mouseover" , function(evt) {
            if (color==="rainbow") {
                evt.target.style.background=randomHexColor();
            }
            else {
            evt.target.style.background=color;
            }
        })
    })
}
function onClickReset(){
const btn=document.querySelector(".btnClear");
     btn.addEventListener("click", deleteGrid);
     btn.addEventListener("click", function() {toggleContainerGrid(false)});
     btn.addEventListener("click", chooseGridSize);
     btn.addEventListener("click", createGrid);
     btn.addEventListener("click", function() {toggleContainerGrid(true)});
     btn.addEventListener("click", function() {hoverDisplay('black')});
    }
function chooseColor(){
    const btns=document.querySelectorAll(".btnColor")
    btns.forEach(btn => {
        btn.addEventListener("click", function() {hoverDisplay(this.id)})
        })
    }
function Eraser(){
    const btn=document.querySelector(".btnEraser")
    btn.addEventListener("click", function() {hoverDisplay("white")})  
}
function gridShape(){
    const btn=document.querySelector(".btnShape");
    btn.addEventListener("click", toggleGridShape);
}
function deleteGrid() {
    const shapes=document.querySelectorAll(".pixel");
    shapes.forEach(shape=>shape.remove())
    document.querySelector(".btnShape").textContent="circle"
}
function chooseGridSize() {
    rowLenght=window.prompt("Please pick a grid row lenght")
    if (rowlenght) {
        rowlenght=50;    
    }
    gridSize=rowLenght**2;
    squareSize=`${100/rowLenght}%`;
    }
function randomHexColor(){
    const randomHexColor='#000000'
    return randomHexColor.replace(/0/g,  function(){return Math.floor(Math.random()*16).toString(16)})
}

function toggleGridShape(){
    const gridShape=document.querySelector(".btnShape");
    let shape=gridShape.textContent;
    if (shape==="square") {
        const btns=document.querySelectorAll(".circle");
        btns.forEach(btn => { 
            btn.classList.add("square");
            btn.classList.remove("circle");    
        })
        gridShape.textContent="circle";
    }
    else if (shape==="circle") {
        const btns=document.querySelectorAll(".square");
        btns.forEach(btn => { 
            btn.classList.add("circle");
            btn.classList.remove("square");    
        })
        gridShape.textContent="square";
    }
    
}

