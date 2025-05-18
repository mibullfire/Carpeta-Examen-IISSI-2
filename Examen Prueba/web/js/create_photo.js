"use strict";

import { photosAPI_auto } from "./api/_photos.js";
import { messageRenderer } from "./renderers/messages.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");
let photo;

function main() {
    if (photoId) {
        loadPhoto();
    }
    let refForm = document.getElementById("form-photo-upload");
    refForm.onsubmit = handleSubmit;
}

async function loadPhoto() {
    try {
        //traer la foto de la BD
        photo = await photosAPI_auto.getById(photoId);
        let refInputURL = document.getElementById("input-url");
        refInputURL.value = photo.url;
        let refInputTitle = document.getElementById("input-title");
        refInputTitle.value = photo.title;
        let refInputDesc = document.getElementById("input-description");
        refInputDesc.value = photo.description;
        let refInputVis = document.getElementById("input-visibility");
        refInputVis.value = photo.visibility;

    } catch (error) {
        messageRenderer.showErrorMessage(error);
    }
}

async function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);

    if (photoId) {

        formData.append("userId", photo.userId);
        formData.append("photoId", photo.photoId);
        try {

            await photosAPI_auto.update(formData, photoId);
            window.location.href = "/photo_detail.html?photoId=" + photoId;
        } catch (error) {
            messageRenderer.showErrorMessage(error.response.data.message);
        }
    } else {
        //TODO: Cambiar por el id del usuario logueado
        formData.append("userId", 1);
        try {
            let response = await photosAPI_auto.create(formData);
            window.location.href = "/photo_detail.html?photoId=" + response.lastId;
        } catch (error) {
            messageRenderer.showErrorMessage(error.response.data.message);
        }
    }
}

document.addEventListener("DOMContentLoaded", main);