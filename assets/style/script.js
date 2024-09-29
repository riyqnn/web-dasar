const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', function() {
    searchInput.focus();
    searchInput.style.width = '230px';  
});

searchInput.addEventListener('blur', function() {
    searchInput.style.width = '0'; 
});
