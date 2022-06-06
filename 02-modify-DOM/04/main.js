const btn = document.querySelector(".btn");

// setTimeout(() => {
//   btn.classList.add("redBackground");
// }, 3000);

// setTimeout(() => {
//   btn.classList.remove("redBackground");
// }, 6000);

setTimeout(() => {
  btn.style.backgroundColor = "red";
}, 3000);

setTimeout(() => {
  btn.style.backgroundColor = null;
}, 6000);
