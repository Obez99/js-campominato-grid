//Stampare tot celle in base alla difficoltà selezionata
//Ascoltare il bottone
//Prelevare il valore del selector attuale
const playButton = document.getElementById("playButton")
const difficultySelector = document.getElementById("difficultySelector")
let chosenDifficulty = 0;

playButton.addEventListener("click", function () {
  chosenDifficulty = parseInt(difficultySelector.value);
  cellsCount = cellsCounter(chosenDifficulty);
  console.log(cellsCount);
})

//Convertire il valore nel numero di celle che dovranno essere stampate

//Aggiustare le celle
//Colorare la cella cliccata di azzurro