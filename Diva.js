
document.addEventListener("DOMContentLoaded", function () {

    // 1. MOBILE NAVIGATION MENU
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && navLinks) {
        const menuButton = document.createElement("button");

        menuButton.textContent = "☰";
        menuButton.className = "menu-toggle";
        menuButton.setAttribute("aria-label", "Toggle navigation");
        menuButton.setAttribute("aria-expanded", "false");

        navbar.prepend(menuButton);

        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("is-open");

            const isOpen = navLinks.classList.contains("is-open");

            menuButton.textContent = isOpen ? "✕" : "☰";
            menuButton.setAttribute("aria-expanded", isOpen);
        });

        // Close menu after clicking a link
        navLinks.addEventListener("click", function (event) {
            if (event.target.closest("a")) {
                navLinks.classList.remove("is-open");
                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-expanded", "false");
            }
        });

        // Mobile menu styling
        const style = document.createElement("style");

        style.textContent = `
            .menu-toggle {
                display: none;
                background: #b76e79;
                color: white;
                border: none;
                padding: 10px 15px;
                cursor: pointer;
                font-size: 20px;
                border-radius: 5px;
            }

            @media (max-width: 600px) {
                .menu-toggle {
                    display: block;
                    margin: 10px auto;
                }

                .nav-links.is-open {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
            }
        `;

        document.head.appendChild(style);
    }

    // 2. HIGHLIGHT CURRENT PAGE
    const currentPage = decodeURIComponent(
        window.location.pathname.split("/").pop() || "Diva.html"
    ).toLowerCase();

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        const linkPage = decodeURIComponent(
            link.getAttribute("href").split("/").pop()
        ).toLowerCase();

        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    // 3. DYNAMIC FOOTER
    const footer = document.createElement("footer");

    footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()} DIVA Fashion.
        All Rights Reserved.</p>
        <p>Wear Confidence. Define Style.</p>
    `;

    footer.style.textAlign = "center";
    footer.style.padding = "25px";
    footer.style.marginTop = "40px";
    footer.style.color = "#b76e79";
    footer.style.fontSize = "14px";

    document.body.appendChild(footer);

});
