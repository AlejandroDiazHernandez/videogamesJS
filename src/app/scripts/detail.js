import {
  videoGamesSinopsis,
  videoGamesWithSinopsis,
  videoGames,
} from "./bbdd/base-datos";

function addContentSearch() {
  videoGamesWithSinopsis.forEach((element) => {
    var searching = document.getElementById("inputSearch").value;
    var lowerCase = searching.toLowerCase();

    if (lowerCase === element.name.toLowerCase()) {
      var newTitle = document.getElementById("h4");
      newTitle.innerHTML = element.name;
      newTitle.classList.add("container__search-result__title");

      var newImg = document.getElementById("img");
      newImg.src = element.src;
      newImg.classList.add("container__search-result__img");

      var newP = document.getElementById("p");
      newP.innerHTML = element.price;
      newP.classList.add("container__search-result__price");

      var newP2 = document.getElementById("p2");
      newP2.innerHTML = element.sinopsis;
      newP2.classList.add("container__search-result__sinopsis");

      var newBtn = document.getElementById("button");
      newBtn.innerHTML = element.btn;
      newBtn.type = "button";
      newBtn.classList.add("container__search-result__newBtn");
      newBtn.classList.remove("hidden");
    }
  });
}

videoGames.forEach((game, i) => {
  var gameAdvance = game;
  gameAdvance.sinopsis = videoGamesSinopsis[i];
  videoGamesWithSinopsis.push(gameAdvance);
});

export { addContentSearch };
