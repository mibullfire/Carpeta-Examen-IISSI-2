"use strict";

import { teamsAPI_auto } from "./api/_teams.js";
import { messageRenderer } from "./renderers/messages.js";

// Main function that will run when the page is ready
let URLparams = new URLSearchParams(window.location.search);
let teamId = URLparams.get("teamId");

function main() {
    document.getElementById("team-form").onsubmit = sendForm;
    if(teamId){
        document.getElementById("title").innerHTML = "Edit team";
        document.getElementById("btn").innerHTML = "Update";
        loadForm();
    }
}

async function sendForm(event){
    let form = event.target;
    event.preventDefault();

    try{
        let formData = new FormData(form);

        if(formData.get("president").length%5 !=0){
            messageRenderer.showErrorMessage("La longitud de president debe ser módulo 5");
            return;
        }

        if(teamId){
            await teamsAPI_auto.update(formData, teamId);
        }
        else{
            await teamsAPI_auto.create(formData);

        }

        window.location.href = "/teams.html";

    }catch(err){
        messageRenderer.showErrorMessage(err);

    }

}

////////////////////////////////////////////////////////////
async function loadForm(){
    let currentTeam = await teamsAPI_auto.getById(teamId);
//name, president, fieldCapacity, foundationDate, photoURL
    let inputName = document.getElementById("name-input");
    let inputPresident = document.getElementById("president-input");
    let inputCapacity = document.getElementById("fieldCapacity-input");
    let inputDate = document.getElementById("foundationDate-input");
    let inputURL = document.getElementById("photoURL-input");

    try{
        inputURL.value = currentTeam.photoURL;
        inputDate.value = currentTeam.foundationDate;
        inputCapacity.value = currentTeam.fieldCapacity;
        inputPresident.value = currentTeam.president;
        inputName.value = currentTeam.name;

    }catch(error){
        messageRenderer.showErrorMessage(error);
        
    }
}

document.addEventListener("DOMContentLoaded", main);