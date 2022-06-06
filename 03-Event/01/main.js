const btn = document.querySelector("button");
function alertSubmit() {
  alert("Form is submitted");
}

// btn.onclick = alertSubmit;

btn.addEventListener("click", alertSubmit);

setTimeout(() => {
  btn.removeEventListener("click", alertSubmit);
  btn.style.backgroundColor = "red";
}, 5000);
