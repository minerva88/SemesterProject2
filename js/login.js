import { authUrl } from "./constants/api.js";
import { displayMessage } from "./common/displayMessage.js";
import { saveToken } from "./utils/storage.js";
import { saveUser } from "./utils/storage.js";

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "Invalid values", ".message-container");
    }

    doLogin(usernameValue, passwordValue);
}

async function doLogin(username, password) {
    const url = authUrl;

    const data = JSON.stringify({ username: username, password: password });

    const options = {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.user_display_name) {
            displayMessage("success", "Successfully logged in", ".message-container");

            saveToken(json.token);
            saveUser(json.user_display_name);

            location.href = "/admin.html";
        }

        if (json.code) {
            displayMessage("warning", "Invalid login details", ".message-container");
        }

        console.log(json);
    } catch (error) {
        console.log(error);
    }
}