const tombol = document.getElementById('mode-toggle');

tombol.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')) {
        tombol.textContent = "Gelap";
    } else {
        tombol.textContent = "Terang";
    }
});