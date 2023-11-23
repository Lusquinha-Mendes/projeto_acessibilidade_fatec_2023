function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Atualiza o estilo do plugin VLibras
    const vwPlugin = document.querySelector('.enabled');
    if (body.classList.contains('dark-mode')) {
        vwPlugin.style.filter = 'invert(100%)';
    } else {
        vwPlugin.style.filter = 'invert(0)';
    }
}
