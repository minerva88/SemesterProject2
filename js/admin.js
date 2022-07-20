import getUpdateArticles from "./ui/getUpdateArticles.js";
import { baseUrl } from "./constants/api.js";
import getDeleteArticles from "./ui/getDeleteArticles.js";

const articlesUrl = baseUrl + 'posts';

const updateButton = document.querySelector('.update-btn');
const deleteButton = document.querySelector('.delete-btn');

updateButton.addEventListener('click', renderPostsToUpdate);
deleteButton.addEventListener('click', renderPostsToDelete);

//Renders full list of articles to update when button is clicked
async function renderPostsToUpdate() {

    try {
        const response = await fetch(articlesUrl);
        const articles = await response.json();
        
        getUpdateArticles(articles);

    } catch(error) {
        console.log(error);
    }
}

async function renderPostsToDelete() {

    try {
        const response = await fetch(articlesUrl);
        const articles = await response.json();
        
        getDeleteArticles(articles);

    } catch(error) {
        console.log(error);
    }
}