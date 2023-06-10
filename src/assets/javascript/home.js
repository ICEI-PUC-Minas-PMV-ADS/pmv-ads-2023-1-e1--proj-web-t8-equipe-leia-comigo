var pageObjects = [
    {
        "id":"books",
        "id_card":"book",
        "arrow_left":"books-arrow-left",
        "arrow_right":"books-arrow-right"
    },
    {
        "id":"podcasts",
        "id_card":"podcast",
        "arrow_left":"podcasts-arrow-left",
        "arrow_right":"podcasts-arrow-right"
    },
    {
        "id":"articles",
        "id_card":"article",
        "arrow_left":"articles-arrow-left",
        "arrow_right":"articles-arrow-right"
    },
    {
        "id":"reviews",
        "id_card":"review",
        "arrow_left":"reviews-arrow-left",
        "arrow_right":"reviews-arrow-right"
    }
]

var booksObject = [
    {
        "id":"books_0",
        "type": "books",
        "image": "/src/assets/img/Livros/a_carta_roubada.png",
        "description": "A Carta Roubada - Edgar Allan Poe" 
    },
    {
        "id":"books_1",
        "type": "books",
        "image": "/src/assets/img/Livros/a_ilha_do_teousoro.png",
        "description": "A Ilha do Tesouro - Robert Louis Stevenson" 
    },
    {
        "id":"books_2",
        "type": "books",
        "image": "/src/assets/img/Livros/a_ilustre_casa_de_ramires.png",
        "description": "A Ilustre Casa de Ramires - Eça de Queiroz" 
    },
    {
        "id":"books_3",
        "type": "books",
        "image": "/src/assets/img/Livros/a_recompensa_do_soldado.png",
        "description": "A recompensa do soldado - William Faulkner" 
    },
    {
        "id":"books_4",
        "type": "books",
        "image": "/src/assets/img/Livros/cancao_do_exilio.png",
        "description": "Canção do Exílio - Gonçalves Dias" 
    },
    {
        "id":"books_5",
        "type": "books",
        "image": "/src/assets/img/Livros/charneca_em_flor.png",
        "description": "Charneca em Flor - Florbela Espanca" 
    },
    {
        "id":"books_6",
        "type": "books",
        "image": "/src/assets/img/Livros/eu_e_outras_poesias.png",
        "description": "Eu e outras poesias - Augusto dos Anjos" 
    },
    {
        "id":"books_8",
        "type": "books",
        "image": "/src/assets/img/Livros/o_cortico.png",
        "description": "O Cortiço - Aluísio Azevedo" 
    },
    {
        "id":"books_9",
        "type": "books",
        "image": "/src/assets/img/Livros/o_cortico.png",
        "description": "O Cortiço - Aluísio Azevedo" 
    },
    {
        "id":"books_10",
        "type": "books",
        "image": "/src/assets/img/Livros/o_cortico.png",
        "description": "O Cortiço - Aluísio Azevedo" 
    },
    {
        "id":"books_11",
        "type": "books",
        "image": "/src/assets/img/Livros/o_cortico.png",
        "description": "O Cortiço - Aluísio Azevedo" 
    },
    {
        "id":"books_12",
        "type": "books",
        "image": "/src/assets/img/Livros/o_cortico.png",
        "description": "O Cortiço - Aluísio Azevedo" 
    }
]

