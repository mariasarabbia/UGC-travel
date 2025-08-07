// js/language-switcher.js
// Simple language switcher for portfolio site

const translations = {
    en: {
        home: "Home",
        about: "About me",
        whyugc: "Why UGC?",
        landscapes: "Landscapes",
        restaurants: "Restaurants & Hotels",
        photos: "Photos",
        drone: "Drone",
        devices: "Devices",
        contact: "Contact",
        letscollab: "LET'S COLLAB!",
        contactme: "Contact me:",
        // Home overlay
        homeTitle: "María Sarabia",
        homeDesc: "A 25-year-old content creator based in Murcia, Spain.",
        // About Me
        aboutTitle: "ABOUT ME",
        aboutP1: "Hi, I'm María — a travel content creator passionate about authentic experiences and helping brands connect with their audience through engaging UGC. I specialize in natural, relatable content that highlights the true essence of a place — from hidden gems and local culture to the magic of everyday adventures.",
        aboutP2: "With a strong eye for photography and video, I create high-quality content that showcases your destination as the top choice in your area. My goal is to inspire people to explore while helping your brand stand out. Let's work together and make something great.",
        // Why UGC
        whyugcTitle: "WHY UGC?",
        whyugcP: "User-Generated Content (UGC) builds trust, drives engagement, and captures attention like no other format. In travel, people seek real experiences — not staged promotions. UGC shows your destination through the eyes of real travelers, making it easier for potential visitors to connect emotionally with your brand and take action.",
        stat1Title: "89% of travelers",
        stat1P: "use social media for travel inspiration. They turn to platforms like TikTok and Instagram to discover new destinations, hidden gems, and real experiences shared by everyday creators.",
        stat2Title: "5× more engagement",
        stat2P: "In tourism, User-Generated Content (UGC) drives 5x more engagement than brand-created content — Why? Because travelers trust real stories from real people.",
        stat3Title: "79% of consumers",
        stat3P: "say UGC strongly influences their purchase decisions — making it nearly 10x more effective than traditional ads",
        // Landscapes
        landscapesTitle: "LANDSCAPES",
        // Restaurants
        restaurantsTitle: "RESTAURANTS & HOTELS",
        // Photos
        photosTitle: "PHOTOS",
        // Drone
        droneTitle: "DRONE",
        // Devices
        devicesTitle: "MY RECORDING DEVICES",
        devicesP1: "I use an iPhone 15 Pro to capture most of my content, ensuring high-quality video and photo results on the go.",
        devicesP2: "For panoramic landscape and accommodation shots, I incorporate drone footage to add a cinematic touch.",
        devicesP3: "I also use a Nikon digital camera to take retro-style photos with a nostalgic, timeless feel.",
        devicesP4: "I always travel with Álvaro, my partner, who helps me get the best angles and behind-the-scenes shots to elevate each project.",
    },
    es: {
        home: "Inicio",
        about: "Sobre mí",
        whyugc: "¿Por qué UGC?",
        landscapes: "Paisajes",
        restaurants: "Restaurantes y Hoteles",
        photos: "Fotos",
        drone: "Dron",
        devices: "Dispositivos",
        contact: "Contacto",
        letscollab: "¡COLABOREMOS!",
        contactme: "Contáctame:",
        // Home overlay
        homeTitle: "María Sarabia",
        homeDesc: "Creadora de contenido de 25 años de Murcia, España.",
        // About Me
        aboutTitle: "SOBRE MÍ",
        aboutP1: "Hola, soy María, creadora de contenido de viajes con una gran pasión por las experiencias auténticas. Ayudo a las marcas a conectar con su audiencia a través de contenido UGC atractivo y genuino. Me especializo en crear material natural y cercano que capture la esencia real de cada lugar: desde rincones poco conocidos y cultura local, hasta la magia de las pequeñas aventuras del día a día.",
        aboutP2: "Con un enfoque espontáneo y auténtico para la fotografía y el video, creo contenido de alta calidad que posicionará tu destino como la opción más destacada de tu región. Mi objetivo es inspirar a las personas a explorar mientras hago que tu marca brille. Trabajemos juntos para crear algo increíble.",
        // Why UGC
        whyugcTitle: "¿POR QUÉ UGC?",
        whyugcP: "El contenido generado por usuarios (UGC) genera confianza, impulsa la interacción y capta la atención como ningún otro formato. En el mundo de los viajes, la gente busca experiencias reales, no promociones forzadas. El UGC muestra tu destino a través de los ojos de viajeros reales, lo que facilita la conexión emocional con tu marca y que futuros clientes se animen a dar el siguiente paso.",
        stat1Title: "El 89% de los turistas",
        stat1P: "utilizan redes sociales para inspirarse en sus viajes. Acuden a plataformas como TikTok e Instagram para descubrir nuevos destinos, rincones ocultos y experiencias reales compartidas por creadores de contenido.",
        stat2Title: "5× más interacción",
        stat2P: "En turismo, el UGC genera 5 veces más interacción que el contenido creado por marcas. ¿Por qué? Porque los viajeros confían en historias reales de personas reales.",
        stat3Title: "El 79% de los clientes",
        stat3P: "afirma que el UGC influye fuertemente en sus decisiones de compra, siendo casi 10 veces más efectivo que los anuncios tradicionales.",
        // Landscapes
        landscapesTitle: "PAISAJES",
        // Restaurants
        restaurantsTitle: "RESTAURANTES Y HOTELES",
        // Photos
        photosTitle: "FOTOS",
        // Drone
        droneTitle: "DRON",
        // Devices
        devicesTitle: "MIS DISPOSITIVOS DE GRABACIÓN",
        devicesP1: "Utilizo un iPhone 15 Pro para grabar la mayoría de mi contenido, asegurando resultados de alta calidad en cualquier lugar.",
        devicesP2: "En tomas panorámicas de paisajes y alojamientos, incorporo imágenes de dron para dar un toque cinematográfico.",
        devicesP3: "También uso una cámara digital Nikon para hacer fotos de estilo retro con un aire nostálgico y atemporal.",
        devicesP4: "Siempre viajo con Álvaro, mi pareja, que me ayuda a conseguir los mejores ángulos y tomas detrás de cámaras para elevar la calidad en cada proyecto.",
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    // Navbar
    document.querySelector('a[href="#inicio"]').textContent = t.home;
    document.querySelector('a[href="#about-me"]').textContent = t.about;
    document.querySelector('a[href="#why-ugc"]').textContent = t.whyugc;
    document.querySelector('a[href="#landscapes"]').textContent = t.landscapes;
    document.querySelector('a[href="#restaurants"]').textContent = t.restaurants;
    document.querySelector('a[href="#photos"]').textContent = t.photos;
    document.querySelector('a[href="#drone"]').textContent = t.drone;
    document.querySelector('a[href="#devices"]').textContent = t.devices;
    document.querySelector('a[href="#contact"]').textContent = t.contact;

    // Home overlay
    const homeTitle = document.querySelector('.overlay-text h1');
    if (homeTitle) homeTitle.textContent = t.homeTitle;
    const homeDesc = document.querySelector('.overlay-text p');
    if (homeDesc) homeDesc.textContent = t.homeDesc;

    // About Me
    const aboutTitle = document.querySelector('#about-me h2');
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    const aboutText = document.querySelectorAll('#about-me .about-text p');
    if (aboutText && aboutText.length > 0) {
        if (aboutText[0]) aboutText[0].textContent = t.aboutP1;
        if (aboutText[1]) aboutText[1].textContent = t.aboutP2;
    }

    // Why UGC
    const whyTitle = document.querySelector('#why-ugc h2');
    if (whyTitle) whyTitle.textContent = t.whyugcTitle;
    const whyText = document.querySelector('#why-ugc .why-ugc-text p');
    if (whyText) whyText.textContent = t.whyugcP;
    // Stats
    const statTitles = document.querySelectorAll('#why-ugc .stats-text h4');
    const statPs = document.querySelectorAll('#why-ugc .stats-text p');
    if (statTitles && statTitles.length > 2 && statPs && statPs.length > 2) {
        if (statTitles[0]) statTitles[0].textContent = t.stat1Title;
        if (statPs[0]) statPs[0].textContent = t.stat1P;
        if (statTitles[1]) statTitles[1].textContent = t.stat2Title;
        if (statPs[1]) statPs[1].textContent = t.stat2P;
        if (statTitles[2]) statTitles[2].textContent = t.stat3Title;
        if (statPs[2]) statPs[2].textContent = t.stat3P;
    }

    // Landscapes
    const landscapesTitle = document.querySelector('#landscapes h2');
    if (landscapesTitle) landscapesTitle.textContent = t.landscapesTitle;

    // Restaurants
    const restaurantsTitle = document.querySelector('#restaurants h2');
    if (restaurantsTitle) restaurantsTitle.textContent = t.restaurantsTitle;

    // Photos
    const photosTitle = document.querySelector('#photos h2');
    if (photosTitle) photosTitle.textContent = t.photosTitle;

    // Drone
    const droneTitle = document.querySelector('#drone h2');
    if (droneTitle) droneTitle.textContent = t.droneTitle;

    // Devices
    const devicesTitle = document.querySelector('#devices h2');
    if (devicesTitle) devicesTitle.textContent = t.devicesTitle;
    const devicesPs = document.querySelectorAll('#devices .devices-text p');
    if (devicesPs && devicesPs.length > 3) {
        if (devicesPs[0]) devicesPs[0].textContent = t.devicesP1;
        if (devicesPs[1]) devicesPs[1].textContent = t.devicesP2;
        if (devicesPs[2]) devicesPs[2].textContent = t.devicesP3;
        if (devicesPs[3]) devicesPs[3].textContent = t.devicesP4;
    }

    // Contact section
    const letsCollab = document.querySelector('#contact .contact-content h2');
    if (letsCollab) letsCollab.textContent = t.letscollab;
    const contactMe = document.querySelector('#contact .contact-content h3');
    if (contactMe) contactMe.textContent = t.contactme;
    // Add more selectors as needed for other sections
}

window.setLanguage = setLanguage;
