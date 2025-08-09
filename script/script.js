// Scroll mais lento
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
            top: alvo.offsetTop - 80, // compensa altura do nav
            behavior: "smooth"
        });
    });
});