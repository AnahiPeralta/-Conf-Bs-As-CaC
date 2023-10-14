document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const navList = document.getElementById('navList');

    toggleButton.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
}); 
