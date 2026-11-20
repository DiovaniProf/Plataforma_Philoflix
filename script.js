/* =============================================================
   FILOSOFIA · TRILHA DE APRENDIZAGEM
   Personalização: edite o array MODULOS abaixo para alterar
   títulos, textos e perguntas dos seis módulos e 30 subtemas.
   Os dados são guardados SOMENTE no navegador (localStorage).
   ============================================================= */

const MODULOS = [
  {
    id: "mito", nome: "Mito e Filosofia",
    descricao: "As primeiras explicações da realidade e o surgimento do pensamento filosófico.",
    temas: [
      { titulo: "O mito e as explicações do mundo", texto: "Os mitos são narrativas simbólicas que procuram explicar a origem do mundo, da natureza e das relações humanas. Transmitidos entre gerações, expressam valores, medos e esperanças de diferentes povos. Estudar o mito é compreender uma forma significativa de interpretar a realidade, e não simplesmente classificá-lo como erro.", pergunta: "Que explicações míticas continuam presentes em nossa cultura e que sentidos elas oferecem?" },
      { titulo: "Do mito ao logos", texto: "Na Grécia antiga, filósofos começaram a procurar explicações apoiadas na argumentação racional. A passagem do mythos ao logos não eliminou imediatamente os mitos: abriu outras maneiras de questionar, justificar e discutir ideias. A filosofia nasce desse exercício de investigação crítica.", pergunta: "O que muda quando uma explicação precisa apresentar razões que podem ser discutidas?" },
      { titulo: "Os pré-socráticos e a arché", texto: "Pensadores como Tales, Anaximandro e Heráclito investigaram o princípio ou fundamento da natureza, chamado arché. Em vez de recorrer exclusivamente à ação dos deuses, propuseram hipóteses sobre os elementos, as transformações e a ordem do cosmos.", pergunta: "Por que buscar princípios gerais da natureza foi um passo importante para a filosofia?" },
      { titulo: "Sócrates e o diálogo filosófico", texto: "Sócrates tornou o questionamento uma prática central da vida filosófica. Por meio de perguntas e do exame de respostas, buscava revelar contradições, esclarecer conceitos e estimular o cuidado com o próprio pensamento. O diálogo aparece como caminho de aprendizagem compartilhada.", pergunta: "Qual é a diferença entre perguntar para compreender e perguntar apenas para vencer uma discussão?" },
      { titulo: "Filosofia e pensamento crítico", texto: "A atitude filosófica envolve estranhar o que parece óbvio, avaliar argumentos e reconhecer pressupostos. Ao distinguir opinião, crença e justificativa, aprendemos a construir posições mais conscientes sobre questões da vida cotidiana e da sociedade.", pergunta: "Que ideia tida como evidente você gostaria de examinar filosoficamente?" }
    ]
  },
  {
    id: "conhecimento", nome: "Teoria do Conhecimento",
    descricao: "Como conhecemos, justificamos nossas crenças e reconhecemos os limites do saber.",
    temas: [
      { titulo: "O que significa conhecer?", texto: "A teoria do conhecimento investiga a relação entre o sujeito que conhece e o objeto conhecido. Pergunta como formamos crenças, quando elas são justificadas e o que distingue saber de apenas acreditar. Essas questões também ajudam a analisar informações no cotidiano.", pergunta: "Ter convicção de alguma coisa é suficiente para dizer que sabemos?" },
      { titulo: "Racionalismo e empirismo", texto: "O racionalismo destaca o papel da razão na construção do conhecimento, enquanto o empirismo enfatiza a experiência sensível. René Descartes e John Locke são referências importantes dessas tradições, que oferecem respostas distintas à pergunta sobre a origem de nossas ideias.", pergunta: "Ao aprender algo novo, o que depende da experiência e o que depende do raciocínio?" },
      { titulo: "Ceticismo, dúvida e certeza", texto: "O ceticismo questiona a possibilidade ou os critérios de um conhecimento seguro. A dúvida metódica de Descartes, por exemplo, procura examinar criticamente crenças que podem ser enganosas. Duvidar pode ser um instrumento de investigação, e não apenas sinal de indecisão.", pergunta: "Como diferenciar a dúvida que ajuda a investigar daquela que impede qualquer conclusão?" },
      { titulo: "Platão: opinião e conhecimento", texto: "Na filosofia de Platão, a distinção entre doxa (opinião) e episteme (conhecimento) é fundamental. A alegoria da caverna permite discutir aparência, realidade e formação intelectual, mostrando a importância de ultrapassar as primeiras impressões.", pergunta: "Que situações atuais lembram a confusão entre sombras, aparências e realidade?" },
      { titulo: "Kant e os limites do conhecer", texto: "Immanuel Kant investigou as condições que tornam possível nossa experiência dos objetos. Para ele, conhecer envolve tanto o que recebemos pela sensibilidade quanto estruturas da compreensão. Sua filosofia também convida a reconhecer limites no que podemos afirmar conhecer.", pergunta: "Se a mente participa da organização da experiência, como isso afeta nossa ideia de objetividade?" }
    ]
  },
  {
    id: "etica", nome: "Ética",
    descricao: "Valores, escolhas e responsabilidades na construção da vida individual e coletiva.",
    temas: [
      { titulo: "Ética, moral e valores", texto: "A moral reúne costumes, normas e valores compartilhados por grupos e sociedades. A ética examina criticamente os fundamentos dessas orientações, investigando o que torna uma ação justificável, justa ou boa. Nem tudo o que é habitual é necessariamente correto.", pergunta: "Como argumentar quando duas pessoas defendem valores morais diferentes?" },
      { titulo: "Aristóteles: virtude e felicidade", texto: "Para Aristóteles, a vida boa envolve o desenvolvimento de virtudes pelo hábito, pela prudência e pela prática. A felicidade, ou eudaimonia, não se reduz a prazeres momentâneos: relaciona-se ao florescimento humano e a uma vida orientada pela razão.", pergunta: "Que hábitos podem formar o caráter de uma pessoa ao longo do tempo?" },
      { titulo: "Kant e o dever moral", texto: "A ética kantiana dá destaque à autonomia da razão e ao dever. O imperativo categórico convida a examinar se a máxima de uma ação poderia valer como lei universal e a tratar as pessoas como fins em si mesmas, jamais apenas como meios.", pergunta: "Você consideraria correta uma atitude que traz vantagens pessoais, mas não poderia ser seguida por todos?" },
      { titulo: "Sartre: liberdade e responsabilidade", texto: "Na filosofia existencialista de Jean-Paul Sartre, a liberdade humana implica responsabilidade pelas escolhas e pelo modo como construímos nossa existência. Mesmo diante de limites e circunstâncias, somos convocados a refletir sobre os sentidos de nossas decisões.", pergunta: "O que significa assumir a responsabilidade por uma escolha difícil?" },
      { titulo: "Dilemas éticos e bioética", texto: "Dilemas éticos surgem quando valores e deveres entram em conflito. A bioética discute questões relacionadas à vida, à saúde, à autonomia e às consequências das tecnologias. Argumentar com cuidado exige considerar perspectivas, princípios e impactos sobre as pessoas.", pergunta: "Como decidir quando proteger um valor importante pode colocar outro em risco?" }
    ]
  },
  {
    id: "politica", nome: "Filosofia Política",
    descricao: "Poder, justiça, cidadania e os diferentes modos de organizar a convivência.",
    temas: [
      { titulo: "Poder, Estado e legitimidade", texto: "A filosofia política discute a origem, o exercício e a justificação do poder. Pergunta por que as pessoas devem obedecer às leis, quais são os limites da autoridade e em que condições uma organização política pode ser considerada legítima.", pergunta: "O que diferencia uma autoridade legítima de uma imposição baseada apenas na força?" },
      { titulo: "Platão e a cidade justa", texto: "Na obra A República, Platão investiga a justiça na pessoa e na cidade. Sua reflexão relaciona educação, organização social e governo, propondo que a política seja examinada à luz do bem comum e da formação dos governantes.", pergunta: "Uma cidade pode ser considerada justa se não oferecer oportunidades de formação a seus cidadãos?" },
      { titulo: "Hobbes, Locke e Rousseau", texto: "Os filósofos contratualistas explicaram de diferentes maneiras a origem e a finalidade do poder político. Hobbes enfatizou a segurança; Locke, a proteção de direitos; Rousseau, a soberania popular e a vontade geral. Compará-los ajuda a discutir a relação entre liberdade e autoridade.", pergunta: "Que direitos e responsabilidades devem fundamentar um acordo de convivência?" },
      { titulo: "Democracia e direitos humanos", texto: "A democracia envolve participação política, regras de convivência e proteção dos direitos. A reflexão filosófica permite discutir cidadania, pluralismo, igualdade e os desafios de construir instituições que respeitem a dignidade humana.", pergunta: "Por que votar é importante, mas não esgota o exercício da cidadania?" },
      { titulo: "Justiça social e participação", texto: "A justiça social considera como oportunidades, recursos e responsabilidades são distribuídos. Debates sobre desigualdade, reconhecimento e participação exigem analisar diferentes critérios de justiça e escutar experiências diversas da vida coletiva.", pergunta: "O que significa oferecer condições justas a pessoas que partem de situações diferentes?" }
    ]
  },
  {
    id: "ciencia", nome: "Filosofia da Ciência",
    descricao: "Métodos, teorias e limites do conhecimento científico e suas implicações sociais.",
    temas: [
      { titulo: "Ciência e método científico", texto: "A ciência investiga fenômenos por meio de problemas, hipóteses, observações, experimentos e argumentações. Seus métodos variam entre áreas, mas compartilham a preocupação com evidências, crítica pública e revisão das explicações propostas.", pergunta: "Por que uma explicação científica precisa poder ser examinada por outras pessoas?" },
      { titulo: "Indução, dedução e hipótese", texto: "O raciocínio indutivo parte de observações particulares para formular generalizações, enquanto a dedução extrai consequências de premissas. Na pesquisa científica, hipóteses orientam investigações e podem produzir previsões avaliáveis à luz de evidências.", pergunta: "Uma grande quantidade de observações confirma definitivamente uma lei geral?" },
      { titulo: "Karl Popper e a falseabilidade", texto: "Karl Popper defendeu que teorias científicas devem ser formuladas de modo a admitir testes capazes de contrariá-las. A falseabilidade não significa que toda teoria seja falsa; indica a importância da possibilidade de refutação para a crítica e o avanço científico.", pergunta: "Por que uma afirmação que explica qualquer resultado pode ser difícil de testar cientificamente?" },
      { titulo: "Thomas Kuhn e os paradigmas", texto: "Thomas Kuhn estudou mudanças na história da ciência. O conceito de paradigma descreve conjuntos de práticas, problemas e modelos compartilhados por comunidades científicas, que podem ser transformados em períodos de revolução científica.", pergunta: "De que modo novas descobertas podem alterar a maneira como uma comunidade científica vê o mundo?" },
      { titulo: "Ciência, tecnologia e ética", texto: "A produção científica e o desenvolvimento tecnológico transformam a sociedade e criam responsabilidades. Questões relacionadas à inteligência artificial, ao meio ambiente e à privacidade mostram que possibilidades técnicas também exigem avaliação ética e política.", pergunta: "Tudo o que a tecnologia permite realizar deve necessariamente ser realizado?" }
    ]
  },
  {
    id: "estetica", nome: "Estética",
    descricao: "Beleza, arte, sensibilidade e suas relações com a cultura e a experiência humana.",
    temas: [
      { titulo: "O belo e a experiência estética", texto: "A estética investiga experiências relacionadas à beleza, à sensibilidade e à apreciação. Pergunta se o belo está nos objetos, no observador ou na relação entre ambos, examinando também o impacto das tradições culturais sobre nossos julgamentos.", pergunta: "Duas pessoas podem discordar sobre o belo sem que uma delas esteja necessariamente errada?" },
      { titulo: "Arte, emoção e interpretação", texto: "A arte pode produzir emoções, questionar valores e ampliar formas de interpretar a existência. Obras visuais, musicais, literárias e performáticas convidam a considerar tanto seus elementos expressivos quanto os contextos em que são criadas e recebidas.", pergunta: "Uma obra precisa ser agradável para ser considerada artisticamente importante?" },
      { titulo: "Platão, Aristóteles e a mímesis", texto: "Platão e Aristóteles discutiram a mímesis, frequentemente traduzida como representação ou imitação. Em suas reflexões sobre poesia e teatro, apresentaram avaliações diferentes do papel das produções artísticas na educação, nas emoções e na vida social.", pergunta: "A representação artística apenas reproduz a realidade ou também pode transformá-la?" },
      { titulo: "Kant e o juízo de gosto", texto: "Na Crítica da Faculdade do Juízo, Kant investiga o julgamento estético e a relação entre prazer, imaginação e pretensão de universalidade. Dizer que algo é belo envolve uma experiência subjetiva que, ainda assim, frequentemente solicita a concordância dos outros.", pergunta: "Por que desejamos que outras pessoas reconheçam a beleza que percebemos?" },
      { titulo: "Arte contemporânea e cultura digital", texto: "Instalações, performances, fotografia, audiovisual e criações digitais ampliam as formas da arte. A estética contemporânea permite discutir autoria, circulação de imagens, inteligência artificial, apropriação e o papel crítico das produções culturais.", pergunta: "O que muda no conceito de criação artística quando uma obra utiliza ferramentas de inteligência artificial?" }
    ]
  }
];

