let navigation = document.querySelector(".navigation");
let closeBtn = document.querySelector("#close");
let bars = document.querySelector("#bars");
let blur = document.querySelector("#blur");
let register = document.querySelector('#signup');
let login = document.querySelector('#login');
let registerBoard = document.querySelector('.registerDiv');

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

register.addEventListener('click', ()=>{
  registerBoard.style.visibility = 'visible';
})