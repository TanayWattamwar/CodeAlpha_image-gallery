/* Current Image Index */
let currentImageIndex = 0;

/* Array with Paths to Your Images */
const images = [
    'images/myImage1.jpg',
    'images/myImage2.jpg',
    'images/myImage3.jpg',
    // Add more image paths as needed
];

/* Function to Show a Particular Image */
function showImage(index) {
    currentImageIndex = index;
    document.getElementById('galleryImage').src = images[currentImageIndex];
}

/* Function to Show Next Image */
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentImageIndex];
}

/* Function to Show Previous Image */
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('galleryImage').src = images[currentImageIndex];
}
