//Stampare tot celle in base alla difficoltà selezionata
function cellsCounter(num) {
  let result = 0;
  switch (num) {

    case 1:
      result = 100;
      break;

    case 2:
      result = 81;
      break;

    case 3:
      result = 49;
      break;

  }
  return result;

}

//Generare e aggiustare le celle
function cellsGenerator() {
  gameContainer.innerHTML = "";

  //Stampare le celle
  const cellsPerRow = Math.sqrt(cellsCount);
  const cellSize = 100 / cellsPerRow;

  for (let i = 0; i < cellsCount; i++) {
    const cell = `<div class='cell' style='width: ${cellSize}% ; height: ${cellSize}% '>${i + 1}</div>`;
    gameContainer.innerHTML += cell;
  }

}
