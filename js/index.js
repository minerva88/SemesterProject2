import { baseUrl } from "./constants/api.js";
import getArticles from "./ui/getArticles.js";
import { searchArticles } from "./ui/search.js";

const articlesUrl = baseUrl + 'posts?_embed';

(async function () {

    try {
        const response = await fetch(articlesUrl);
        const articles = await response.json();

        console.log(articles);

        getArticles(articles);
        searchArticles(articles);
        
    } catch (error) {
        console.log(error);
    }
})();