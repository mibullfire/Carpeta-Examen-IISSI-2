"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const photoRenderer = {
    asCard: function (photo) {
        let html = `
        <div class="row card bg-dark text-light">
            <div class="row">
                <div class="col col-md-4">
                    
                    <a href="photo_detail.html?photoId=${photo.photoId}">
                        <img src=${photo.url} class="card-img-top">
                    </a>
                
                </div>
                <div class="col col-md-8">
                    <h5 class="card-title text-center">${photo.title}</h5>
                    <p>${photo.description}</p>
                    <p class="text-end">@${photo.username}
                    <img src="${photo.avatarUrl}" class="avatar"></p>
                </div>
            </div>
       
        </div>`

        let newCard = parseHTML(html);
        return newCard;
    },
    asDetails: function (photo) {
        let html = `<div class="photo-details">
    <h3>${photo.title}</h3>
    <h6>${photo.description}</h6>
    <p>Uploaded by <a href="user_profile.html" class="user-link">User ${photo.userId}
    </a> on ${photo.date}</p>
    <hr>
    <img src="${photo.url}" class="img-fluid">
    </div>`;
        let photoDetails = parseHTML(html);
        return photoDetails;
    },
};

export { photoRenderer };