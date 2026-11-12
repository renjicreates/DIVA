
document.addEventListener("DOMContentLoaded", function () {

    // 1. SELECT PRODUCT ELEMENTS
    const products = document.querySelectorAll(".product-card");

    // 2. CREATE SEARCH BAR
    const search = document.createElement("input");

    search.type = "text";
    search.placeholder = "Search your favourite style...";
    search.className = "product-search";

    const collection = document.querySelector(".collection");

    if (collection) {
        collection.insertBefore(search, collection.querySelector(".product-grid"));
    }

    // 3. SEARCH PRODUCTS
    search.addEventListener("input", function () {

        const searchValue = search.value.toLowerCase();

        products.forEach(function (product) {

            const productName = product.innerText.toLowerCase();

            if (productName.includes(searchValue)) {
                product.style.display = "flex";
            } else {
                product.style.display = "none";
            }

        });

    });

    // 4. CREATE PRODUCT VIEW MODAL
    const modal = document.createElement("div");

    modal.className = "product-modal";

    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal" aria-label="Close">&times;</button>

            <img class="modal-image" src="" alt="">

            <div class="modal-info">
                <span class="modal-category"></span>
                <h2 class="modal-title"></h2>
                <p class="modal-description"></p>
                <h3 class="modal-price"></h3>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeButton = modal.querySelector(".close-modal");

    // 5. VIEW PRODUCT BUTTONS
    products.forEach(function (product) {

        const button = product.querySelector("button");

        if (!button) return;

        button.type = "button";

        button.addEventListener("click", function () {

            const image = product.querySelector("img");
            const name = product.querySelector("h2");
            const description = product.querySelector("p");
            const category = product.querySelector(".category");
            const price = product.querySelector("h3");

            modal.querySelector(".modal-image").src = image.src;
            modal.querySelector(".modal-image").alt = image.alt;

            modal.querySelector(".modal-title").textContent =
                name.textContent;

            modal.querySelector(".modal-description").textContent =
                description.textContent;

            modal.querySelector(".modal-category").textContent =
                category.textContent;

            modal.querySelector(".modal-price").textContent =
                price.textContent;

            modal.classList.add("active");

        });

    });

    // 6. CLOSE MODAL
    closeButton.addEventListener("click", function () {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.classList.remove("active");
        }
    });

    // 7. DYNAMIC FOOTER
    const footer = document.createElement("footer");

    footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()} DIVA Fashion.</p>
        <p>Wear Confidence. Define Style.</p>
    `;

    document.body.appendChild(footer);

});
