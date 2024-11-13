const switches = [...document.querySelectorAll(".switch")];
const activeSwitch = [];

const renderState = () => {
  switches.forEach((sw, i) => {
    sw.classList.toggle("switch-on", activeSwitch.includes(i));
  });
};

switches.forEach((sw, i) => {
  sw.addEventListener("click", () => {
    const idx = activeSwitch.indexOf(i);
    if (idx > -1) activeSwitch.splice(idx, 1);
    else activeSwitch.push(i);
    if (activeSwitch.length > 2) activeSwitch.shift();
    renderState();
  });
});
