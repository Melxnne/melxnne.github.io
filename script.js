// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference, otherwise use dark theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update button icon based on current theme
    updateThemeIcon(savedTheme);
    
    // Theme toggle button functionality
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update button icon
        updateThemeIcon(newTheme);
    });
});

// Update button icon based on theme
function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-toggle i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Mobile Navigation
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');

mobileNavToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileNavToggle.querySelector('i');
    icon.className = navLinks.classList.contains('active') ? 'ri-close-line' : 'ri-menu-line';
});
