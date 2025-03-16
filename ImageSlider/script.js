const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg"
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.querySelector(".dots-container");

let autoSlide; // Variable for auto-slide

// Function to create dots
function createDots() {
    images.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active"); // First dot active by default
        dot.addEventListener("click", () => goToImage(index));
        dotsContainer.appendChild(dot);
    });
}

// Function to update image and dots
function updateImage() {
    sliderImage.src = images[currentIndex];

    // Remove active class from all dots
    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });

    // Fade-in effect
    sliderImage.classList.remove("active");
    setTimeout(() => sliderImage.classList.add("active"), 50);
}

// Function to go to a specific image
function goToImage(index) {
    currentIndex = index;
    updateImage();
}

// Previous button event
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Next button event
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Auto-slide function
function startAutoSlide() {
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }, 3000);
}

// Stop auto-slide on hover
sliderImage.addEventListener("mouseenter", () => clearInterval(autoSlide));
sliderImage.addEventListener("mouseleave", startAutoSlide);

// Initialize
createDots();
updateImage();
startAutoSlide();
