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
