"use strict";

//si me da error al enviarlo ==> Unauthorized ==> desactivo los endpoints
//de TODO y abro y cierro el servidor de nuevo
//username: carevalo == > contraseña: iissi

import { booksAPI_auto } from "./api/_books.js";
import { messageRenderer } from "./renderers/messages.js"; //NO SE CAMBIA

//importar esto para las condiciones y errores del formulario
//tengo que crear el archivo
import { bookValidator } from "./validators/b_validator.js";
import { sessionManager } from "/web/js/utils/session.js"
// userId predefinido cuando te logeas

let urlParams = new URLSearchParams(window.location.search);
let bookId = urlParams.get("bookId");

let currentBook = null;
function main() {
    if(sessionManager.isLogged()) {
            let refForm = document.getElementById("form-book-upload");
            refForm.onsubmit = handleSubmit;
    } else{
        window.location.href = "/login.html";
    }
}

async function handleSubmit(book) {
    book.preventDefault();
    let formData = new FormData(book.target);
    formData.append("userId", sessionManager.getLoggedId());
    let errors = bookValidator.validateBook(formData);
    if (errors.length > 0) {
        document.getElementById ("errors").innerHTML="";
        messageRenderer.showErrorMessage("<small>"+errors.join("; &emsp;")+"</small>");
    }else { 
    try {
        await booksAPI_auto.create(formData);
        window.location.href = "index.html";
    }catch(err){
        messageRenderer.showErrorMessage(err.response.data.message);
    }
}
}

document.addEventListener("DOMContentLoaded", main);