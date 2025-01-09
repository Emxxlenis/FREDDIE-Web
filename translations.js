// translation.js
let translations = {};

function loadTranslations() {
    return fetch('translation/translations.json')
        .then(response => response.json())
        .then(data => {
            translations = data;
        })
        .catch(error => console.error('Error loading translations:', error));
}

function updateLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('language', lang); // Guardar idioma seleccionado
}

function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'es'; // Cargar idioma guardado o usar 'en' por defecto
    updateLanguage(savedLang);
    document.getElementById('language-selector').value = savedLang;
}

document.addEventListener('DOMContentLoaded', () => {
    // Cargar las traducciones
    loadTranslations().then(() => {
        initLanguage();  // Inicializar idioma al cargar el contenido
    });

    // Listener para cambiar de idioma
    const languageSelector = document.getElementById('language-selector');
    languageSelector.addEventListener('change', (event) => {
        updateLanguage(event.target.value);
    });
});
