/* ================================================
   js/menu.js — AnimeBR
   Controla o menu mobile (hamburguer) e scroll do header
   ================================================ */

// Referências dos elementos do menu
const hamburgerBtn = document.getElementById('hamburger');
const mainNav      = document.getElementById('main-nav');
const siteHeader   = document.getElementById('site-header');

// Abre/fecha o menu mobile
function toggleMenu() {
  
  mainNav.classList.toggle('open');

  const estaAberto = mainNav.classList.contains('open');  
  hamburgerBtn.classList.toggle('active', estaAberto);

  // Controla aria-expanded para acessibilidade
  hamburgerBtn.setAttribute('aria-expanded', estaAberto);
}

// Fecha o menu ao clicar em um link de navegação
function fecharMenuAoNavegar() {
  const links = mainNav.querySelectorAll('.nav-link');

  links.forEach(function(link) {
    link.addEventListener('click', function() {
      mainNav.classList.remove('open');
      hamburgerBtn.classList.remove('active');
    });
  });
}

// Adiciona classe 'scrolled' no header quando rola a página
function setupScrollHeader() {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });
}

// Fecha o menu ao clicar fora dele
function fecharMenuFora() {
  document.addEventListener('click', function(e) {
    const clicouFora = !mainNav.contains(e.target) && !hamburgerBtn.contains(e.target);
    if (clicouFora && mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      hamburgerBtn.classList.remove('active');
    }
  });
}

// Inicializa tudo relacionado ao menu
function initMenu() {
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMenu());
  }

  if (mainNav) {
    fecharMenuAoNavegar();
  }

  setupScrollHeader();
  fecharMenuFora();
}

// Exporta para o main.js
window.AnimeBR = window.AnimeBR || {};
window.AnimeBR.initMenu = initMenu;
