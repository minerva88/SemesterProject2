import { baseUrl } from "./constants/api.js";
import { getToken } from "./utils/storage.js";
import getPostToDelete from "./ui/deleteArticle.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/delete.html";
}

const postUrl = baseUrl + "posts/" + id;


(async function () {
    try {
        const response = await fetch(postUrl);
        const details = await response.json();

        getPostToDelete(details);

    }
    catch(error) {
        console.log(error);
    }
})();

function deleteButton(id) {

    const deleteButton = document.querySelector(".btn.danger");

    deleteButton.onclick = async function () {

        const url = baseUrl + 'posts/' + id;

        const token = getToken();

        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await fetch(url, options);
            const json = await response.json();

            console.log(json);

        } 
        catch(error) {
            console.log(error);
        }
    }
}