// Scroll suave para links de navegação
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script carregado!'); // Debug
    
    // Seleciona todos os links que apontam para seções da página
    const navLinks = document.querySelectorAll('a[href^="#"]');
    console.log('Links encontrados:', navLinks.length); // Debug
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Link clicado:', this.getAttribute('href')); // Debug
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                console.log('Elemento alvo encontrado:', targetId); // Debug
                
                // Altura do navbar fixo
                const navbarHeight = 100;
                
                // Posição do elemento alvo
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - navbarHeight;
                
                // Scroll suave
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                console.log('Elemento não encontrado:', targetId); // Debug
            }
        });
    });
});