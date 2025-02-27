const factors = {
    chambre: 15,
    sallebain: 20,
    salon: 25,
    cuisine: 30,
    dressing: 10,
    couloir: 10,
    balcon: 15
};

function calculate() {
    let room = document.getElementById("room").value;
    let height = parseFloat(document.getElementById("height").value);
    let width = parseFloat(document.getElementById("width").value);
    let length = parseFloat(document.getElementById("length").value);
    let spotPower = parseFloat(document.getElementById("spot-power").value);
    let lightingType = document.getElementById("lighting-type").value;

    // Calcul de la surface
    let surface = (width * length).toFixed(2);
    document.getElementById("surface").innerText = `Surface: ${surface} m²`;

    // Calcul des lumens requis
    let factor = factors[room] || 15;  // Valeur par défaut si la pièce est non définie
    let lumensRequired = surface * factor;

    // Si l'utilisateur n'a pas entré de puissance de spot
    if (!spotPower) {
        spotPower = 10;  // Puissance par défaut
        document.getElementById("recommended-power").innerText = `Puissance recommandée : ${spotPower} W`;
    }

    // Calcul du nombre de spots
    let efficiency = 80;  // Efficacité lumineuse standard
    let numberOfSpots = Math.ceil(lumensRequired / (spotPower * efficiency));

    document.getElementById("number-of-spots").innerText = `Nombre de spots recommandés : ${numberOfSpots}`;
}

function changeLanguage() {
    let language = document.getElementById("language").value;

    if (language === "fr") {
        document.title = "LightCalc - Bricol-Elec Services";
    } else if (language === "en") {
        document.title = "LightCalc - Bricol-Elec Services";
    } else if (language === "ar") {
        document.title = "لايت كالك - خدمات بريكول إليك";
    }
}
