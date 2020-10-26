const initMenu = () => {
  const menuButton = document.querySelector(".toggle-holder");
  const slideMenu = document.querySelector(".slide-menu");
  const toggle = document.getElementById("toggle")
  window.addEventListener("click", (event) => {
    if (event.target === menuButton || event.target.parentNode === toggle || event.target === toggle) {
      if (slideMenu.classList.contains('menu-active')) {
        slideMenu.classList.remove('menu-active');
        menuButton.classList.remove('on');
      } else {
        slideMenu.classList.add('menu-active');
        menuButton.classList.add('on');
      }
    } else {
      slideMenu.classList.remove('menu-active');
      menuButton.classList.remove('on');
    }
  });
  // menueButton.addEventListener('click', (event) => {
  //   if (slideMenu.classList.contains('menu-active')) {
  //     slideMenu.classList.remove('menu-active');
  //     menueButton.classList.remove('on');
  //   } else {
  //     slideMenu.classList.add('menu-active');
  //     menueButton.classList.add('on');
  //   }
  // });
};

export { initMenu };