var podcastsObject = [
    {
    "id": "podcasts_0",
    "type": "podcasts",
    "content": "https://www.youtube.com/embed/DB7zm6a1THg",
    "description": "5 podcasts de literatura que você precisa ouvir | Bruna Miranda #445",
    "image": "https://i.ytimg.com/vi/DB7zm6a1THg/maxresdefault.jpg"
    },
    {
    "id": "podcasts_1",
    "type": "podcasts",
    "content": "https://www.youtube.com/embed/MKzOAOu8Zes",
    "description": "PEDRO LOOS (CIÊNCIA TODO DIA) - Inteligência Ltda. Podcast #821",
    "image": "https://i.ytimg.com/vi/MKzOAOu8Zes/maxresdefault.jpg"
    },
    {
    "id": "podcasts_2",
    "type": "podcasts",
    "content": "https://www.youtube.com/embed/zGE_AEqd72w",
    "description": "ENIGMAS DO UNIVERSO: SÉRGIO SACANI E PEDRO PALLOTTA - Inteligência Ltda. Podcast #789",
    "image": "https://i.ytimg.com/vi/zGE_AEqd72w/maxresdefault.jpg"
    },
    {
    "id": "podcasts_3",
    "type": "podcasts",
    "content": "https://www.youtube.com/embed/akuCdwGTo0Y",
    "description": "AFFONSO SOLANO E AFONSO TRESDÊ - Ciência Sem Fim #171",
    "image": "https://i.ytimg.com/vi/akuCdwGTo0Y/maxresdefault.jpg"
    },
    {
    "id": "podcasts_4",
    "type": "podcasts",
    "content": "https://www.youtube.com/embed/JQ-wVpjSnkA",
    "description": "CIÊNCIA VISITA FLOW PODCAST - Ciência Sem Fim #141",
    "image": "https://i.ytimg.com/vi/JQ-wVpjSnkA/maxresdefault.jpg"
    },
    {
    "id": "podcasts_5",
    "type": "podcasts",
    "content": "https://www.youtube.com/embed/fWB5nniPzcE",
    "description": "Diário Econômico: podcast do Banco Original e Canal Rural - 31/5/2023 | Canal Rural",
    "image": "https://i.ytimg.com/vi/f0MiYLvuaEI/maxresdefault.jpg"
    },
    {
    "id": "podcasts_6",
    "type": "podcasts",
    "content": "https://www.youtube.com/embed/d32tDaqjeb8",
    "description": "DEBATE: EVOLUCIONISMO X CRIACIONISMO - Inteligência Ltda. Podcast #829",
    "image": "https://i.ytimg.com/vi/d32tDaqjeb8/maxresdefault.jpg"
    },
    {
    "id": "podcasts_7",
    "type": "podcasts",
    "content": "https://www.youtube.com/embed/lAWGDijOIro",
    "description": "RICHARD RASMUSSEN - TICARACATICAST | EP 292",
    "image": "https://i.ytimg.com/vi/lAWGDijOIro/mqdefault.jpg"
    }
]


var articlesObject = [
    {
        "id": "articles_0",
        "type": "articles",
        "image": "/src/assets/img/Artigos/a_importancia_da_atividade_fisica_para_criancas.jpg",
        "description": "A importância da física para crianças"
    },
    {
        "id": "articles_1",
        "type": "articles",
        "image": "/src/assets/img/Artigos/a_moderna_administracao_hospitalar.jpg",
        "description": "A moderna Administração Hospitalar"
    },
    {
        "id": "articles_2",
        "type": "articles",
        "image": "/src/assets/img/Artigos/aproximacao_entre_as_nacoes_de_aceleracao_social_do_tempo.png",
        "description": "Aproximação entre as nações de aceleração social do tempo"
    },
    {
        "id": "articles_3",
        "type": "articles",
        "image": "/src/assets/img/Artigos/as_possibilidades_que_as_novas_tecnologias_e_educacao_a_distancia_podem_trazer.jpg",
        "description": "As possibilidades que as novas tecnologias e educação a distância podem trazer"
    },
    {
        "id": "articles_4",
        "type": "articles",
        "image": "/src/assets/img/Artigos/boas_praticas_na_gestao_municipal.jpg",
        "description": "Boas práticas na Gestão Municipal"
    },
    {
        "id": "articles_5",
        "type": "articles",
        "image": "/src/assets/img/Artigos/levando_a_programacao_para_a_sala_de_aula.jpg",
        "description": "Levando a programação para a Sala de Aula"
    },
    {
        "id": "articles_6",
        "type": "articles",
        "image": "/src/assets/img/Artigos/modelo_de_triagem_de_inibidores_de_ntpdases.jpg",
        "description": "Modelo de Triagem de inibidores de Ntpdases"
    },
    {
        "id": "articles_7",
        "type": "articles",
        "image": "/src/assets/img/Artigos/ressignificancia_dos_animais_domesticos.jpg",
        "description": "Ressignificancia dos Animais Domésticos"
    }
]

