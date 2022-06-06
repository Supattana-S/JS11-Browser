const a = document.querySelector("a");

function Leave() {
  let inputToLeave = confirm("Leave for https://google.com ?");
  console.log(inputToLeave);
  if (inputToLeave) {
    location.assign("https://google.com");
  }
}

a.addEventListener("click", Leave);
