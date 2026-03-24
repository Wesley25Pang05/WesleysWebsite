const siteNav = `
<nav>
    <div class="nav-container">
        <div class="name"><a href="./">WESLEY PANG</a></div>
        <ul>
            <li><a href="./" data-route="/">HOME</a></li>
            <li><a href="experience.html" data-route="/experience.html">EXPERIENCE</a></li>
            <li><a href="projects.html" data-route="/projects.html">PROJECTS</a></li>
            <li><a href="faq.html" data-route="/faq.html">FAQ</a></li>
            <li><a href="contact.html" data-route="/contact.html">CONTACT</a></li>
        </ul>
    </div>
</nav>
`;

const siteFooter = `
<footer class="footer">
    <div class="social-icons">
        <a href="https://discord.gg/MVd8chaYQt" target="_blank"><img src="imgs/discord.png" alt="Discord"/></a>
        <a href="https://www.instagram.com/wesley25pang05/" target="_blank"><img src="imgs/instagram.png" alt="Instagram"/></a>
        <a href="mailto:wesley25pang05@gmail.com" target="_blank"><img src="imgs/gmail.png" alt="Gmail"/></a>
        <a href="https://github.com/Wesley25Pang05" target="_blank"><img src="imgs/github.png" alt="Github"/></a>
        <a href="https://www.linkedin.com/in/wesley-pang-10695a2b3/" target="_blank"><img src="imgs/linkedin.png" alt="Linkedin"/></a>
    </div>
    <p>&copy; 2024 Wesley Pang<br>All rights reserved.</p>
</footer>
`;

function injectLayout() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    if (header) header.innerHTML = siteNav;
    if (footer) footer.innerHTML = siteFooter;

    const route = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.getAttribute('href') === route || (route === 'index.html' && link.getAttribute('href') === './')) {
            link.style.color = 'black';
            link.style.textDecoration = 'underline';
        }
    });
}

document.addEventListener('DOMContentLoaded', injectLayout);
