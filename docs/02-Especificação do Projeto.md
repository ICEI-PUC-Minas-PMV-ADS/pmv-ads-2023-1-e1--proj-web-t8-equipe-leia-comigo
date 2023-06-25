# Especificações do Projeto

Com base em discussão realizada pelos membros da equipe e por meio da observação da necessidade dos usuários, foi consolidada a definição precisa do problema e dos pontos mais relevantes a serem abordados neste projeto. 
Os dados coletados durante esse processo foram transformados em personas e histórias de usuário para proporcionar uma compreensão mais aprofundada do público-alvo. A análise dessas informações permitiu que a equipe estabelecesse as necessidades e desejos dos usuários, bem como os requisitos do sistema a ser desenvolvido para atender às suas expectativas. A seguir, serão apresentados detalhadamente os requisitos, as funcionalidades e as restrições do software proposto

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas nas Tabelas 1, 2 e 3.


| FOTO               | INFORMAÇÕES COLETADAS                                     |                     
|--------------------|-----------------------------------------------------------|
|![Laura Carvalho ](/docs//img/personasLaura.jpg)|**Laura Carvalho** <br><br> **Idade:** 12 anos |
| | **Ocupação:** Estudante do ensino fundamental.|
| | **Motivações:**  Laura adora assistir filmes e séries, mas tem dificuldade em encontrar livros que a interessem. Ela quer se sentir mais engajada com a leitura e aprender mais sobre o mundo..|
| | **Frustrações:** Laura acha os livros de literatura antigos e chatos, e não sabe como escolher livros que a interessem. Ela se sente desanimada ao ler livros que não são do seu interesse e quer uma forma mais visual e interativa de descobrir novas obras.|
| | **_Hobbies_, História:** Assistir filmes e séries, jogar videogames e conversar com os amigos..|



| FOTO               | INFORMAÇÕES COLETADAS                                     |                     
|--------------------|-----------------------------------------------------------|
|![Lucas Gomes ](/docs//img/personasLucas.jpg)|**Lucas Gomes** <br><br> **Idade:** 17 anos |
| | **Ocupação:** Estudante do ensino médio.|
| | **Motivações:** Lucas sabe que a leitura é fundamental para seu desenvolvimento intelectual, mas tem dificuldade em encontrar tempo para ler livros de literatura. Ele quer se sentir mais motivado a ler e descobrir novas obras..|
| | **Frustrações:** Lucas acha que os livros são muito longos e cansativos, e muitas vezes acaba desistindo de ler no meio do caminho. Ele quer uma forma mais acessível e visualmente atraente de descobrir novas obras..|
| | **_Hobbies_, História:** Jogar videogames, assistir filmes e séries, tocar violão e estudar para o vestibular..|




| FOTO               | INFORMAÇÕES COLETADAS                                     |                     
|--------------------|-----------------------------------------------------------|
|![José Nascimento ](/docs//img/personasJose.jpg)|**José Nascimento** <br><br> **Idade:** 40 anos |
| | **Ocupação:** Administrador.|
| | **Motivações:** José tem vontade de dedicar mais tempo para a leitura, mas as obrigações do dia a dia, a falta de tempo dificulta o desenvolvimento da leitura, sem deixar de mencionar a dificuldade em encontrar bons livros que a interessem..|
| | **Frustrações:** José acha que é difícil de se concentrar e se dedicar um tempo livre a leitura, e isso gera frustrações pois sabe que com a leitura pode se aprimorar cada vez mais seu intelecto. Precisa criar espaço e tempo para isso e criar uma lista de livros que o atraem, assim criando hábitos de leitura..|
| | **_Hobbies_, História:** JAndar de bicicleta, jogar jogos de tabuleiro..|


  
## Histórias de Usuários
A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.



|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Laura Carvalho      |Visualizar livros de meu interesse particular de uma forma mais interativa           |Descobrir novas obras e adquirir conhecimento a partir delas|
|Lucas Gomes         |Desenvolver meu nível intelectual de uma forma mais acessível e aumentar meu interesse na literatura|Para adquirir conhecimento e desenvolver meu nível intelectual e também me sentir mais motivado.|
|José Nascimento     |Me dedicar mais tempo a literatura mesmo tendo pouco tempo|Quero desenvolver o hábito da leitura em meu cotidiano


O escopo funcional do projeto é definido pelos requisitos funcionais que descrevem as possibilidades de interação dos usuários, bem como pelos requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. A seguir, apresentamos esses requisitos para guiar a construção do sistema.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O site deve apresentar na página principal uma seleção dinâmica de livros de domínio público obtidos por meio de canais de informações da Internet (API). | ALTA | 
|RF-02| O site deve apresentar, para cada livro, uma imagem correspondente à capa do livro apresentado (thumbnail).   | MÉDIA |
|RF-03| O site deve permitir ao usuário visualizar todas as informações detalhadas sobre o livro, como autor, ano de publicação e sinopse completa.  | MÉDIA |
|RF-04| O site deve oferecer um menu adicional que permita ao usuário visualizar podcasts sobre livros, além de resenhas e análises literárias.      | MÉDIA |
|RF-05| O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar um livro específico, um podcast ou uma resenha, que serão informados na caixa de pesquisa.   | ALTA |
|RF-06| O site deve permitir visualizar as informações de contatos do mantenedor do site, bem como a seção "Sobre Nós" para uma descrição mais detalhada do site e sua missão.   | MÉDIA |
|RF-07| O site deve permitir o compartilhamento de livros e podcasts visualizados em plataformas de redes sociais.  | MÉDIA |
|RF-08| O site deve permitir que os usuários salvem os livros lidos, os podcasts assistidos e as resenhas favoritas, armazenando essas informações no armazenamento local do navegador.   | MÉDIA |
|RF-09| O site deve permitir verificar os livros salvos, podcasts e resenhas para que os usuários possam acompanhar suas atividades e recomendações personalizadas. | MÉDIA |
|RF-10| O site deve permitir que os usuários possam comentar sobre os livros, podcasts e resenhas, para compartilhar suas opiniões e sugestões com outros usuários. | MÉDIA |
|RF-11| O site deve exibir os comentários registrados juntamente com o livro, o podcast ou a resenha exibido. | MÉDIA |
|RF-12| Todas as telas devem apresentar uma lista de conteúdo correspondente para cada págnina, como livros, artigos, reviews, etc. |ALTA| 
|RF-13| O site deve apresentar um fluxo de login com telas, e lógica pra registrar e deslogar| ALTA|

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01 | O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku);  | ALTA | 
|RNF-02 | O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  ALTA | 
|RNF-03 | O site deve ter bom nível de contraste entre os elementos da tela em conformidade | MÉDIA|
|RNF-04 | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) | ALTA|


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-O1| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 25/06/2023. |
|RE-02| O aplicativo deve se restringir às tecnologias básicas da web Frontend      |
|RE-03| A equipe não pode subcontratar o desenvolvimento do trabalho.
