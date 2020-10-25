const initMenu = () => {
  const menueButton = document.querySelector(".toggle-holder");
  const slideMenu = document.querySelector(".slide-menu");
  menueButton.addEventListener('click', (event) => {
    if (slideMenu.classList.contains('menu-active')) {
      slideMenu.classList.remove('menu-active');
      menueButton.classList.remove('on');
      // window.addEventListener("click", (e) => {
      //   if (e.target !== slideMenu) {
      //     slideMenu.classList.remove('menu-active');
      //     menueButton.classList.remove('on');
      //   }
      // });
    } else {
      slideMenu.classList.add('menu-active');
      menueButton.classList.add('on');
    }
  });
};

export { initMenu };
