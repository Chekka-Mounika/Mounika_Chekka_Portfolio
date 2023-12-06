document.addEventListener("DOMContentLoaded", function () {
    // Text animation
    const animationText = document.getElementById("animationText");
    setInterval(() => {
        animationText.classList.toggle("animated-text");
    }, 2000);

    // Image sliding animation
    const slideInImage = document.getElementById("slideInImage");
    slideInImage.style.transform = "translateX(0%)"; // Slide in image on page load
});

function showMore() {
    alert("More information about Mounika Chekka will be available soon!");
    // Add additional functionality as needed
}
