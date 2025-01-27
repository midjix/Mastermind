import React from "react";
import useStore from "./store";

// Composant pour afficher les messages
const MessageDisplay = () => {
  const { message } = useStore();

  return <p className="mt-4 text-red-500">{message}</p>;
};

export default MessageDisplay;

