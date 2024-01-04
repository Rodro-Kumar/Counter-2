const counter = document.querySelector("#counter");
const btn = document.querySelectorAll(".btn");

let count = 0;

btn.forEach((btn) => {
  btn.addEventListener("click", (eachBtn) => {
    let className = eachBtn.target.className;
    if (className.includes("increase")) {
      count++;
    } else if (className.includes("decrease")) {
      count--;
    } else {
      count = 0;
    }
    counter.innerHTML = count;
  });
});

// let stop = setInterval(() => {
//   counter.innerHTML = count++;
//   if (count > 30) {
//     clearInterval(stop);
//   }
// }, 100);
