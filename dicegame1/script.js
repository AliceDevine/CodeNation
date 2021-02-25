
let count = 0;
let previousRoll = 0;
let rolling = document.getElementById("roll");
let diceRoll = () => {
    let roll = Math.ceil(Math.random() * 6);
    switch(previousRoll){
        case 1:
            document.getElementById("dice1").style.display = "none";
            break;
        case 2:
            document.getElementById("dice2").style.display = "none";
            break;
        case 3:
            document.getElementById("dice3").style.display = "none";
            break;
        case 4:
            document.getElementById("dice4").style.display = "none";
            break;
        case 5:
            document.getElementById("dice5").style.display = "none";
            break;
        case 6:
            document.getElementById("dice6").style.display = "none";
            break;
        }
        document.getElementById("blank").style.display = "none";
        switch(roll){
            case 1:
                document.getElementById("dice1").style.display = "flex";
                break;
            case 2:
                document.getElementById("dice2").style.display = "flex";
                break;
            case 3:
                document.getElementById("dice3").style.display = "flex";
                break;
            case 4:
                document.getElementById("dice4").style.display = "flex";
                break;
            case 5:
                document.getElementById("dice5").style.display = "flex";
                break;
            case 6:
                document.getElementById("dice6").style.display = "flex";
                break;
            }
            
    if (roll === 1) {
        count = 0;
        document.getElementById("score").innerHTML = `On no you rolled a 1. You Lost!`;
        document.getElementById("score").insertAdjacentHTML('afterend', '<p>Would you like to play again?</p><button type="button" class="btn btn-secondary btn-lg" value="Reload Page" onClick="window.location.reload()">Reload</button>');
        document.getElementById("roll").style.display = "none";
    }
    count = count + roll;
    if (count > 21) {
        document.getElementById("score").innerHTML = `You rolled a ${roll}. Your score is ${count}. You Win!`;
        document.getElementById("score").insertAdjacentHTML('afterend', '<p>Would you like to play again?</p><button type="button" class="btn btn-secondary btn-lg" value="Reload Page" onClick="window.location.reload()">Reload</button>');
        document.getElementById("roll").style.display = "none";
    } else if (count >= 2 && count < 21) {
        document.getElementById("score").innerHTML = `You rolled a ${roll}. Your score is ${count}.`;
    }
    previousRoll = roll;
}

rolling.addEventListener("click", () => {
    diceRoll();
});