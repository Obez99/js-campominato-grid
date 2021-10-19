
//Ascoltare il bottone
//Prelevare il valore del selector attuale
const playButton = document.getElementById("playButton")
const difficultySelector = document.getElementById("difficultySelector")
const gameContainer = document.getElementById("gameContainer")
let chosenDifficulty = 0;

playButton.addEventListener("click", function () {
  //Cancellare le celle precedenti
  //Convertire il valore nel numero di celle che dovranno essere stampate
  chosenDifficulty = parseInt(difficultySelector.value);
  cellsCount = cellsCounter(chosenDifficulty);
  cellsGenerator();

  //Colorare la cella cliccata di azzurro
})