const STORAGE_KEY = "filosofia_bookplay_registros_v1";
const THEME_KEY = "filosofia_bookplay_tema_v1";
const TOPICOS = new Map();
for (const modulo of MODULOS) modulo.temas.forEach((tema, i) => {
  tema.id = `${modulo.id}-${i + 1}`;
  tema.modulo = modulo.nome;
  tema.numero = i + 1;
  TOPICOS.set(tema.id, tema);
});

const $ = (selector) => document.querySelector(selector);
const list = $("#module-list");
const dialog = $("#topic-dialog");
let registros = lerRegistros();
let abertos = new Set([MODULOS[0].id]);
let ativo = null;
let toastTimer;

function lerRegistros() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
    return raw;
  } catch { return {}; }
}
function salvarRegistros() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(registros)); }
  catch { aviso("Não foi possível salvar no navegador. Use a opção Exportar progresso."); }
}
function textoSeguro(valor) {
  return String(valor).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}
function normalizar(valor) {
  return String(valor).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function statusDo(id) { return registros[id]?.status || "pendente"; }
function feito(id) { return statusDo(id) === "concluido"; }
function concluidos(modulo) { return modulo.temas.filter(t => feito(t.id)).length; }
function aviso(mensagem) {
  const toast = $("#toast"); toast.textContent = mensagem;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3300);
}
const iconeLivro = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5c-3-1.9-6.4-2-9-.5v14c2.6-1.4 6-1.4 9 .5 3-1.9 6.4-1.9 9-.5v-14C18.4 3 15 3.1 12 5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 5v14" stroke="currentColor" stroke-width="1.8"/></svg>`;
const iconeSeta = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m7 10 5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const iconeAnterior = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m15 5-7 7 7 7" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></svg>`;
const iconeProximo = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 5 7 7-7 7" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></svg>`;
const iconeVazio = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.4" stroke="currentColor" stroke-width="1.55"/></svg>`;
const iconeAndamento = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.4" stroke="currentColor" stroke-width="1.55"/><path d="M8 4.2v4.1l2.6 1.5" stroke="currentColor" stroke-width="1.55" stroke-linecap="round"/></svg>`;
const iconeCheck = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.4" stroke="currentColor" stroke-width="1.55"/><path d="m4.8 8 2.2 2.2 4.3-4.5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
function htmlStatus(id) {
  const status = statusDo(id);
  if (status === "concluido") return `<span class="status status--completed">${iconeCheck} Concluído</span>`;
  if (status === "andamento") return `<span class="status status--in-progress">${iconeAndamento} Em andamento</span>`;
  return `<span class="status status--pending">${iconeVazio} Não iniciado</span>`;
}
function htmlCartao(tema) {
  return `<button type="button" class="topic-card" data-topic="${tema.id}" aria-label="Abrir subtema ${textoSeguro(tema.titulo)}. ${statusDo(tema.id) === "concluido" ? "Concluído" : "Não concluído"}">
    <span class="topic-card__top"><span class="topic-card__icon">${iconeLivro}</span><span class="topic-card__category">Subtema ${String(tema.numero).padStart(2,"0")}</span></span>
    <span class="topic-card__title">${textoSeguro(tema.titulo)}</span>
    <span class="topic-card__footer">${htmlStatus(tema.id)}</span>
  </button>`;
}
function renderizar() {
  const termo = normalizar($("#topic-search").value);
  let totalVisivel = 0;
  const html = MODULOS.map((modulo, index) => {
    const moduloEncontrado = normalizar(modulo.nome + " " + modulo.descricao).includes(termo);
    const visiveis = termo ? (moduloEncontrado ? modulo.temas : modulo.temas.filter(t => normalizar(t.titulo + " " + t.texto).includes(termo))) : modulo.temas;
    if (visiveis.length === 0) return "";
    totalVisivel++;
    const aberto = abertos.has(modulo.id);
    return `<article class="module" data-module="${modulo.id}">
      <button type="button" class="module__toggle" aria-expanded="${aberto}" aria-controls="panel-${modulo.id}" data-toggle="${modulo.id}">
        <span class="module__index">${String(index+1).padStart(2,"0")}</span>
        <span class="module__titles"><span class="module__name">${textoSeguro(modulo.nome)}</span><span class="module__subtitle">${modulo.temas.length} subtemas · ${textoSeguro(modulo.descricao)}</span></span>
        <span class="module__count">${concluidos(modulo)} / ${modulo.temas.length} concluídos</span>
        <span class="module__chevron">${iconeSeta}</span>
      </button>
      <div id="panel-${modulo.id}" class="module__panel" ${aberto ? "" : "hidden"}>
        <p class="module__intro">${textoSeguro(modulo.descricao)} <strong>Explore os cartões abaixo.</strong></p>
        <div class="topic-carousel">
          <button type="button" class="carousel-arrow" data-scroll="prev" aria-label="Ver subtemas anteriores" disabled>${iconeAnterior}</button>
          <div class="topic-track" role="group" aria-label="Subtemas de ${textoSeguro(modulo.nome)}">${visiveis.map(htmlCartao).join("")}</div>
          <button type="button" class="carousel-arrow" data-scroll="next" aria-label="Ver próximos subtemas" disabled>${iconeProximo}</button>
        </div>
      </div>
    </article>`;
  }).join("");
  list.innerHTML = html;
  $("#no-results").hidden = totalVisivel !== 0;
  $("#expand-toggle").innerHTML = abertos.size === MODULOS.length ? "Recolher todos <span aria-hidden=\"true\">⌃</span>" : "Expandir todos <span aria-hidden=\"true\">⌄</span>";
  atualizarProgresso();
  requestAnimationFrame(() => document.querySelectorAll(".topic-carousel").forEach(atualizarSetas));
}
function atualizarProgresso() {
  const total = TOPICOS.size;
  const concluidosTotal = [...TOPICOS.keys()].filter(feito).length;
  const percentual = Math.round(concluidosTotal / total * 100);
  $("#progress-percent").textContent = percentual + "%";
  $("#progress-count").textContent = String(concluidosTotal);
  $("#progress-bar").style.width = percentual + "%";
  $("#progress-ring").style.setProperty("--p", percentual + "%");
}
function atualizarSetas(carousel) {
  const track = carousel.querySelector(".topic-track");
  if (!track) return;
  const max = track.scrollWidth - track.clientWidth;
  carousel.querySelector('[data-scroll="prev"]').disabled = track.scrollLeft < 3;
  carousel.querySelector('[data-scroll="next"]').disabled = track.scrollLeft >= max - 3 || max < 3;
}
function abrirSubtema(id) {
  const tema = TOPICOS.get(id);
  if (!tema) return;
  ativo = id;
  if (statusDo(id) === "pendente") {
    registros[id] = { ...(registros[id] || {}), status:"andamento" };
    salvarRegistros();
    renderizar();
  }
  $("#dialog-module").textContent = tema.modulo + "  ·  SUBTEMA " + String(tema.numero).padStart(2,"0");
  $("#dialog-title").textContent = tema.titulo;
  $("#dialog-description").textContent = tema.texto;
  $("#dialog-question").textContent = tema.pergunta;
  $("#topic-notes").value = registros[id]?.anotacoes || "";
  $("#save-message").textContent = "";
  atualizarDialogo();
  dialog.showModal();
}
function atualizarDialogo() {
  if (!ativo) return;
  $("#dialog-status").innerHTML = htmlStatus(ativo);
  const concluido = feito(ativo);
  $("#finish-topic").textContent = concluido ? "Reabrir subtema" : "Marcar como concluído";
}
function salvarAnotacoes(mostrarAviso = true) {
  if (!ativo) return;
  registros[ativo] = { ...(registros[ativo] || {}), anotacoes:$("#topic-notes").value };
  salvarRegistros();
  if (mostrarAviso) $("#save-message").textContent = "Anotações salvas neste navegador.";
}
function importarRegistros(arquivo) {
  if (!arquivo) return;
  if (arquivo.size > 2_000_000) { aviso("Arquivo grande demais para importar."); return; }
  const leitor = new FileReader();
  leitor.onload = () => {
    try {
      const json = JSON.parse(String(leitor.result));
      if (!json || !json.registros || typeof json.registros !== "object" || Array.isArray(json.registros)) throw Error("Formato inválido");
      const novos = {};
      for (const [id, registro] of Object.entries(json.registros)) {
        if (!TOPICOS.has(id) || !registro || typeof registro !== "object") continue;
        if (!["pendente", "andamento", "concluido"].includes(registro.status)) continue;
        novos[id] = { status:registro.status, anotacoes:typeof registro.anotacoes === "string" ? registro.anotacoes.slice(0,15000) : "" };
      }
      if (!window.confirm("Importar este registro e substituir o progresso atual deste navegador?")) return;
      registros = novos; salvarRegistros(); renderizar(); aviso("Registro importado com sucesso.");
    } catch { aviso("Não foi possível ler o arquivo. Escolha um JSON exportado por esta página."); }
  };
  leitor.readAsText(arquivo,"utf-8");
}

