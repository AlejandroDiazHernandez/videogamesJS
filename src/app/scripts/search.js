// Función crear un formulario
import {videoGames} from './bbdd/base-datos';
import{addContentSearch} from './detail';
import { state } from "./state";

var search = () => {
   var searching = document.getElementById('inputSearch').value;
   var lowerCase=searching.toLowerCase();
   console.log(searching);
   
    videoGames.forEach(element => {
        if(lowerCase == element.name.toLowerCase()){
            addContentSearch();
        }
        
    });
}

var viewSearch = () => {
    console.log('View Search');
    if (state.currentView === 'search') {
        document.getElementById("buttonId").click();
        
    } else {
        state.currentView = 'search';
        document.getElementById('home').classList.add('hidden');
        document.getElementById('list').classList.add('hidden');
        document.getElementById('search').classList.remove('hidden');
        document.getElementById('about').classList.add('hidden');
        document.getElementById("shopping").classList.add("hidden");
    }

};

export {viewSearch, search};