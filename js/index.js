import { baseUrl } from "./constants/api.js";

const articlesUrl = baseUrl + 'posts?_embed';

(async function () {
    const articlesContainer = document.querySelector('.all-articles');

    try {
        const response = await fetch(articlesUrl);
        const json = await response.json();

        console.log(json);

        articlesContainer.innerHTML = '';

        json.forEach(function (article) {
            articlesContainer.innerHTML += `<div class="col">
                                                <div class="card shadow">
                                                    <img src=${article.better_featured_image.media_details.sizes.medium_large.source_url} class="card-img-top" alt=${article.better_featured_image.alt_text}>
                                                    <div class="card-body">
                                                    <h5 class="card-title">${article.title.rendered}</h5>
                                                    <p class="card-text">${article.excerpt.rendered}</p>
                                                    <a href="detail.html?id=${article.id}"><button class="btn btn-primary">Read article</button></a>
                                                    </div>
                                                </div>
                                            </div>`;
        });
    } catch (error) {
        console.log(error);
    }
})();