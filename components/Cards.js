// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(res => {
        console.log(res.data.articles)
        const articles = document.querySelector(".cards-container")
        res.data.articles.bootstrap.forEach(article => {
            articles.appendChild(createCard(article));
        })
        res.data.articles.javascript.forEach(article => {
            articles.appendChild(createCard(article));
        })
        res.data.articles.technology.forEach(article => {
            articles.appendChild(createCard(article));
        })
        res.data.articles.node.forEach(article => {
            articles.appendChild(createCard(article));
        })
        res.data.articles.jquery.forEach(article => {
            articles.appendChild(createCard(article));
        })
    })
    .catch(err => {
        console.log(err);
    })



function createCard(articles) {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const image = document.createElement("div");
    const url = document.createElement("img");
    const name = document.createElement("span");

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(image);
    image.appendChild(url);
    author.appendChild(name);


    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    image.classList.add("img-container");

    headline.textContent = articles.headline;
    name.textContent = articles.authorName;
    url.setAttribute("src", articles.authorPhoto);

    return card;
}