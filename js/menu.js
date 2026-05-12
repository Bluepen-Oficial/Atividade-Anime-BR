/* ================================================
   js/menu.js — AnimeBR
   Controla o menu mobile (hamburguer) e scroll do header
   ================================================ */

// Referências dos elementos do menu
const hamburgerBtn = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
const siteHeader = document.getElementById('site-header');

// Abre/fecha o menu mobile
function toggleMenu() {
  console.log("TESTE AAA");

  mainNav.classList.toggle('open');

  const estaAberto = mainNav.classList.contains('open');
  hamburgerBtn.classList.toggle('active', estaAberto);

  // Controla aria-expanded para acessibilidade
  hamburgerBtn.setAttribute('aria-expanded', estaAberto);
  console.log("TESTE AAA");
}

// Fecha o menu ao clicar em um link de navegação
function fecharMenuAoNavegar() {
  const links = mainNav.querySelectorAll('.nav-link');

  console.log("TESTE BBB");

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
      hamburgerBtn.classList.remove('active');
    });
  });
}

// Adiciona classe 'scrolled' no header quando rola a página
function setupScrollHeader() {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      siteHeader.classList.add('scrolled');
      console.log("TESTE CCC");
    } else {
      siteHeader.classList.remove('scrolled');
      console.log("TESTE DDD");
    }
  });
}

// Fecha o menu ao clicar fora dele
function fecharMenuFora() {
  document.addEventListener('click', function (e) {
    console.log("TESTE EEE");
    const clicouFora = !mainNav.contains(e.target) && !hamburgerBtn.contains(e.target);
    if (clicouFora && mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      hamburgerBtn.classList.remove('active');
      console.log("TESTE FFF");
    }
  });
}

// Inicializa tudo relacionado ao menu
function initMenu() {
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMenu);
      console.log("TESTE GGG");
  }

  if (mainNav) {
    fecharMenuAoNavegar();
      console.log("TESTE HHH");

  }

  setupScrollHeader();
  fecharMenuFora();
}

// Exporta para o main.js
window.AnimeBR = window.AnimeBR || {};
window.AnimeBR.initMenu = initMenu;
