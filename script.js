const gameLogic = (()=>{

  const box = document.querySelectorAll(".box");
  let turnXonEven = 1;
  
Array.from(box).forEach((element) => {
  element.addEventListener("click", () => {
    if (turnXonEven > 9) clearGame();
    if (!element.classList.contains("ring") && !element.classList.contains("cross"))
      {
        turnXonEven++;
        element.classList.add(turn());
      }
    });
  });
  
  let turn = () => (turnXonEven % 2 === 0 ? "ring" : "cross");


let clearGame = function () {
  turnXonEven = 1;
  Array.from(box).forEach((element) => {
    element.classList.remove("ring", "cross");
  });
};

})()

