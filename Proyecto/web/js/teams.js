"use strict";

import { teamsRenderer } from "./renderers/teamsR.js";

// Main function that will run when the page is ready
async function main() {
    let bodyDiv = document.getElementById("body");

    bodyDiv.innerHTML += await teamsRenderer.asCardGallery();
}

document.addEventListener("DOMContentLoaded", main);