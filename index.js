function randomNumber1() {
    return Math.floor(Math.random() * 6) + 1;
}

function randomNumber2() {
    return Math.floor(Math.random() * 6) + 1;
}

document.querySelector(".play").addEventListener("click", function() {
    
    let player1Number = randomNumber1();
    let player2Number = randomNumber2();

    document.querySelector(".img1").setAttribute("src", "./images/dice" + player1Number + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + player2Number + ".png");

    if (player1Number === player2Number) {
        document.querySelector("h2").innerHTML = "It's a Draw!";
    } else if (player1Number > player2Number) {
        document.querySelector("h2").innerHTML = "🚩Player 1 wins";
    } else {
        document.querySelector("h2").innerHTML = "Player 2 wins🚩";
    }
});
