document.addEventListener("DOMContentLoaded", function () {
  const toggleMenu = document.querySelector(".toggle-menu");
  const thisFather = document.querySelector(".this-father");

  toggleMenu.addEventListener("click", function () {
    thisFather.style.display =
      thisFather.style.display === "flex" ? "none" : "flex";
  });
});

// map

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".buttons button");
  const maps = document.querySelectorAll(".map");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const mapId = this.getAttribute("data-map");

      // Remove active class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to the clicked button
      this.classList.add("active");

      // Remove active class from all maps
      maps.forEach((map) => map.classList.remove("active"));
      // Add active class to the target map
      document.getElementById(mapId).classList.add("active");
    });
  });
});
