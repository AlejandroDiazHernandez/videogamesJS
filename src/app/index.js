import { addContent, listVideoGames, viewList } from "./scripts/list";
import { viewSearch, search } from "./scripts/search";
import { addContentSearch } from "./scripts/detail";
import { addContentAside } from "./scripts/aside";
import { viewAbout, visualiceMember } from "./scripts/about";
import { state } from "./scripts/state";
import {viewShopping, addContentShopping} from "./scripts/shopping";
import "./styles/styles.scss";
import "bootstrap";
/* import{Videogames} from "./scripts/bbdd/class";
import { videoGames } from "./scripts/bbdd/base-datos"; */

var viewHome = () => {
  console.log("View Home");
  if (state.currentView === "home") {
    document.getElementById("buttonId").click();
  } else {
    state.currentView = "home";
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("list").classList.add("hidden");
    document.getElementById("search").classList.add("hidden");
    document.getElementById("about").classList.add("hidden");
    document.getElementById("shopping").classList.add("hidden");
  }
 
};
// Funcion para añadir listeners en el html
function addListeners() {
  document.getElementById("btnHome").addEventListener("click", viewHome);
  document.getElementById("btnList").addEventListener("click", viewList);
  document.getElementById("btnSearch").addEventListener("click", viewSearch);
  document.getElementById("submit").addEventListener("click", search);
  document.getElementById("btnAbout").addEventListener("click", viewAbout);
  document.getElementById("btnNext").addEventListener("click", visualiceMember);
  document.getElementById("btnPrevious").addEventListener("click", visualiceMember);
  document.getElementById("btnShopping").addEventListener("click", viewShopping);
}

window.onload = function () {
  // Añade Eventos -> Para que la ventana escuche eventos
  addListeners();
  addContent();
  addContentSearch();
  addContentAside();
  addContentShopping();

  console.log(listVideoGames);
};

