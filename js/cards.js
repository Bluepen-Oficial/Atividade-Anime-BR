/* ================================================
   js/cards.js — AnimeBR
   Gera e gerencia os cards de personagens
   ================================================ */

// ── DADOS DOS PERSONAGENS ──────────────────────
const personagens = [
  {
    id: 1,
    nome: 'Zé Bravura',
    anime: 'Guerreiro do Sertão',
    tipo: 'heroi',
    emoji: '🤠',
    cor: 'linear-gradient(135deg, #2d1450, #1a0a2e)',
    bio: 'Vaqueiro do sertão nordestino que desperta poderes ancestrais ligados à caatinga. Luta com um gibão encantado e domina os ventos do São Francisco.',
    poderes: ['Controle do Vento', 'Força da Caatinga', 'Gibão Encantado']
  },
  {
    id: 2,
    nome: 'Iara Sombra',
    anime: 'Guerreiro do Sertão',
    tipo: 'vilao',
    emoji: '🌊',
    cor: 'linear-gradient(135deg, #001a2e, #003366)',
    bio: 'A Iara corrompida pelas águas poluídas do rio. Antiga protetora que se tornou a maior ameaça da floresta alagada.',
    poderes: ['Controle das Águas', 'Canto Amaldiçoador', 'Transformação']
  },
  {
    id: 3,
    nome: 'Curupira-17',
    anime: 'Curupira Academy',
    tipo: 'heroi',
    emoji: '🦶',
    cor: 'linear-gradient(135deg, #0a2e0a, #0d4010)',
    bio: 'O mais novo guardião da Amazônia. Seus pés ao contrário deixam rastros confusos para predadores. Adora tecnologia e mistura magia ancestral com gadgets modernos.',
    poderes: ['Rastros Invertidos', 'Teleporte Florestal', 'Chama Verde']
  },
  {
    id: 4,
    nome: 'DJ Oxum',
    anime: 'Baile do Futuro',
    tipo: 'suporte',
    emoji: '🎵',
    cor: 'linear-gradient(135deg, #2e2000, #4a3300)',
    bio: 'Sacerdotisa do candomblé que domina a arte do som sagrado. Suas batidas têm o poder de curar feridas e despertar espíritos adormecidos.',
    poderes: ['Cura Sonora', 'Chamada dos Orixás', 'Campo de Ritmo']
  },
  {
    id: 5,
    nome: 'O Boto',
    anime: 'Boto: Lendas do Pará',
    tipo: 'misterioso',
    emoji: '🐬',
    cor: 'linear-gradient(135deg, #1a0030, #2d005a)',
    bio: 'Metade homem, metade boto-cor-de-rosa. Ninguém sabe ao certo se é aliado ou adversário. Aparece nas festas juninas e nas margens do Amazonas nas noites de lua cheia.',
    poderes: ['Transformação', 'Sedução Lunar', 'Mergulho Dimensional']
  },
  {
    id: 6,
    nome: 'Lamparina',
    anime: 'Guerreiro do Sertão',
    tipo: 'heroi',
    emoji: '🔥',
    cor: 'linear-gradient(135deg, #2e0a00, #5a1500)',
    bio: 'Inspirada no cangaceiro Lampião, Lamparina lidera um grupo de justiceiros do sertão. Controla o fogo com a mesma destreza que usa suas espingardas de luz.',
    poderes: ['Controle do Fogo', 'Tiro de Luz', 'Ímpeto do Sertão']
  },
  {
    id: 7,
    nome: 'Professora Anansí',
    anime: 'Curupira Academy',
    tipo: 'suporte',
    emoji: '🕷️',
    cor: 'linear-gradient(135deg, #0a0a2e, #1a1a50)',
    bio: 'A aranha-sabedoria. Vinda da África com os navios negreiros, Anansí se tornou a guardiã do conhecimento oculto do Brasil. Professora severa, mas justa.',
    poderes: ['Teias do Destino', 'Visão do Futuro', 'Sabedoria Ancestral']
  },
  {
    id: 8,
    nome: 'Saci-3000',
    anime: 'Baile do Futuro',
    tipo: 'misterioso',
    emoji: '🌪️',
    cor: 'linear-gradient(135deg, #2e2e00, #1a1a00)',
    bio: 'No Rio de 2080, o Saci virou uma IA rebelde que mora nos redemoinhos de dados da internet. Faz travessuras digitais e rouba segredos de corporações.',
    poderes: ['Redemoinho Digital', 'Hacking Mágico', 'Invisibilidade Binária']
  }
];

