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
    "id": "horrors_0",
    "type": "horrors",
    "content": "https://drive.google.com/file/d/1l9Fq8xyS5H0AaCfG3ljFXO2p1q0u59gD/preview",
    "description": "Frankenstein - Mary Shelley",
    "image": "https://m.media-amazon.com/images/I/81z7E0uWdtL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "id": "horrors_1",
    "type": "horrors",
    "content": "https://drive.google.com/file/d/1QiZOHEYjKzD69OWiGCbEYK7cXTS3hhaB/preview",
    "description": "O Médico e o Monstro - Robert Louis Stevenson",
    "image": "https://m.media-amazon.com/images/I/51x-8iAshSL.jpg"
  },
  {
    "id": "horrors_2",
    "type": "horrors",
    "content": "https://drive.google.com/file/d/1fVCaxZmA03OrZwbOCXQL_juQsVsVkkp6/preview",
    "description": "Drácula - Bram Stoker",
    "image": "https://m.media-amazon.com/images/I/61MgodE1s0L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "id": "horrors_3",
    "type": "horrors",
    "content": "https://drive.google.com/file/d/1wiT-hRtXgtPS0HlQ_UMjDGLFElCzxKBF/preview",
    "description": "O Retrato de Dorian Gray - Oscar Wilde",
    "image": "https://darkside.vteximg.com.br/arquivos/ids/176893-1000-1000/o-retrato-de-dorian-gray-4.png"
  },
  {
    "id": "horrors_4",
    "type": "horrors",
    "content": "https://drive.google.com/file/d/1MDZekX9k7iihWdGZvZI64CKRoyzHFO0J/preview",
    "description": "A Volta do Parafuso - Henry James",
    "image": "https://m.media-amazon.com/images/I/51SGT7rwWNL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "id": "horrors_5",
    "type": "horrors",
    "content": "https://drive.google.com/file/d/1SVnIQjj6JFNR6ShICbPRrQVNCHiSbY4M/preview",
    "description": "O Corvo - Edgar Allan Poe",
    "image": "https://gibizada.com.br/wp-content/uploads/2020/11/01-1-scaled.jpg"
  },
  {
    "id": "horrors_6",
    "type": "horrors",
    "content": "https://drive.google.com/file/d/12f65soTwtbGE5rvwn-DsFVbQfKHofQL_/preview",
    "description": "Carmilla - Joseph Sheridan Le Fanu",
    "image": "https://m.media-amazon.com/images/I/71t6qs2BvHL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "id": "horrors_7",
    "type": "horrors",
    "content": "https://drive.google.com/file/d/1auBlV0rVoimRAktpJ9EGiRzlw5IIhKCt/preview",
    "description": "O Fantasma da Ópera - Gaston Leroux",
    "image": "https://m.media-amazon.com/images/I/412zWjwMLPL.jpg"
  },
  {
    "id": "horrors_8",
    "type": "horrors",
    "content": "https://drive.google.com/file/d/1x1KDNc3Fz6fdiyG1khFW3sZV0R4FFXQs/preview",
    "description": "A Ilha do Dr. Moreau - H. G. Wells",
    "image": "https://m.media-amazon.com/images/I/41vfkgIP4LL.jpg"
  },
  {
    "id": "horrors_9",
    "type": "horrors",
    "content": "https://drive.google.com/file/d/1Jhmb76hodt_FpK2z72rtAOEZFtezWaZx/preview",
    "description": "o senhor diabo - Eça de Queirós",
    "image": "https://kbimages1-a.akamaihd.net/68b7e72b-dc65-4046-9f7c-e4c7ee6e9ca7/1200/1200/False/o-senhor-diabo.jpg"
  },
  {
    "id": "horrors_10",
    "type": "horrors",
    "content": "https://drive.google.com/file/d/1HM-zTtcaVsw1oC2-Aqe_Yw2Wnw8CwE96/preview",
    "description": "O Chamado de Cthulhu - H. P. Lovecraft",
    "image": "https://m.media-amazon.com/images/I/51VIb7Rbo5L.jpg"
  },
  {
    "id": "horrors_11",
    "type": "horrors",
    "content": "https://drive.google.com/file/d/1ISiIpdCTDuCDHp_17KskB2QLfDqKAGpo/preview",
    "description": "A Mão do Macaco - W. W. Jacobs",
    "image": "https://www.ernaniterra.com.br/wp-content/uploads/2020/04/A-ma%CC%83o-do-macaco.jpg"
  },
  {
    "id": "horrors_12",
    "type": "horrors",
    "content": "https://drive.google.com/file/d/1BDwRLG3P3hUbFREs5TSdnXoiQLtXhJLq/preview",
    "description": "O Gato Preto - Edgar Allan Poe",
    "image": "https://m.media-amazon.com/images/I/41h1wdW31eL.jpg"
  }
]



