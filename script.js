// script.js

document.addEventListener("DOMContentLoaded", function() {
    const youtubeBtn = document.querySelector('a[href="#youtube"]');
    const tiktokBtn = document.querySelector('a[href="#tiktok"]');
    const instagramBtn = document.querySelector('a[href="#instagram"]');
    const twitterBtn = document.querySelector('a[href="#twitter"]');

    youtubeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('youtube');
    });

    tiktokBtn.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('tiktok');
    });

    instagramBtn.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('instagram');
    });

    twitterBtn.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('twitter');
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
});
