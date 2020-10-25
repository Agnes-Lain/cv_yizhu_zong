const initExpModal = () => {
  // Get all the mental boxes
  const modals = document.querySelectorAll(".exp-modal");

  // Get all the buttons that opens the modal
  const btns = document.querySelectorAll(".company-exp");

  // Get all the <span> element that closes the modal
  const spans = document.querySelectorAll(".exp-close");

  // iterate the btns to trigger the event of each modal boxes
  btns.forEach((btn, index) => {
    const modal = modals[index];
    const span = spans[index];
    // When the user clicks on the button, open the modal
    btn.onclick = () => {
      modal.style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    span.onclick = () => {
      modal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
};

export { initExpModal };