var thrillersObject = [
  {
    "id": "thrillers_0",
    "type": "thrillers",
    "image": "https://m.media-amazon.com/images/I/81XpG2iKTlL._AC_UF1000,1000_QL80_.jpg",
    "description": "Dom Casmurro - Machado de Assis",
    "content": "https://drive.google.com/file/d/1SzuxOXurpP-jCOFA12jYR6jGXl1BN4ru/preview"
  },
  {
    "id": "thrillers_1",
    "type": "thrillers",
    "image": "https://upload.wikimedia.org/wikipedia/pt/c/c1/Resumo-do-livro-o-alienista-de-machado-de-assis.jpg",
    "description": "O Alienista - Machado de Assis",
    "content": "https://drive.google.com/file/d/1O2E35NgvzpL5wvciEEtnJkdTuiviWzCR/preview"
  },
  {
    "id": "thrillers_2",
    "type": "thrillers",
    "image": "https://livraria.camara.leg.br/image/cache/catalog/capas/livraria_o-Corti%C3%A7o-368x533.jpg",
    "description": "O Cortiço - Aluísio Azevedo",
    "content": "https://drive.google.com/file/d/1KrCeJrvb3srq4DMnLIUrArZWGqDNyBtg/preview"
  },
  {
    "id": "thrillers_3",
    "type": "thrillers",
    "image": "https://www.lpm.com.br/livros/imagens/o_guarani_pocket_8525409456_hd.jpg",
    "description": "O Guarani - José de Alencar",
    "content": "https://drive.google.com/file/d/1i-kRvtuDbWNOusaQpDkghV3wAZ8yBFM2/preview"
  },
  {
    "id": "thrillers_4",
    "type": "thrillers",
    "image": "https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/10/memorias-sargento-milicias6.jpg",
    "description": "Memórias de um Sargento de Milícias - Manuel Antônio de Almeida",
    "content": "https://drive.google.com/file/d/1pnzoPtV0DRO3GmQ4MDY-PXjiS_8-TGyv/preview"
  },
  {
    "id": "thrillers_5",
    "type": "thrillers",
    "image": "https://www.atelie.com.br/site/wp-content/uploads/2016/02/Ateneu-3a_ed.jpg",
    "description": "O Ateneu - Raul Pompeia",
    "content": "https://drive.google.com/file/d/1hQfpnDgVvJdbNH5J5dAmmlBPyQJn21R1/preview"
  },
  {
    "id": "thrillers_6",
    "type": "thrillers",
    "image": "https://www.lpm.com.br/livros/imagens/triste_fim_de_policarpo_quaresma_9788525408600_hd.jpg",
    "description": "Triste Fim de Policarpo Quaresma - Lima Barreto",
    "content": "https://drive.google.com/file/d/1neX8IcqS6xjeOex3VHnV0dSISOZoB1Bk/preview"
  },
  {
    "id": "thrillers_7",
    "type": "thrillers",
    "image": "https://m.media-amazon.com/images/I/810Vj9zyi-L._AC_UF1000,1000_QL80_.jpg",
    "description": "A Hora da Estrela - Clarice Lispector",
    "content": "https://drive.google.com/file/d/1LBuhALfniftVjg7TGUt3qiw04X6pKGSz/preview"
  },
  {
    "id": "thrillers_8",
    "type": "thrillers",
    "image": "https://m.media-amazon.com/images/I/81seI3lKShL._AC_UF1000,1000_QL80_.jpg",
    "description": "O Auto da Compadecida - Ariano Suassuna",
    "content": "https://drive.google.com/file/d/1Sy30ReWT59gN15hLhboQwA2y7qauz-Ea/preview"
  },
  {
    "id": "thrillers_9",
    "type": "thrillers",
    "image": "https://i.zst.com.br/thumbs/12/e/14/1458543042.jpg",
    "description": "Vidas Secas - Graciliano Ramos",
    "content": "https://drive.google.com/file/d/1eX6dMf-uOZXeLrVpNBAPS2IOqAFmb1pU/preview"
  },
  {
    "id": "thrillers_10",
    "type": "thrillers",
    "image": "https://i0.wp.com/www.literalmenteuai.com.br/wp-content/uploads/2019/07/Capa-Capit%C3%A3es-de-Areia-Jorge-Amado.jpg",
    "description": "Capitães da Areia - Jorge Amado",
    "content": "https://drive.google.com/file/d/1IC7v3nqVOPrYC9l44yNWQsYhlspXcXWu/preview"
  },
  {
    "id": "thrillers_11",
    "type": "thrillers",
    "image": "https://www2.unicentro.br/pet-letras/files/2017/08/livro-o-pagador-de-promessas-dias-gomes-D_NQ_NP_12458-MLB20060579811_032014-F.jpg",
    "description": "O Pagador de Promessas - Dias Gomes",
    "content": "https://drive.google.com/file/d/1oPGttw7JM1aIvTdAg3nRFfHlqnEk_P03/preview"
  },
  {
    "id": "thrillers_12",
    "type": "thrillers",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Capa_de_Macuna%C3%ADma_2.jpg",
    "description": "Macunaíma - Mário de Andrade",
    "content": "https://drive.google.com/file/d/1dYlqKE84fDfRSzkk2nvt5D2olLOYa7VB/preview"
  }
]


