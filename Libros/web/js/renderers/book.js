"use strict";

import { parseHTML } from "../utils/parseHTML.js";

const bookRenderer = {
    asCard : function (book) {
        let html  = `<div class="card text-light bg-dark col-md-4">
                    <img src="${book.imageUrl}" class="img--fluid" width="auto">
                        <div class="card-body">
                        <h5 class="card-title text-center">${book.title}</h5>
                        <p class="card-text m-0">Autor:${book.author}</p>
                        <p class="card-text m-0 ">Fecha de salida:${book.releaseDate}</p>
                        <p class="card-text m-0 ">Numero de paginas:${book.numPages}</p>

                        </div>
                     </div>`;
    let arbol = parseHTML(html);
    return arbol;
    }
    

}

export { bookRenderer };