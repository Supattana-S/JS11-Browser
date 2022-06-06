const li = document.querySelectorAll("li");

console.log(li);

// for (i = 0; i < li.length; i++) {
//   alert(li[i].innerText);
// }

li.forEach((el) => alert(el.innerText));
