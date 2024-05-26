document.querySelectorAll('#testDriveLink').forEach(link => {
    link.addEventListener('click', function(event) {
        // Oprire comportament implicit de navigare
        event.preventDefault();

        // Extrage numele mașinii
        const carName = this.parentNode.querySelector('h2').innerText.trim();

        // Construiește URL-ul cu parametrul mașinii și redirecționează către pagina nouă
        window.location.href = 'calendar.html?masina=' + encodeURIComponent(carName);
    });
});
