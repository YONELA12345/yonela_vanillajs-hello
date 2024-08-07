/* eslint-disable */
import "bootstrap";
import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
  const cardValueElement = document.getElementById("card-value");
  const topLeftIconElement = document.getElementById("top-left-icon");
  const bottomRightIconElement = document.getElementById("bottom-right-icon");

  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const suits = [
    { name: "Corazones", icon: "bi-suit-heart-fill", color: "red" },
    { name: "Picas", icon: "bi-suit-spade-fill", color: "black" },
    { name: "Tréboles", icon: "bi-suit-club-fill", color: "black" },
    { name: "Diamantes", icon: "bi-suit-diamond-fill", color: "red" }
  ];

  function generateRandomCard() {
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];

    cardValueElement.textContent = randomValue;

    topLeftIconElement.innerHTML = `<i class="bi ${randomSuit.icon}"></i>`;
    topLeftIconElement.className = `top-left-icon ${randomSuit.color}`;

    bottomRightIconElement.innerHTML = `<i class="bi ${randomSuit.icon}"></i>`;
    bottomRightIconElement.className = `bottom-right-icon ${randomSuit.color}`;
  }

  // Genera la carta inicial
  generateRandomCard();

  // Recarga la carta cada 5 segundos
  setInterval(generateRandomCard, 5000);
});