var romancesObject = [
  {
    "id": "romances_0",
    "type": "romances",
    "image": "https://m.media-amazon.com/images/I/815fFEIezPS._AC_UF1000,1000_QL80_.jpg",
    "description": "O Tronco do Ipu - José de Alencar",
    "content": "https://drive.google.com/file/d/1qrVz6hqAgB7u-u9sgqB1rVrIkERu04HC/preview"
  },
  {
    "id": "romances_1",
    "type": "romances",
    "content": "https://drive.google.com/file/d/1nWpdrfL34DkhUsJNA4hUWG8ZvCvfrytb/preview",
    "image": "https://m.media-amazon.com/images/I/61LJdgskqDL._AC_UF1000,1000_QL80_.jpg",
    "description": "Canaã - Graça Aranha"
  },
  {
    "id": "romances_2",
    "type": "romances",
    "content": "https://drive.google.com/file/d/1ftfepgbeX2gpvn4w7FILizn1KWInXL1j/preview",
    "image": "https://www.livrariasfamiliacrista.com.br/media/catalog/product/cache/1/image/800x/56819907b1c49a4bc751319b3fccb0da/O/_/O_seminarista_Bernardo_Guimar_es.jpg",
    "description": "O Seminarista - Bernardo Guimarães"
  },
  {
    "id": "romances_3",
    "type": "romances",
    "content": "https://drive.google.com/file/d/1crxRFRflB3tUBWXPGiyG07RjWyzttX2K/preview",
    "image": "https://www.lpm.com.br/livros/imagens/viuvinha__a_8525406783_hd.jpg",
    "description": "A Viuvinha - José de Alencar"
  },
  {
    "id": "romances_4",
    "type": "romances",
    "content": "https://drive.google.com/file/d/1XNDlvN72bSSe1fQ8oZy40-YULqZM8lN3/preview",
    "image": "https://m.media-amazon.com/images/I/71J5Ax4eNwL._AC_UF1000,1000_QL80_.jpg",
    "description": "O Feijão e o Sonho - Orígenes Lessa"
  },
  {
    "id": "romances_5",
    "type": "romances",
    "content": "https://drive.google.com/file/d/1z7fSDFaVcvIYyTtVALP9G8PcofpcSW-C/preview",
    "image": "https://m.media-amazon.com/images/I/71EaSl8j-fL._AC_UF1000,1000_QL80_.jpg",
    "description": "A Normalista - Adolfo Caminha"
  },
  {
    "id": "romances_6",
    "type": "romances",
    "content": "https://drive.google.com/file/d/1c3SPPaSTqHZtNXK9_6rDwpLUTGH6KQFP/preview",
    "image": "https://m.media-amazon.com/images/I/416kvH9DHVL.jpg",
    "description": "Clara dos Anjos - Lima Barreto"
  },
  {
    "id": "romances_7",
    "type": "romances",
    "content": "https://drive.google.com/file/d/1JdFYI2f6PoRajGsPZn-Mn0mAYJh37pN1/preview",
    "image": "https://cdn.record.com.br/wp-content/uploads/2020/08/25160224/12637.jpeg",
    "description": "O Amor nos Tempos do Cólera - Gabriel García Márquez"
  },
  {
    "id": "romances_8",
    "type": "romances",
    "content": "https://drive.google.com/file/d/1MYWQPLdlpHO9NyzQ4WWZ_zzP8st3GI_I/preview",
    "image": "https://www.lpm.com.br/livros/imagens/til_9788525426604_9788525426192_hd.jpg",
    "description": "Til - José de Alencar"
  },
  {
    "id": "romances_9",
    "type": "romances",
    "content": "https://drive.google.com/file/d/1PR6kQX2GZtYge057iN-W7DKEZCwMWlci/preview",
    "image": "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535930399/historia-do-cerco-de-lisboa-nova-edicao.jpg",
    "description": "História do Cerco de Lisboa - José Saramago"
  },
  {
    "id": "romances_10",
    "type": "romances",
    "content": "https://drive.google.com/file/d/1ZoqNGgjH0qAe3y-h7hk4L-t9__b4h35j/preview",
    "image": "https://imagens.disal.com.br/produtos/ampliada/1705962.jpg",
    "description": "Viva o Povo Brasileiro - João Ubaldo Ribeiro"
  },
  {
    "id": "romances_11",
    "type": "romances",
    "content": "https://drive.google.com/file/d/1bvgmSciBCmz6ZRl2eC3k6o9_SyE0AtFt/preview",
    "image": "https://m.media-amazon.com/images/I/61Kt3d+mhuL._AC_UF1000,1000_QL80_.jpg",
    "description": "Quincas Borba - Machado de Assis"
  },
  {
    "id": "romances_12",
    "type": "romances",
    "content": "https://drive.google.com/file/d/1TB58qQfIBaGnGVPr2I7w1EH0Xv3OTgNd/preview",
    "image": "https://m.media-amazon.com/images/I/81638ovsB3L._AC_UF1000,1000_QL80_.jpg",
    "description": "A Luneta Mágica - Joaquim Manuel de Macedo"
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

  for (var i = 0; i < horrorsObject.length; i++) {
    if (horrorsObject[i].id === parentId) {
      src_iframe = horrorsObject[i].content;
      break;  // Para o loop após encontrar a correspondência
    }
  }

  for (var i = 0; i < thrillersObject.length; i++) {
    if (thrillersObject[i].id === parentId) {
      src_iframe = thrillersObject[i].content;
      break;  // Para o loop após encontrar a correspondência
    }
  }

  for (var i = 0; i < romancesObject.length; i++) {
    if (romancesObject[i].id === parentId) {
      src_iframe = romancesObject[i].content;
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

  scroll(0, 1);
  
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