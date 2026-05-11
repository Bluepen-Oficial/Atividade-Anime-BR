# 🎌 AnimeBR

> **Projeto educacional de front-end** · Tema: Cultura pop brasileira + Anime  
> Nível: Iniciante / Intermediário · Foco: CSS Debugging & Organização de Código

---

## 📁 Estrutura do Projeto

```
animesbr/
├── index.html          → Página inicial
├── personagens.html    → Grid completo de personagens
├── sobre.html          → História e linha do tempo
├── contato.html        → Formulário de contato
│
├── css/
│   ├── reset.css       → Reset de estilos base
│   ├── global.css      → Variáveis, tipografia, utilitários
│   ├── header.css      → Cabeçalho e navegação
│   ├── home.css        → Estilos da página inicial
│   ├── personagens.css → Estilos da página de personagens
│   └── footer.css      → Rodapé
│
└── js/
    ├── main.js         → Inicializa todos os módulos
    ├── menu.js         → Controla navegação mobile
    ├── theme.js        → Controla dark/light mode
    └── cards.js        → Gera e filtra cards de personagens
```

---

## 🧪 DESAFIOS

> ~~Abra o projeto no navegador e inspecione com as DevTools (F12).~~  
> ~~Leia os comentários nos arquivos CSS e JS — eles dão dicas!~~
> **feature removed**

---

### ⭐ NÍVEL FÁCIL (1–5)

---

#### Desafio 1 — Contraste do texto no banner
**Problema:** O texto de introdução do hero está quase invisível. A cor tem contraste insuficiente contra o fundo escuro.  
**Tarefa:** Troque a cor por algo legível.

---

#### Desafio 2 — Padding incorreto nos inputs do formulário
**Problema:** O padding dos campos de formulário está desproporcional. 
**Tarefa:** Corrija para um valor equilibrado. 


---

#### Desafio 3 — Botão principal desalinhado no hero
**Problema:** O `flex-direction: column` faz os botões ficarem empilhados verticalmente quando deveriam ser lado a lado.  
**Tarefa:** Garanta que fiquem alinhados ao centro verticalmente.

---

#### Desafio 4 — Fonte inconsistente nas notícias
**Problema:** O texto das notícias usa `font-family: 'Space Mono'` (monospace), que é inconsistente com o restante do site.  
**Tarefa:** Herde a fonte padrão.  


---

#### Desafio 5 — Avatar/imagem com proporção errada
**Problema:** A propriedade `object-fit: stretch` não é válida e distorce o conteúdo visual dos cards.  
**Tarefa:** Ajuste a proporção.  


---

### 🔶 NÍVEL MÉDIO (6–10)

---

#### Desafio 6 — Grid de personagens desproporcionado
**Problema 1 (home):** As colunas estão invertidas: o card lateral ser maior que o principal.  

**Problema 2 (personagens):** Quebra em telas menores.  


---

#### Desafio 7 — Filtro de personagens não funciona
**Problema:** O filtro de personagens não funciona.  
**Tarefa:** Corrija o filtro.
**Como testar:** Após corrigir, abra `personagens.html` e clique nos botões de filtro.

---

#### Desafio 8 — Conflito CSS no hover dos botões
**Problema:** A mesma pseudo-classe está declarada duas vezes com propriedades diferentes e conflitantes. 
**Tarefa:** Una as duas declarações em uma só.


---

#### Desafio 9 — Espaçamento inconsistente entre seções
**Problema:** A classe `.section` usa `padding: 96px 0`, mas algumas seções específicas têm valores diferentes declarados inline ou em outros arquivos, gerando inconsistência visual.  
**Tarefa:**  
1. Identifique todas as seções que têm padding diferente.
2. Decida um valor padrão.
3. Aplique consistentemente em todo o site.


---

#### Desafio 10 — Bug no dark mode (tema claro incompleto)
**Problema:** No modo claro, esses textos ficam com cores escuras demais para o fundo claro.  


**Segundo problema:** O botão de tema não funciona.  


---

## 🏆 DESAFIO BÔNUS — Para quem quer ir além

#### Desafio B1 — Extrair CSS inline para arquivos separados
**Páginas:** `sobre.html` e `contato.html`  
Crie os arquivos `css/sobre.css` e `css/contato.css`, mova o CSS inline de cada página para seu respectivo arquivo e adicione a tag `<link>` correta no HTML.

#### Desafio B2 — Menu hamburguer quebrado
**Arquivo:** `js/menu.js`  
**Função:** `toggleMenu()`  
O botão hamburguer nunca fica visualmente "ativo" (as três barras não viram X) porque a classe verificada é `'is-open'` mas a adicionada é `'open'`. Padronize para um único nome de classe.


---

## ✅ Checklist de Conclusão

- [X] Desafio 1: Contraste do hero-subtitle corrigido
- [ ] Desafio 2: Padding dos inputs equilibrado
- [ ] Desafio 3: Botões do hero lado a lado (flex-direction: row)
- [ ] Desafio 4: Fonte das notícias padronizada (Syne)
- [ ] Desafio 5: object-fit corrigido nos cards
- [ ] Desafio 6: Grid de destaques com proporções corretas
- [ ] Desafio 7: Filtro de personagens funcionando
- [ ] Desafio 8: Regra CSS duplicada unificada
- [ ] Desafio 9: Padding de seções padronizado
- [ ] Desafio 10: Dark mode completo + botão de tema funcionando
- [ ] Bônus B1: CSS inline extraído para arquivos separados
- [ ] Bônus B2: Menu hamburguer corrigido

---

*Projeto criado para fins educacionais · AnimeBR é fictício · © 2026*