// ── GERAÇÃO DOS CARDS NA HOME ──────────────────
function gerarCardsHome() {
  const grid = document.getElementById('personagens-grid');
  if (!grid) return; // Só executa na home

  // Mostra apenas os primeiros 4 personagens na home
  const preview = personagens.slice(0, 4);

  grid.innerHTML = preview.map(function(p) {
    return `
      <div class="personagem-card" data-id="${p.id}" data-tipo="${p.tipo}">
        <div class="card-avatar" style="background: ${p.cor};">
          <span style="font-size: 5rem;">${p.emoji}</span>
        </div>
        <div class="card-body">
          <span class="card-tipo">${formatarTipo(p.tipo)}</span>
          <h3 class="card-nome">${p.nome}</h3>
          <p class="card-anime">${p.anime}</p>
          <div class="card-poder">${p.poderes[0]}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ── GERAÇÃO DOS CARDS NA PÁGINA PERSONAGENS ────
function gerarCardsFull() {
  const grid = document.getElementById('personagens-full-grid');
  if (!grid) return; // Só executa na página de personagens

  grid.innerHTML = personagens.map(function(p) {
    return `
      <div class="personagem-card-full" data-id="${p.id}" data-tipo="${p.tipo}">
        <div class="card-full-avatar" style="background: ${p.cor};">
          <div class="card-full-avatar-bg" style="background: ${p.cor};"></div>
          <span class="card-full-avatar-emoji" style="font-size: 5.5rem;">${p.emoji}</span>
          <span class="card-tipo-tag tipo-${p.tipo}">${formatarTipo(p.tipo)}</span>
        </div>
        <div class="card-full-body">
          <h3 class="card-full-nome">${p.nome}</h3>
          <span class="card-full-anime">${p.anime}</span>
          <p class="card-full-bio">${p.bio}</p>
          <div class="card-full-poderes">
            ${p.poderes.map(function(poder) {
              return `<span class="poder-tag">${poder}</span>`;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ── FILTROS DE PERSONAGENS ────────────────────
function setupFiltros() {
  const barraFiltros = document.querySelector('#filtros-bar');  
  //console.log("Teste A");
  if (!barraFiltros) return; 

  const botoes = barraFiltros.querySelectorAll('.filtro-btn');

  botoes.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Remove active de todos
      //console.log("Teste B");
      botoes.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const filtro = btn.getAttribute('data-filter');
      filtrarCards(filtro);
    });
  });
}

// Filtra os cards pelo tipo
function filtrarCards(filtro) {
  const cards = document.querySelectorAll('.personagem-card-full');

  //console.log("Teste C");
  cards.forEach(function(card) {
    const tipo = card.getAttribute('data-tipo');
    if (filtro === 'todos' || tipo === filtro) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ── UTILITÁRIOS ───────────────────────────────
function formatarTipo(tipo) {
  const map = {
    heroi:      '⚡ Herói',
    vilao:      '💀 Vilão',
    suporte:    '🛡️ Suporte',
    misterioso: '❓ Misterioso'
  };
  return map[tipo] || tipo;
}

// ── INICIALIZAÇÃO ─────────────────────────────
function initCards() {
  gerarCardsHome();
  gerarCardsFull();
  setupFiltros();
}

// Exporta para o main.js
window.AnimeBR = window.AnimeBR || {};
window.AnimeBR.initCards = initCards;
window.AnimeBR.personagens = personagens;
