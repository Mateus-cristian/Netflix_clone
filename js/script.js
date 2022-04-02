(function obterImagens() {
  const wrapper = document.querySelector(".wrapper");

  for (var i = 1; i < 10; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", `./img/mini${i}.jpg`);
    div.classList.add("swiper-slide", "wrapper__item");
    div.appendChild(img);
    wrapper.appendChild(div);
  }
})();

(function menuHamburguer() {
  const btnAtivaMenu = document.querySelector(".menu-hamburguer");
  const menuLateral = document.querySelector(".menu-hamburguer__lateral");

  btnAtivaMenu.addEventListener("click", function (event) {
    event.preventDefault();
    menuLateral.classList.toggle("ativo");
  });

  window.addEventListener("click", function (event) {
    if (
      event.target.className != "menu__link" &&
      event.target.className != "menu-hamburguer"
    ) {
      menuLateral.classList.remove("ativo");
    }
  });
})();
