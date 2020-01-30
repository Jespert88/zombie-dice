

function roll() {
    var dice = {
        sides: 6,
        roll: function () {
            var randomNumber = Math.floor(Math.random() * this.sides) + 1;
            return randomNumber;
        },
        color: function () {
            var colorArr = ["green", "yellow", "red"];
            var randomColor = Math.floor(Math.random() * colorArr.length) + 0;
            return colorArr[randomColor];
        }
    }
    var finalDice = dice.color() + dice.roll();

    try {
        // Green brain.
        if (finalDice === "green1") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Green-Brain.jpg";
        }
        else if (finalDice === "green2") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Green-Brain.jpg";
        }
        else if (finalDice === "green3") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Green-Brain.jpg";
        };

        // Green feet.
        if (finalDice === "green4") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Green-Feet.jpg";
        } else if (finalDice === "green5") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Green-Feet.jpg";
        };

        // Green boom.
        if (finalDice === "green6") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Green-Boom.jpg";
        }

        if (finalDice === "yellow1") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Yellow-Brain.jpg";
        } else if (finalDice === "yellow2") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Yellow-Brain.jpg";
        } else if (finalDice === "yellow3") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Yellow-Feet.jpg";
        } else if (finalDice === "yellow4") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Yellow-Feet.jpg";
        } else if (finalDice === "yellow5") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Yellow-Boom.jpg";
        } else if (finalDice === "yellow6") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Yellow-Boom.jpg";
        }

        if (finalDice === "red1") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Red-Brain.jpg";
        } else if (finalDice === "red2") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Red-Feet.jpg"
        } else if (finalDice === "red3") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Red-Feet.jpg"
        } else if (finalDice === "red4") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Red-Boom.jpg"
        } else if (finalDice === "red5") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Red-Boom.jpg"
        } else if (finalDice === "red6") {
            var imageElement = document.getElementById("dice");
            imageElement.src = "./img/Red-Boom.jpg"
        }
    } catch (error) {
        console.log(error);
    }
}

function rollTwo() {

    var dice = {
        sides: 6,
        roll: function () {
            var randomNumber = Math.floor(Math.random() * this.sides) + 1;
            return randomNumber;
        },
        color: function () {
            var colorArr = ["green", "yellow", "red"];
            var randomColor = Math.floor(Math.random() * colorArr.length) + 0;
            return colorArr[randomColor];
        }
    }
    var finalDice = dice.color() + dice.roll();

    try {

        // Green brain.
        if (finalDice === "green1") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Green-Brain.jpg";
        } else if (finalDice === "green2") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Green-Brain.jpg";
        } else if (finalDice === "green3") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Green-Brain.jpg";
        };

        // Green feet.
        if (finalDice === "green4") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Green-Feet.jpg";
        } else if (finalDice === "green5") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Green-Feet.jpg";
        };

        // Green boom.
        if (finalDice === "green6") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Green-Boom.jpg";
        }

        if (finalDice === "yellow1") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Yellow-Brain.jpg";
        } else if (finalDice === "yellow2") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Yellow-Brain.jpg";
        } else if (finalDice === "yellow3") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Yellow-Feet.jpg";
        } else if (finalDice === "yellow4") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Yellow-Feet.jpg";
        } else if (finalDice === "yellow5") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Yellow-Boom.jpg";
        } else if (finalDice === "yellow6") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Yellow-Boom.jpg";
        }

        if (finalDice === "red1") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Red-Brain.jpg";
        } else if (finalDice === "red2") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Red-Feet.jpg"
        } else if (finalDice === "red3") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Red-Feet.jpg"
        } else if (finalDice === "red4") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Red-Boom.jpg"
        } else if (finalDice === "red5") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Red-Boom.jpg"
        } else if (finalDice === "red6") {
            var imageElement = document.getElementById("dice2");
            imageElement.src = "./img/Red-Boom.jpg"
        }
    } catch (error) {
        console.log(error);
    }
}

function rollThree() {

    var dice = {
        sides: 6,
        roll: function () {
            var randomNumber = Math.floor(Math.random() * this.sides) + 1;
            return randomNumber;
        },
        color: function () {
            var colorArr = ["green", "yellow", "red"];
            var randomColor = Math.floor(Math.random() * colorArr.length) + 0;
            return colorArr[randomColor];
        }
    }
    var finalDice = dice.color() + dice.roll();

    try {
        // Green brain.
        if (finalDice === "green1") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Green-Brain.jpg";
        } else if (finalDice === "green2") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Green-Brain.jpg";
        } else if (finalDice === "green3") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Green-Brain.jpg";
        };

        // Green feet.
        if (finalDice === "green4") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Green-Feet.jpg";
        } else if (finalDice === "green5") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Green-Feet.jpg";
        };

        // Green boom.
        if (finalDice === "green6") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Green-Boom.jpg";
        }

        if (finalDice === "yellow1") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Yellow-Brain.jpg";
        } else if (finalDice === "yellow2") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Yellow-Brain.jpg";
        } else if (finalDice === "yellow3") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Yellow-Feet.jpg";
        } else if (finalDice === "yellow4") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Yellow-Feet.jpg";
        } else if (finalDice === "yellow5") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Yellow-Boom.jpg";
        } else if (finalDice === "yellow6") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Yellow-Boom.jpg";
        }

        if (finalDice === "red1") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Red-Brain.jpg";
        } else if (finalDice === "red2") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Red-Feet.jpg"
        } else if (finalDice === "red3") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Red-Feet.jpg"
        } else if (finalDice === "red4") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Red-Boom.jpg"
        } else if (finalDice === "red5") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Red-Boom.jpg"
        } else if (finalDice === "red6") {
            var imageElement = document.getElementById("dice3");
            imageElement.src = "./img/Red-Boom.jpg"
        }
    } catch (error) {
        console.log(error);
    }
}

function rollAllDice() {
    roll();
    rollTwo();
    rollThree();
};
