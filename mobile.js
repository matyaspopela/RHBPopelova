document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile menu script loaded');
    
    // Simple mobile menu toggle
    const hamburger = document.querySelector('.mobile-hamburger');
    const menu = document.querySelector('.mobile-menu');
    
    console.log('Mobile hamburger found:', !!hamburger);
    console.log('Mobile menu found:', !!menu);
    
    if (hamburger && menu) {
        // Log screen width for debugging
        console.log('Window width:', window.innerWidth);
        
        // Force visibility in mobile view
        if (window.innerWidth <= 768) {
            console.log('Mobile view detected - forcing header visibility');
            document.querySelector('.mobile-header').style.display = 'flex';
        }
        
        // Toggle menu on click
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Hamburger clicked');
            hamburger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
            document.body.classList.toggle('no-scroll');
        });
        
        // DevTools detection - no highlighting needed
        if (window.location.href.includes('localhost')) {
            console.log('DevTools detected');
        }
    }
    
    // Close menu when clicking links
    const links = document.querySelectorAll('.mobile-menu a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Menu link clicked');
            hamburger.classList.remove('is-active');
            menu.classList.remove('is-active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Force mobile view if in DevTools
    function forceShowMobileHeader() {
        if (window.innerWidth <= 800) {
            const mobileHeader = document.querySelector('.mobile-header');
            if (mobileHeader) {
                mobileHeader.style.display = 'flex';
                console.log('Forced mobile header display');
            }
        }
    }
    
    // Run immediately and also after a delay
    forceShowMobileHeader();
    setTimeout(forceShowMobileHeader, 500);
});
