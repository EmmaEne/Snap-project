let navigation = document.querySelector(".navigation");
let closeBtn = document.querySelector("#close");
let bars = document.querySelector("#bars");
let blur = document.querySelector("#blur");
let register = document.querySelector("#signup");
let login = document.querySelector("#login");
let registerBoard = document.querySelector(".registerDiv");
let arrowDown = document.querySelector("#icon-arrow-down");
let arrow = document.querySelector("#icon-arrow");
let dropdown = document.querySelectorAll(".dropdown-menu");
let dropdownBtn = document.querySelectorAll(".dropdown-btn");

dropdownBtn[0].addEventListener("click", myDropdown);
// dropdownBtn[1].addEventListener('click', myDropdown)
function myDropdown() {
  if (arrowDown.classList !== "icon-arrow-up") {
    arrowDown.classList.toggle("icon-arrow-up");
    dropdown[0].style.display = "block";
  }
  if (arrowDown.classList == "icon-arrow-up") {
    dropdown[0].style.display = "none";
  }
}

dropdownBtn[1].addEventListener('click', ()=>{
  if (arrow.classList !== "icon-arrow-up") {
    arrow.classList.toggle("icon-arrow-up");
    dropdown[1].style.display = "block";
  }
  if (arrow.classList == "icon-arrow-up") {
    dropdown[1].style.display = "none";
  }
})

bars.addEventListener("click", () => {
  navigation.style.width = "60vw";
  navigation.style.backgroundColor = "white";
  blur.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  navigation.style.width = "0vw";
  blur.style.display = "none";
  navigation.style.backgroundColor = "transparent";
});

register.addEventListener("click", () => {
  registerBoard.style.visibility = "visible";
});

dropdownBtn[0].addEventListener('click', myDropdown)
function myDropdown(){
  dropdown[0].style.display = 'block'
  arrowDown[0].style.display = 'none'
  arrowUp[0].style.visibility = 'visible'
}
