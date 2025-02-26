function loadHTML(filePath, placeholderId) {
    fetch(filePath)
        .then((response) => response.text())
        .then((html) => {
            document.getElementById(placeholderId).innerHTML = html;
        })
        .catch((error) => console.error(`Error loading ${filePath}:`, error));
}

// Llamadas a la función para cargar cada sección
loadHTML('header.html', 'header-placeholder');
loadHTML('hero.html', 'hero-placeholder');
loadHTML('footer.html', 'footer-placeholder');
loadHTML('team.html', 'team-placeholder');