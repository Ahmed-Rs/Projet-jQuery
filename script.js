$(function(){

    var $mainMenuItems = $("#main-menu ul").children("li"),   // On capture les éléments dans une variable. Les élm sont ici très précis.
    totalMainMenuItems = $mainMenuItems.length,       // Renvoi le nbr. d'élm dans mainMenuItems
    openedIndex = -1,   //Le code pour dire que tout le menu sera fermé. Aucun Item ouvert.

    init = function(){

        $mainMenuItems.children(".images").click(function(){    // Quand on clique sur l'image, c-à-d l'enfant du 'li', qui a pour class .images
            var newIndex = $(this).parent().index(),        // Le click signifie dès lors qu'on a cliqué sur un .images, mais le 'this' signifie l'instance particulière sur laquelle on a cliqué, parmi les .images.
                                                            // On obtient l'index du li en allant chercher le parent du .images précis sur lequel on a cliqué.
            $item = $mainMenuItems.eq(newIndex);            // Si le newIndex est n°2, Le $item sera le li avec index 2.
            
            if (openedIndex === newIndex)
            {
                animateItems($item, false, 250);            // Fermeture de l'item, si on clique 2 fois sur le même index.
                openedIndex = -1;                           // Code signifiant qu'aucun index n'est ouvert.
            }
            else
            {
            if(validIndex(newIndex))                                                // Nous dit si l'index sur lequel on a appuyé est valid, puis execute le code qui suit.
                {
                    animateItems($mainMenuItems.eq(openedIndex), false, 250);       // Fermeture d'item précédemment ouvert.
                    openedIndex = newIndex;                                         // Passage de l'ancien index au nouvel index.
                    animateItems($item, true, 250);                                 // Ouverture du nouvel item, qui est $mainMenuItems.eq(openedIndex).
                }
            }
            
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

    };

    init();


});