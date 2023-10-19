// footer-animation.js

// Fungsi untuk mengatur animasi berkedip
function animateBlink() {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add("blink");
        }, index * 500);
    });
}

// Panggil fungsi animasi berkedip setelah halaman dimuat
window.addEventListener("load", animateBlink);
