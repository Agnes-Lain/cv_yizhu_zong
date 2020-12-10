const initProjectInfo = () => {
  const array = [0, 1, 2, 3];
  array.forEach((i) => {
    const project = document.getElementById(`project${i}`);
    const projectInfo = document.getElementById(`project${i}-info`);
    project.addEventListener("mouseover", (event) => {
      projectInfo.style.visibility = "visible";
      projectInfo.style.opacity = 1;
    });
  });
  array.forEach((i) => {
    const project = document.getElementById(`project${i}`);
    const projectInfo = document.getElementById(`project${i}-info`);
    project.addEventListener("mouseleave", (event) => {
      projectInfo.style.visibility = "hidden";
      projectInfo.style.opacity = 0;
    });
  });
};

export { initProjectInfo };
