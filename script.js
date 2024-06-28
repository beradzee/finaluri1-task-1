const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");

const div = document.querySelector(".color-div");

red.addEventListener("click", function () {
  let box = document.createElement("div");
  box.className = "red-box";
  div.appendChild(box);
});

green.addEventListener("click", function () {
  let box = document.createElement("div");
  box.className = "green-box";
  div.appendChild(box);
});

blue.addEventListener("click", function () {
  let box = document.createElement("div");
  box.className = "blue-box";
  div.appendChild(box);
});
