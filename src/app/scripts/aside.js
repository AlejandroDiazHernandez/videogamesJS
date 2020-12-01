import {asideTitle, asideLinks} from './bbdd/base-datos';
import {Asidelink} from './bbdd/class';

let aside1 = new Asidelink('<i class="fab fa-playstation"></i> PS4','https://store.playstation.com/es-es/grid/STORE-MSF75508-FULLGAMES/1');
let aside2 = new Asidelink('<i class="fab fa-xbox"></i> XBOX ', 'https://www.xbox.com/es-es/games/xbox-one?cat=enhanced');
let aside3 = new Asidelink('<i class="fas fa-desktop"></i> PC', 'https://www.instant-gaming.com/es/?gclid=CjwKCAjw57b3BRBlEiwA1ImytrpZHmUCvXvX9TiElfnM-i9aGAvsH1QcVhrSbwTVK6jh7Yq9Warq4BoCxEcQAvD_BwE');
aside1.getLinks;
aside2.getLinks;
aside3.getLinks;

console.log(aside1,aside2,aside3);


function addContentAside(){
    
    var titleAside = document.getElementById ('asideTitle');
    titleAside.innerText = asideTitle;
    
    asideLinks.forEach(element =>{
        
        var newA = document.createElement ('a');
        newA.innerHTML = element.anchorTitle;
        newA.href = element.href;
        newA.classList.add ('container-aside__sidebar__anchor');
        document.getElementById('sideBar').appendChild(newA);
    });
}

export{addContentAside};
