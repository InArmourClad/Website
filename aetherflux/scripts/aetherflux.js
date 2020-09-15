//Aetherflux Reservoir life counter
var storm = 0;

function onAetherfluxClick() {
    let life_total = parseInt(document.querySelector("#life_total").innerHTML);
    let storm_text = parseInt(document.querySelector("#storm").innerHTML);
    storm++;
    life_total += storm;
    document.querySelector("#life_total").innerHTML = life_total;
    document.querySelector("#storm").innerHTML = storm;
};

function onReduceLife() {
    let life_total = parseInt(document.querySelector("#life_total").innerHTML);
    life_total -= 1;
    document.querySelector("#life_total").innerHTML = life_total;
};

function onIncreaseLife() {
    let life_total = parseInt(document.querySelector("#life_total").innerHTML);
    life_total += 1;
    document.querySelector("#life_total").innerHTML = life_total;
};

function onReduceStorm() {
    if (storm <= 0) {
        return
    }
    storm -= 1;
    document.querySelector("#storm").innerHTML = storm;
};

function onIncreaseStorm() {
    storm += 1;
    document.querySelector("#storm").innerHTML = storm;
};

function onEndTurn () {
    storm = 0;
    document.querySelector("#storm").innerHTML = storm;
    document.querySelector("#countW").innerHTML = 0;
    document.querySelector("#countU").innerHTML = 0;
    document.querySelector("#countB").innerHTML = 0;
    document.querySelector("#countR").innerHTML = 0;
    document.querySelector("#countG").innerHTML = 0;
};

function onFireLaser() {
    let life_total = parseInt(document.querySelector("#life_total").innerHTML);
    if (life_total < 50) {
        window.alert("Not enough life to fire laser");
    } else if (life_total == 50) {
        window.alert("This would kill you, dumbass");
    } else {
        document.querySelector("#life_total").innerHTML -= 50;
    }
};

function startStandardGame() {
    document.querySelector("#life_total").innerHTML = 20;
    storm = 0;
    document.querySelector("#storm").innerHTML = storm;
};

function startEDHGame () {
    document.querySelector("#life_total").innerHTML = 40;
    storm = 0;
    document.querySelector("#storm").innerHTML = storm;
};

function onPlayReservoir() {
    onIncreaseStorm();
    document.querySelector("#reservoir").style.display ="inherit";
    document.querySelector("#playReservoir").style.display = "none";
    document.querySelector("#destroyReservoir").style.display = "inherit";
}

function onDestroyReservoir() {
    document.querySelector("#reservoir").style.display = "none";
    document.querySelector("#playReservoir").style.display = "inherit";
    document.querySelector("#destroyReservoir").style.display = "none";
}

function onManaAdd(colour) {
    let currentMana = parseInt(document.querySelector("#count" + colour).innerHTML);
    currentMana += 1;
    document.querySelector("#count" + colour).innerHTML = currentMana
}

function onManaSub(colour) {
    let currentMana = parseInt(document.querySelector("#count" + colour).innerHTML);
    if (currentMana <= 0) {
        return
    }
    currentMana -= 1;
    document.querySelector("#count" + colour).innerHTML = currentMana
}