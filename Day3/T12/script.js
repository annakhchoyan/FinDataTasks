const images = [
    './images/image1.jpg',
    './images/image2.jpg',
    './images/image3.webp',
];

let currentIndex = 0;

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("slider-image").src = images[currentIndex];
}

document.getElementById("slider-image").src = images[currentIndex];