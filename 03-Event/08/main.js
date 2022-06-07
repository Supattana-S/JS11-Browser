const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

function hide() {
  h1.classList.toggle("hidden");
}
function toggleText(btn) {
  if (btn.innerText === "Hide") {
    btn.innerText = "Show";
  } else if (btn.innerText === "Show") {
    btn.innerText = "Hide";
  }
}
function result() {
  hide();
  toggleText(btn);
}

btn.addEventListener("click", result);
