const images = [
    "./images/obsidian night.png",
    "./images/morning.png",
    "./images/adolf hitler.png"
];

let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
function updateImage() {
    carouselImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1: 0;
    updateImage();
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextBtn.addEventListener("click", nextImage);
setInterval(nextImage, 4000);