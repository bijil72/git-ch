// kozakura.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");

  function createKozakura() {
    const kozakura = document.createElement("div");
    kozakura.classList.add("kozakura");
    kozakura.style.left = `${Math.random() * 100}vw`;
    container.appendChild(kozakura);

    setTimeout(() => {
      kozakura.remove();
    }, 8000);
  }

  setInterval(createKozakura, 500);
});
