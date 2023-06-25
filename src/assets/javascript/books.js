var pageObjects = [
  {
    id: "adventures",
    id_card: "adventure",
    arrow_left: "adventures-arrow-left",
    arrow_right: "adventures-arrow-right",
  },
  {
    id: "horrors",
    id_card: "horror",
    arrow_left: "horrors-arrow-left",
    arrow_right: "horrors-arrow-right",
  },
  {
    id: "thrillers",
    id_card: "thriller",
    arrow_left: "thrillers-arrow-left",
    arrow_right: "thrillers-arrow-right",
  },
  {
    id: "romances",
    id_card: "romance",
    arrow_left: "romances-arrow-left",
    arrow_right: "romances-arrow-right",
  },
];

var adventuresObject = [
  {
    "id": "adventures_0",
    "type": "adventures",
    "image": "https://www.lpm.com.br/livros/imagens/carta_roubada__a_9788525412775_9788525424693_hd.jpg",
    "description": "A Carta Roubada - Edgar Allan Poe",
    "content": "https://drive.google.com/file/d/1Ei63v5JSx0cYqY6DZhxhcZHjwZot3LuE/preview"
  },
  {
    "id": "adventures_1",
    "type": "adventures",
    "image": "https://trechos.org/wp-content/uploads/2022/08/Livro-A-Ilha-do-Tesouro-por-Robert-Louis-Stevenson.jpg",
    "description": "A Ilha do Tesouro - Robert Louis Stevenson",
    "content": "https://drive.google.com/file/d/1hjIAnE5S_Ta5d1FJNwKOiZBxwm-bjGfz/preview"
  },
  {
    "id": "adventures_2",
    "type": "adventures",
    "image": "https://images-na.ssl-images-amazon.com/images/I/519IHxbSNyL.jpg",
    "description": "A Ilustre Casa de Ramires - Eça de Queiroz",
    "content": "https://drive.google.com/file/d/1IgoBTPh2lo2gskb_sk6LPFQ6UUCyw0NF/preview"
  },
  {
    "id": "adventures_3",
    "type": "adventures",
    "image": "https://www.baixelivros.com.br/media/2021/02/cancao-do-exilio.jpg",
    "description": "Canção do Exílio - Gonçalves Dias",
    "content": "https://drive.google.com/file/d/1kepxBj__USBs3JOpy81CFXLJKwy7qZAT/preview"
  },
  {
    "id": "adventures_4",
    "type": "adventures",
    "image": "https://livroecafe.com/wp-content/uploads/2022/12/charneca-em-flor.jpg",
    "description": "Charneca em Flor - Florbela Espanca",
    "content": "https://drive.google.com/file/d/1QbhzPWUmEOZwNIuaTEnv6jM01oJASebG/preview"
  },
  {
    "id": "adventures_5",
    "type": "adventures",
    "image": "https://kbimages1-a.akamaihd.net/fe6e39d5-3ad6-475f-b235-7d09cc194a3e/1200/1200/False/eu-e-outras-poesias.jpg",
    "description": "Eu e outras poesias - Augusto dos Anjos",
    "content": "https://drive.google.com/file/d/1-JrUqt6hDwz_7n00dhtowzb9Oz3GIfmP/preview"
  },
  {
    "id": "adventures_6",
    "type": "adventures",
    "image": "https://www.baixelivros.com.br/media/2020/03/o-cortico.jpg",
    "description": "O Cortiço - Aluísio Azevedo",
    "content": "https://drive.google.com/file/d/1F4Vrq5-y2BHoIA_elfTCZAbBJejBcSvE/preview"
  },
  {
    "id": "adventures_7",
    "type": "adventures",
    "image": "https://m.media-amazon.com/images/I/815fFEIezPS._AC_UF1000,1000_QL80_.jpg",
    "description": "O Tronco do Ipu - José de Alencar",
    "content": "https://drive.google.com/file/d/1qrVz6hqAgB7u-u9sgqB1rVrIkERu04HC/preview"
  },
  {
    "id": "adventures_8",
    "type": "adventures",
    "image": "https://images-na.ssl-images-amazon.com/images/I/41hjFyBSP+L.jpg",
    "description": "As Minas de Prata - José de Alencar",
    "content": "https://drive.google.com/file/d/1VXYspoG9dqugwGGFh6sDzqTqCzq6jki6/preview"
  },
  {
    "id": "adventures_9",
    "type": "adventures",
    "image": "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2016/10/viagens-na-minha-terra4.jpg",
    "description": "Viagens na Minha Terra - Almeida Garrett",
    "content": "https://drive.google.com/file/d/1GAi9q2w-rAZOy9O7EsWYNWRUPiB9AfxI/preview"
  },
  {
    "id": "adventures_10",
    "type": "adventures",
    "image": "https://2.bp.blogspot.com/-VggcG9SGvOQ/UlDCh9Bg56I/AAAAAAAAAxM/fP_9FQayxRQ/s1600/guarani-shared.jpg",
    "description": "O Guarani - José de Alencar",
    "content": "https://drive.google.com/file/d/1OlocUoC1CxqHxWmkU-I_N4SwLeEZgYzg/preview"
  },
  {
    "id": "adventures_11",
    "type": "adventures",
    "image": "https://tocalivros.s3.amazonaws.com/images/audiolivros/200/a/s/as-aventuras-de-tom-sawyer-mark-twain-1048369.jpg",
    "description": "As Aventuras de Tom Sawyer - Mark Twain",
    "content": "https://drive.google.com/file/d/164jhsZYhxxePmB5-aHIDMU4OGy5Egd0l/preview"
  },
  {
    "id": "adventures_12",
    "type": "adventures",
    "image": "https://m.media-amazon.com/images/I/71UKvlLXALL._AC_UF1000,1000_QL80_.jpg",
    "description": "A Volta ao Mundo em 80 Dias - Júlio Verne",
    "content": "https://drive.google.com/file/d/1x8NtxCmKx8dC0vD2SMpHN67BTtgKxIms/preview"
  }
]

