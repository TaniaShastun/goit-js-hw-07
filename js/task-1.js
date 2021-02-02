const searchLi = document.querySelectorAll (".item");
console.log (`В списке ${searchLi.length} категории.'`)

searchLi.forEach(searcHesh => {
    console.log(
      `Категория: ${
        searcHesh.querySelector("h2").textContent
      }, Количество элементов:${searcHesh.querySelectorAll(".item li").length}`
    );
  });