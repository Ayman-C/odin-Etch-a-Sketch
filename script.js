

const container=document.querySelector(".container")

for (let i=0 ; i<16 ;i++ ) {
    let square=document.createElement("div")
    square.id="square"+i
    square.classList="square"
    // square.innerText=i
    container.append(square)
}

const squares=document.querySelectorAll(".square");

squares.forEach(gridSquare => {
    gridSquare.addEventListener("mouseover" , function(evt) {
        // evt.target.style.background="pink"
        evt.target.classList.add("squareHovered")
    })
})

const btn=document.querySelector(".btnClear")
     btn.addEventListener("click", removeHover)


function removeHover(){
    console.log("bipbip")
    const squaresHovered=document.querySelectorAll(".squareHovered")
    squaresHovered.forEach( squareHovered => {
        squareHovered.classList.remove("squareHovered")

    })}

    // btn.addEventListener("click", squaresHovered.classList.remove=

