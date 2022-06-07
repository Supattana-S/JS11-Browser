const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

function hideP() {
  h1.className = "hidden";
}

btn.addEventListener("click", hideP);
