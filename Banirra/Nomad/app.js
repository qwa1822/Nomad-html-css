// <⚠️ DONT DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = document.querySelector("h2");

function ClickChangeColor() {
  superEventHandler.innerText = "That was  a right Click!";
  superEventHandler.style.color = colors[0];
}

function hoverChangeColor() {
  superEventHandler.innerText = "Hello"
  superEventHandler.style.color = colors[1];
}

function mouserLeave() {
  superEventHandler.innerText = "The mouse is gone";
  superEventHandler.style.color = colors[2];
}
function window2() {
  superEventHandler.style.color = colors[4];
}

function mouseright(){
    superEventHandler.style.color=colors[3];
}

superEventHandler.addEventListener("click", ClickChangeColor);
superEventHandler.addEventListener("mouseenter", hoverChangeColor);
superEventHandler.addEventListener("mouseleave", mouserLeave);
superEventHandler.addEventListener("contextmenu",mouseright);
window.addEventListener("resize", window2);
