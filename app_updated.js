var items = document.getElementsByClassName("box");

const player1_Button = document.getElementById("player-1");
const player2_Button = document.getElementById("player-2");

class Player {
    constructor(name, position, money) {
        this.name = name;
        this.position = position;
        this.money = money;
    }

    roll_Dice() {
        let randomPositionValue = Math.floor(Math.random() * 10) + 1;
        console.log("Generated Position::" + randomPositionValue);
        this.changePosition(randomPositionValue);
    }

    changePosition(generatedPositionValueFromDice) {
        var previous = this.position;
        this.position += generatedPositionValueFromDice;
        if (this.position >= 16) { this.position %= 15; }

        if (this.name == "PlayerOne" && this.position < items.length) {
            items[previous].style.backgroundColor = "aqua";
            items[this.position].style.backgroundColor = "red";
            previous = this.position;
        }

        if (this.name == "PlayerTwo" && this.position < items.length) {
            items[previous].style.backgroundColor = "aqua";
            items[this.position].style.backgroundColor = "green";
            previous = this.position;
        }
        this.updateMoney(this.position);
    }

    updateMoney(position) {
        if (this.name == "PlayerOne" && items[position].innerHTML != "JAIL") {
            var value = items[position].innerHTML;
            this.money -= value;
            document.getElementById("score1").innerHTML = this.money;
        }
        if (this.name == "PlayerTwo" && items[position].innerHTML != "JAIL") {
            var value = items[position].innerHTML;
            this.money -= value;
            document.getElementById("score2").innerHTML = this.money;
        }
        if (items[position].innerHTML == "JAIL") { document.getElementById("outofgame").innerHTML = "OUT OF THE GAME"; }

    }

}

let playerOne = new Player("PlayerOne", 0, 1000);
let playerTwo = new Player("PlayerTwo", 0, 1000);

player1_Button.addEventListener("click", function () { playerOne.roll_Dice(); }, false);
player2_Button.addEventListener("click", function () { playerTwo.roll_Dice(); }, false);
