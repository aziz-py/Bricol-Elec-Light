document.getElementById('calc-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Récupérer les valeurs du formulaire
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  const height = parseFloat(document.getElementById('height').value);
  const room = document.getElementById('room').value;
  const spotColor = document.getElementById('spot-color').value;
  const spotPower = parseFloat(document.getElementById('spot-power').value) || 10; // 10W par défaut

  // Vérifier si les dimensions sont valides
  if (length <= 0 || width <= 0 || height <= 0) {
    alert('Les dimensions doivent être supérieures à 1m.');
    return;
  }

  // Calculer la surface
  const surface = length * width;

  // Déterminer le facteur d'éclairage en fonction de la pièce
  const lightingFactors = {
    chambre: 12,
    'salle-de-bain': 15,
    salon: 10,
    cuisine: 15,
    dressing: 12,
    couloir: 8,
    balcon: 8,
  };

  const lightingFactor = lightingFactors[room];

  // Calcul des lumens requis
  const lumensRequired = surface * lightingFactor;

  // Efficacité lumineuse basée sur la couleur du spot
  const spotEfficiency = {
    'warm-white': 80,
    'neutral-white': 90,
    'cool-white': 100,
  };

  const efficiency = spotEfficiency[spotColor];

  // Calcul du nombre de spots
  const numberOfSpots = Math.ceil(lumensRequired / (spotPower * efficiency));

  // Calcul de la puissance recommandée si l'utilisateur n'a pas fourni de valeur
  const recommendedPower = spotPower || 10;

  // Affichage des résultats
  document.getElementById('surface').textContent = `Surface de la pièce : ${surface.toFixed(2)} m²`;
  document.getElementById('number-of-spots').textContent = `Nombre de spots recommandés : ${numberOfSpots}`;
  document.getElementById('recommended-power').textContent = `Puissance recommandée : ${recommendedPower} W`;
});
