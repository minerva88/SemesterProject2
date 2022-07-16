import { baseUrl } from "./constants/api.js";
import fullArticle from "./ui/fullArticle.js";

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

        document.title = details.title.rendered;

        fullArticle(details);
        
    } catch (error) {
        console.log(error);
    }
})();