const initProjectInfo = () => {
  const array = [1, 2, 3];
  array.forEach((i) => {
    const project = document.getElementById(`project${i}`);
    const projectInfo = document.getElementById(`project${i}-info`);
    project.addEventListener("mouseover", (event) => {
      projectInfo.style.display = "block";
    });
  });
  array.forEach((i) => {
    const project = document.getElementById(`project${i}`);
    const projectInfo = document.getElementById(`project${i}-info`);
    project.addEventListener("mouseleave", (event) => {
      projectInfo.style.display = "none";
    });
  });
};

export { initProjectInfo };
