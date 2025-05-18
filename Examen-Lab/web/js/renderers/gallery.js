"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { GamesRenderer } from "./game.js";
const galleryRenderer = {
    asCardGallery: function(games){
        let galleryContainer= parseHTML("<ul></ul>");

    for (let game of games){
   
        galleryContainer.appendChild(GamesRenderer.asCard(game));
    
    }

    return galleryContainer;
    }
};
export { galleryRenderer };