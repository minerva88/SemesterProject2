import { baseUrl } from "./constants/api.js";
import { getToken } from "./utils/storage.js";
import { displayMessage } from "./common/displayMessage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/update.html";
}

const postUrl = baseUrl + "posts/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#post-title");
const excerpt = document.querySelector("#excerpt");
const content = document.querySelector("#content");


(async function () {
    try {
        const response = await fetch(postUrl);
        const details = await response.json();

        title.value = details.title.rendered;
        excerpt.value = details.excerpt.rendered;
        content.value = details.content.rendered;

    }
    catch(error) {
        console.log(error);
    }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    const titleValue = title.value.trim();
    const excerptValue = excerpt.value.trim();
    const contentValue = content.value.trim();

    if (titleValue.length === 0 || excerptValue === 0 || contentValue === 0) {
        return displayMessage("warning", "Please fill out all inputs", ".message-container");
    }

    updateArticle(titleValue, excerptValue, contentValue);

}

async function updateArticle(title, excerpt, content) {
    const url = baseUrl + "posts/" + id;
    const data = JSON.stringify({ title: title, excerpt: excerpt, content: content });

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if (json.modified) {
            displayMessage("success", "Post updated!", ".message-container");
        }
    }
    catch(error) {
        console.log(error);
    }
}



