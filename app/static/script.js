const planets = ['☿', '♀', '♂', '♃', '♄', '♅', '♆', '♇', '☉', '☽', '⚳', '⚷'];
const zodiac = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

function rollDice() {
    document.getElementById("spinner").style.display = "block";
    document.getElementById("dice1").textContent = "?";
    document.getElementById("dice2").textContent = "?";
    document.getElementById("dice3").textContent = "?";
    
    setTimeout(() => {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("dice1").textContent = planets[Math.floor(Math.random() * 12)];
        document.getElementById("dice2").textContent = zodiac[Math.floor(Math.random() * 12)];
        document.getElementById("dice3").textContent = numbers[Math.floor(Math.random() * 12)];
    }, 1000);
}