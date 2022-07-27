var a1, a2, a3, b1, b2, b3, c1, c2, c3;
var playerTurn = "";
var gameStarted = false;
var winner = "";

a1 = document.getElementById("a1");
a2 = document.getElementById("a2");
a3 = document.getElementById("a3");

b1 = document.getElementById("b1");
b2 = document.getElementById("b2");
b3 = document.getElementById("b3");

c1 = document.getElementById("c1");
c2 = document.getElementById("c2");
c3 = document.getElementById("c3");

document.getElementById("start").addEventListener("click", function () {newGame()});

a1.addEventListener("click", function() {
    if (a1.textContent == "" && winner == "") {
        a1.textContent = playerTurn;
        changeTurn();
    }
});
a2.addEventListener("click", function() {
    if (a2.textContent == "" && winner == "") {
        a2.textContent = playerTurn;
        changeTurn();
    }
});
a3.addEventListener("click", function() {
    if (a3.textContent == "" && winner == "") {
        a3.textContent = playerTurn;
        changeTurn();
    }
});

b1.addEventListener("click", function() {
    if (b1.textContent == "" && winner == "") {
        b1.textContent = playerTurn;
        changeTurn();
    }
});
b2.addEventListener("click", function() {
    if (b2.textContent == "" && winner == "") {
        b2.textContent = playerTurn;
        changeTurn();
    }
});
b3.addEventListener("click", function() {
    if (b3.textContent == "" && winner == "") {
        b3.textContent = playerTurn;
        changeTurn();
    }
});

c1.addEventListener("click", function() {
    if (c1.textContent == "" && winner == "") {
        c1.textContent = playerTurn;
        changeTurn();
    }
});
c2.addEventListener("click", function() {
    if (c2.textContent == "" && winner == "") {
        c2.textContent = playerTurn;
        changeTurn();
    }
});
c3.addEventListener("click", function() {
    if (c3.textContent == "" && winner == "") {
        c3.textContent = playerTurn;
        changeTurn();
    }
});

function changeTurn() {
    if (gameStarted == false) return;
    checkWinner();
    
    if (winner == "X" || winner == "O") {
        document.getElementById("turnIndicator").textContent = "Game Over! " + winner + " wins!";
        return;
    }
    var playStatus = canStillPlay();
    if (playStatus) {
        if (playerTurn == "X") {
            playerTurn = "O";
            document.getElementById("turnIndicator").textContent = "O's Turn";
        } else  if (playerTurn == "O"){
            playerTurn = "X";
            document.getElementById("turnIndicator").textContent = "X's Turn";
        } else if (playerTurn == "") {
            playerTurn = "X";
            document.getElementById("turnIndicator").textContent = "X's Turn";
        } else {

        }
    } else {
        document.getElementById("turnIndicator").textContent = "Game Over! It's a draw...";
    }
}

function checkWinner() {
    //Check buttons, set winner to X if X wins a game:
    if (a1.textContent == "X" && a2.textContent == "X" && a3.textContent == "X") {winner = "X"; return;}
    if (b1.textContent == "X" && b2.textContent == "X" && b3.textContent == "X") {winner = "X"; return;}
    if (c1.textContent == "X" && c2.textContent == "X" && c3.textContent == "X") {winner = "X"; return;}

    if (a1.textContent == "X" && b1.textContent == "X" && c1.textContent == "X") {winner = "X"; return;}
    if (a2.textContent == "X" && b2.textContent == "X" && c2.textContent == "X") {winner = "X"; return;}
    if (a3.textContent == "X" && b3.textContent == "X" && c3.textContent == "X") {winner = "X"; return;}

    if (a1.textContent == "X" && b2.textContent == "X" && c3.textContent == "X") {winner = "X"; return;}
    if (a3.textContent == "X" && b2.textContent == "X" && c1.textContent == "X") {winner = "X"; return;}

    //Check buttons, set winner to O if O wins a game:
    if (a1.textContent == "O" && a2.textContent == "O" && a3.textContent == "O") {winner = "O"; return;}
    if (b1.textContent == "O" && b2.textContent == "O" && b3.textContent == "O") {winner = "O"; return;}
    if (c1.textContent == "O" && c2.textContent == "O" && c3.textContent == "O") {winner = "O"; return;}

    if (a1.textContent == "O" && b1.textContent == "O" && c1.textContent == "O") {winner = "O"; return;}
    if (a2.textContent == "O" && b2.textContent == "O" && c2.textContent == "O") {winner = "O"; return;}
    if (a3.textContent == "O" && b3.textContent == "O" && c3.textContent == "O") {winner = "O"; return;}

    if (a1.textContent == "O" && b2.textContent == "O" && c3.textContent == "O") {winner = "O"; return;}
    if (a3.textContent == "O" && b2.textContent == "O" && c1.textContent == "O") {winner = "O"; return;}

    winner = "";
}

function canStillPlay() {
    if (a1.textContent == "") return true;
    else if (a2.textContent == "") return true;
    else if (a3.textContent == "") return true;

    else if (b1.textContent == "") return true;
    else if (b2.textContent == "") return true;
    else if (b3.textContent == "") return true;

    else if (c1.textContent == "") return true;
    else if (c2.textContent == "") return true;
    else if (c3.textContent == "") return true;
    else return false;
}

function newGame() {
    console.log("Starting new game...");
    
    a1.textContent = "";
    a2.textContent = "";
    a3.textContent = "";

    b1.textContent = "";
    b2.textContent = "";
    b3.textContent = "";

    c1.textContent = "";
    c2.textContent = "";
    c3.textContent = "";

    gameStarted = true;
    changeTurn();
}