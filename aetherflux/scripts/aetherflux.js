//Aetherflux Reservoir life counter
var storm = 0;
var trackTrigger = true;

function onAetherfluxClick() {
    let aetherflux_count = parseInt(document.querySelector("#aetherflux_count").innerHTML);
    if (trackTrigger) {
        //let storm_text = parseInt(document.querySelector("#storm").innerHTML);
        storm++;
        aetherflux_count++;
        document.querySelector("#storm").innerHTML = storm;
        document.querySelector("#aetherflux_count").innerHTML = aetherflux_count;
    }
    let life_total = parseInt(document.querySelector("#life_total").innerHTML);
    life_total += aetherflux_count;
    document.querySelector("#life_total").innerHTML = life_total;

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

function onReduceStorm(owned_spell) {
    if (storm > 0) {
        storm -= 1;
        document.querySelector("#storm").innerHTML = storm;
    }
    if (owned_spell) {
        let aetherflux_count = parseInt(document.querySelector("#aetherflux_count").innerHTML);
        if (aetherflux_count > 0) {
            aetherflux_count -= 1;
            document.querySelector("#aetherflux_count").innerHTML = aetherflux_count;
		}
	}
};

function onIncreaseStorm(owned_spell) {
    storm++;
    document.querySelector("#storm").innerHTML = storm;
    if (owned_spell) {
        let aetherflux_count = parseInt(document.querySelector("#aetherflux_count").innerHTML);
        aetherflux_count++;
        document.querySelector("#aetherflux_count").innerHTML = aetherflux_count;
	}
};

function onEndTurn () {
    storm = 0;
    document.querySelector("#storm").innerHTML = storm;
    document.querySelector("#countW").innerHTML = 0;
    document.querySelector("#countU").innerHTML = 0;
    document.querySelector("#countB").innerHTML = 0;
    document.querySelector("#countR").innerHTML = 0;
    document.querySelector("#countG").innerHTML = 0;
    document.querySelector("#countC").innerHTML = 0;
    if ( !trackTrigger ){
        onToggleTrackingType();
    }
};

function onFireLaser() {
    if ( document.querySelector("#reservoir").display == "none" ) {
        window.alert("No reservoir in play");
        return;
	}
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

function onToggleTrackingType () {
    trackTrigger = !trackTrigger;
    document.querySelector("#trackTypeButton").innerHTML = trackTrigger ? "Tracking trigger and resolution" : "Only tracking resolution, won't trigger storm increment";
};

function onPlayReservoir() {
    onIncreaseStorm(true);
    document.querySelector("#reservoirContainer").style.display ="inherit";
    document.querySelector("#playReservoir").style.display = "none";
    document.querySelector("#destroyReservoir").style.display = "inherit";
}

function onDestroyReservoir() {
    document.querySelector("#reservoirContainer").style.display = "none";
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