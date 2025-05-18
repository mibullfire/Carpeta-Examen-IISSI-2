"use strict"

import { galleryRenderer } from "/js/renderers/gallery.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { photosAPI_auto } from "/js/api/_photos.js";

async function main() {
    loadPhotos();
}

async function loadPhotos() {

    let galleryContainer = document.getElementById("gallery");

    try {
        let photos = await photosAPI_auto.getAll();
        console.log(photos);

        let photosRen = galleryRenderer.asCardGallery(photos);
        // console.log(photosRen);
        galleryContainer.appendChild(photosRen);

    } catch (error) {
        messageRenderer.showErrorMessage("Error al cargar la galería", error);
    }

}

document.addEventListener("DOMContentLoaded", main);