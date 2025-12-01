// Loader functionality
document.addEventListener('DOMContentLoaded', function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    
    // Simulate loading time (remove this in production)
    setTimeout(function() {
        window.addEventListener('load', function() {
            hideLoader();
        });
        
        // Fallback if load event already fired
        if (document.readyState === 'complete') {
            hideLoader();
        }
    }, 300);
    
    function hideLoader() {
        if (loaderWrapper) {
            loaderWrapper.classList.add('fade-out');
            
            // Remove loader from DOM after animation
            setTimeout(function() {
                loaderWrapper.style.display = 'none';
            }, 300);
        }
    }
});

