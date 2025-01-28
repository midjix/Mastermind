import React from "react";
import useStore from "../stores/store";

// Composant pour afficher l'historique des propositions
const History = () => {
  const { historique } = useStore();

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Historique</h2>
      <ul>
        {historique.map((essai, index) => (
          <li key={index} className="mt-2">
            Proposition : {essai.proposition.join(", ")} - Bien placés : {essai.bienPlaces} -
            Mal placés : {essai.malPlaces}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;