const btnHide = document.querySelector(".btn-hide");

function hide(e) {
  e.target.classList.add("hidden");
  console.log(e);
}

btnHide.addEventListener("click", hide);
