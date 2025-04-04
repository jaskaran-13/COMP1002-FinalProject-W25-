// Create global header navigation with logo and non-list format
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('global-header');
    const footer = document.getElementById('global-footer');
    
    // Header content with left-aligned logo and navigation
    header.innerHTML = `        
        <div class="header-container">
            <div class="logo">
                <a href="index.html">
                    <img src="images/logo.jpg" alt="Nintendo Logo">                    
                </a>
            </div>
            <nav class="main-nav">
                <div class="nav-item"><a href="index.html">Home</a></div>
                <div class="nav-item"><a href="about.html">About</a></div>
                <div class="nav-item"><a href="product.html">Products</a></div>
                <div class="nav-item"><a href="contact.html">Contact</a></div>
            </nav>
        </div>
    `;
    
    // Footer with clickable social media image links
    footer.innerHTML = `
        <div class="footer-content">
            <div class="social-links">
                <a href="https://www.facebook.com/Nintendo" target="_blank">
                    <img src="images/facebook.jpg" alt="Facebook" class="social-icon">
                </a>
                <a href="https://twitter.com/NintendoAmerica" target="_blank">
                    <img src="images/twitter.jpg" alt="Twitter" class="social-icon">
                </a>
                <a href="https://www.instagram.com/nintendo/" target="_blank">
                    <img src="images/instagram.jpg" alt="Instagram" class="social-icon">
                </a>
                <a href="https://www.youtube.com/nintendo" target="_blank">
                    <img src="images/youtube.jpg" alt="YouTube" class="social-icon">
                </a>
            </div>
            <p>&copy; 2024 Nintendo. Game Boy is a trademark of Nintendo.</p>            
        </div>
    `;
    
    // Add active class to current page link
    const currentPage = location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-item a');
    
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
});