console.log("Client side javascript file is loaded");

const weatherForm = document.querySelector("form");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("testing");
});