var horrorsObject = [
  {
    id: "horrors_0",
    type: "horrors",
    content: "https://www.youtube.com/embed/DB7zm6a1THg",
    description:
      "5 horrors de literatura que você precisa ouvir | Bruna Miranda #445",
    image: "https://i.ytimg.com/vi/DB7zm6a1THg/maxresdefault.jpg",
  },
  {
    id: "horrors_1",
    type: "horrors",
    content: "https://www.youtube.com/embed/MKzOAOu8Zes",
    description:
      "PEDRO LOOS (CIÊNCIA TODO DIA) - Inteligência Ltda. horror #821",
    image: "https://i.ytimg.com/vi/MKzOAOu8Zes/maxresdefault.jpg",
  },
  {
    id: "horrors_2",
    type: "horrors",
    content: "https://www.youtube.com/embed/zGE_AEqd72w",
    description:
      "ENIGMAS DO UNIVERSO: SÉRGIO SACANI E PEDRO PALLOTTA - Inteligência Ltda. horror #789",
    image: "https://i.ytimg.com/vi/zGE_AEqd72w/maxresdefault.jpg",
  },
  {
    id: "horrors_3",
    type: "horrors",
    content: "https://www.youtube.com/embed/akuCdwGTo0Y",
    description: "AFFONSO SOLANO E AFONSO TRESDÊ - Ciência Sem Fim #171",
    image: "https://i.ytimg.com/vi/akuCdwGTo0Y/maxresdefault.jpg",
  },
  {
    id: "horrors_4",
    type: "horrors",
    content: "https://www.youtube.com/embed/JQ-wVpjSnkA",
    description: "CIÊNCIA VISITA FLOW horror - Ciência Sem Fim #141",
    image: "https://i.ytimg.com/vi/JQ-wVpjSnkA/maxresdefault.jpg",
  },
  {
    id: "horrors_5",
    type: "horrors",
    content: "https://www.youtube.com/embed/fWB5nniPzcE",
    description:
      "Diário Econômico: horror do Banco Original e Canal Rural - 31/5/2023 | Canal Rural",
    image: "https://i.ytimg.com/vi/f0MiYLvuaEI/maxresdefault.jpg",
  },
  {
    id: "horrors_6",
    type: "horrors",
    content: "https://www.youtube.com/embed/d32tDaqjeb8",
    description:
      "DEBATE: EVOLUCIONISMO X CRIACIONISMO - Inteligência Ltda. horror #829",
    image: "https://i.ytimg.com/vi/d32tDaqjeb8/maxresdefault.jpg",
  },
  {
    id: "horrors_7",
    type: "horrors",
    content: "https://www.youtube.com/embed/lAWGDijOIro",
    description: "RICHARD RASMUSSEN - TICARACATICAST | EP 292",
    image: "https://i.ytimg.com/vi/lAWGDijOIro/mqdefault.jpg",
  },
];

