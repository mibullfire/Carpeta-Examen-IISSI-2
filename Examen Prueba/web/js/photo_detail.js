"use strict";
import { photoRenderer } from "/js/renderers/photos.js";
import { photosAPI_auto } from "/js/api/_photos.js";
import { messageRenderer } from "/js/renderers/messages.js";

// Get the ID of the photo to load from the URL params
let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

async function main() {
  loadPhotoDetails();
  let refInfoDelete = document.getElementById("btn-delete");
  let refInfoEdit = document.getElementById("btn-edit");

  refInfoDelete.onclick = deletePhoto;
  refInfoEdit.onclick = editPhoto;


}


async function loadPhotoDetails() {
  let photoContainer = document.querySelector("#photo-details-column");
  try {
    let photo = await photosAPI_auto.getById(photoId);
    let arbol = photoRenderer.asDetails(photo);
    let referenciaDiv = document.getElementById("divDetails");
    referenciaDiv.insertBefore(arbol,referenciaDiv.childNodes[1]);
  } catch (err) {
  messageRenderer.showErrorMessage(err);
}
}



async function deletePhoto(){
  let respuesta = confirm("realmente desea borrar la foto?");
  if(respuesta){
    try{
      await photosAPI_auto.delete(photoId);
      window.location ="/index.html";
      } catch(err) {
        messageRenderer.showErrorMessage(err.response.data.message);
        }
    }

}
function editPhoto() {
  window.location.href = "photo_edit.html?photoId=" + photoId;
}


document.addEventListener("DOMContentLoaded", main);
