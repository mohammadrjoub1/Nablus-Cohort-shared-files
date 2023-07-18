let cards = [];
let sum = 0;
function startGame() {

    let card1 = getRandomCard();
    let card2 = getRandomCard();
    cards = [card1, card2];
    sum = cards[0] + cards[1];

    renderGame();
}
let player = {

    name: "Mohamamd Rjoub Technical Training Nablus Cohort",
    chips:150

}
document.getElementById("chips").innerText = player.name + ":  $" + player.chips;
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor(Math.random() * 13) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer;
    }
}

function renderGame() {
    document.getElementById("cards").innerText = "Cards: ";
    for (var i = 0; i < cards.length; i++) {
        document.getElementById("cards").innerText+="  "+cards[i];   

    }

    document.getElementById("sum").innerText = "sum: "+sum;

    if (sum === 21) {

        document.getElementById("message-el").innerText = "WON";
    }
    else if (sum < 21) {
        document.getElementById("message-el").innerText = "REPLAY";


    }
    else {
        document.getElementById("message-el").innerText = "LOST";

    }
    


}
function newCard() {
    if (sum != 21 && sum < 21) {
        cards.push(getRandomCard());
        sum += cards[2];
        renderGame();


    }
}
