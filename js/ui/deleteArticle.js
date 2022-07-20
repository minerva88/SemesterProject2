export default function getPostToDelete(details) {
    const deleteContainer = document.querySelector(".delete-container");

    deleteContainer.innerHTML = `<div class="col">
                                        <div class="card my-3 shadow" style="height: 100%">
                                            
                                            <div class="card-body">
                                            <h5 class="card-title">${details.title.rendered}</h5>
                                            <p class="card-text">${details.excerpt.rendered}</p>
                                            <button class="btn btn-danger" id="delete-btn">Delete article</button>
                                            </div>
                                        </div>
                                    </div>`;
};