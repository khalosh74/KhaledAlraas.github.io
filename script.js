// script.js

document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.tilt-image');

    image.addEventListener('mousemove', function (e) {
        const rect = image.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (mouseX - centerX) / centerX;
        const deltaY = (mouseY - centerY) / centerY;

        const maxTilt = 20; // Maximum tilt angle in degrees
        const tiltX = maxTilt * deltaX;
        const tiltY = maxTilt * deltaY;

        image.style.transform = `rotateY(${tiltX}deg) rotateX(${-tiltY}deg)`;
    });

    image.addEventListener('mouseleave', function () {
        image.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});
