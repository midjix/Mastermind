import { useState } from 'react'

const ColorChangingButton = () => {
    // Liste de couleurs
    const colors = [
      { color: "red", number: 1 },
      { color: "blue", number: 2 },
      { color: "green", number: 3 },
      { color: "yellow", number: 4 },
      { color: "purple", number: 5 },
      { color: "orange", number: 6 },
      { color: "pink", number: 7 },
      { color: "cyan", number: 8 },
      { color: "lime", number: 9 },
      { color: "brown", number: 10 },
    ];
  
    // État pour stocker l'index actuel
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Fonction pour changer la couleur
    const handleClick = () => {
      const nextIndex = (currentIndex + 1) % colors.length; // Boucle sur les couleurs
      setCurrentIndex(nextIndex);
    };
  
    return (
      <button
        onClick={handleClick}
        style={{
          backgroundColor: colors[currentIndex].color,
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Couleur : {colors[currentIndex].color} - Numéro : {colors[currentIndex].number}
      </button>
    );
  };
  
  export default ColorChangingButton;