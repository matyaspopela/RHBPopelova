// Ceník služeb - MUDr. Réka Popelová
// Pro změnu cen stačí upravit hodnoty v tomto souboru

const prices = {
    akupunktura: {
        session: 500,
        currency: "Kč"
    },
    aurikuloterapie: {
        session: 500,
        currency: "Kč"
    },
    bankování: {
        session: 500,
        currency: "Kč"
    },
    kineziotejping: {
        application: 150,
        tapePerCm: 1,
        currency: "Kč"
    },
    mojzisova: {
        session: 600,
        currency: "Kč"
    }
};

// Funkce pro načtení cen do HTML
function loadPrices() {
    // Akupunktura
    const akupunkturaPrice = document.querySelector('[data-price="akupunktura"]');
    if (akupunkturaPrice) {
        akupunkturaPrice.textContent = `${prices.akupunktura.session} ${prices.akupunktura.currency}`;
    }

    // Aurikuloterapie
    const aurikuloterapiePrice = document.querySelector('[data-price="aurikuloterapie"]');
    if (aurikuloterapiePrice) {
        aurikuloterapiePrice.textContent = `${prices.aurikuloterapie.session} ${prices.aurikuloterapie.currency}`;
    }

    // Baňkování
    const bankovanieSession = document.querySelector('[data-price="bankovanie-session"]');
    if (bankovanieSession) {
        bankovanieSession.textContent = `${prices.bankování.session} ${prices.bankování.currency}`;
    }

    // Kineziotejping
    const kineziotejpingPrice = document.querySelector('[data-price="kineziotejping"]');
    if (kineziotejpingPrice) {
        kineziotejpingPrice.textContent = `${prices.kineziotejping.application} ${prices.kineziotejping.currency} + ${prices.kineziotejping.tapePerCm} ${prices.kineziotejping.currency}/cm pásky`;
    }

    // Terapie metodou Ludmily Mojžíšové
    const mojzisovaSession = document.querySelector('[data-price="mojzisova-session"]');
    if (mojzisovaSession) {
        mojzisovaSession.textContent = `${prices.mojzisova.session} ${prices.mojzisova.currency}`;
    }
}

// Načtení cen po načtení stránky
document.addEventListener('DOMContentLoaded', loadPrices);
