const switch1 = document.querySelector(".switch-1");
const switch2 = document.querySelector(".switch-2");
const switch3 = document.querySelector(".switch-3");

const activeSwitch = [];

const renderState = () => {
  if (activeSwitch.includes("switch1")) {
    switch1.classList.add("switch-on");
  } else {
    switch1.classList.remove("switch-on");
  }

  if (activeSwitch.includes("switch2")) {
    switch2.classList.add("switch-on");
  } else {
    switch2.classList.remove("switch-on");
  }

  if (activeSwitch.includes("switch3")) {
    switch3.classList.add("switch-on");
  } else {
    switch3.classList.remove("switch-on");
  }
  console.log(activeSwitch);
};

switch1.addEventListener("click", () => {
  if (activeSwitch.includes("switch1")) {
    activeSwitch.splice(activeSwitch.indexOf("switch1"), 1);
  } else {
    activeSwitch.push("switch1");
  }
  if (activeSwitch.length > 2) {
    activeSwitch.shift();
  }
  renderState();
});

switch2.addEventListener("click", () => {
  console.log("switch2 clicked");
  if (activeSwitch.includes("switch2")) {
    activeSwitch.splice(activeSwitch.indexOf("switch2"), 1);
  } else {
    activeSwitch.push("switch2");
  }
  if (activeSwitch.length > 2) {
    activeSwitch.shift();
  }
  renderState();
});

switch3.addEventListener("click", () => {
  if (activeSwitch.includes("switch3")) {
    activeSwitch.splice(activeSwitch.indexOf("switch3"), 1);
  } else {
    activeSwitch.push("switch3");
  }
  if (activeSwitch.length > 2) {
    activeSwitch.shift();
  }
  renderState();
});
