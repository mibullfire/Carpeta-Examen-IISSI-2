"use strict";

//si me da error al enviarlo ==> Unauthorized ==> desactivo los endpoints
//de TODO y abro y cierro el servidor de nuevo
//username: carevalo == > contraseña: iissi

import { gamesAPI_auto } from "./api/_games.js";
import { messageRenderer } from "./renderers/messages.js"; //NO SE CAMBIA

//importar esto para las condiciones y errores del formulario
//tengo que crear el archivo
//import { gameValidator } from "./validators/g_validator.js";
import { sessionManager } from "/web/js/utils/session.js"
// userId predefinido cuando te logeas

let urlParams = new URLSearchParams(window.location.search);



function main() {
    if(sessionManager.isLogged()) {
        let refForm = document.getElementById("form-photo-upload");
        refForm.onsubmit = handleSubmit;
    } else {
        window.location.href = "/login.html";
    }
}


async function handleSubmit(game) {
    game.preventDefault();
    let formData = new FormData(game.target);
    formData.append("userId", sessionManager.getLoggedId());
    try {
        await gamesAPI_auto.create(formData);
        window.location.href = "index.html";
    }catch(err){
        messageRenderer.showErrorMessage(err.response.data.message);
    }
}



document.addEventListener("DOMContentLoaded", main);
    



