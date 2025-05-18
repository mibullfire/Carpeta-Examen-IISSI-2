"use strict";
import { gamesAPI_auto } from "/js/api/_games.js";
import { GamesRenderer } from "/js/renderers/game.js";
import { usersAPI_auto } from "/web/js/api/_users.js";
import { usersRenderer } from "/js/renderers/users.js";

// DOM elements that we will use
const usersDiv = document.getElementById("container");

// Main function that will run when the page is ready
async function main() {
    let users = await usersAPI_auto.getAll();
    let userCards = await usersRenderer.asCardGallery(users);
    usersDiv.append(userCards);
    
}




document.addEventListener("DOMContentLoaded", main);