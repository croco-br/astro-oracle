const planets = [
    { symbol: '☿', name: 'Mercúrio' },
    { symbol: '♀', name: 'Vênus' },
    { symbol: '♂', name: 'Marte' },
    { symbol: '♃', name: 'Júpiter' },
    { symbol: '♄', name: 'Saturno' },
    { symbol: '♅', name: 'Urano' },
    { symbol: '♆', name: 'Netuno' },
    { symbol: '♇', name: 'Plutão' },
    { symbol: '☉', name: 'Sol' },
    { symbol: '☽', name: 'Lua' },
    { symbol: '☊', name: 'Nodo Norte' },
    { symbol: '☋', name: 'Nodo Sul' }
];

const zodiac = [
    { symbol: '♈', name: 'Áries' },
    { symbol: '♉', name: 'Touro' },
    { symbol: '♊', name: 'Gêmeos' },
    { symbol: '♋', name: 'Câncer' },
    { symbol: '♌', name: 'Leão' },
    { symbol: '♍', name: 'Virgem' },
    { symbol: '♎', name: 'Libra' },
    { symbol: '♏', name: 'Escorpião' },
    { symbol: '♐', name: 'Sagitário' },
    { symbol: '♑', name: 'Capricórnio' },
    { symbol: '♒', name: 'Aquário' },
    { symbol: '♓', name: 'Peixes' }
];

const numbers = [
    { symbol: '1', name: 'Um' },
    { symbol: '2', name: 'Dois' },
    { symbol: '3', name: 'Três' },
    { symbol: '4', name: 'Quatro' },
    { symbol: '5', name: 'Cinco' },
    { symbol: '6', name: 'Seis' },
    { symbol: '7', name: 'Sete' },
    { symbol: '8', name: 'Oito' },
    { symbol: '9', name: 'Nove' },
    { symbol: '10', name: 'Dez' },
    { symbol: '11', name: 'Onze' },
    { symbol: '12', name: 'Doze' }
];

function rollDice() {
    document.getElementById("spinner").style.display = "block";
    document.getElementById("dice1").innerHTML = "?";
    document.getElementById("dice2").innerHTML = "?";
    document.getElementById("dice3").innerHTML = "?";

    setTimeout(() => {
        document.getElementById("spinner").style.display = "none";

        const planet = planets[Math.floor(Math.random() * 12)];
        const zodiacSign = zodiac[Math.floor(Math.random() * 12)];
        const number = numbers[Math.floor(Math.random() * 12)];

        document.getElementById("dice1").innerHTML = createDiceHTML(planet);
        document.getElementById("dice2").innerHTML = createDiceHTML(zodiacSign);
        document.getElementById("dice3").innerHTML = createDiceHTML(number);
    }, 1000);
}

function createDiceHTML(item) {
    return `
        <div class="dice">
       ${item.symbol}
        </div>
    `;
}
