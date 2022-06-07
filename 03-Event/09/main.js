const input = document.querySelector("input");
const btn = document.querySelector("button");
const div = document.querySelector("div");

function check() {
  if (input.value === "") {
    div.innerText = "Phone Number is required";
    div.classList.add("cautiontext");
  } else if (!Number(input.value)) {
    div.innerText = "Phone Number is invalid";
    div.classList.add("cautiontext");
  } else if (input.value.length != 10) {
    div.innerText = "Invalid length";
    div.classList.add("cautiontext");
  } else {
    alert("Your number is Valid");
  }
}

btn.addEventListener("click", check);
