function whitedark() {
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



document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll(".text");
    const increaseBtn = document.getElementById("increaseBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
 
    let currentSize = 20; 
    const maxSize = 28;   
    const minSize = 12;   
 
    function adjustFontSize(size) {
        textElements.forEach(function (element) {
            element.style.fontSize = size + "px";
        });
    }
 
    increaseBtn.addEventListener("click", function () {
        if (currentSize < maxSize) {
            currentSize += 2;
            adjustFontSize(currentSize);
        }
    });
 
    decreaseBtn.addEventListener("click", function () {
        if (currentSize > minSize) {
            currentSize -= 2;
            adjustFontSize(currentSize);
        }
    });
});
