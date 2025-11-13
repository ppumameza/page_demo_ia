// Variable global para el idioma actual
let currentLanguage = 'es';

// Mensajes de bienvenida en diferentes idiomas
const welcomeMessages = {
    es: '¡Bienvenido! Gracias por visitar nuestra página web.',
    en: 'Welcome! Thank you for visiting our website.'
};

// Mensajes del formulario en diferentes idiomas
const formMessages = {
    es: {
        success: (nombre, email) => `¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te responderemos a ${email} pronto.`,
        error: 'Por favor completa todos los campos del formulario.'
    },
    en: {
        success: (nombre, email) => `Thank you ${nombre}! Your message has been sent. We will reply to ${email} soon.`,
        error: 'Please fill in all form fields.'
    }
};

// Función para mostrar mensaje de bienvenida
function mostrarMensaje() {
    alert(welcomeMessages[currentLanguage]);
}

// Scroll suave para los enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    // === MENÚ HAMBURGUESA ===
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('navLinks');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });

    // === THEME TOGGLE (MODO CLARO/OSCURO) ===
    const themeToggle = document.getElementById('themeToggle');

    // Cargar el tema guardado o usar el predeterminado
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Toggle del tema
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        // Guardar preferencia en localStorage
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);

        console.log(`Tema cambiado a: ${currentTheme}`);
    });

    // === DROPDOWN DE IDIOMAS CON BANDERAS ===
    const langDropdownToggle = document.getElementById('langDropdownToggle');
    const langDropdownMenu = document.getElementById('langDropdownMenu');
    const currentFlag = document.getElementById('currentFlag');
    const langOptions = document.querySelectorAll('.lang-option');

    // Datos de idiomas
    const languageData = {
        'es': { flag: '🇪🇸' },
        'en': { flag: '🇺🇸' }
    };

    // Toggle del dropdown
    langDropdownToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        langDropdownToggle.classList.toggle('active');
        langDropdownMenu.classList.toggle('active');
    });

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!langDropdownToggle.contains(e.target) && !langDropdownMenu.contains(e.target)) {
            langDropdownToggle.classList.remove('active');
            langDropdownMenu.classList.remove('active');
        }
    });

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        currentLanguage = lang;

        // Actualizar el botón toggle con la bandera del idioma
        const langData = languageData[lang];
        currentFlag.textContent = langData.flag;

        // Actualizar opciones activas
        langOptions.forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Cambiar todos los textos con atributos data-lang
        const elementsWithLang = document.querySelectorAll('[data-lang-es], [data-lang-en]');
        elementsWithLang.forEach(element => {
            const translation = element.getAttribute(`data-lang-${lang}`);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Cambiar placeholders de inputs
        const inputsWithPlaceholder = document.querySelectorAll('[data-lang-es-placeholder]');
        inputsWithPlaceholder.forEach(input => {
            const placeholder = input.getAttribute(`data-lang-${lang}-placeholder`);
            if (placeholder) {
                input.setAttribute('placeholder', placeholder);
            }
        });

        // Actualizar el atributo lang del documento
        document.documentElement.setAttribute('lang', lang);

        // Cerrar el dropdown
        langDropdownToggle.classList.remove('active');
        langDropdownMenu.classList.remove('active');

        // Guardar preferencia
        localStorage.setItem('language', lang);

        console.log(`Idioma cambiado a: ${lang}`);
    }

    // Event listeners para las opciones de idioma
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem('language') || 'es';
    if (savedLanguage !== 'es') {
        changeLanguage(savedLanguage);
    }

    // === NAVEGACIÓN CON SCROLL SUAVE ===
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // === MANEJAR EL ENVÍO DEL FORMULARIO ===
    const form = document.querySelector('.contacto-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const nombre = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const mensaje = form.querySelector('textarea').value;

            // Validación simple
            if (nombre && email && mensaje) {
                alert(formMessages[currentLanguage].success(nombre, email));
                form.reset();
            } else {
                alert(formMessages[currentLanguage].error);
            }
        });
    }

    // Efecto de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Cambiar el color del navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('header');
        const isDarkMode = document.body.classList.contains('dark-mode');

        if (window.scrollY > 50) {
            navbar.style.backgroundColor = isDarkMode ? 'var(--bg-navbar-scroll)' : '#1a252f';
        } else {
            navbar.style.backgroundColor = isDarkMode ? 'var(--bg-navbar)' : '#2c3e50';
        }
    });

    console.log('Página web cargada correctamente!');
});

// Función para obtener el año actual (útil para el footer)
function actualizarAnio() {
    const anioActual = new Date().getFullYear();
    const footerText = document.querySelector('footer p');

    if (footerText) {
        footerText.textContent = `© ${anioActual} MiSitio. Todos los derechos reservados.`;
    }
}

// Ejecutar cuando la página carga
window.addEventListener('load', actualizarAnio);
