export const API_KEY = "AIzaSyBDBFxbeB1GVrV8DCtJobmN7DLWAIYDlgU";

export const Valide = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
