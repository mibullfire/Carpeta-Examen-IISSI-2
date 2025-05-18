"use strict";

const bookValidator = {
validateBook: function (formData) {
    let errors = [];

//Una variable por cada tipo del objeto las "" son los name
//let userID = formData.get("userId");
let author = formData.get("author");
let numPages= formData.get("numPages");


//push añade el error
//todos los campos son obligatorios. -- > required
//if ((userID && titulo && descripcion && fechaSubida &&

//errors.push("Ningun valor puede ser null");

//la longitud tiene que ser par
if (author.length < 2 ) {    
errors.push("La longitud del author 3 carateres");
}
//el valor de la temporada tiene que estar entre 1 y 10, incluidos
if (numPages < 1 || numPages > 5000) {
errors.push("El valor de paginas entre 0 y 5000");
}
return errors;
}
};

export { bookValidator };