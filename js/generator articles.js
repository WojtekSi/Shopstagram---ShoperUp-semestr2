const articles = [
    {   
        autor: {
            name: "John",
            adress: "Szczecin, Polska",
            imageSrc: "./images/users/john.jpeg",
            imageAlt: "John"
        },
        post: {
            imageSrc: "./images/photos/gielda.jpeg",
            imageAlt: "Rekordowe wzrosty na gieldzie"
        }
    },
    {   
        autor: {
            name: "Lisa",
            adress: "Kraków, Polska",
            imageSrc: "./images/users/lisa.jpeg",
            imageAlt: "Lisa"
        },
        post: {
            imageSrc: "./images/photos/stoisko.jpeg",
            imageAlt: "Targi e-commerce"
        }
    },
    {   
        autor: {
            name: "Cristiano",
            adress: "Kraków, Polska",
            imageSrc: "./images/users/cristiano.jpeg",
            imageAlt: "Cristiano"
        },
        post: {
            imageSrc: "./images/photos/presentation.jpeg",
            imageAlt: "Targi e-commerce"
        }
    },
    {   
        autor: {
            name: "Cristiano",
            adress: "Kraków, Polska",
            imageSrc: "./images/users/cristiano.jpeg",
            imageAlt: "Cristiano"
        },
        post: {
            imageSrc: "./images/photos/placeholder.png",
            imageAlt: "Shoper placeholder"
        }
    },



];



const root = document.querySelector(".content-wrapper__main");



articles.map(function(article, numberArticle){

    const post = document.createElement("article");
    post.setAttribute("class","post");

        if(numberArticle == articles.length - 1){
            post.setAttribute("class","post hidden")
        };;

    const postHeader = document.createElement("div");
    postHeader.setAttribute("class","post__header");

    const userDetails = document.createElement("div");
    userDetails.setAttribute("class","user-details");

    const userDetails__img = document.createElement("div");
    userDetails__img.setAttribute("class","user-details__img");

    const imageSquare = document.createElement("div");
    imageSquare.setAttribute("class", "image-square image-square--small is-active");

    const imageContent = document.createElement("img");
    imageContent.setAttribute("src", "https://via.placeholder.com/150");
    imageContent.setAttribute("alt", "alt");

    const userDetails__content = document.createElement("div");
    userDetails__content.setAttribute("class", "user-details__content");


    const userDetails__contentName = document.createElement("h3");
    userDetails__contentName.innerText = "name surname";

    const userDetails__contentAdress = document.createElement("p");
    userDetails__contentAdress.innerHTML = "city, country";

    const postHeaderMenu = document.createElement("a");
    postHeaderMenu.setAttribute("href", "#");

    const postHeaderMenuImg = document.createElement("img");
    postHeaderMenuImg.setAttribute("src", "./images/icons/menu.svg");
    postHeaderMenuImg.setAttribute("alt", "Menu");


    const postContent = document.createElement("div");
    postContent.setAttribute("class","post__content")

    const postImg = document.createElement("div");
    postImg.setAttribute("class", "post__img");

    const postImgConetne = document.createElement("img");
    postImgConetne.setAttribute("src", "https://via.placeholder.com/2048");
    postImgConetne.setAttribute("alt", "alt");

    const postDetails = document.createElement("div");
    postDetails.setAttribute("class","post__details");

    postDetails.innerHTML = `<div class="post__actions"> 
    <a href="#" class="post__actions-item">
    <img src="./images/icons/heart.svg" alt="Like" />
    </a>

    <a href="#" class="post__actions-item">
    <img src="./images/icons/comment.svg" alt="Comment" />
    </a>

    <a href="#" class="post__actions-item">
    <img src="./images/icons/send.svg" alt="Share" />
    </a>
    </div>

    <div class="post__comments">
    <p>
    <strong>Liczba polubień: 2</strong>
    </p>

    <p class="post__comments-comment">
    <strong>Will Smith:</strong>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Voluptatem sint veritatis omnis, quos magni ducimus enim
    officia praesentium itaque soluta ipsam delectus,
    voluptate quod culpa, temporibus a minus dicta
    necessitatibus!
    <a href="#">więcej</a>
    </p>
    </div>`;


    const postFooter = document.createElement("div");

    postFooter.innerHTML = `<div class="post__footer">
    <img src="./images/icons/smile.svg" alt="Add comment" />
    <input type="text" placeholder="Dodaj komentarz..." />
    </div>
    </div>`;
    
    imageContent.setAttribute("src", article.autor.imageSrc);
    imageContent.setAttribute("alt", article.autor.imageAlt);

    userDetails__contentName.innerText = article.autor.name;
    userDetails__contentAdress.innerHTML = article.autor.adress;

    postImgConetne.setAttribute("src", article.post.imageSrc);
    postImgConetne.setAttribute("alt", article.post.imageAlt);

    root.insertBefore(post, root.lastElementChild);
        post.appendChild(postHeader);
            postHeader.appendChild(userDetails);
                userDetails.appendChild(userDetails__img).appendChild(imageSquare).appendChild(imageContent);
                userDetails.appendChild(userDetails__content);
                    userDetails__content.appendChild(userDetails__contentName);
                    userDetails__content.appendChild(userDetails__contentAdress);
            postHeader.appendChild(postHeaderMenu).appendChild(postHeaderMenuImg);
        post.appendChild(postContent);
            postContent.appendChild(postImg).appendChild(postImgConetne)
            postContent.appendChild(postDetails);
            postContent.appendChild(postFooter);


})