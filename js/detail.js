import { baseUrl } from "./constants/api.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

if (!id) {
    document.location.href = '/';
}

const articleUrl = baseUrl + 'posts/' + id;

(async function () {
    try {
        const response = await fetch(articleUrl);
        const details = await response.json();

        document.title = details.name;

        const detailContainer = document.querySelector('.full-article');

        detailContainer.innerHTML = `${details.content.rendered}`;
    } catch (error) {
        console.log(error);
    }
})();