var reviewsObject = [
    {
        "id": "reviews_0",
        "type": "reviews",
        "content": "https://www.youtube.com/embed/y4InCxeiaDA",
        "image": "https://i.ytimg.com/vi/y4InCxeiaDA/maxresdefault.jpg",
        "description": "Minha opinião sobre os livros populares do booktok"
    },
    {
        "id": "reviews_1",
        "type": "reviews",
        "content": "https://www.youtube.com/embed/ru-C-ZBYlV8",
        "image": "https://i.ytimg.com/vi/fBEMCcECfUM/maxresdefault.jpg",
        "description": "Reagindo a resenhas POSITIVAS de livros que eu ODEIO!"
    },
    {
        "id": "reviews_2",
        "type": "reviews",
        "content": "https://www.youtube.com/embed/C9p6Y3vrGoc",
        "image": "https://i.ytimg.com/vi/C9p6Y3vrGoc/maxresdefault.jpg",
        "description": "A reutilização dos livros. (onde comprar livros usados e baratos + unboxing)"
    },
    {
        "id": "reviews_3",
        "type": "reviews",
        "content": "https://www.youtube.com/embed/3F16RYHsTRc",
        "image": "https://i.ytimg.com/vi/ii7tYf6y4ZI/maxresdefault.jpg",
        "description": "Li reviews de 1★ dos meus livros favoritos...💔"
    },
    {
        "id": "reviews_4",
        "type": "reviews",
        "content": "https://www.youtube.com/embed/Gv6pEj7r2ng",
        "image": "https://i.ytimg.com/vi/6GLWY_d26N4/maxresdefault.jpg",
        "description": "Os 10 melhores LIVROS que te vão fazer gostar de ler outra vez (as minhas recomendações!)"
    },
    {
        "id": "reviews_5",
        "type": "reviews",
        "content": "https://www.youtube.com/embed/gLgwBGxYFEE",
        "image": "https://i.ytimg.com/vi/gLgwBGxYFEE/maxresdefault.jpg",
        "description": "OS 10 MELHORES LIVROS DO MUNDO!"
    },
    {
        "id": "reviews_6",
        "type": "reviews",
        "content": "https://www.youtube.com/embed/4GU6LmdUpKI",
        "image": "https://i.ytimg.com/vi/4GU6LmdUpKI/maxresdefault.jpg",
        "description": "LIVRO CORALINE- Unboxing + Review🔑"
    },
    {
        "id": "reviews_7",
        "type": "reviews",
        "content": "https://www.youtube.com/embed/XJ-kzFLi3vc",
        "image": "https://i.ytimg.com/vi/Qbyn6naFTgU/mqdefault.jpg",
        "description": "Unboxing de livros que comprei na Book Friday"
    }
]

  

// Construindo Div das Box do carrossel e adicionando botoes de movimentacao do carrossel

for (var i = 0; i < pageObjects.length; i++) {
    const specificCarousel = document.getElementById(pageObjects[i].id);
    const htmlCarousel = `<div class="carousel-box" id="${pageObjects[i].id_card}"></div>
                        <a class="switchLeft sliderButton" id="${pageObjects[i].arrow_left}" onclick="sliderScrollLeft_${pageObjects[i].id}()">❮</a>
                        <a class="switchRight sliderButton" id="${pageObjects[i].arrow_right}" onclick="sliderScrollRight_${pageObjects[i].id}()">❯</a>`;
    specificCarousel.insertAdjacentHTML("beforeend", htmlCarousel);
}


// Construindo div que ira armazenar todos os cards de classe row__posters dos books

const cardsCreate_books = document.getElementById(pageObjects[0].id_card);
for ( var i=0; i<booksObject.length; i++ ){
    cardsCreate_books.insertAdjacentHTML(
        "beforeend",
        `<div class="row__posters" id="${booksObject[i].id}"></div>`
    );
}

// Construindo div que ira armazenar todos os cards de classe row__posters dos podcasts

const cardsCreate_podcasts = document.getElementById(pageObjects[1].id_card);
for ( var i=0; i<podcastsObject.length; i++ ){
    cardsCreate_podcasts.insertAdjacentHTML(
        "beforeend",
        `<div class="row__posters" id="${podcastsObject[i].id}"></div>`
    );
}

// Construindo div que ira armazenar todos os cards de classe row__posters dos articles

const cardsCreate_articles = document.getElementById(pageObjects[2].id_card);
for ( var i=0; i<articlesObject.length; i++ ){
    cardsCreate_articles.insertAdjacentHTML(
        "beforeend",
        `<div class="row__posters" id="${articlesObject[i].id}"></div>`
    );
}

// Construindo div que ira armazenar todos os cards de classe row__posters dos reviews

const cardsCreate_reviews = document.getElementById(pageObjects[3].id_card);
for ( var i=0; i<reviewsObject.length; i++ ){
    cardsCreate_reviews.insertAdjacentHTML(
        "beforeend",
        `<div class="row__posters" id="${reviewsObject[i].id}"></div>`
    );
}


// Construindo e preenchendo o conteudo que ira ficar em cada card do carrossel de livros

for (var i = 0; i < booksObject.length; i++) {
    const cards_books = document.getElementById(booksObject[i].id);
    const html_books = `<img class="img-${booksObject[i].id} slider-img" src="${booksObject[i].image}" />
    <h2 class="title_description">${booksObject[i].description}</h2>`;
    cards_books.insertAdjacentHTML("beforeend", html_books);
}

// Construindo e preenchendo o conteudo que ira ficar em cada card do carrossel de podcasts

for (var i = 0; i < podcastsObject.length; i++) {
    const cards_podcasts = document.getElementById(podcastsObject[i].id);
    const html_podcasts = `<img class="img-${podcastsObject[i].id} slider-img" src="${podcastsObject[i].image}" />
    <h2 class="title_description">${podcastsObject[i].description}</h2>`;
    cards_podcasts.insertAdjacentHTML("beforeend", html_podcasts);
}

