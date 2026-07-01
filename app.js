/* ============================================================================
   AQUAPET — MOTOR DO SITE  (app.js)
   Lê o conteúdo de "dados.js" e monta a página automaticamente.
   (arquivo técnico — você NÃO precisa editar este arquivo)
   ============================================================================ */
(function () {
  "use strict";

  const D = window.DADOS || {};
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* imagem de reserva quando o caminho estiver errado */
  const PLACEHOLDER =
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
        <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stop-color='#0a1326'/><stop offset='1' stop-color='#0e1c38'/>
        </linearGradient></defs>
        <rect width='400' height='400' fill='url(#g)'/>
        <text x='50%' y='50%' fill='#3a5680' font-family='sans-serif' font-size='90'
          text-anchor='middle' dominant-baseline='central'>🐟</text>
      </svg>`
    );
  window.imgFallback = (img) => { img.onerror = null; img.src = PLACEHOLDER; };

  const catNome = (id) => {
    const c = (D.categorias || []).find((x) => x.id === id);
    return c ? c.nome : id;
  };

  /* ========================================================================
     1) DADOS DA LOJA (topo, contato, rodapé, mapa)
     ===================================================================== */
  function montarLoja() {
    const L = D.loja || {};
    $$("[data-loja-nome]").forEach((e) => (e.textContent = L.nome || "AquaPet"));
    $$("[data-loja-slogan]").forEach((e) => (e.textContent = L.slogan || ""));
    $$("[data-loja-endereco]").forEach((e) => (e.textContent = L.endereco || ""));
    $$("[data-loja-tel]").forEach((e) => (e.textContent = L.telefone || ""));

    const wpp = (L.whatsapp || "").replace(/\D/g, "");
    const wppHref = wpp
      ? `https://wa.me/${wpp}?text=${encodeURIComponent("Olá! Vim pelo site da " + (L.nome || "loja") + " 🐠")}`
      : "#";
    $$("[data-loja-whats]").forEach((e) => (e.href = wppHref));
    $$("[data-loja-insta]").forEach((e) => (e.href = L.instagram || "#"));

    const mapa = $("#mapa");
    if (mapa && L.mapaEmbed) mapa.src = L.mapaEmbed;

    $$("[data-ano]").forEach((e) => (e.textContent = new Date().getFullYear()));

    /* números do hero a partir do conteúdo real */
    const nProd = (D.produtos || []).length;
    const nCat = (D.categorias || []).length;
    $$("[data-stat-produtos]").forEach((e) => (e.textContent = nProd ? `+${nProd}` : "—"));
    $$("[data-stat-categorias]").forEach((e) => (e.textContent = nCat || "—"));
  }

  /* ========================================================================
     2) MENU DE CATEGORIAS (desktop + mobile)
     ===================================================================== */
  function montarMenuCategorias() {
    const cats = D.categorias || [];
    const desk = $("#nav-cat-list");
    const mob = $("#mobile-cat-list");
    if (desk)
      desk.innerHTML = cats
        .map(
          (c) =>
            `<a href="#catalogo" data-goto="${c.id}" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-sky-500/15 transition text-sm">
              <i class="fa-solid ${c.icone} w-5 text-sky-400"></i>${c.nome}
             </a>`
        )
        .join("");
    if (mob)
      mob.innerHTML = cats
        .map(
          (c) =>
            `<a href="#catalogo" data-goto="${c.id}" class="flex items-center gap-3 py-2 hover:text-sky-400 transition">
              <i class="fa-solid ${c.icone} w-5 text-sky-400"></i>${c.nome}
             </a>`
        )
        .join("");
  }

  /* ========================================================================
     3) MURAL DE AVISOS
     ===================================================================== */
  const ICONE_AVISO = {
    atendimento: "fa-clock",
    promocao: "fa-tags",
    fechado: "fa-door-closed",
    aviso: "fa-bullhorn",
  };
  const ROTULO_AVISO = {
    atendimento: "Atendimento",
    promocao: "Promoção",
    fechado: "Fechado",
    aviso: "Aviso",
  };

  function dataBonita(iso) {
    if (!iso) return "";
    const [a, m, d] = iso.split("-").map(Number);
    if (!a || !m || !d) return "";
    const dt = new Date(a, m - 1, d);
    return dt.toLocaleDateString("pt-BR", { day: "2-digit", month: "long" });
  }

  function montarAvisos() {
    const grid = $("#avisos-grid");
    if (!grid) return;
    const avisos = (D.avisos || []).slice();
    if (!avisos.length) {
      $("#sec-avisos")?.classList.add("hidden");
      return;
    }
    /* destaque primeiro */
    avisos.sort((a, b) => (b.destaque === true) - (a.destaque === true));

    grid.innerHTML = avisos
      .map((av, i) => {
        const tipo = ICONE_AVISO[av.tipo] ? av.tipo : "aviso";
        const span = av.destaque ? "md:col-span-2" : "";
        const big = av.destaque ? "aviso-destaque" : "";
        return `
        <article class="glass aviso aviso-${tipo} ${big} ${span} reveal" data-delay="${i % 3}">
          <div class="flex items-start gap-4">
            <div class="aviso-ico"><i class="fa-solid ${ICONE_AVISO[tipo]}"></i></div>
            <div class="min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-[0.7rem] font-bold uppercase tracking-wider text-sky-300/80">${ROTULO_AVISO[tipo]}</span>
                ${av.data ? `<span class="text-[0.7rem] text-slate-500">• ${dataBonita(av.data)}</span>` : ""}
              </div>
              <h3 class="text-lg font-bold mb-1">${av.titulo || ""}</h3>
              <p class="text-slate-300/90 text-sm leading-relaxed">${av.mensagem || ""}</p>
            </div>
          </div>
        </article>`;
      })
      .join("");
  }

  /* ========================================================================
     4) CALENDÁRIO DE ATENDIMENTO
     ===================================================================== */
  const DOW_KEYS = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
  const DOW_LABEL = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const MESES = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

  let calRef = new Date();
  calRef.setDate(1);

  function infoDoDia(ano, mes, dia) {
    const cal = D.calendario || {};
    const semanal = cal.horarioSemanal || {};
    const iso = `${ano}-${String(mes + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
    const exc = (cal.excecoes || []).find((e) => e.data === iso);
    const dow = DOW_KEYS[new Date(ano, mes, dia).getDay()];
    const padraoTxt = semanal[dow] || "Fechado";
    const padraoFechado = /fechado/i.test(padraoTxt);

    if (exc) {
      return {
        status: exc.status || (padraoFechado ? "fechado" : "aberto"),
        horario: exc.status === "fechado" ? "" : exc.horario || padraoTxt,
        obs: exc.obs || "",
      };
    }
    return {
      status: padraoFechado ? "fechado" : "aberto",
      horario: padraoFechado ? "" : padraoTxt,
      obs: "",
    };
  }

  function montarCalendario() {
    const grid = $("#cal-grid");
    if (!grid) return;
    const ano = calRef.getFullYear();
    const mes = calRef.getMonth();
    $("#cal-title").textContent = `${MESES[mes]} ${ano}`;

    const primeiroDow = new Date(ano, mes, 1).getDay();
    const diasNoMes = new Date(ano, mes + 1, 0).getDate();
    const hoje = new Date();
    const ehHoje = (d) => hoje.getFullYear() === ano && hoje.getMonth() === mes && hoje.getDate() === d;

    let html = DOW_LABEL.map((d) => `<div class="cal-dow">${d}</div>`).join("");
    for (let i = 0; i < primeiroDow; i++) html += `<div class="cal-empty"></div>`;

    for (let d = 1; d <= diasNoMes; d++) {
      const info = infoDoDia(ano, mes, d);
      const cls = `cal-${info.status}`;
      const today = ehHoje(d) ? "cal-today" : "";
      html += `
        <button type="button" class="cal-day has-info ${cls} ${today}"
          data-dia="${d}" data-status="${info.status}"
          data-horario="${info.horario}" data-obs="${(info.obs || "").replace(/"/g, "&quot;")}">
          <span>${d}</span><span class="dot"></span>
        </button>`;
    }
    grid.innerHTML = html;

    /* clique no dia mostra detalhe */
    $$(".cal-day.has-info", grid).forEach((btn) => {
      btn.addEventListener("click", () => {
        const d = btn.dataset.dia;
        const status = btn.dataset.status;
        const horario = btn.dataset.horario;
        const obs = btn.dataset.obs;
        const rotulo = { aberto: "Aberto", fechado: "Fechado", especial: "Horário especial" }[status] || status;
        const box = $("#cal-info");
        box.classList.remove("hidden");
        box.innerHTML = `
          <div class="flex items-center gap-3">
            <span class="cal-day ${"cal-" + status}" style="width:2.5rem;aspect-ratio:1;pointer-events:none;font-size:0.85rem">${d}</span>
            <div>
              <p class="font-bold">${d} de ${MESES[mes]} — <span class="text-sky-300">${rotulo}</span></p>
              <p class="text-sm text-slate-400">${horario ? `🕒 ${horario}` : "Sem atendimento neste dia"}${obs ? ` · ${obs}` : ""}</p>
            </div>
          </div>`;
      });
    });
  }

  function montarHorarioSemanal() {
    const box = $("#cal-semanal");
    if (!box) return;
    const semanal = (D.calendario || {}).horarioSemanal || {};
    const nomes = { domingo: "Domingo", segunda: "Segunda", terca: "Terça", quarta: "Quarta", quinta: "Quinta", sexta: "Sexta", sabado: "Sábado" };
    box.innerHTML = DOW_KEYS.map((k) => {
      const txt = semanal[k] || "Fechado";
      const fechado = /fechado/i.test(txt);
      return `
        <div class="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
          <span class="text-slate-300">${nomes[k]}</span>
          <span class="${fechado ? "text-rose-300/80" : "text-teal-300"} font-semibold text-sm">${txt}</span>
        </div>`;
    }).join("");
  }

  /* ========================================================================
     5) CATEGORIAS (cartões)
     ===================================================================== */
  function montarCategorias() {
    const grid = $("#categorias-grid");
    if (!grid) return;
    grid.innerHTML = (D.categorias || [])
      .map(
        (c, i) => `
        <div class="cat-card glass reveal h-60" data-goto="${c.id}" data-delay="${i % 3}">
          <img src="${c.capa}" alt="${c.nome}" loading="lazy" onerror="imgFallback(this)"
               class="absolute inset-0 w-full h-full object-cover">
          <div class="veil"></div>
          <div class="absolute inset-0 p-6 flex flex-col justify-end">
            <i class="fa-solid ${c.icone} text-sky-400 mb-2 text-xl"></i>
            <h3 class="text-2xl font-bold">${c.nome}</h3>
            <p class="text-slate-300 text-sm">${c.descricao || ""}</p>
          </div>
        </div>`
      )
      .join("");
  }

  /* ========================================================================
     6) CATÁLOGO (filtros + busca + grade)
     ===================================================================== */
  let filtroAtual = "todos";
  let termoBusca = "";

  function montarFiltros() {
    const box = $("#filtros");
    if (!box) return;
    const pills = [{ id: "todos", nome: "Todos", icone: "fa-water" }].concat(D.categorias || []);
    box.innerHTML = pills
      .map(
        (c) =>
          `<button type="button" class="pill ${c.id === "todos" ? "active" : ""}" data-filtro="${c.id}">
            <i class="fa-solid ${c.icone} mr-1.5 text-xs"></i>${c.nome}
           </button>`
      )
      .join("");
    box.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill");
      if (!btn) return;
      filtroAtual = btn.dataset.filtro;
      $$(".pill", box).forEach((p) => p.classList.toggle("active", p === btn));
      renderCatalogo();
    });
  }

  function cardProduto(p, i) {
    const preco = p.promocao && p.precoPromocional
      ? `<span class="price-old mr-2">${p.preco || ""}</span><span class="price-now">${p.precoPromocional}</span>`
      : p.preco
      ? `<span class="price-now">${p.preco}</span>`
      : `<span class="text-slate-400 text-sm">Consulte na loja</span>`;

    const selos = `
      ${p.popular ? `<span class="badge badge-pop"><i class="fa-solid fa-fire"></i>Mais procurado</span>` : ""}
      ${p.promocao ? `<span class="badge badge-promo"><i class="fa-solid fa-bolt"></i>Promoção</span>` : ""}`;

    return `
      <article class="prod-card glass reveal group" data-idx="${i}" data-delay="${i % 4}">
        <div class="prod-img">
          <img src="${p.imagem}" alt="${p.nome}" loading="lazy" onerror="imgFallback(this)">
          <div class="absolute top-3 left-3 flex flex-col items-start gap-1.5">${selos}</div>
        </div>
        <div class="p-4">
          <span class="text-[0.7rem] uppercase tracking-wider text-sky-400/80 font-bold">${catNome(p.categoria)}</span>
          <h3 class="font-bold text-lg leading-tight mt-1 mb-2">${p.nome}</h3>
          <p class="text-slate-400 text-sm line-clamp-2 mb-3">${p.descricao || ""}</p>
          <div class="flex items-center justify-between">
            <div>${preco}</div>
            <span class="text-sky-400 text-sm font-semibold opacity-0 group-hover:opacity-100">Ver +</span>
          </div>
        </div>
      </article>`;
  }

  function produtosFiltrados() {
    const termo = termoBusca.trim().toLowerCase();
    return (D.produtos || []).filter((p) => {
      const okCat = filtroAtual === "todos" || p.categoria === filtroAtual;
      const okBusca =
        !termo ||
        (p.nome || "").toLowerCase().includes(termo) ||
        (p.descricao || "").toLowerCase().includes(termo) ||
        catNome(p.categoria).toLowerCase().includes(termo);
      return okCat && okBusca;
    });
  }

  function renderCatalogo() {
    const grid = $("#catalogo-grid");
    if (!grid) return;
    const lista = produtosFiltrados();
    const total = (D.produtos || []).length;

    $("#catalogo-count") && ($("#catalogo-count").textContent =
      `${lista.length} ${lista.length === 1 ? "item" : "itens"}${filtroAtual === "todos" && !termoBusca ? ` no catálogo` : ` de ${total}`}`);

    if (!lista.length) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-16 text-slate-400">
          <i class="fa-solid fa-fish-fins text-4xl text-sky-500/40 mb-3"></i>
          <p>Nenhum produto encontrado. Tente outra busca ou categoria.</p>
        </div>`;
      return;
    }
    /* índice real para o modal */
    grid.innerHTML = lista
      .map((p) => cardProduto(p, (D.produtos || []).indexOf(p)))
      .join("");
    observarReveal(grid);
  }

  /* ========================================================================
     7) MODAL DE PRODUTO
     ===================================================================== */
  function abrirModal(idx) {
    const p = (D.produtos || [])[idx];
    if (!p) return;

    const preco = p.promocao && p.precoPromocional
      ? `<span class="price-old text-base mr-2">${p.preco || ""}</span><span class="price-now text-2xl">${p.precoPromocional}</span>`
      : p.preco
      ? `<span class="price-now text-2xl">${p.preco}</span>`
      : `<span class="text-slate-300 text-lg">Consulte o preço na loja</span>`;

    $("#modal-card").innerHTML = `
      <div class="grid md:grid-cols-2">
        <div class="relative h-64 md:h-auto bg-slate-900/40 flex items-center justify-center p-3">
          <img src="${p.imagem}" alt="${p.nome}" onerror="imgFallback(this)" class="w-full h-full object-contain">
          <div class="absolute top-4 left-4 flex flex-col gap-1.5">
            ${p.popular ? `<span class="badge badge-pop"><i class="fa-solid fa-fire"></i>Mais procurado</span>` : ""}
            ${p.promocao ? `<span class="badge badge-promo"><i class="fa-solid fa-bolt"></i>Promoção</span>` : ""}
          </div>
        </div>
        <div class="p-7 md:p-9 flex flex-col">
          <span class="section-label mb-3">${catNome(p.categoria)}</span>
          <h2 class="text-3xl font-bold mb-3">${p.nome}</h2>
          <p class="text-slate-300 leading-relaxed mb-5">${p.descricao || ""}</p>
          ${p.parametros ? `
            <div class="glass-strong rounded-2xl px-4 py-3 mb-5 flex items-center gap-3">
              <i class="fa-solid fa-droplet text-sky-400"></i>
              <span class="text-sm text-slate-300">${p.parametros}</span>
            </div>` : ""}
          <div class="mt-auto">
            <div>${preco}</div>
          </div>
        </div>
      </div>`;
    const back = $("#modal");
    back.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function fecharModal() {
    $("#modal")?.classList.remove("open");
    document.body.style.overflow = "";
  }

  /* ========================================================================
     8) NAVEGAÇÃO / INTERAÇÕES GLOBAIS
     ===================================================================== */
  function irParaCategoria(id) {
    filtroAtual = id;
    const box = $("#filtros");
    if (box) $$(".pill", box).forEach((p) => p.classList.toggle("active", p.dataset.filtro === id));
    renderCatalogo();
    $("#catalogo")?.scrollIntoView({ behavior: "smooth" });
  }

  function toggleMobile(force) {
    const m = $("#mobile-menu");
    if (!m) return;
    const abrir = force === undefined ? m.classList.contains("hidden") : force;
    m.classList.toggle("hidden", !abrir);
    m.classList.toggle("flex", abrir);
    document.body.style.overflow = abrir ? "hidden" : "";
  }

  /* cliques delegados (categorias, produtos, etc.) */
  function ligarEventos() {
    document.addEventListener("click", (e) => {
      const goto = e.target.closest("[data-goto]");
      if (goto) { e.preventDefault(); toggleMobile(false); irParaCategoria(goto.dataset.goto); return; }

      const card = e.target.closest(".prod-card");
      if (card) { abrirModal(Number(card.dataset.idx)); return; }

      if (e.target.closest("[data-modal-close]")) { fecharModal(); return; }
      if (e.target === $("#modal")) { fecharModal(); return; }

      /* fechar menu mobile ao clicar em qualquer link interno */
      if (e.target.closest('#mobile-menu a[href^="#"]')) toggleMobile(false);
    });

    $("#btn-mobile")?.addEventListener("click", () => toggleMobile());
    $("#btn-mobile-close")?.addEventListener("click", () => toggleMobile(false));

    $("#busca")?.addEventListener("input", (e) => { termoBusca = e.target.value; renderCatalogo(); });

    $("#cal-prev")?.addEventListener("click", () => { calRef.setMonth(calRef.getMonth() - 1); montarCalendario(); });
    $("#cal-next")?.addEventListener("click", () => { calRef.setMonth(calRef.getMonth() + 1); montarCalendario(); });

    document.addEventListener("keydown", (e) => { if (e.key === "Escape") { fecharModal(); toggleMobile(false); } });

    /* navbar muda ao rolar */
    const nav = $("#nav-shell");
    const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ========================================================================
     9) ANIMAÇÕES (reveal on scroll)
     ===================================================================== */
  let io;
  function observarReveal(scope) {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal", scope || document).forEach((el) => el.classList.add("visible"));
      return;
    }
    if (!io)
      io = new IntersectionObserver(
        (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } }),
        { threshold: 0.12 }
      );
    $$(".reveal", scope || document).forEach((el) => io.observe(el));
  }

  /* ========================================================================
     INÍCIO
     ===================================================================== */
  function init() {
    document.title = `${(D.loja && D.loja.nome) || "AquaPet"} — Aquarismo Profissional`;
    montarLoja();
    montarMenuCategorias();
    montarAvisos();
    montarHorarioSemanal();
    montarCalendario();
    montarCategorias();
    montarFiltros();
    renderCatalogo();
    ligarEventos();
    observarReveal(document);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
