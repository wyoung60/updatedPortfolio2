//Loads github and linkedIn pages
const githubLink = document.querySelector("#icon0");
const linkedinLink = document.querySelector("#icon1");
const openButton = document.querySelector("#openButton");

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
    window.location = "index.html";
  });
}
