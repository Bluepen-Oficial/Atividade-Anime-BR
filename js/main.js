/* ================================================
   js/main.js — AnimeBR
   Ponto de entrada principal: inicializa todos os módulos

   Este arquivo deve ser carregado DEPOIS de:
     - theme.js
     - menu.js
     - cards.js
   ================================================ */

// Aguarda o DOM estar pronto antes de inicializar
document.addEventListener('DOMContentLoaded', function () {

  console.log('🎌 AnimeBR iniciando...');

  // ── Inicializa módulos ──────────────────────────

  // 1. Tema (dark/light)
  if (window.AnimeBR && window.AnimeBR.initTheme) {
    window.AnimeBR.initTheme();
    window.AnimeBR.setupThemeBtn();
    console.log('✅ Tema inicializado');
  }

  // 2. Menu de navegação
  if (window.AnimeBR && window.AnimeBR.initMenu) {
    window.AnimeBR.initMenu();
    console.log('✅ Menu inicializado');
  }

  // 3. Cards de personagens
  if (window.AnimeBR && window.AnimeBR.initCards) {
    window.AnimeBR.initCards();
    console.log('✅ Cards inicializados');
  }

  // ── Animações de entrada ────────────────────────
  animarEntrada();

  console.log('🎌 AnimeBR pronto!');
});

/* ── ANIMAÇÕES DE SCROLL ─────────────────────────
   Adiciona classe .visivel nos elementos quando
   entram no viewport (Intersection Observer)
   ─────────────────────────────────────────────── */
function animarEntrada() {
  // Elementos que serão animados ao aparecer no scroll
  const alvos = document.querySelectorAll(
    '.destaque-card, .personagem-card, .personagem-card-full, .noticia-card, .timeline-item, .team-card, .stat-box'
  );

  if (!alvos.length) return;

  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visivel');
          // Para de observar depois de animar (performance)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,      // Dispara quando 10% do elemento aparece
      rootMargin: '0px 0px -40px 0px'  // Um pouco antes do fim da tela
    }
  );

  alvos.forEach(function(alvo) {
    // Adiciona estado inicial para animação CSS
    alvo.style.opacity = '100'; //Era o que estava deixando invisível o conteúdo
    alvo.style.transform = 'translateY(20px)';
    alvo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(alvo);
  });

  // Adiciona a classe visivel com delay escalonado
  document.querySelectorAll('.visivel').forEach(function(el, i) {
    el.style.transitionDelay = (i * 0.08) + 's';
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
}

/* ── UTILITÁRIOS GLOBAIS ─────────────────────────
   Funções acessíveis de qualquer arquivo JS
   ─────────────────────────────────────────────── */

// Formata número com separador de milhar
// Ex: 1200 → "1.200"
function formatarNumero(n) {
  return n.toLocaleString('pt-BR');
}

// Debounce: evita que uma função execute muitas vezes seguidas
function debounce(fn, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

// Exporta utilitários
window.AnimeBR = window.AnimeBR || {};
window.AnimeBR.utils = {
  formatarNumero: formatarNumero,
  debounce: debounce
};
