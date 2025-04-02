const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const navLinksInner = document.querySelectorAll(".nav-links li");

menuIcon.addEventListener("click", () => {
  // Alterna a classe 'menu-active' para mostrar/esconder o menu
  navLinks.classList.toggle("menu-active");

  // Anima os itens do menu
  navLinksInner.forEach((li, index) => {
    if (li.style.animation) {
      li.style.animation = "";
    } else {
      li.style.animation = `navLinkAnime 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  // Alterna a animação para o ícone do menu (transformando o ícone de hambúrguer em "X")
  menuIcon.classList.toggle("span-anime");
});
   






document.addEventListener("DOMContentLoaded", function() {
  const celular = document.getElementById("celular");
  const desktop = document.getElementById("desktop");
  const sectionProjetos = document.getElementById("projetos");

  function animarQuandoVisivel() {
      const sectionTop = sectionProjetos.getBoundingClientRect().top;
      const sectionBottom = sectionProjetos.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
          // Se a seção estiver visível, adiciona a animação
          celular.classList.add("ativo");
          desktop.classList.add("ativo");
      } else {
          // Se a seção sair da tela, remove a classe para resetar a animação
          celular.classList.remove("ativo");
          desktop.classList.remove("ativo");
      }
  }

  window.addEventListener("scroll", animarQuandoVisivel);
});



