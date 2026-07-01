/* ============================================================================
   AQUAPET  •  ARQUIVO DE CONTEÚDO DO SITE  (dados.js)
   ============================================================================

   👋 OLÁ! Este é o ÚNICO arquivo que você precisa editar para atualizar o site.
   Tudo aqui dentro aparece automaticamente na página: avisos, calendário,
   categorias e produtos.

   ✅ REGRAS DE OURO (siga sempre):
   1. Texto fica SEMPRE entre aspas:  "assim"
   2. Cada item da lista termina com VÍRGULA , (menos o último da lista)
   3. NÃO apague as chaves { } nem os colchetes [ ]
   4. O nome do arquivo da imagem precisa ser IDÊNTICO ao da pasta
      (incluindo maiúsculas, minúsculas e acentos)
   5. Depois de salvar, atualize a página no navegador (tecla F5)

   📖 Há um guia completo, passo a passo, no arquivo "COMO-EDITAR.md".
   ============================================================================ */

window.DADOS = {

  /* ──────────────────────────────────────────────────────────────────────
     1) DADOS DA LOJA  —  informações de contato que aparecem no topo,
        na seção de localização e no rodapé.
     ────────────────────────────────────────────────────────────────────── */
  loja: {
    nome: "AquaPet",
    slogan: "Referência em ecossistemas de água doce.",
    endereco: "R. Gen. Osório, 183 - Centro, Araçatuba - SP",
    telefone: "(18) 98112-6467",
    // WhatsApp: só números, com 55 (Brasil) + DDD. Ex.: 5518999998888
    whatsapp: "5518981126467",
    instagram: "https://instagram.com/aquapetaracatuba",
    // Link do mapa: no Google Maps, clique em "Compartilhar" > "Incorporar mapa"
    // e cole AQUI apenas o endereço que fica dentro de src="..."
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4658145719393!2d-50.4398188239082!3d-21.212379880194512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9496423984534f4b%3A0x64f4345d3663a87!2sR.%20Gen.%20Os%C3%B3rio%2C%20183%20-%20Centro%2C%20Ara%C3%A7atuba%20-%20SP%2C%2016010-290!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
  },

  /* ──────────────────────────────────────────────────────────────────────
     2) CATEGORIAS  —  para CRIAR UMA NOVA CATEGORIA, copie um bloco abaixo,
        cole antes do colchete ] e troque os textos.
        • id    → apelido curto, sem espaços nem acentos (ex.: "peixes")
        • icone → ícone do Font Awesome (lista em fontawesome.com/icons)
        IMPORTANTE: o "id" daqui precisa ser o mesmo usado em "categoria"
        lá nos produtos.
     ────────────────────────────────────────────────────────────────────── */
  categorias: [
    { id: "peixes",         nome: "Peixes Tropicais",          icone: "fa-fish",       descricao: "Cardumes vibrantes, ciclídeos e ornamentais",         capa: "PeixesTropicais/Arwana.jpg" },
    { id: "plantas",        nome: "Plantas Aquáticas",          icone: "fa-seedling",   descricao: "O pulmão verde do seu aquário plantado",              capa: "imagens/Aquario-Plantado-2.jpg" },
    { id: "bettas",         nome: "Bettas de Linhagem",         icone: "fa-fish-fins",  descricao: "Cores raras e caudas exuberantes",                    capa: "Bettas/BettaCandy.jpg" },
    { id: "invertebrados",  nome: "Invertebrados",              icone: "fa-shrimp",     descricao: "Camarões e caranguejos para limpeza e beleza",        capa: "Camarao/Galaxy.jpg" },
    { id: "anfibios",       nome: "Anfíbios",                   icone: "fa-frog",       descricao: "Espécies exóticas como o axolote",                    capa: "imagens/AxoloteAlbino.jpg" },
    { id: "equipamentos",   nome: "Equipamentos & Tecnologia",  icone: "fa-gears",      descricao: "Filtragem, automação e alta performance",             capa: "Tecnologia/CanisterCt1400-5.webp" },
    { id: "condicionadores",nome: "Química & Condicionadores",  icone: "fa-flask",      descricao: "Equilíbrio da água e nutrição de plantas",            capa: "Química/SeachemPrime.webp" }
  ],

  /* ──────────────────────────────────────────────────────────────────────
     3) MURAL DE AVISOS  —  comunicados que aparecem em destaque na página.
        Para criar um aviso, copie um bloco e cole antes do ].
        • tipo → muda a cor e o ícone. Use um destes:
                 "atendimento"  (dias de atendimento, azul)
                 "promocao"     (ofertas, verde)
                 "fechado"      (sem atendimento, vermelho)
                 "aviso"        (recado geral, âmbar)
        • data → no formato ANO-MÊS-DIA  (ex.: "2026-06-20")
        • destaque → coloque true em UM aviso para ele aparecer maior no topo
     ────────────────────────────────────────────────────────────────────── */
  avisos: [
   //  { tipo: "atendimento", titulo: "Atendimento desta semana", mensagem: "Estamos abertos de terça a sábado. Domingo e segunda permanecemos fechados para cuidar dos bichinhos.", data: "2026-06-17", destaque: true },
   //  { tipo: "promocao",    titulo: "Semana do Aquário Plantado", mensagem: "20% OFF em fertilizantes da linha PlantGrow e em todas as plantas naturais até sábado!", data: "2026-06-16", destaque: false },
   //  { tipo: "fechado",     titulo: "Fechado no feriado", mensagem: "Não haverá atendimento na sexta-feira, dia 20/06. Voltamos no sábado em horário normal.", data: "2026-06-20", destaque: false },
    { tipo: "aviso",       titulo: "Chegou novidade!", mensagem: "Novo lote de Bettas de linhagem e camarões Blue Dream já disponível na loja. Corra para garantir o seu.", data: "2026-06-15", destaque: false }
  ],

  /* ──────────────────────────────────────────────────────────────────────
     4) CALENDÁRIO DE ATENDIMENTO
        a) horarioSemanal → o horário PADRÃO de cada dia da semana.
           Para "fechado", escreva exatamente: "Fechado"
        b) excecoes → dias específicos que fogem do padrão (feriados, plantões).
           • status → "fechado", "aberto" ou "especial"
           • data   → "ANO-MÊS-DIA"
           • horario→ deixe "" quando for "fechado"
     ────────────────────────────────────────────────────────────────────── */
  calendario: {
    horarioSemanal: {
      domingo: "14:00 – 18:00",
      segunda: "14:00 – 18:00",
      terca:   "Fechado",
      quarta:  "13:00 – 19:00",
      quinta:  "13:00 – 19:00",
      sexta:   "13:00 – 19:00",
      sabado:  "09:30 – 14:00"
    },
   //  excecoes: [
   //    { data: "2026-06-20", status: "fechado",  horario: "",            obs: "Feriado de Corpus Christi" },
   //    { data: "2026-06-21", status: "especial", horario: "09:00 – 12:00", obs: "Atendimento em meio período" },
   //    { data: "2026-06-27", status: "aberto",   horario: "09:00 – 18:00", obs: "Plantão especial de inverno" }
   //  ]
  },

  /* ──────────────────────────────────────────────────────────────────────
     5) PRODUTOS  —  o catálogo da loja.
        Para ADICIONAR um produto, copie um bloco { ... } e cole antes do ].
        Campos:
        • categoria → o "id" de uma categoria lá de cima (ex.: "peixes")
        • nome, descricao → textos do produto
        • imagem → caminho da foto (pasta/arquivo). Confira maiúsculas/acentos!
        • preco → opcional. Deixe "" para NÃO mostrar preço.
        • popular → coloque true para ganhar o selo "Mais procurado"
        • promocao + precoPromocional → para mostrar oferta com preço riscado
        • parametros → opcional (pH, temperatura...). Deixe "" se não quiser.
     ────────────────────────────────────────────────────────────────────── */
  produtos: [

    /* ===== PEIXES TROPICAIS ===== */
    { categoria: "peixes", nome: "Acará Disco",            descricao: "O rei do aquário de água doce: cores vibrantes e nado elegante.",          imagem: "PeixesTropicais/Disco.jpg",            preco: "R$ 180,00", popular: true,  promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 6.8  |  Temp: 28°C – 30°C" },
    { categoria: "peixes", nome: "Arwana",                 descricao: "Predador majestoso de grande porte, muito valorizado entre criadores.",    imagem: "PeixesTropicais/Arwana.jpg",           preco: "R$ 590,00", popular: true,  promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.0  |  Temp: 26°C – 30°C" },
    { categoria: "peixes", nome: "Peixe Anjo",             descricao: "Clássico e elegante, essencial em aquários comunitários grandes.",         imagem: "PeixesTropicais/Angel.jpg",            preco: "R$ 45,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.0  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Red Cap MTZ",            descricao: "Kinguio Oranda famoso pelo 'capuz' vermelho na cabeça.",                   imagem: "PeixesTropicais/RedCap.jpg",           preco: "R$ 89,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 20°C – 24°C" },
    { categoria: "peixes", nome: "Telescópio Red Black",   descricao: "Kinguio ornamental de olhos telescópicos e coloração intensa.",            imagem: "PeixesTropicais/TlRed.jpg",            preco: "R$ 109,00", popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 20°C – 24°C" },
    { categoria: "peixes", nome: "King White Red",         descricao: "Kinguio ornamental de coloração branca e vermelha marcante.",              imagem: "PeixesTropicais/KingiuWR.jpg",         preco: "R$ 79,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 20°C – 24°C" },
    { categoria: "peixes", nome: "Telescópio White Red",   descricao: "Kinguio telescópio de contraste branco e vermelho.",                       imagem: "PeixesTropicais/TelescopioWhiteRed.jpg", preco: "R$ 59,00", popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 20°C – 24°C" },
    { categoria: "peixes", nome: "Kinguio Oranda",         descricao: "Variedade ornamental de kinguio com 'capuz' desenvolvido.",                imagem: "PeixesTropicais/Oranda.jpg",           preco: "R$ 79,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 20°C – 24°C" },
    { categoria: "peixes", nome: "Telescópio Preto",       descricao: "Variedade pequena de kinguio telescópio, robusta e charmosa.",             imagem: "PeixesTropicais/TelescopioBlack.jpg",  preco: "R$ 15,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 20°C – 24°C" },
    { categoria: "peixes", nome: "Telescópio",             descricao: "Kinguio de olhos salientes, clássico em aquários ornamentais.",            imagem: "PeixesTropicais/PeixeTelescopio.jpg",  preco: "R$ 25,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 20°C – 24°C" },
    { categoria: "peixes", nome: "Kinguio Comum",          descricao: "Resistente e ideal para iniciantes em aquários de água fria.",             imagem: "PeixesTropicais/kinguio.jpg",          preco: "R$ 18,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 18°C – 24°C" },
    { categoria: "peixes", nome: "Oscar Albino",           descricao: "Variante albina do Oscar, muito apreciada e cheia de personalidade.",      imagem: "PeixesTropicais/OscarAlbino.jpg",      preco: "R$ 159,00", popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Oscar Bumblebee",        descricao: "Oscar de padrão amarelo e preto, grande e inteligente.",                   imagem: "PeixesTropicais/OscarBumblebee.jpg",   preco: "R$ 129,00", popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Oscar Bronze",           descricao: "Ciclídeo grande e territorial, reconhece o dono e interage muito.",        imagem: "PeixesTropicais/OScarBronze.jpg",      preco: "R$ 129,00", popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Labidochromis Yellow",   descricao: "Mbuna africano amarelo-vivo, um dos mais populares do hobby.",             imagem: "PeixesTropicais/LabidochromisYellow.jpg", preco: "R$ 29,00", popular: false, promocao: false, precoPromocional: "", parametros: "pH: 7.5 – 8.5  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Venustus",               descricao: "Ciclídeo africano de padrão manchado e porte imponente.",                  imagem: "PeixesTropicais/Venustus.jpg",         preco: "R$ 29,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 7.5 – 8.5  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Demasoni Pombo",         descricao: "Mbuna pequeno, listrado e territorial — vive bem em grupo.",               imagem: "PeixesTropicais/Demasoni.jpg",         preco: "R$ 32,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 7.5 – 8.5  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Ciclídeo Cubano",        descricao: "Ciclídeo robusto de grande porte, indicado para aquaristas experientes.",  imagem: "PeixesTropicais/CiclideoCubano.jpg",   preco: "",          popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Ciclídeos Variados",     descricao: "Seleção rotativa de ciclídeos ornamentais. Consulte disponibilidade.",     imagem: "PeixesTropicais/Ciclideos.jpg",        preco: "R$ 12,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: variável  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Tetra Foguinho",         descricao: "Pequeno tetra vermelho-fogo, perfeito para aquários plantados.",           imagem: "PeixesTropicais/TetraFoguinho.jpg",    preco: "R$ 8,00",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.0  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Rodóstomo",              descricao: "Famoso pelo nariz vermelho e cardume sincronizado e elegante.",            imagem: "PeixesTropicais/rodostomo.jpg",        preco: "R$ 12,00",  popular: true,  promocao: false, precoPromocional: "", parametros: "pH: 5.5 – 7.0  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Tetra Pinguim Red",      descricao: "Tetra ativo de cardume, ótimo para comunitários movimentados.",            imagem: "PeixesTropicais/TetraPinguimRed.jpg",  preco: "R$ 26,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 23°C – 27°C" },
    { categoria: "peixes", nome: "Paraíso Bronze",         descricao: "Labirintídeo de coloração bronze e comportamento curioso.",                imagem: "PeixesTropicais/ParaisoBronze.jpg",    preco: "R$ 55,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 22°C – 26°C" },
    { categoria: "peixes", nome: "Barbo Aurulios",         descricao: "Barbo ornamental ativo, ideal para aquários espaçosos.",                   imagem: "PeixesTropicais/BarboAurulios.jpg",    preco: "R$ 22,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 22°C – 26°C" },
    { categoria: "peixes", nome: "Barbo Cereja",           descricao: "Pequeno e pacífico, ganha tom vermelho intenso na maturidade.",            imagem: "PeixesTropicais/BarboCereja.jpg",      preco: "R$ 6,50",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 23°C – 27°C" },
    { categoria: "peixes", nome: "Barbo Sumatra",          descricao: "Muito ativo e listrado, vive em cardume e adora companhia.",               imagem: "PeixesTropicais/BarboSumatra.jpg",     preco: "R$ 5,00",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 22°C – 26°C" },
    { categoria: "peixes", nome: "Barbo Verde",            descricao: "Variante de tom verde-metálico, resistente e vistosa.",                    imagem: "PeixesTropicais/BarboVerde.jpg",       preco: "R$ 8,00",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 22°C – 26°C" },
    { categoria: "peixes", nome: "Barbo Panda",            descricao: "Padrão contrastante preto e branco, charmoso em cardume.",                 imagem: "PeixesTropicais/BarboPanda.jpg",       preco: "R$ 7,50",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 22°C – 26°C" },
    { categoria: "peixes", nome: "Barbo Ouro",             descricao: "Dourado e ativo, ótimo para aquários comunitários.",                       imagem: "PeixesTropicais/BarboOuro.jpg",        preco: "R$ 5,00",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 22°C – 26°C" },
    { categoria: "peixes", nome: "Barbo Oligolepis",       descricao: "Barbo pequeno e movimentado, de escamas reluzentes.",                      imagem: "PeixesTropicais/BarboOligolepis.jpg",  preco: "R$ 9,90",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 22°C – 26°C" },
    { categoria: "peixes", nome: "Barbo Red",              descricao: "Coloração vermelha intensa que se destaca em qualquer cardume.",           imagem: "PeixesTropicais/BarboRed.jpg",         preco: "R$ 8,00",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 22°C – 26°C" },
    { categoria: "peixes", nome: "Pangassius Albino",      descricao: "Variante albina do pangassius, ativo e de rápido crescimento.",            imagem: "PeixesTropicais/PangassiusAlbino.jpg", preco: "R$ 39,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Pangassius",             descricao: "Peixe grande e nadador — exige aquários amplos e bem filtrados.",          imagem: "PeixesTropicais/Pangassius.jpg",       preco: "R$ 22,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Algae Eater",            descricao: "Aliado da limpeza: ajuda no controle natural de algas.",                   imagem: "PeixesTropicais/AlgaeEater.jpg",       preco: "R$ 32,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Pleco",                  descricao: "Limpador clássico de vidros e troncos, calmo e resistente.",               imagem: "PeixesTropicais/Pleco.jpg",            preco: "R$ 35,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Mexirica",               descricao: "Ornamental popular, adaptável e fácil de manter.",                         imagem: "PeixesTropicais/Mexirica.jpg",         preco: "R$ 15,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Tetra Puxa Puxa",        descricao: "Tetra exótico de cardume, dá movimento ao comunitário.",                   imagem: "PeixesTropicais/TetraPuxa.jpg",        preco: "R$ 22,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 23°C – 27°C" },
    { categoria: "peixes", nome: "Tricogaster",            descricao: "Labirintídeo pacífico, respira na superfície e é muito rústico.",          imagem: "PeixesTropicais/Tricogaster.jpg",      preco: "R$ 9,00",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Cruzeiro do Sul",        descricao: "Pequeno e colorido, perfeito para iniciar um comunitário.",                imagem: "PeixesTropicais/CruzeirodoSul.jpg",    preco: "R$ 12,00",  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 23°C – 27°C" },
    { categoria: "peixes", nome: "Tetra Enfermeirinha",    descricao: "Muito ativo e resistente, nada em cardume animado.",                       imagem: "PeixesTropicais/TetraEnfermeirinha.jpg", preco: "R$ 11,00", popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 23°C – 27°C" },
    { categoria: "peixes", nome: "Tetra Negro",            descricao: "Resistente e elegante, ótimo para quem está começando.",                   imagem: "PeixesTropicais/TetraNegro.jpg",       preco: "R$ 4,50",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.5  |  Temp: 23°C – 27°C" },
    { categoria: "peixes", nome: "Platy Rubi",             descricao: "Vermelho-rubi vibrante, dócil e fácil de criar.",                          imagem: "PeixesTropicais/PlatyRubi.jpg",        preco: "R$ 6,00",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 7.0 – 8.0  |  Temp: 22°C – 26°C" },
    { categoria: "peixes", nome: "Platy Aurora",           descricao: "Pequeno, colorido e ideal para iniciantes.",                               imagem: "PeixesTropicais/PlatyAurora.jpg",      preco: "R$ 6,00",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 7.0 – 8.0  |  Temp: 22°C – 26°C" },
    { categoria: "peixes", nome: "Molinésia Prata",        descricao: "Prateado brilhante, rústico e ótimo para comunitários.",                   imagem: "PeixesTropicais/MolinesiaPrata.jpg",   preco: "R$ 6,00",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 7.0 – 8.0  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Molinésia Tigre",        descricao: "Padrão rajado característico, resistente e adaptável.",                     imagem: "PeixesTropicais/MolinesiaTigre.jpg",   preco: "R$ 3,50",   popular: false, promocao: false, precoPromocional: "", parametros: "pH: 7.0 – 8.0  |  Temp: 24°C – 28°C" },
    { categoria: "peixes", nome: "Guppy",                  descricao: "Coloridíssimo e prolífico, o queridinho dos iniciantes.",                  imagem: "PeixesTropicais/Guppy.jpg",            preco: "R$ 9,00",   popular: true,  promocao: false, precoPromocional: "", parametros: "pH: 7.0 – 8.0  |  Temp: 22°C – 28°C" },

    /* ===== PLANTAS AQUÁTICAS ===== */
    { categoria: "plantas", nome: "Anubias Nana",          descricao: "Rústica e de crescimento lento, fixa-se em troncos e rochas.",             imagem: "Plantas/Anubias.jpg",      preco: "R$ 45,00", popular: true,  promocao: false, precoPromocional: "", parametros: "Luz: baixa a média  |  CO₂: opcional" },
    { categoria: "plantas", nome: "Monte Carlo (Pote)",    descricao: "Forração carpete de folhas miúdas, ideal para primeiro plano.",            imagem: "Plantas/MonteCarlo.jpg",   preco: "R$ 25,00", popular: false, promocao: false, precoPromocional: "", parametros: "Luz: média a alta  |  CO₂: recomendado" },
    { categoria: "plantas", nome: "Musgo de Java",         descricao: "Versátil e indestrutível, perfeito para abrigar alevinos e camarões.",     imagem: "Plantas/MusgoJava.jpg",    preco: "R$ 20,00", popular: false, promocao: false, precoPromocional: "", parametros: "Luz: baixa a média  |  CO₂: opcional" },
    { categoria: "plantas", nome: "Samambaia de Java",     descricao: "Folhagem exuberante e resistente, dispensa CO₂ e substrato fértil.",       imagem: "Plantas/Samambaia.jpg",    preco: "R$ 30,00", popular: false, promocao: false, precoPromocional: "", parametros: "Luz: baixa a média  |  CO₂: opcional" },

    /* ===== BETTAS DE LINHAGEM ===== */
    { categoria: "bettas", nome: "Betta Koi Galaxy",       descricao: "Padrão koi multicolorido e raro, peça de coleção viva.",                   imagem: "Bettas/BettaCandy.jpg",    preco: "R$ 120,00", popular: true,  promocao: false, precoPromocional: "",       parametros: "pH: 6.5 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "bettas", nome: "Betta Crown Tail",       descricao: "Cauda em 'coroa' com raios pontiagudos espetaculares.",                    imagem: "Bettas/BettaCrown.jpg",    preco: "R$ 45,00",  popular: false, promocao: false,  precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "bettas", nome: "Betta Spade Tail",       descricao: "Cauda em formato de espada, elegante e simétrica.",                        imagem: "Bettas/BettaSpade.jpg",    preco: "R$ 60,00",  popular: false, promocao: false, precoPromocional: "",       parametros: "pH: 6.5 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "bettas", nome: "Betta Splendens",        descricao: "O betta tradicional de cores intensas e nadadeiras esvoaçantes.",          imagem: "Bettas/BettaSplender.jpg", preco: "R$ 35,00",  popular: false, promocao: false, precoPromocional: "",       parametros: "pH: 6.5 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "bettas", nome: "Betta Cooper",           descricao: "Brilho metálico acobreado que muda de tom conforme a luz.",                imagem: "Bettas/cooper.webp",       preco: "R$ 26,00",  popular: false, promocao: false, precoPromocional: "",       parametros: "pH: 6.5 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "bettas", nome: "Betta Dumbo",            descricao: "Nadadeiras peitorais enormes que lembram 'orelhas', muito charmoso.",      imagem: "Bettas/dumbo.webp",        preco: "R$ 29,00",  popular: true,  promocao: false, precoPromocional: "",       parametros: "pH: 6.5 – 7.5  |  Temp: 24°C – 28°C" },
    { categoria: "bettas", nome: "Betta Comum",            descricao: "Resistente e cheio de personalidade, ótimo primeiro betta.",               imagem: "Bettas/BettaComum.jpg",    preco: "R$ 15,00",  popular: false, promocao: false, precoPromocional: "",       parametros: "pH: 6.5 – 7.5  |  Temp: 24°C – 28°C" },

    /* ===== INVERTEBRADOS ===== */
    { categoria: "invertebrados", nome: "Camarão Blue Dream", descricao: "Azul-cobalto intenso, mantém o aquário limpo e dá vida ao plantado.",    imagem: "Bettas/CamarãoBlueDream.webp", preco: "R$ 25,00", popular: true,  promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 22°C – 26°C" },
    { categoria: "invertebrados", nome: "Camarão Galaxy",     descricao: "Padrão pontilhado raríssimo, verdadeira joia para nano aquários.",       imagem: "Camarao/Galaxy.jpg",           preco: "R$ 45,00", popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.5 – 7.5  |  Temp: 22°C – 26°C" },
    { categoria: "invertebrados", nome: "Caranguejo Vampiro", descricao: "Pequeno e exótico, ideal para paludários e aquaterrários.",              imagem: "Camarao/CaranguejoVampiro.jpg", preco: "R$ 89,00", popular: false, promocao: false, precoPromocional: "", parametros: "Aquaterrário  |  Temp: 24°C – 28°C" },

    /* ===== ANFÍBIOS ===== */
    { categoria: "anfibios", nome: "Axolote Albino",       descricao: "O 'dragão da água' mexicano: dócil, exótico e fascinante.",                imagem: "imagens/AxoloteAlbino.jpg", preco: "R$ 350,00", popular: true, promocao: false, precoPromocional: "", parametros: "pH: 7.0 – 7.5  |  Temp: 16°C – 20°C" },

    /* ===== EQUIPAMENTOS & TECNOLOGIA ===== */
    { categoria: "equipamentos", nome: "Filtro Canister CT-1400", descricao: "Vazão de 1400 L/h para aquários grandes. Filtragem biológica de alta performance.", imagem: "Tecnologia/CanisterCt1400-5.webp", preco: "R$ 1.509,90", popular: true,  promocao: false, precoPromocional: "",         parametros: "Vazão: 1400 L/h  |  5 estágios" },
    { categoria: "equipamentos", nome: "Filtro Canister CT-1000", descricao: "Vazão de 1000 L/h, equilíbrio ideal entre potência e silêncio.",                  imagem: "Tecnologia/CanisterCt1000-3.webp", preco: "R$ 999,90",   popular: false, promocao: false, precoPromocional: "",         parametros: "Vazão: 1000 L/h  |  3 estágios" },
    { categoria: "equipamentos", nome: "Filtro Canister CT-500",  descricao: "Vazão de 500 L/h, perfeito para aquários médios e plantados.",                    imagem: "Tecnologia/CanisterCt500-3.webp",  preco: "R$ 815,00",   popular: false, promocao: false,  precoPromocional: "", parametros: "Vazão: 500 L/h  |  3 estágios" },

    /* ===== QUÍMICA & CONDICIONADORES ===== */
    { categoria: "condicionadores", nome: "Seachem Prime",                          descricao: "O condicionador de água mais confiável do mercado. Remove cloro e cloramina.", imagem: "Química/SeachemPrime.webp",               preco: "R$ 95,00", popular: true,  promocao: false,  precoPromocional: "", parametros: "Uso: 5 mL / 200 L" },
    { categoria: "condicionadores", nome: "Oceanblend 500ML",                       descricao: "Condicionador completo para água doce e marinha.",                            imagem: "Química/Oceanblend500.webp",              preco: "R$ 99,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "Oceanblend 50ML",                        descricao: "Versão compacta do condicionador Oceanblend.",                                imagem: "Química/Oceanblend50.webp",               preco: "R$ 29,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "Overnite 500ML",                         descricao: "Acelera o ciclo da água, deixando o aquário pronto mais rápido.",              imagem: "Química/Overnite500.webp",                preco: "R$ 99,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "Overnite 120ML",                         descricao: "Bactérias vivas para maturação rápida do filtro.",                            imagem: "Química/Overnite120.webp",                preco: "R$ 49,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "Overnite 50ML",                          descricao: "Versão compacta do acelerador biológico Overnite.",                           imagem: "Química/Overnite50.webp",                 preco: "R$ 26,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "Ot Startup 500ML",                       descricao: "Kit de partida biológica para novos aquários.",                               imagem: "Química/OtStartup.webp",                  preco: "R$ 99,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "OceanGuard 120ML",                       descricao: "Protege a mucosa dos peixes e reduz o estresse.",                             imagem: "Química/OceanGuard120.jpg",               preco: "R$ 44,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "OceanGuard 50ML",                        descricao: "Condicionador protetor em tamanho intermediário.",                            imagem: "Química/OceanGuard50.webp",               preco: "R$ 24,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "OceanGuard 20ML",                        descricao: "Tamanho de bolso, ideal para experimentar.",                                  imagem: "Química/OceanGuard20.webp",               preco: "R$ 14,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "CloudyCleaner 500ML",                    descricao: "Clarifica a água turva agrupando as partículas em suspensão.",                imagem: "Química/CloudyCleaner500.webp",           preco: "R$ 79,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "CloudyCleaner 120ML",                    descricao: "Solução clarificante para água esbranquiçada.",                               imagem: "Química/CloudyCleaner120.webp",           preco: "R$ 39,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "CloudyCleaner 20ML",                     descricao: "Clarificante em tamanho compacto.",                                           imagem: "Química/CloudyCleaner20.jpg",             preco: "R$ 16,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "PlantGrow Potassium 500ML",              descricao: "Reposição de potássio para folhas saudáveis e sem furos.",                    imagem: "Química/PlantgrowPotassium500.webp",      preco: "R$ 69,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "PlantGrow Potassium 120ML",              descricao: "Fertilizante de potássio para aquários plantados.",                           imagem: "Química/PlantgrowPotassium120.webp",      preco: "R$ 26,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "PlantGrow PRO 500ML",                    descricao: "Fertilizante completo 'all-in-one' para plantados exigentes.",                imagem: "Química/PlantGrowPRO500.webp",            preco: "R$ 79,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "PlantGrow PRO 120ML",                    descricao: "Versão compacta do fertilizante completo PRO.",                               imagem: "Química/PlantGrowPRO120.webp",            preco: "R$ 35,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "PlantGrow Iron 250ML",                   descricao: "Ferro quelatado para realçar o vermelho das plantas.",                        imagem: "Química/PlantGrowIRON250.webp",           preco: "R$ 79,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "PlantGrow Micro + Hormones 500ML",       descricao: "Micronutrientes e hormônios para crescimento vigoroso.",                      imagem: "Química/PlantGrowMicroNutrients+Hormones500.webp", preco: "R$ 79,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "PlantGrow Micro + Hormones 120ML",       descricao: "Micronutrientes essenciais em tamanho compacto.",                             imagem: "Química/PlantGrowMicroNutrients+Hormones120.webp", preco: "R$ 26,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "PlantGrow Nitrogen 500ML",               descricao: "Fonte de nitrogênio para plantas de crescimento rápido.",                     imagem: "Química/PlantGrowNitrogen500.webp",       preco: "R$ 69,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "PlantGrow Nitrogen 120ML",               descricao: "Nitrogênio dosável para aquários plantados.",                                 imagem: "Química/PlantGrowNitrogen120.webp",       preco: "R$ 26,90", popular: false, promocao: false, precoPromocional: "", parametros: "" },
    { categoria: "condicionadores", nome: "PlantGrow Phosphorus 120ML",             descricao: "Fósforo balanceado para evitar deficiências nas plantas.",                    imagem: "Química/PlantGrowPhosphorus120.webp",     preco: "R$ 26,90", popular: false, promocao: false, precoPromocional: "", parametros: "" }

  ]
};
