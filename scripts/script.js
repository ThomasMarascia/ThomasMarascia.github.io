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

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});