const divGrid = document.getElementById('divContainer');
const userInput = document.getElementById('input');
const resetButton = document.getElementById('clearButton');


let userSelection = 16;
createGrid();
userInput.addEventListener('input', function() {
    userSelection = userInput.value;
    console.log (userSelection);
    createGrid();
})

function createGrid (){
    divGrid.innerHTML = '';
    let squareNum = userSelection  * userSelection;
    divGrid.style.gridTemplateColumns = `repeat(${userSelection}, 1fr)`;
    divGrid.style.gridTemplateRows = `repeat(${userSelection}, 1fr)`;

    for (let i = 0; i < squareNum; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        div.addEventListener ('mouseover', function (){
            div.style.backgroundColor = "black";
        })
        divGrid.appendChild(div);
    }
    console.log (squareNum);
}

resetButton.addEventListener ('click', function(){
    window.location.reload();
});