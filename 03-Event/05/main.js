let inputOne = document.querySelector(".input-one");
let inputTwo = document.querySelector(".input-two");

function logInput(event) {
  console.log(`${event.target.value}`);
}

inputOne.addEventListener("click", logInput);
inputOne.addEventListener("input", logInput);
inputTwo.addEventListener("click", logInput);
inputTwo.addEventListener("input", logInput);