// Construindo e preenchendo o conteudo que ira ficar em cada card do carrossel de articles

for (var i = 0; i < articlesObject.length; i++) {
    const cards_articles = document.getElementById(articlesObject[i].id);
    const html_articles = `<img class="img-${articlesObject[i].id} slider-img" src="${articlesObject[i].image}" />
    <h2 class="title_description">${articlesObject[i].description}</h2>`;
    cards_articles.insertAdjacentHTML("beforeend", html_articles);
}

// Construindo e preenchendo o conteudo que ira ficar em cada card do carrossel de reviews

for (var i = 0; i < reviewsObject.length; i++) {
    const cards_reviews = document.getElementById(reviewsObject[i].id);
    const html_reviews = `<img class="img-${reviewsObject[i].id} slider-img" src="${reviewsObject[i].image}" />
    <h2 class="title_description">${reviewsObject[i].description}</h2>`;
    cards_reviews.insertAdjacentHTML("beforeend", html_reviews);
}

// Construindo funcao de movimentacao do carrossel books

const sliders_books = document.getElementById("book");

var scrollPerClick_books;
var imagePadding_books = 20;
var scrollAmount_books = 0;

function sliderScrollLeft_books(){
    sliders_books.scrollTo({
        top: 0,
        left: (scrollAmount_books -= scrollPerClick_books),
        behavior: "smooth"
    });

    if (scrollAmount_books < 0 ) {
            scrollAmount_books = 0;
    }
}

function sliderScrollRight_books(){
    if (scrollAmount_books <= sliders_books.scrollWidth - sliders_books.clientWidth){
        sliders_books.scrollTo({
            top: 0,
            left: (scrollAmount_books += scrollPerClick_books),
            behavior: "smooth"
        });
    }
}

scrollPerClick_books = document.querySelector(".img-books_0").clientWidth + imagePadding_books;


// Construindo funcao de movimentacao do carrossel podcasts

const sliders_podcasts = document.getElementById("podcast");

var scrollPerClick_podcast;
var imagePadding_podcasts = 20;
var scrollAmount_podcasts = 0;

function sliderScrollLeft_podcasts(){
    sliders_podcasts.scrollTo({
        top: 0,
        left: (scrollAmount_podcasts -= scrollPerClick_podcast),
        behavior: "smooth"
    });

    if (scrollAmount_podcasts < 0 ) {
            scrollAmount_podcasts = 0;
    }
}

function sliderScrollRight_podcasts(){
    if (scrollAmount_podcasts <= sliders_podcasts.scrollWidth - sliders_podcasts.clientWidth){
        sliders_podcasts.scrollTo({
            top: 0,
            left: (scrollAmount_podcasts += scrollPerClick_podcast),
            behavior: "smooth"
        });
    }
}

scrollPerClick_podcast = document.querySelector(".img-podcasts_0").clientWidth + imagePadding_podcasts;


// Construindo funcao de movimentacao do carrossel articles

const sliders_articles = document.getElementById("article");

var scrollPerClick_articles;
var imagePadding_articles = 20;
var scrollAmount_articles = 0;

function sliderScrollLeft_articles(){
    sliders_articles.scrollTo({
        top: 0,
        left: (scrollAmount_articles -= scrollPerClick_articles),
        behavior: "smooth"
    });

    if (scrollAmount_articles < 0 ) {
            scrollAmount_articles = 0;
    }
}

function sliderScrollRight_articles(){
    if (scrollAmount_articles <= sliders_articles.scrollWidth - sliders_articles.clientWidth){
        sliders_articles.scrollTo({
            top: 0,
            left: (scrollAmount_articles += scrollPerClick_articles),
            behavior: "smooth"
        });
    }
}

scrollPerClick_articles = document.querySelector(".img-articles_0").clientWidth + imagePadding_articles;


// Construindo funcao de movimentacao do carrossel reviews

const sliders_reviews = document.getElementById("review");

var scrollPerClick_reviews;
var imagePadding_reviews = 20;
var scrollAmount_reviews = 0;

function sliderScrollLeft_reviews(){
    sliders_reviews.scrollTo({
        top: 0,
        left: (scrollAmount_reviews -= scrollPerClick_reviews),
        behavior: "smooth"
    });

    if (scrollAmount_reviews < 0 ) {
            scrollAmount_reviews = 0;
    }
}

function sliderScrollRight_reviews(){
    if (scrollAmount_reviews <= sliders_reviews.scrollWidth - sliders_reviews.clientWidth){
        sliders_reviews.scrollTo({
            top: 0,
            left: (scrollAmount_reviews += scrollPerClick_reviews),
            behavior: "smooth"
        });
    }
}

scrollPerClick_reviews = document.querySelector(".img-reviews_0").clientWidth + imagePadding_reviews;