var thrillersObject = [
  {
    id: "thrillers_0",
    type: "thrillers",
    image:
      "../assets/img/Artigos/a_importancia_da_atividade_fisica_para_criancas.jpg",
    description: "A importância da física para crianças",
  },
  {
    id: "thrillers_1",
    type: "thrillers",
    image: "../assets/img/Artigos/a_moderna_administracao_hospitalar.jpg",
    description: "A moderna Administração Hospitalar",
  },
  {
    id: "thrillers_2",
    type: "thrillers",
    image:
      "../assets/img/Artigos/aproximacao_entre_as_nacoes_de_aceleracao_social_do_tempo.png",
    description: "Aproximação entre as nações de aceleração social do tempo",
  },
  {
    id: "thrillers_3",
    type: "thrillers",
    image:
      "../assets/img/Artigos/as_possibilidades_que_as_novas_tecnologias_e_educacao_a_distancia_podem_trazer.jpg",
    description:
      "As possibilidades que as novas tecnologias e educação a distância podem trazer",
  },
  {
    id: "thrillers_4",
    type: "thrillers",
    image: "../assets/img/Artigos/boas_praticas_na_gestao_municipal.jpg",
    description: "Boas práticas na Gestão Municipal",
  },
  {
    id: "thrillers_5",
    type: "thrillers",
    image:
      "../assets/img/Artigos/levando_a_programacao_para_a_sala_de_aula.jpg",
    description: "Levando a programação para a Sala de Aula",
  },
  {
    id: "thrillers_6",
    type: "thrillers",
    image:
      "../assets/img/Artigos/modelo_de_triagem_de_inibidores_de_ntpdases.jpg",
    description: "Modelo de Triagem de inibidores de Ntpdases",
  },
  {
    id: "thrillers_7",
    type: "thrillers",
    image: "../assets/img/Artigos/ressignificancia_dos_animais_domesticos.jpg",
    description: "Ressignificancia dos Animais Domésticos",
  },
];