list.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-toggle]");
  if (toggle) {
    const id = toggle.dataset.toggle;
    if (abertos.has(id)) abertos.delete(id); else abertos.add(id);
    renderizar();
    return;
  }
  const cartao = event.target.closest("[data-topic]");
  if (cartao) { abrirSubtema(cartao.dataset.topic); return; }
  const seta = event.target.closest("[data-scroll]");
  if (seta) {
    const track = seta.closest(".topic-carousel").querySelector(".topic-track");
    const card = track.querySelector(".topic-card");
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    track.scrollBy({left:(card ? card.getBoundingClientRect().width + gap : 220) * (seta.dataset.scroll === "next" ? 1 : -1),behavior:"smooth"});
  }
});
list.addEventListener("scroll", (event) => {
  if (event.target.classList?.contains("topic-track")) atualizarSetas(event.target.closest(".topic-carousel"));
},true);
window.addEventListener("resize", () => document.querySelectorAll(".topic-carousel").forEach(atualizarSetas));
$("#topic-search").addEventListener("input", (event) => {
  const termo = normalizar(event.target.value);
  if (termo) abertos = new Set(MODULOS.filter(m => normalizar(m.nome + " " + m.descricao).includes(termo) || m.temas.some(t => normalizar(t.titulo + " " + t.texto).includes(termo))).map(m => m.id));
  renderizar();
});
$("#expand-toggle").addEventListener("click", () => {
  abertos = abertos.size === MODULOS.length ? new Set() : new Set(MODULOS.map(m => m.id));
  renderizar();
});
$("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
dialog.addEventListener("close", () => { salvarAnotacoes(false); ativo = null; renderizar(); });
$("#topic-notes").addEventListener("input", () => { salvarAnotacoes(false); $("#save-message").textContent = "Salvo automaticamente."; });
$("#save-notes").addEventListener("click", () => salvarAnotacoes());
$("#finish-topic").addEventListener("click", () => {
  if (!ativo) return;
  const estavaConcluido = feito(ativo);
  registros[ativo] = {...(registros[ativo] || {}), status:estavaConcluido ? "andamento" : "concluido", anotacoes:$("#topic-notes").value};
  salvarRegistros(); atualizarDialogo(); renderizar();
  aviso(estavaConcluido ? "Subtema reaberto para estudo." : "Subtema marcado como concluído!");
});
$("#export-button").addEventListener("click", () => {
  const conteudo = JSON.stringify({tipo:"filosofia-bookplay",versao:1,exportadoEm:new Date().toISOString(),registros},null,2);
  const url = URL.createObjectURL(new Blob([conteudo],{type:"application/json"}));
  const a = document.createElement("a"); a.href=url; a.download="filosofia_progresso.json"; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url),1500);
  aviso("Progresso exportado em JSON.");
});
$("#import-button").addEventListener("click", () => $("#import-file").click());
$("#import-file").addEventListener("change", e => { importarRegistros(e.target.files[0]); e.target.value=""; });
$("#reset-button").addEventListener("click", () => {
  if (!confirm("Apagar todas as conclusões e anotações salvas neste navegador?")) return;
  registros = {}; salvarRegistros(); renderizar(); aviso("Progresso reiniciado.");
});
$("#theme-toggle").addEventListener("click", () => {
  const novo = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = novo;
  try { localStorage.setItem(THEME_KEY,novo); } catch {}
  $("#theme-toggle").setAttribute("aria-label",novo === "dark" ? "Ativar modo claro" : "Ativar modo escuro");
});
try { if (localStorage.getItem(THEME_KEY) === "dark") document.documentElement.dataset.theme="dark"; } catch {}
renderizar();
