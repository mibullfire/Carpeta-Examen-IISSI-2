"use strict";

import { galleryRenderer } from "./renderers/gallery.js";

import { booksAPI_auto } from "./api/_books.js";
import { messageRenderer } from "/web/js/renderers/messages.js"

document.addEventListener("DOMContentLoaded", async function() {
    
        let books = await booksAPI_auto.getAll();
        let divGallery = document.getElementById("content");
        let cardGallery = galleryRenderer.asCardGallery(books);
        divGallery.appendChild(cardGallery);
    
});
