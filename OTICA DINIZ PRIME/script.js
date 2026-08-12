const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* MENU MOBILE */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* FILTRO DOS PRODUTOS */

const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        filterButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");


        productCards.forEach((card) => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


/* MODAL DOS PRODUTOS */

const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");

const productButtons = document.querySelectorAll(".product-button");


productButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const category = button.dataset.category;
        const description = button.dataset.description;
        const image = button.dataset.image;


        modalImage.src = image;
        modalImage.alt = name;

        modalCategory.textContent = category;
        modalName.textContent = name;
        modalDescription.textContent = description;


        modal.classList.add("active");
        document.body.classList.add("modal-open");

    });

});


closeModal.addEventListener("click", closeProductModal);


modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        closeProductModal();
    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeProductModal();
    }

});


function closeProductModal() {

    modal.classList.remove("active");
    document.body.classList.remove("modal-open");

}


/* ANIMAÇÃO AO APARECER NA TELA */

const animatedElements = document.querySelectorAll(
    ".category-card, .product-card, .feature-card, .review, .location-box"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


animatedElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});