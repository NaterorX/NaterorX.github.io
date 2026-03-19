document.addEventListener("DOMContentLoaded", function() {

    // ===== EFFET MACHINE A ECRIRE (TYPEWRITER) =====
    const typewriterElement = document.getElementById('typewriter');
    if(typewriterElement) {
        // Mets ton prénom et nom ici !
        const textToType = "Becquart Natéo";
        let index = 0;

        function typeWriter() {
            if (index < textToType.length) {
                typewriterElement.innerHTML += textToType.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // Vitesse de frappe (100ms)
            }
        }
        // Démarre l'effet après un petit délai
        setTimeout(typeWriter, 500);
    }

    // ===== ANIMATIONS FADE-IN =====
    const fadeElements = document.querySelectorAll('.fade-in');
    const options = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }, index * 100);
            }
        });
    }, options);

    fadeElements.forEach(el => observer.observe(el));

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== ACTIVE NAV LINK HIGHLIGHTING =====
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // Remet la couleur par defaut
            link.style.color = 'var(--text-color)';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--accent-color)';
            }
        });
    });
});