var romancesObject = [
  {
    id: "romances_0",
    type: "romances",
    content: "https://www.youtube.com/embed/y4InCxeiaDA",
    image: "https://i.ytimg.com/vi/y4InCxeiaDA/maxresdefault.jpg",
    description: "Minha opinião sobre os livros populares do adventuretok",
  },
  {
    id: "romances_1",
    type: "romances",
    content: "https://www.youtube.com/embed/ru-C-ZBYlV8",
    image: "https://i.ytimg.com/vi/fBEMCcECfUM/maxresdefault.jpg",
    description: "Reagindo a resenhas POSITIVAS de livros que eu ODEIO!",
  },
  {
    id: "romances_2",
    type: "romances",
    content: "https://www.youtube.com/embed/C9p6Y3vrGoc",
    image: "https://i.ytimg.com/vi/C9p6Y3vrGoc/maxresdefault.jpg",
    description:
      "A reutilização dos livros. (onde comprar livros usados e baratos + unboxing)",
  },
  {
    id: "romances_3",
    type: "romances",
    content: "https://www.youtube.com/embed/3F16RYHsTRc",
    image: "https://i.ytimg.com/vi/ii7tYf6y4ZI/maxresdefault.jpg",
    description: "Li romances de 1★ dos meus livros favoritos...💔",
  },
  {
    id: "romances_4",
    type: "romances",
    content: "https://www.youtube.com/embed/Gv6pEj7r2ng",
    image: "https://i.ytimg.com/vi/6GLWY_d26N4/maxresdefault.jpg",
    description:
      "Os 10 melhores LIVROS que te vão fazer gostar de ler outra vez (as minhas recomendações!)",
  },
  {
    id: "romances_5",
    type: "romances",
    content: "https://www.youtube.com/embed/gLgwBGxYFEE",
    image: "https://i.ytimg.com/vi/gLgwBGxYFEE/maxresdefault.jpg",
    description: "OS 10 MELHORES LIVROS DO MUNDO!",
  },
  {
    id: "romances_6",
    type: "romances",
    content: "https://www.youtube.com/embed/4GU6LmdUpKI",
    image: "https://i.ytimg.com/vi/4GU6LmdUpKI/maxresdefault.jpg",
    description: "LIVRO CORALINE- Unboxing + romance🔑",
  },
  {
    id: "romances_7",
    type: "romances",
    content: "https://www.youtube.com/embed/XJ-kzFLi3vc",
    image: "https://i.ytimg.com/vi/Qbyn6naFTgU/mqdefault.jpg",
    description: "Unboxing de livros que comprei na adventure Friday",
  },
];

// Construindo Div das Box do carrossel e adicionando botoes de movimentacao do carrossel

for (var i = 0; i < pageObjects.length; i++) {
  const specificCarousel = document.getElementById(pageObjects[i].id);
  const htmlCarousel = `<div class="carousel-box" id="${pageObjects[i].id_card}"></div>
                        <a class="switchLeft sliderButton" id="${pageObjects[i].arrow_left}" onclick="sliderScrollLeft_${pageObjects[i].id}()">❮</a>
                        <a class="switchRight sliderButton" id="${pageObjects[i].arrow_right}" onclick="sliderScrollRight_${pageObjects[i].id}()">❯</a>`;
  specificCarousel.insertAdjacentHTML("beforeend", htmlCarousel);
}

// Construindo div que ira armazenar todos os cards de classe row__posters dos adventures

const cardsCreate_adventures = document.getElementById(pageObjects[0].id_card);
for (var i = 0; i < adventuresObject.length; i++) {
  cardsCreate_adventures.insertAdjacentHTML(
    "beforeend",
    `<div class="row__posters" id="${adventuresObject[i].id}" onclick="openModal(event)"></div>`
  );
}

// Construindo div que ira armazenar todos os cards de classe row__posters dos horrors

const cardsCreate_horrors = document.getElementById(pageObjects[1].id_card);
for (var i = 0; i < horrorsObject.length; i++) {
  cardsCreate_horrors.insertAdjacentHTML(
    "beforeend",
    `<div class="row__posters" id="${horrorsObject[i].id}" onclick="openModal(event)"></div>`
  );
}

// Construindo div que ira armazenar todos os cards de classe row__posters dos thrillers

const cardsCreate_thrillers = document.getElementById(pageObjects[2].id_card);
for (var i = 0; i < thrillersObject.length; i++) {
  cardsCreate_thrillers.insertAdjacentHTML(
    "beforeend",
    `<div class="row__posters" id="${thrillersObject[i].id}" onclick="openModal(event)"></div>`
  );
}

// Construindo div que ira armazenar todos os cards de classe row__posters dos romances

