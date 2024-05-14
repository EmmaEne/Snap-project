let navigation = document.querySelector(".navigation");
let closeBtn = document.querySelector("#close");
let bars = document.querySelector("#bars");
let blur = document.querySelector("#blur");
let register = document.querySelector("#signup");

document.addEventListener('DOMContentLoaded', function() {
  const navigation = document.querySelector('.navigation');
  const closeBtn = document.getElementById('close-menu-btn');
  const blur = document.getElementById('blur');  // Assuming there's an element with this ID
  const bars = document.getElementById('bars');  // Assuming there's an element with this ID

  bars.addEventListener('click', () => {
      navigation.style.width = "60vw";
      navigation.style.backgroundColor = "white";
      blur.style.display = "block";
  });

  closeBtn.addEventListener('click', () => {
      navigation.style.width = "0vw";
      blur.style.display = "none";
      navigation.style.backgroundColor = "transparent";
  });

  const dropdowns = document.querySelectorAll('.dropdown-mobile');

  dropdowns.forEach(dropdown => {
      const btn = dropdown.querySelector('.dropdown-btn');
      const menu = dropdown.querySelector('.dropdown-menu-mobile');
      const icon = dropdown.querySelector('.icon-arrow');

      btn.addEventListener('click', () => {
          const isVisible = menu.style.display === 'block';

          // Hide all dropdown menus
          document.querySelectorAll('.dropdown-menu-mobile').forEach(menu => {
              menu.style.display = 'none';
          });

          // Reset all arrow icons
          document.querySelectorAll('.icon-arrow').forEach(icon => {
              icon.src = 'img/icon-arrow-up.svg';
          });

          // Toggle current dropdown menu
          if (isVisible) {
              menu.style.display = 'none';
              icon.src = 'img/icon-arrow-up.svg';
          } else {
              menu.style.display = 'block';
              icon.src = 'img/icon-arrow-down.svg';
          }
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.dropdown-btn');
    const menu = dropdown.querySelector('.dropdown-menu');
    const icon = dropdown.querySelector('.icon-arrow');

    btn.addEventListener('click', () => {
      const isVisible = menu.style.display === 'block';

      // Hide all dropdown menus
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });

      // Reset all arrow icons
      document.querySelectorAll('.icon-arrow').forEach(icon => {
        icon.src = 'img/icon-arrow-up.svg';
      });

      // Toggle current dropdown menu
      if (isVisible) {
        menu.style.display = 'none';
        icon.src = 'img/icon-arrow-up.svg';
      } else {
        menu.style.display = 'block';
        icon.src = 'img/icon-arrow-down.svg';
      }
    });
  });
});





























// let login = document.querySelector("#login");
// let registerBoard = document.querySelector(".registerDiv");
// let arrowDown = document.querySelector("#icon-arrow-down");
// let arrow = document.querySelector("#icon-arrow");
// let dropdown = document.querySelectorAll(".dropdown-menu");
// let dropdownBtn = document.querySelectorAll(".dropdown-btn");
// let mobileDropDown = document.querySelector('#icon-arrow-down-mobile')
// let dropdownMobile = document.querySelectorAll('.dropdown-menu-mobile');






// register.addEventListener("click", () => {
//   registerBoard.style.visibility = "visible";
// });

// dropdownBtn[0].addEventListener('click', myDropdown)
// function myDropdown(){
//   dropdown[0].style.display = 'block'
//   arrowDown[0].style.display = 'none'
//   arrowUp[0].style.visibility = 'visible'
// }
