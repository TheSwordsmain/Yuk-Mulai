document.addEventListener("DOMContentLoaded", function () {
  const nightMode = document.querySelector(".nightmode");
  const circle = document.querySelector(".circle");
  const body = document.body;

  function toggleDarkMode() {
      body.classList.toggle("dark-mode");
  }

  nightMode.addEventListener("click", toggleDarkMode);
  circle.addEventListener("click", toggleDarkMode);
});
document.addEventListener("DOMContentLoaded", function () {
  let darkModeButton = document.getElementById("darkModeToggle");

  darkModeButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let darkModeButton = document.getElementById("darkModeToggle");

  darkModeButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
  });
});