const cardsCreate_romances = document.getElementById(pageObjects[3].id_card);
for (var i = 0; i < romancesObject.length; i++) {
  cardsCreate_romances.insertAdjacentHTML(
    "beforeend",
    `<div class="row__posters" id="${romancesObject[i].id}" onclick="openModal(event)"></div>`
  );
}

// Construindo e preenchendo o conteudo que ira ficar em cada card do carrossel de livros

for (var i = 0; i < adventuresObject.length; i++) {
  const cards_adventures = document.getElementById(adventuresObject[i].id);
  const html_adventures = `<img class="img-${adventuresObject[i].id} slider-img" src="${adventuresObject[i].image}"/>
    <h2 class="title_description">${adventuresObject[i].description}</h2>`;
  cards_adventures.insertAdjacentHTML("beforeend", html_adventures);
}

// Construindo e preenchendo o conteudo que ira ficar em cada card do carrossel de horrors

for (var i = 0; i < horrorsObject.length; i++) {
  const cards_horrors = document.getElementById(horrorsObject[i].id);
  const html_horrors = `<img class="img-${horrorsObject[i].id} slider-img" src="${horrorsObject[i].image}"/>
    <h2 class="title_description">${horrorsObject[i].description}</h2>`;
  cards_horrors.insertAdjacentHTML("beforeend", html_horrors);
}

// Construindo e preenchendo o conteudo que ira ficar em cada card do carrossel de thrillers

for (var i = 0; i < thrillersObject.length; i++) {
  const cards_thrillers = document.getElementById(thrillersObject[i].id);
  const html_thrillers = `<img class="img-${thrillersObject[i].id} slider-img" src="${thrillersObject[i].image}"/>
    <h2 class="title_description">${thrillersObject[i].description}</h2>`;
  cards_thrillers.insertAdjacentHTML("beforeend", html_thrillers);
}

// Construindo e preenchendo o conteudo que ira ficar em cada card do carrossel de romances

for (var i = 0; i < romancesObject.length; i++) {
  const cards_romances = document.getElementById(romancesObject[i].id);
  const html_romances = `<img class="img-${romancesObject[i].id} slider-img" src="${romancesObject[i].image}"/>
    <h2 class="title_description">${romancesObject[i].description}</h2>`;
  cards_romances.insertAdjacentHTML("beforeend", html_romances);
}

// Construindo funcao de movimentacao do carrossel adventures

const sliders_adventures = document.getElementById("adventure");

var scrollPerClick_adventures;
var imagePadding_adventures = 20;
var scrollAmount_adventures = 0;

function sliderScrollLeft_adventures() {
  sliders_adventures.scrollTo({
    top: 0,
    left: (scrollAmount_adventures -= scrollPerClick_adventures),
    behavior: "smooth",
  });

  if (scrollAmount_adventures < 0) {
    scrollAmount_adventures = 0;
  }
}

function sliderScrollRight_adventures() {
  if (
    scrollAmount_adventures <=
    sliders_adventures.scrollWidth - sliders_adventures.clientWidth
  ) {
    sliders_adventures.scrollTo({
      top: 0,
      left: (scrollAmount_adventures += scrollPerClick_adventures),
      behavior: "smooth",
    });
  }
}

scrollPerClick_adventures =
  document.querySelector(".img-adventures_0").clientWidth +
  imagePadding_adventures;

// Construindo funcao de movimentacao do carrossel horrors

const sliders_horrors = document.getElementById("horror");

var scrollPerClick_horror;
var imagePadding_horrors = 20;
var scrollAmount_horrors = 0;

function sliderScrollLeft_horrors() {
  sliders_horrors.scrollTo({
    top: 0,
    left: (scrollAmount_horrors -= scrollPerClick_horror),
    behavior: "smooth",
  });

  if (scrollAmount_horrors < 0) {
    scrollAmount_horrors = 0;
  }
}

