import { aboutUs} from './bbdd/base-datos';
import { state } from "./state";
import { About} from './bbdd/class';

let aboutAlex = new About('Alejandro Diaz','src/app/assets/alex.jpg','Aprendiz motivado de UpGrade hub');
let aboutElena = new About('Elena Rábano','src/app/assets/alex.jpg','Aprendiz motivado de UpGrade hub');
let aboutMara = new About('Mara Garcia','src/app/assets/mara.jpg','Aprendiz motivada de UpGrade hub');
aboutAlex.showAbout();
aboutElena.showAbout();
aboutMara.showAbout();

console.log(aboutAlex,aboutElena,aboutMara);


function addContentAbout(member) {
   
    var newTitle = document.getElementById('h4-about');
        newTitle.innerHTML = member.name;
        newTitle.classList.add('section__about__us__title');

        var newImg = document.getElementById('imagen-about');
        newImg.src = member.src;
        newImg.classList.add('section__about__us__img');

        var newP = document.getElementById('p-about');
        newP.innerHTML = member.description;
        newP.classList.add('section__about__us__p');
        console.log(member);
        
};
    
var viewAbout = () => {
    console.log('View About');
    if (state.currentView === 'about') {
        document.getElementById("buttonId").click();
    } else {
        state.currentView = 'about';
        document.getElementById('home').classList.add('hidden');
        document.getElementById('list').classList.add('hidden');
        document.getElementById('search').classList.add('hidden');
        document.getElementById('about').classList.remove('hidden');
        document.getElementById("shopping").classList.add("hidden");
        addContentAbout(aboutUs[0]);
        
    }
};

function visualiceMember(){ //funcion para cambiar vista de un miembro a otro.

    var displayMember = document.getElementsByClassName("section__about__us__title")[0].innerHTML;

    for(var i = 0; i< aboutUs.length; i++){

        if(displayMember === aboutUs[i].name){
            if(event.path[1].id === "btnPrevious"){

                if(i != 0){
                    addContentAbout(aboutUs[i - 1]);
                } 
            }
            if(event.path[1].id === "btnNext"){
                
                i === aboutUs.length ? addContentAbout(aboutUs[0]) : addContentAbout(aboutUs[i + 1]);
            }
        }
    }
}

export {viewAbout, addContentAbout,visualiceMember};