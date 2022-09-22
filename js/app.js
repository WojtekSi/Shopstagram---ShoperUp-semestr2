const postLoaderButton = document.querySelector(".post--loader");
const hiddenPost = document.querySelector(".post.hidden");

postLoaderButton.addEventListener("click", function() {
    hiddenPost.classList.remove("hidden");
});