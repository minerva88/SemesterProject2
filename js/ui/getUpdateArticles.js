export default function getUpdateArticles(articles){

    const updateContainer = document.querySelector(".update-articles");
    updateContainer.innerHTML = '';
    
    articles.forEach(function (article) {

        updateContainer.innerHTML += `<div class="col">
                                        <div class="card my-3 shadow" style="height: 100%">
                                            
                                            <div class="card-body">
                                            <h5 class="card-title">${article.title.rendered}</h5>
                                            <p class="card-text">${article.excerpt.rendered}</p>
                                            <a href="update.html?id=${article.id}"><button class="btn btn-primary">Update article</button></a>
                                            </div>
                                        </div>
                                    </div>`;
});
}