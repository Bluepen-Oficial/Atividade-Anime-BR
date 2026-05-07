/* ================================================
   js/theme.js — AnimeBR
   Controla o modo claro/escuro (dark/light mode)

   🐛 BUGS PROPOSITAIS para os alunos encontrarem:
     BUG #5: o botão tem id="theme-btn-toggle" no HTML
             mas aqui estamos buscando id="btn-theme" (errado!)
     BUG #10: o light-mode não funciona completamente
              pois algumas variáveis CSS não foram definidas
              no tema light (ver css/global.css)
   ================================================ */

// Inicializa o tema baseado na preferência salva ou do sistema
function initTheme() {
  const saved = localStorage.getItem('animebrTheme');

  if (saved) {
    applyTheme(saved);
  } else {
    // Usa preferência do sistema como padrão
    const prefDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefDark ? 'dark' : 'light');
  }
}

// Aplica o tema no body e atualiza o ícone do botão
function applyTheme(tema) {
  const body = document.body;

  if (tema === 'light') {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    updateThemeIcon('☀️');
  } else {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    updateThemeIcon('🌙');
  }

  localStorage.setItem('animebrTheme', tema);
}

// Atualiza o ícone do botão de tema
function updateThemeIcon(icone) {
  // 🐛 BUG #5: ID errado! O HTML tem id="theme-btn-toggle"
  //            mas aqui buscamos "btn-theme" — o botão nunca é encontrado
  //            Corrija trocando 'btn-theme' por 'theme-btn-toggle'
  const btn = document.getElementById('btn-theme');  // ← ID errado!

  if (btn) {
    btn.textContent = icone;
  }
  // Se btn for null, nenhum erro é lançado, mas o ícone nunca muda
}

// Alterna entre dark e light
function toggleTheme() {
  const body = document.body;
  const isLight = body.classList.contains('light-mode');
  applyTheme(isLight ? 'dark' : 'light');
}

// Adiciona listener no botão correto
function setupThemeBtn() {
  // 🐛 BUG #5 continuação: mesmo problema aqui
  const btn = document.getElementById('btn-theme');  // ← ID errado!

  if (btn) {
    btn.addEventListener('click', toggleTheme);
  }
  // Como btn é null, o clique nunca é registrado
}

// Exporta função para ser usada pelo main.js
window.AnimeBR = window.AnimeBR || {};
window.AnimeBR.initTheme = initTheme;
window.AnimeBR.setupThemeBtn = setupThemeBtn;
window.AnimeBR.toggleTheme = toggleTheme;
