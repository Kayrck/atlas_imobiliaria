// Menu mobile
document.querySelector('.hamburger').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';

    this.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
});

// Desativar animações para usuários que preferem reduzir movimento
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-animation]').forEach(element => {
        element.style.animation = 'none';
    });
}

// Melhorar navegação por teclado
document.addEventListener('keyup', function (e) {
    if (e.key === 'Tab') {
        document.documentElement.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function () {
    document.documentElement.classList.remove('keyboard-navigation');
});

// Feedback visual para foco
document.querySelectorAll('a, button, input, [tabindex]').forEach(element => {
    element.addEventListener('focus', function () {
        this.style.outline = '3px solid ' + getComputedStyle(document.documentElement).getPropertyValue('--secondary');
    });

    element.addEventListener('blur', function () {
        this.style.outline = 'none';
    });
});
