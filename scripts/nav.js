document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.header-nav-list');
    const navLinks = document.querySelectorAll('.header-nav-list a');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('nav-active');
            navList.classList.toggle('nav-active');
            
            // Toggle body scroll
            if (navList.classList.contains('nav-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('nav-active');
                navList.classList.remove('nav-active');
                document.body.style.overflow = 'auto';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navList.contains(e.target) && navList.classList.contains('nav-active')) {
                navToggle.classList.remove('nav-active');
                navList.classList.remove('nav-active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});


