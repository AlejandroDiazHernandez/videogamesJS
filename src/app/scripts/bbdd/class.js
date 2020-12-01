
class Videogame {
    constructor(name, src, price, btn, id) {
        this._name = name;
        this._src = src;
        this._price = price;
        this._btn = btn;
        this._id = id;
    }
    showGame(){
     
       console.log(this._name + this._src + this._price +  this._btn + this._id);  
    }

}
 class Videogames{
     constructor(videogame1, videogame2, videogame3, videogame4){
        this._videogame1 = videogame1;
        this._videogame2 = videogame2;
        this._videogame3 = videogame3;
        this._videogame4 = videogame4;
        //la necesitamos para almacenar toda la info, con un array , pero no se como?¿?¿?¿
    }

    get getAllGames(){
        return Videogames;
    }
}

class Asidelink{
    constructor(anchorTitle, href){
        this._achorTitle = anchorTitle;
        this._href = href;
    }

    get getLinks(){
        console.log( this._achorTitle, this._href);
    }
}

class About{
    constructor(name, src, description){
        this._name = name;
        this._src = src;
        this._description = description;
    }

    showAbout(){
        console.log(this._name,this._src,this._description);
    }

}
 

 export{Videogames, Videogame, Asidelink, About};