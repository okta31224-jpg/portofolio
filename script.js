AOS.init({
    duration: 1000, 
    once: true,      
});

const toggles = document.querySelectorAll('#darkModeToggle, #darkModeToggleMobile');
const themeIcons = document.querySelectorAll('.themeIcon');
const body = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    themeIcons.forEach(icon => icon.textContent = '☀️');
}

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
                themeIcons.forEach(icon => icon.textContent = '☀️'); 
                localStorage.setItem('dark-mode', 'enabled'); 
            } else {
                themeIcons.forEach(icon => icon.textContent = '🌙'); 
                localStorage.setItem('dark-mode', 'disabled');
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        const 
        navbar = document.querySelector('.navbar'); 
        if (window.scrollY > 50) {navbar.classList.add('navbar-scrolled');

        } else {
             navbar.classList.remove('navbar-scrolled');
            }
        });
    