import React from "react";
import useStore from "./store";
import './index.css'

// Liste des couleurs disponibles
const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

// Composant pour gérer la sélection des couleurs
const InputSection = () => {
  const {
    proposition,
    setProposition,
    codeSecret,
    addHistorique,
    setMessage,
    resetGame,
  } = useStore();
  
  console.log(codeSecret);

  // Vérifie la proposition actuelle et calcule les bien/mal placés
  const verifierProposition = () => {
    if (proposition.includes(null)) {
      setMessage("Veuillez sélectionner une couleur pour chaque emplacement.");
      return;
    }

    let bienPlaces = 0;
    let malPlaces = 0;

    const dejaUtilises = [];

    // Vérifie les couleurs bien placées
    for (let i = 0; i < 4; i++) {
      if (proposition[i] === codeSecret[i]) {
        bienPlaces++;
        dejaUtilises.push(i);
      }
    }

    // Vérifie les couleurs mal placées
    for (let i = 0; i < 4; i++) {
      if (proposition[i] !== codeSecret[i] && codeSecret.includes(proposition[i])) {
        const index = codeSecret.findIndex(
          (color, idx) => color === proposition[i] && !dejaUtilises.includes(idx)
        );
        if (index !== -1) {
          malPlaces++;
          dejaUtilises.push(index);
        }
      }
    }

    // Ajoute la proposition à l'historique
    addHistorique({ proposition: [...proposition], bienPlaces, malPlaces });

    // Affiche un message de succès ou les résultats
    if (bienPlaces === 4) {
      setMessage("Bravo, vous avez trouvé le code secret !");
    } else {
      setMessage(`Bien placés : ${bienPlaces}, Mal placés : ${malPlaces}`);
    }

    
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {/* Affiche les cercles de sélection */}
        {proposition.map((color, index) => (
          <div key={index} className="flex flex-col items-center border">
            <div
              className={`w-10 h-10 rounded-full border ${color ? `bg-${color}-500`: "bg-gray-200"}`}
            ></div>
            <div className="flex gap-1 mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`bg-${color}-400 w-6 h-6 rounded-full `}
                  onClick={() => setProposition(index, color)}
                ></button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={verifierProposition}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Vérifier
      </button>
    </div>
  );
};

export default InputSection;