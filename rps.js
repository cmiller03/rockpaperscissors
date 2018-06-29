var combination = [];

function opponent() {
    combination.push(Math.floor(Math.random() * 3 + 1));
}
opponent();

function rock() {
    combination.push(1);
    checkWin();
    checkLoss();
    checkDraw();
    playerRock.classList.remove("hidden");
    showOppChoice();
}

function paper() {
    combination.push(2);
    checkWin();
    checkLoss();
    checkDraw();
    playerPaper.classList.remove("hidden");
    showOppChoice();
}

function scissors() {
    combination.push(3);
    checkWin();
    checkLoss();
    checkDraw();
    playerScissors.classList.remove("hidden");
    showOppChoice();
}

function showOppChoice() {
    if (combination[0] === 1) {
        opponentRock.classList.remove("hidden");
    }
    if (combination[0] === 2) {
        opponentPaper.classList.remove("hidden");
    }
    if (combination[0] === 3) {
        opponentScissors.classList.remove("hidden");
    }

}

function checkWin() {
    if (JSON.stringify(combination) == JSON.stringify([3, 1])) {
        youWonDiv.classList.remove("hidden");
    }
    if (JSON.stringify(combination) == JSON.stringify([1, 2])) {
        youWonDiv.classList.remove("hidden");
    }
    if (JSON.stringify(combination) == JSON.stringify([2, 3])) {
        youWonDiv.classList.remove("hidden");
    }
}

function checkLoss() {
    if (JSON.stringify(combination) == JSON.stringify([1, 3])) {
        youLostDiv.classList.remove("hidden");
    }
    if (JSON.stringify(combination) == JSON.stringify([2, 1])) {
        youLostDiv.classList.remove("hidden");
    }
    if (JSON.stringify(combination) == JSON.stringify([3, 2])) {
        youLostDiv.classList.remove("hidden");
    }
}

function checkDraw() {
    if (JSON.stringify(combination) == JSON.stringify([1, 1])) {
        itsADraw.classList.remove("hidden");
    }
    if (JSON.stringify(combination) == JSON.stringify([2, 2])) {
        itsADraw.classList.remove("hidden");
    }
    if (JSON.stringify(combination) == JSON.stringify([3, 3])) {
        itsADraw.classList.remove("hidden");
    }
}
checkWin();
checkLoss();
checkDraw();
console.log(combination);
