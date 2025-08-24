document.addEventListener('DOMContentLoaded', function() {
    // Desktop menu functionality only
    // Mobile menu is handled in mobile.js
    
    console.log('Main.js loaded successfully');
    
    // Restore transitions after animations complete
    setTimeout(function() {
        console.log('Restoring hover transitions...');
        const animatedElements = document.querySelectorAll('.service-card, .education-card');
        animatedElements.forEach(function(element) {
            element.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    }, 2000); // Wait 2 seconds for animations to complete
});
