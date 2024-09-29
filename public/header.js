const header = document.getElementsByClassName("navbar")[0];


header.innerHTML = `
    <a href="index.html" class="logo">ChaChingAcademy</a>
    <nav>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Our Services</a></li>
            <li><a href="advisor.html">Find an Advisor</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
    </nav>
    <a class="cta" href="getStarted.html">Get Started</a>
    <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
`;

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});


