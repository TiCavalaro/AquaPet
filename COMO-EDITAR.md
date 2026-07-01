# 🐠 Como atualizar o site da AquaPet (guia sem programação)

Este guia foi feito para **qualquer pessoa**, mesmo sem saber nada de programação,
conseguir manter o site sempre atualizado.

> **Você só precisa mexer em UM arquivo:** `dados.js`
> Tudo o que está escrito lá aparece automaticamente no site.

---

## 📁 Os arquivos do site (só para você entender)

| Arquivo | Para que serve | Você edita? |
|---|---|---|
| **`dados.js`** | Onde ficam os produtos, avisos, calendário e contatos | ✅ **SIM** |
| `index.html` | A estrutura da página | ❌ Não |
| `app.js` | O “motor” que monta o site | ❌ Não |
| `estilo.css` | A aparência (cores, animações) | ❌ Não |
| Pastas de imagens (`Bettas`, `PeixesTropicais`, `Química`…) | Onde ficam as fotos | ✅ você adiciona fotos |

---

## ✅ As 5 regras de ouro

1. **Todo texto fica entre aspas:** `"assim"`.
2. **Cada item termina com vírgula `,`** — só o **último** da lista não leva vírgula.
3. **Nunca apague** as chaves `{ }` nem os colchetes `[ ]`.
4. O nome do arquivo da imagem precisa ser **idêntico** ao que está na pasta
   (maiúsculas, minúsculas e acentos contam!).
5. Depois de salvar, **abra o site e aperte F5** para ver a mudança.

> 💡 **Dica de segurança:** antes de editar, faça uma cópia do `dados.js`
> (ex.: `dados-backup.js`). Se algo der errado, é só voltar a cópia.

---

## 1) ➕ Adicionar um produto

Abra `dados.js`, encontre a parte **`produtos:`** e copie um bloco já existente.
Cole **antes** do colchete `]` que fecha a lista e troque as informações:

```js
{ categoria: "peixes", nome: "Tetra Limão", descricao: "Pequeno e brilhante, ótimo em cardume.",
  imagem: "PeixesTropicais/TetraLimao.jpg", preco: "R$ 7,00",
  popular: false, promocao: false, precoPromocional: "", parametros: "pH: 6.0 – 7.0 | Temp: 24°C – 28°C" },
```

O que cada campo significa:

| Campo | O que colocar |
|---|---|
| `categoria` | o **id** de uma categoria (ex.: `"peixes"`, `"bettas"`). Veja a lista de categorias mais abaixo. |
| `nome` | nome do produto |
| `descricao` | uma frase curta sobre o produto |
| `imagem` | `pasta/arquivo` da foto (ex.: `"Bettas/MeuBetta.jpg"`) |
| `preco` | preço, ou deixe `""` para **não mostrar preço** |
| `popular` | `true` para ganhar o selo **“Mais procurado”**, senão `false` |
| `promocao` | `true` para virar oferta, senão `false` |
| `precoPromocional` | o preço novo da promoção (ex.: `"R$ 39,00"`). Use junto com `promocao: true` |
| `parametros` | dados de água (pH, temperatura). Deixe `""` se não quiser |

### Como colocar em promoção
```js
promocao: true, preco: "R$ 95,00", precoPromocional: "R$ 79,90"
```
O site mostra o preço antigo **riscado** e o novo em destaque.

### ➖ Remover um produto
Apague o bloco inteiro `{ ... },` daquele produto. Confira se as vírgulas dos
itens vizinhos continuam certas.

---

## 2) 🖼️ Adicionar ou trocar imagens

1. Coloque o arquivo da foto dentro da pasta certa
   (ex.: a foto de um betta vai na pasta `Bettas`).
2. No `dados.js`, escreva o caminho **exatamente** igual ao nome do arquivo:

```js
imagem: "Bettas/BettaHalfmoon.jpg"
```

⚠️ **Muito importante (o site fica no GitHub Pages, que diferencia maiúsculas):**
`foto.JPG`, `Foto.jpg` e `foto.jpg` são **considerados diferentes**.
Copie o nome do arquivo do jeitinho que ele está na pasta.

> Se a imagem não aparecer, o site mostra um 🐟 no lugar — sinal de que o
> caminho está escrito diferente do nome real do arquivo.

**Formatos aceitos:** `.jpg`, `.png`, `.webp`. Prefira fotos boas (mínimo ~800px).

---

## 3) 🗂️ Criar uma nova categoria

Encontre a parte **`categorias:`** e adicione um bloco:

```js
{ id: "marinhos", nome: "Peixes Marinhos", icone: "fa-fish",
  descricao: "Beleza do mar no seu aquário", capa: "PeixesMarinhos/Palhaco.jpg" },
```

