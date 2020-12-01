

var cartGlobal = [];


var videoGames = [{

    name: 'Final fantasy VII remake',
    src: 'src/app/assets/final-fantasy.jpg',
    price: '49,99€',
    btn: '<i class="fas fa-shopping-cart"></i> ¡CÓMPRALO YA!',
    id: 0,
},
{
    name: 'The last of us 2',
    src: 'src/app/assets/the-last-of-us.jpg',
    price: '69,99€',
    btn: '<i class="fas fa-shopping-cart"></i> ¡CÓMPRALO YA!',
    id: 1,
},
{
    name: 'God of war',
    src: 'src/app/assets/god-of-war.jpg',
    price: '49,99€',
    btn: '<i class="fas fa-shopping-cart"></i> ¡CÓMPRALO YA!',
    id:2,
},
{
    name: 'GTA V premium edition',
    src: 'src/app/assets/gta-v.jpg',
    price: '59,99€',
    btn: '<i class="fas fa-shopping-cart"></i> ¡CÓMPRALO YA!',
    id: 3,
},

];
var videoGamesSinopsis = [
    'Nueva adaptación de la obra maestra del rol japonés. El remake del séptimo capítulo de la saga nos trasladará al mundo de la entrega original de PlayStation y PC, renovando sus gráficos para la consola PlayStation 4, añadiendo nuevos detalles la historia, así como aportando presumibles cambios jugables al sistema de batallas y de exploración. Este nuevo Final Fantasy VII tiene detrás al mismo equipo creativo del original.',
    'Nueva adaptación de la obra maestra del rol japonés. El remake del séptimo capítulo de la saga nos trasladará al mundo de la entrega original de PlayStation y PC, renovando sus gráficos para la consola PlayStation 4, añadiendo nuevos detalles la historia, así como aportando presumibles cambios jugables al sistema de batallas y de exploración. Este nuevo Final Fantasy VII tiene detrás al mismo equipo creativo del original.',
    'Nueva adaptación de la obra maestra del rol japonés. El remake del séptimo capítulo de la saga nos trasladará al mundo de la entrega original de PlayStation y PC, renovando sus gráficos para la consola PlayStation 4, añadiendo nuevos detalles la historia, así como aportando presumibles cambios jugables al sistema de batallas y de exploración. Este nuevo Final Fantasy VII tiene detrás al mismo equipo creativo del original.',
    'Nueva adaptación de la obra maestra del rol japonés. El remake del séptimo capítulo de la saga nos trasladará al mundo de la entrega original de PlayStation y PC, renovando sus gráficos para la consola PlayStation 4, añadiendo nuevos detalles la historia, así como aportando presumibles cambios jugables al sistema de batallas y de exploración. Este nuevo Final Fantasy VII tiene detrás al mismo equipo creativo del original.',
];

var videoGamesWithSinopsis = [];

var asideTitle = 'PLATFORM';

var asideLinks = [
    {
    anchorTitle: '<i class="fab fa-playstation"></i> PS4',
    href:'https://store.playstation.com/es-es/grid/STORE-MSF75508-FULLGAMES/1',
    },
    {anchorTitle: '<i class="fab fa-xbox"></i> XBOX ',
    href:'https://www.xbox.com/es-es/games/xbox-one?cat=enhanced',
    },
    {anchorTitle: '<i class="fas fa-desktop"></i> PC',
    href:'https://www.instant-gaming.com/es/?gclid=CjwKCAjw57b3BRBlEiwA1ImytrpZHmUCvXvX9TiElfnM-i9aGAvsH1QcVhrSbwTVK6jh7Yq9Warq4BoCxEcQAvD_BwE',
    }
];

var aboutUs=[
    {
    name: 'Alejandro Diaz',
    src: 'src/app/assets/alex.jpg',
    description: 'Aprendiz motivado de UpGrade hub',
    },

    {
    name: 'Elena Rábano',
    src: 'src/app/assets/elena.jpg',
    description: 'Aprendiz motivada de UpGrade hub',
    },

    {
    name: 'Mara Garcia',
    src: 'src/app/assets/mara.jpg',
    description: 'Aprendiz motivada de UpGrade hub',
    },
];

export { videoGames, videoGamesWithSinopsis,videoGamesSinopsis, asideTitle, asideLinks, aboutUs, cartGlobal};

