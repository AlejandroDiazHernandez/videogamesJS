import { videoGames, cartGlobal} from './bbdd/base-datos';
import { state } from "./state";
import { Videogames, Videogame} from './bbdd/class';

/* let videogame1 = new Videogame ('Final fantasy VII remake','src/app/assets/final-fantasy.jpg','49,99€','<i class="fas fa-shopping-cart"></i> ¡CÓMPRALO YA!', 0);
let videogame2 = new Videogame ('The last of us 2','src/app/assets/the-last-of-us.jpg','49,99€','<i class="fas fa-shopping-cart"></i> ¡CÓMPRALO YA!', 1);
let videogame3 = new Videogame ('God of war','src/app/assets/god-of-war.jpg','49,99€','<i class="fas fa-shopping-cart"></i> ¡CÓMPRALO YA!', 2);
let videogame4 = new Videogame ('GTA V premium edition','src/app/assets/gta-v.jpg','49,99€','<i class="fas fa-shopping-cart"></i> ¡CÓMPRALO YA!', 3 );
videogame1.showGame();
videogame2.showGame();
videogame3.showGame();
videogame4.showGame();
console.log(videogame1,videogame2,videogame3,videogame4);

let allGames = videogame1 + videogame2 + videogame3+ videogame4;
allGames.getAllGames; */



function addContent() {
    videoGames.forEach(element => {
        var newLi = document.createElement('li');
        newLi.innerHTML = element.name;
        newLi.classList.add('list__ul__item')
        buildLi(newLi, element);
        document.getElementById('listUl').appendChild(newLi);
       
        console.log(element);
    });

    function buildLi(newLi, element) {
        var newImg = document.createElement('img');
        newImg.src = element.src;
        newImg.classList.add('list__ul__item__image');
        newLi.appendChild(newImg);
        

        var newP = document.createElement('p');
        newP.innerHTML = element.price;
        newP.classList.add('list__ul__item__p');
        newLi.appendChild(newP);
        

        var newBtn = document.createElement('button');
        newBtn.type = "button";
        newBtn.innerHTML =element.btn;
        newBtn.classList.add('list__ul__item__btn');
        newBtn.setAttribute('idGame', element.id);
        newBtn.addEventListener('click', function() {
        cartGlobal.push(element.id);
        console.log("ADDED TO CART " + cartGlobal);
    })
        newLi.appendChild(newBtn);

    }
}
var listVideoGames = videoGames;

var viewList = () => {
    console.log('View List');

    if (state.currentView === 'list') {
        document.getElementById("buttonId").click();
    } else {
        state.currentView = 'list';
        document.getElementById('home').classList.add('hidden');
        document.getElementById('list').classList.remove('hidden');
        document.getElementById('search').classList.add('hidden');
        document.getElementById('about').classList.add('hidden');
        document.getElementById("shopping").classList.add("hidden");
    }
};

export { addContent, listVideoGames, viewList };