function sliderScrollRight_horrors() {
  if (
    scrollAmount_horrors <=
    sliders_horrors.scrollWidth - sliders_horrors.clientWidth
  ) {
    sliders_horrors.scrollTo({
      top: 0,
      left: (scrollAmount_horrors += scrollPerClick_horror),
      behavior: "smooth",
    });
  }
}

scrollPerClick_horror =
  document.querySelector(".img-horrors_0").clientWidth + imagePadding_horrors;

// Construindo funcao de movimentacao do carrossel thrillers

const sliders_thrillers = document.getElementById("thriller");

var scrollPerClick_thrillers;
var imagePadding_thrillers = 20;
var scrollAmount_thrillers = 0;

function sliderScrollLeft_thrillers() {
  sliders_thrillers.scrollTo({
    top: 0,
    left: (scrollAmount_thrillers -= scrollPerClick_thrillers),
    behavior: "smooth",
  });

  if (scrollAmount_thrillers < 0) {
    scrollAmount_thrillers = 0;
  }
}

function sliderScrollRight_thrillers() {
  if (
    scrollAmount_thrillers <=
    sliders_thrillers.scrollWidth - sliders_thrillers.clientWidth
  ) {
    sliders_thrillers.scrollTo({
      top: 0,
      left: (scrollAmount_thrillers += scrollPerClick_thrillers),
      behavior: "smooth",
    });
  }
}

scrollPerClick_thrillers =
  document.querySelector(".img-thrillers_0").clientWidth +
  imagePadding_thrillers;

// Construindo funcao de movimentacao do carrossel romances

const sliders_romances = document.getElementById("romance");

var scrollPerClick_romances;
var imagePadding_romances = 20;
var scrollAmount_romances = 0;

function sliderScrollLeft_romances() {
  sliders_romances.scrollTo({
    top: 0,
    left: (scrollAmount_romances -= scrollPerClick_romances),
    behavior: "smooth",
  });

  if (scrollAmount_romances < 0) {
    scrollAmount_romances = 0;
  }
}

function sliderScrollRight_romances() {
  if (
    scrollAmount_romances <=
    sliders_romances.scrollWidth - sliders_romances.clientWidth
  ) {
    sliders_romances.scrollTo({
      top: 0,
      left: (scrollAmount_romances += scrollPerClick_romances),
      behavior: "smooth",
    });
  }
}

scrollPerClick_romances =
  document.querySelector(".img-romances_0").clientWidth + imagePadding_romances;


function openModal(){

}


// Funcao desenvolvida para abrir o modal e as configuracoes do mesmo

function openModal(event) {
  var parentId = event.currentTarget.id;
  const settingModal = document.getElementById("display-modal");
  settingModal.innerHTML = "";
  const divModalContent = `<div class="close-modal" id="close-modal"></div>
                           <div class="modal-content" id="modal-content"></div>`;
  settingModal.insertAdjacentHTML("beforeend", divModalContent);


  const createCloseButtonModal = document.getElementById("close-modal");
  createCloseButtonModal.insertAdjacentHTML(
    "beforeend",
    `<button class="close" onclick="removerBlur()">x</button>`
  );
  

  var iframe = document.createElement("iframe");
  var src_iframe;

  for (var i = 0; i < adventuresObject.length; i++) {
    if (adventuresObject[i].id === parentId) {
      src_iframe = adventuresObject[i].content;
      break;  // Para o loop após encontrar a correspondência
    }
  }

  iframe.src = src_iframe;


  var container = document.getElementById("modal-content");
  container.appendChild(iframe);

  settingModal.appendChild(container);


  let el = document.getElementById("display-modal");
  el.style.display = 'block';

  var elements = document.querySelectorAll('body > *:not(.display-modal)');

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.filter = 'blur(2px)';
  }
  
}


// Funcao desenvolvida para fechar o modal e as configuracoes do mesmo

function removerBlur() {
  var elements = document.querySelectorAll('body > *:not(.display-modal)');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.filter = '';
  }
  let el = document.getElementById("display-modal");
  el.style.display = 'none';
}