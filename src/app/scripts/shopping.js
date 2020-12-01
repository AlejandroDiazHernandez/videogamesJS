import { state } from "./state";
import { videoGames,cartGlobal } from "./bbdd/base-datos";

var viewShopping = () => {
    console.log("View Shopping");
    if (state.currentView === "shopping") {
      document.getElementById("buttonId").click();
    } else {
      state.currentView = "shopping";
      document.getElementById("home").classList.add("hidden");
      document.getElementById("list").classList.add("hidden");
      document.getElementById("search").classList.add("hidden");
      document.getElementById("about").classList.add("hidden");
      document.getElementById("shopping").classList.remove("hidden");
      addContentShopping();
    }
    
  };

  function addContentShopping(){ //listCart es el id de nuestra ul en el html
      document.getElementById('listCart').innerHTML = "";
      var cartInfo=[];
      cartGlobal.forEach(idGame=>{
          videoGames.forEach((videoGame,index) =>{
            if(videoGame.id === idGame){
                cartInfo.push(videoGames[index]);
            }
          });
      });
  
      cartInfo.forEach(element =>{
          var newLi = document.createElement('li');
          newLi.innerHTML= element.name;
          newLi.classList.add('list__ul__item');

          var newImg = document.createElement('img');
          newImg.src = element.src;
          newImg.classList.add('list__ul__item__image');
          newLi.appendChild(newImg);

          var newP = document.createElement('p');
          newP.innerHTML = element.price;
          newP.classList.add('list__ul__item__p');
          newLi.appendChild(newP);

          document.getElementById('listCart').appendChild(newLi);
      });
};

export{ viewShopping, addContentShopping};