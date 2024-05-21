document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".typewriter-text");
    const speed = 100;
    const pauseBetweenElements = 150;

    function typeWriter(element, text, index, callback) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => typeWriter(element, text, index + 1, callback), speed);
        } else {
            callback();
        }
    }

    function startTypewriterEffect(elements, index = 0) {
        if (index < elements.length) {
            const element = elements[index];
            const text = element.getAttribute('data-text');
            typeWriter(element, text, 0, () => {
                setTimeout(() => startTypewriterEffect(elements, index + 1), pauseBetweenElements);
            });
        }
    }
  
    startTypewriterEffect(elements);
});