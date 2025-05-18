
"use strict";

import { galleryRenderer } from "./renderers/gallery.js";
import { gamesAPI_auto } from "/js/api/_games.js";
import { GamesRenderer } from "/js/renderers/game.js";



async function loadCards() {
    let container = document.getElementById("divGallery");
    let games = await gamesAPI_auto.getAll();
    console.log(games);
    let cards = galleryRenderer.asCardGallery(games);
    container.appendChild(cards);

    //messageRenderer.showErrorMessage("No tienes solicitudes nuevas", err);



}
async function main() {


    loadCards();

}

document.addEventListener("DOMContentLoaded", main);