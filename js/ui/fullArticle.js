export default function fullArticle(details) {
    const detailContainer = document.querySelector('.full-article');

        detailContainer.innerHTML = `<div class="full-article">
                                        <h2>${details.title.rendered}</h2>
                                        <div>
                                            ${details.content.rendered}
                                        </div>
                                    </div>`;
}