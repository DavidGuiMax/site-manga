document.addEventListener("DOMContentLoaded", () => {
  const curtirBtn = document.getElementById("curtirBtn");
  const favoritarBtn = document.getElementById("favoritarBtn");

  if (curtirBtn) {
    curtirBtn.addEventListener("click", () => {
      curtirBtn.classList.toggle("ativo");

      if (curtirBtn.classList.contains("ativo")) {
        curtirBtn.textContent = "Curtido 👍";
      } else {
        curtirBtn.textContent = "Curtir 👍";
      }
    });
  }

  if (favoritarBtn) {
    favoritarBtn.addEventListener("click", () => {
      favoritarBtn.classList.toggle("ativo");

      if (favoritarBtn.classList.contains("ativo")) {
        favoritarBtn.textContent = "Favoritado ❤️";
      } else {
        favoritarBtn.textContent = "Favoritar ❤️";
      }
    });
  }
});