- `id` → apelido curto, **sem espaços e sem acentos** (ex.: `"marinhos"`).
- `icone` → um ícone do site [fontawesome.com/icons](https://fontawesome.com/icons)
  (copie o nome que começa com `fa-`, ex.: `fa-fish`, `fa-shrimp`).
- `capa` → a foto que aparece no cartão da categoria.

Depois, é só criar produtos usando `categoria: "marinhos"`.
A nova categoria aparece sozinha no menu, nos filtros e nos cartões. ✨

---

## 4) 📢 Atualizar o Mural de Avisos

Encontre a parte **`avisos:`**. Cada aviso é um bloco assim:

```js
{ tipo: "promocao", titulo: "Frete grátis no sábado!",
  mensagem: "Compras acima de R$ 100 com entrega grátis na cidade.",
  data: "2026-06-21", destaque: true },
```

| Campo | O que colocar |
|---|---|
| `tipo` | muda a cor/ícone. Use: `"atendimento"` (azul), `"promocao"` (verde), `"fechado"` (vermelho) ou `"aviso"` (amarelo) |
| `titulo` | título curto |
| `mensagem` | o recado completo |
| `data` | no formato **ano-mês-dia** → `"2026-06-21"` |
| `destaque` | coloque `true` em **um** aviso para ele aparecer maior no topo |

Para **remover** um aviso, apague o bloco `{ ... },`.

---

## 5) 📅 Mudar o Calendário de Atendimento

Encontre a parte **`calendario:`**. Ela tem duas partes:

### a) Horário padrão da semana (`horarioSemanal`)
```js
horarioSemanal: {
  domingo: "Fechado",
  segunda: "Fechado",
  terca:   "09:00 – 18:00",
  quarta:  "09:00 – 18:00",
  quinta:  "09:00 – 18:00",
  sexta:   "09:00 – 18:00",
  sabado:  "09:00 – 13:00"
},
```
Para fechar um dia, escreva exatamente **`"Fechado"`**.
Para mudar o horário, troque o texto entre aspas.

### b) Dias especiais (`excecoes`) — feriados, plantões, etc.
```js
excecoes: [
  { data: "2026-12-25", status: "fechado",  horario: "",              obs: "Natal" },
  { data: "2026-12-24", status: "especial", horario: "09:00 – 12:00", obs: "Véspera de Natal" },
  { data: "2026-07-09", status: "aberto",   horario: "09:00 – 18:00", obs: "Plantão" }
],
```
- `status` → `"fechado"`, `"aberto"` ou `"especial"`.
- `data` → **ano-mês-dia**.
- `horario` → deixe `""` quando for `"fechado"`.
- `obs` → um comentário curto (aparece quando o cliente clica no dia).

No site, os dias ficam **verdes (aberto)**, **vermelhos (fechado)** ou
**amarelos (especial)**, e o cliente pode navegar entre os meses.

---

## 6) ☎️ Trocar contatos, endereço e mapa

No topo do `dados.js`, na parte **`loja:`**:

```js
loja: {
  nome: "AquaPet",
  slogan: "A maior loja de aquarismo profissional de Araçatuba...",
  endereco: "R. Gen. Osório, 183 - Centro, Araçatuba - SP",
  telefone: "(18) 3333-0000",
  whatsapp: "5518999990000",     // só números: 55 + DDD + número
  instagram: "https://instagram.com/aquapet",
  mapaEmbed: "..."               // veja abaixo como pegar
}
```

**Para o WhatsApp funcionar:** escreva só números, começando com `55`
(Brasil) + DDD + número. Exemplo: `5518999990000`.

**Para trocar o mapa:** no Google Maps, procure o endereço → **Compartilhar**
→ **Incorporar um mapa** → copie só o endereço que está dentro de `src="..."`
e cole em `mapaEmbed`.

---

## 🛟 Deu erro? Veja os problemas mais comuns

- **A página ficou em branco** → quase sempre é uma **vírgula a mais ou a menos**,
  ou uma **aspa esquecida**. Desfaça sua última alteração (Ctrl+Z) ou volte o backup.
- **A imagem não aparece (aparece um 🐟)** → o nome no `dados.js` está diferente
  do nome real do arquivo (confira maiúsculas, acentos e a pasta).
- **O produto não aparece** → confira se a `categoria` dele é igual a um `id`
  que existe na lista de `categorias`.

---

## 🚀 Publicar as mudanças (GitHub Pages)

Depois de salvar o `dados.js` (e enviar novas fotos para as pastas), suba os
arquivos para o repositório do GitHub. Em poucos minutos o site no ar atualiza
sozinho. Se tiver dúvida nessa parte, peça ajuda de quem cuida do GitHub. 💙
