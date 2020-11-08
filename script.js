$(function(){

    var $mainMenuItems = $("#main-menu ul").children("li"),   // On capture les éléments dans une variable. Les élm sont ici très précis.
    totalMainMenuItems = $mainMenuItems.length,       // Renvoi le nbr. d'élm dans mainMenuItems
    openedIndex = -1,   //Le code pour dire que tout le menu sera fermé.

    init = function(){

        $mainMenuItems.children(".images").click(function(){    // Quand on clique sur l'image, c-à-d l'enfant du 'li' qui a pour class .images

            var newIndex = $(this).parent().index(),        // Le click signifie dès lors qu'on a cliqué sur un .images, mais le 'this' signifie l'instance particulière sur laquelle on a cliqué, parmi les .images.
                                                            // On obtient l'index du li en allant chercher le parent du .images précis sur lequel on a cliqué.
            $item = $mainMenuItems.eq(newIndex),            // Si le newIndex est n°2, Le $item sera le li avec index 2.
            $colorImage = $item.find(".color");             // La variable sera la class '.color' du 'li' index 2.  

            $colorImage.animate({left: "0px"}, 250);        // La class '.color' se décale de 140px ce qui la fait se superposer sur le .bw
            $item.animate({width: "420px"}, 250);           // On élargit le width de la 'li' concernée afin de laisser apparaître la partie description.

            openedIndex = newIndex;

        });


    };

    init();


});