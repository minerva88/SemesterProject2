export default function getArticles(articles){

    
    const articlesContainer = document.querySelector('.all-articles');

    articlesContainer.innerHTML = '';
    
    articles.forEach(function (article) {

        articlesContainer.innerHTML += `<div class="col">
                                        <div class="card shadow" style="height: 100%">
                                            
                                            <div class="card-body">
                                            <h5 class="card-title">${article.title.rendered}</h5>
                                            <p class="card-text">${article.excerpt.rendered}</p>
                                            <a href="detail.html?id=${article.id}"><button class="btn btn-primary">Read article</button></a>
                                            </div>
                                        </div>
                                    </div>`;
});
}

//<img src=${article.better_featured_image.media_details.sizes.medium.source_url} class="card-img-top" alt=${article.better_featured_image.alt_text}>
//Image rendering, need to find out how to upload featured image to a post.