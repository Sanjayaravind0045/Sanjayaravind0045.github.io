document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

document.querySelector('.cancel-btn').addEventListener('click', function() {
    document.querySelector('.navbar').classList.remove('active');
});