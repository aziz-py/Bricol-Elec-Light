function validateForm() {
  // Récupérer les valeurs des dimensions
  const hauteur = parseFloat(document.getElementById("hauteur").value);
  const largeur = parseFloat(document.getElementById("largeur").value);
  const longueur = parseFloat(document.getElementById("longueur").value);

  let errorMessage = "";

  // Vérification que les dimensions sont supérieures à 1 mètre
  if (hauteur <= 1) {
    errorMessage += "La hauteur doit être supérieure à 1 mètre.\n";
  }
  if (largeur <= 1) {
    errorMessage += "La largeur doit être supérieure à 1 mètre.\n";
  }
  if (longueur <= 1) {
    errorMessage += "La longueur doit être supérieure à 1 mètre.\n";
  }

  // Si des erreurs existent, afficher un message d'erreur
  if (errorMessage) {
    alert(errorMessage);
    return false;  // Empêche la soumission du formulaire
  }

  // Vérification si la puissance est renseignée
  let puissance = document.getElementById("puissance").value;
  if (!puissance) {
    // Si la puissance n'est pas renseignée, définir une puissance recommandée en fonction de la pièce
    const piece = document.getElementById("piece").value;
    switch (piece) {
      case "Salon":
        puissance = 15;  // Puissance recommandée pour le salon
        break;
      case "Chambre":
        puissance = 10;  // Puissance recommandée pour la chambre
        break;
      case "Salle de bain":
        puissance = 12;  // Puissance recommandée pour la salle de bain
        break;
      case "Cuisine":
        puissance = 12;  // Puissance recommandée pour la cuisine
        break;
      case "Chambre de dressing":
        puissance = 10;  // Puissance recommandée pour la chambre de dressing
        break;
      case "Couloir":
        puissance = 8;   // Puissance recommandée pour le couloir
        break;
      case "Balcon":
        puissance = 12;  // Puissance recommandée pour le balcon
        break;
      default:
        puissance = 10;  // Puissance par défaut pour les autres pièces
    }
  }

  // Calcul de la surface
  const surface = largeur * longueur;

  // Calcul du nombre de spots
  const lumensRequis = surface * getEclairageFactor(piece);  // getEclairageFactor() serait une fonction qui détermine le facteur en fonction de la pièce
  const nombreSpots = Math.ceil(lumensRequis / (puissance * 80));  // Exemple d'efficacité lumineuse de 80 lumens par watt

  // Affichage des résultats
  document.getElementById("resultat").innerHTML = `
    Nombre de spots recommandés : ${nombreSpots} <br>
    Surface de la pièce : ${surface} m² <br>
    Puissance recommandée : ${puissance} W
  `;
  return false;
}

function getEclairageFactor(piece) {
  switch (piece) {
    case "Salon":
      return 30;  // Facteur d'éclairage pour le salon
    case "Chambre":
      return 20;  // Facteur d'éclairage pour la chambre
    case "Salle de bain":
      return 35;  // Facteur d'éclairage pour la salle de bain
    case "Cuisine":
      return 30;  // Facteur d'éclairage pour la cuisine
    case "Chambre de dressing":
      return 25;  // Facteur d'éclairage pour la chambre de dressing
    case "Couloir":
      return 15;  // Facteur d'éclairage pour le couloir
    case "Balcon":
      return 30;  // Facteur d'éclairage pour le balcon
    default:
      return 25;  // Facteur d'éclairage par défaut
  }
}

function changeLanguage() {
  const lang = document.getElementById("lang").value;
  if (lang === "fr") {
    // Affichage en français
    document.title = "LightCalc - Calculateur d'éclairage";
  } else if (lang === "en") {
    // Affichage en anglais
    document.title = "LightCalc - Lighting Calculator";
  } else if (lang === "ar") {
    // Affichage en arabe
    document.title = "LightCalc - آلة حاسبة للإضاءة";
  }
}
