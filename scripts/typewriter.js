document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.querySelector('.typewriter');
    const roles = [
        'Developer', 
        'Network Engineer', 
        'Data Analyst', 
        'Web Developer', 
        'Software Tester', 
        'Ethical Hacker',
        'System Designer',
        'System Architect'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 200;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Remove a character
            typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 100;
        } else {
            // Add a character
            typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 200;
        }

        // Logic for switching states
        if (!isDeleting && charIndex === currentRole.length) {
            // Pause at the end of the word
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            // Switch to next word
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    // Start the typewriter effect
    if (typewriterElement) {
        type();
    }
});
