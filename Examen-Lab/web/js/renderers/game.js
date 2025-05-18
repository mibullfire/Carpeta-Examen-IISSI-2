"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
    const GamesRenderer = {
        asCard: function(game) {
            let html= `<ul> <div id="texto"> ${game.title}
                     <img class="card-img-top custom-card-img" src="${game.imageUrl}" style="float:left;"</div>
                    <li>${game.developer}</li>
                    <li>${game.releaseDate}</li>
                    <li>${game.viewScore}</li>
                    <li>${game.title}</li>
                    <li>@${game.userId},<img  src="${game.userId.avatarUrl}" class="photo-user-avatar"></img></li>
                    </ul>`
        let card = parseHTML(html);
        return card;
        }
    };
export { GamesRenderer };