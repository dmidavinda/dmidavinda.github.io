let currMoleTitle;
let currPlantTitle;
let score = 0;
let gameOver =  false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid for the game board in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div
        let title = document.createElement("div")
        title.id = i.toString();
        title.addEventListener("click", selectTitle);
        document.getElementById("board").appendChild(title);
    }

    setInterval(setMole, 1000); //1000 milliseconds = 1 seconds 
    setInterval(setPlant, 2000); //2000 milliseconds = 2 seconds
}

function getRandomTitle() {
    //math.random --> (0-1) * 9 = (0-9) --> round down to (0-8) integers 
    let num = Math.floor(Math.random() * 9 );
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }

    if (currMoleTitle) {
        currMoleTitle.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTitle();
    if (currPlantTitle && currPlantTitle.id == num) {
        return;
    }
    currMoleTitle = document.getElementById(num);
    currMoleTitle.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }

    if (currPlantTitle) {
        currPlantTitle.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTitle();
    if (currMoleTitle && currMoleTitle.id == num) {
        return;
    }
    currPlantTitle = document.getElementById(num);
    currPlantTitle.appendChild(plant);
}

function selectTitle() {
    if (gameOver) {
        return;
    }

    if (this == currMoleTitle) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score
    }
    else if (this == currPlantTitle) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}