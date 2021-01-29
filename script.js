//Loads github and linkedIn pages
const githubLink = document.querySelector("#icon0");
const linkedinLink = document.querySelector("#icon1");
const openButton = document.querySelector("#openButton");
const tabName = document.querySelectorAll(".tabName");
const returnHome = document.querySelector(".mainTitle");

if (githubLink) {
  githubLink.addEventListener("click", () => {
    const url = "https://github.com/wyoung60";
    window.open(url);
  });
}

if (linkedinLink) {
  linkedinLink.addEventListener("click", () => {
    const url = "https://www.linkedin.com/in/wesley-young-0953821b2";
    window.open(url);
  });
}

if (openButton) {
  openButton.addEventListener("click", function () {
    console.log("here");
    window.location = "./Assets/index2.html";
  });
}

if (tabName) {
  tabName.forEach((tab) => {
    tab.addEventListener("click", () => {
      let selectedTab = tab.parentElement;
      selectedTab.setAttribute;
      let previousTab = selectedTab;
      let nextTab = selectedTab;
      selectedTab.setAttribute("class", "window window1");
      for (i = 2; i < 4; ) {
        if (nextTab.nextElementSibling) {
          nextTab = nextTab.nextElementSibling;
          nextTab.setAttribute("class", `window window${i}`);
          i++;
        } else {
          previousTab = previousTab.previousElementSibling;
          previousTab.setAttribute("class", `window window${i}`);
          i++;
        }
      }
    });
  });
}

if (returnHome) {
  returnHome.addEventListener("click", () => {
    window.location = "../index.html";
  });
}
