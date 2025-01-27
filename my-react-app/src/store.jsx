import { create } from 'zustand';

const useStore = create((set) => ({
  // Code secret généré aléatoirement
  codeSecret: generateSecretCode(),

  // Proposition actuelle (tableau de 4 couleurs ou null si non sélectionné)
  proposition: [null, null, null, null],

  // Historique des propositions faites
  historique: [],

  // Message à afficher à l'utilisateur
  message: "",

  // Fonction pour mettre à jour une couleur dans la proposition actuelle
  setProposition: (index, color) => set((state) => {
      const newProposition = [...state.proposition];
      newProposition[index] = color;
      return { proposition: newProposition };
    }),

  // Ajouter une tentative à l'historique
  addHistorique: (entry) => set((state) => ({ historique: [...state.historique, entry] })),

  // Modifier le message affiché
  setMessage: (msg) => set({ message: msg }),

  // Réinitialiser le jeu (nouveau code secret, effacer l'historique et la proposition)
  resetGame: () => set({
    codeSecret: generateSecretCode(),
    proposition: [null, null, null, null],
    historique: [],
    message: "",
  }),
}));

// Fonction pour générer un code secret aléatoire de 4 couleurs
function generateSecretCode() {
  const colors = ["rouge", "bleu", "vert", "jaune", "orange", "violet"];
  return Array.from({ length: 4 }, () => colors[Math.floor(Math.random() * colors.length)]);
}

export default useStore;
