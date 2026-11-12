
document.addEventListener("DOMContentLoaded", function () {

    // 1. WELCOME MESSAGE
    console.log("Welcome to DIVA Fashion!");
    
    // 2. SECTION ANIMATIONS
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(function(section) {
        observer.observe(section);
    });

    // 3. BACK TO TOP BUTTON
    const topButton = document.createElement("button");

    topButton.textContent = "↑"; 
    topButton.className = "back-to-top";
    topButton.setAttribute("aria-label", "Back to top");

    document.body.appendChild(topButton);

    window.addEventListener("scroll", function() {

        if (window.scrollY > 300) {
            topButton.classList.add("visible");
        } else {
            topButton.classList.remove("visible");
        }

    });

    topButton.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // 4. DYNAMIC FOOTER
    const footer = document.createElement("footer");

    footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()} DIVA Fashion.</p>
        <p>Wear Confidence. Define Style.</p>
    `;

    document.body.appendChild(footer);

});
