import React from "react";
import InputSection from "./InputSection";
import MessageDisplay from "./MessageDisplay";
import History from "./History";

// Composant principal du jeu Mastermind
const Mastermind = () => {
  
  return (
    
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mastermind</h1>
      <p className="mb-2">Trouvez le code secret en sélectionnant les couleurs !</p>
      {/* Section pour entrer une proposition */}
      <InputSection />
      {/* Section pour afficher les messages */}
      <MessageDisplay />
      {/* Section pour afficher l'historique */}
      <History />
    </div>
  );
};

export default Mastermind;

