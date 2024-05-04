let navigation = document.querySelector(".navigation");
let closeBtn = document.querySelector("#close");
let bars = document.querySelector("#bars");
let blur = document.querySelector("#blur");

bars.addEventListener("click", () => {
  navigation.style.width = "50vw";
  navigation.style.backgroundColor = "white";
  blur.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  navigation.style.width = "0vw";
  blur.style.display = "none";
  navigation.style.backgroundColor = "transparent";
});
