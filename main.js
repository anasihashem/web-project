const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("site-menu");
if (toggle && menu) {
    toggle.addEventListener("click", () => {
        const open = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open);
    });
}

const mainPhoto = document.querySelector(".gallery__main img");
const thumbs = document.querySelectorAll(".gallery__thumbs button");
thumbs.forEach((btn) => {
    btn.addEventListener("click", () => {
        mainPhoto.src = btn.dataset.src;
        mainPhoto.alt = btn.dataset.alt;
        thumbs.forEach((b) => b.removeAttribute("aria-current"));
        btn.setAttribute("aria-current", "true");
    });
});
