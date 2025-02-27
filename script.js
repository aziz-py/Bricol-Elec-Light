const FACTORS = {
    chambre: 200,
    salon: 250,
    cuisine: 350,
    salle_bain: 300,
    couloir: 150,
    balcon: 100
};

const EFFICIENCY = {
    chaud: 80,
    neutre: 90,
    froid: 100
};

function calculate(e) {
    e.preventDefault();
    let room = document.getElementById("room").value;
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);
    let color = document.getElementById("color").value;
    let power = parseFloat(document.getElementById("power").value) || 10;

    let surface = length * width;
    if (surface < 1) {
        alert("Surface invalide !");
        return;
    }

    let lumens = surface * FACTORS[room];
    let spots = Math.ceil(lumens / (power * EFFICIENCY[color]));

    document.getElementById("results").innerHTML = `
        Surface : ${surface.toFixed(2)} m²<br>
        Lumens nécessaires : ${lumens} lm<br>
        Nombre de spots : ${spots}<br>
        Puissance recommandée : ${power} W
    `;
}

function changeLanguage() {
    let lang = document.getElementById("language").value;
    console.log("Langue sélectionnée :", lang);
}
