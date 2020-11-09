$(function(){

    var $mainMenuItems = $("#main-menu ul").children("li"),         // On capture les éléments dans une variable. Les élm sont ici très précis.
    totalMainMenuItems = $mainMenuItems.length,                     // Renvoi le nbr. d'élm dans mainMenuItems
    openedIndex = 2,                                                //Le code pour dire que tout le menu sera fermé. Aucun Item ouvert.

    init = function(){
        bindEvents();

        if(validIndex(openedIndex))                                                 
            animateItems($mainMenuItems.eq(openedIndex), true, 700);   // Création de l'ouverture de départ.

    }
        bindEvents = function(){
            $mainMenuItems.children(".images").click(function(){    // Quand on clique sur l'image, c-à-d l'enfant du 'li', qui a pour class .images
                var newIndex = $(this).parent().index();            // Le click signifie dès lors qu'on a cliqué sur un .images, mais le 'this' signifie l'instance particulière sur laquelle on a cliqué, parmi les .images.
                                                                    // On obtient l'index du li en allant chercher le parent du .images précis sur lequel on a cliqué.
                                                                    // $item = $mainMenuItems.eq(newIndex);                 Si le newIndex est n°2, Le $item sera le li avec index 2.
                checkAndAnimeItem(newIndex);
                
            });

            $(".button").hover(                                     // Remplacement du css par du jQuery
                function(){
                    $(this).addClass("hovered");                    //  On cible le '.button' particulier avec (this) et on lui ajoute la class en lien avec le fichier css.
                },
                function(){
                    $(this).removeClass("hovered");                 // On retire cette class.
                }
            );

            $(".button").click(function(){
                var newIndex = $(this).index();
                checkAndAnimeItem(newIndex);
            });


        },

        validIndex = function(indexToCheck){                                        // Cette fct. nous dis si l'index est valide.
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    
    },

    animateItems = function($item, toOpen, speed){                  // Création de la fct. d'animation.
        var $colorImage = $item.find(".color"),
        itemParam = toOpen ? {width: "420px"}:{width: "140px"},     // Création des var d'animation. toOpen ?, true => valeur 1, false => valeur 2.
        colorImageParam = toOpen ? {left: "0px"}:{left: "140px"};
        $colorImage.animate(colorImageParam, speed);                // On donne les var crées aux objets à animer.
        $item.animate(itemParam,speed);
    },

    checkAndAnimeItem = function(indexToCheckAndAnimate)            // On met le code d'animation dans une fonction pour ne pas avoir à l'écrire plusieurs fois dans notre fichier.
    {
        if (openedIndex === indexToCheckAndAnimate)
            {
                animateItems($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);             // Fermeture de l'item, si on clique 2 fois sur le même index.
                openedIndex = -1;                                                                // Code signifiant qu'aucun index n'est ouvert.
            }
            else
            {
            if(validIndex(indexToCheckAndAnimate))                                               // Nous dit si l'index sur lequel on a appuyé est valid, puis execute le code qui suit.
        
                    animateItems($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);         // Fermeture d'item précédemment ouvert.
                    openedIndex = indexToCheckAndAnimate;                                        // Passage de l'ancien index au nouvel index.
                    animateItems($mainMenuItems.eq(openedIndex), true, 250);                     // Ouverture du nouvel item, qui est $mainMenuItems.eq(openedIndex).
                }
            }
    };

    init();

});