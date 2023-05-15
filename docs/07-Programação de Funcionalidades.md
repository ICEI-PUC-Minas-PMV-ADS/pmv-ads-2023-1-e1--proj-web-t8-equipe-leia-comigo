# Programação de Funcionalidades

# 1.0 Home page 
![](/docs/img/homePage.png)

Nesta página, tela principal do sistema,  o usuário poderá visualizar conteúdos diversos.  A estrutura de dados é toda baseada no modelo JSON.

## 1.1 Requisitios atendidos
- RF-01 O site deve apresentar na página principal uma seleção dinâmica de livros de domínio público obtidos por meio de canais de informações da Internet (API).
- RF-02 O site deve apresentar, para cada livro, uma imagem correspondente à capa do livro apresentado (thumbnail).
- RF-05 O site deve apresentar, para cada livro, uma imagem correspondente à capa do livro apresentado (thumbnail).

## 1.2 Artefatos da funcionalidade
- index.html
- style.css

## 1.3 Estrutura de dados

```javascript
{
    "livros": {
        "id": 1,
        "titulo": "O mágico de oz",
        "lancamento": "01-01-2021",
        "autor": "L Frank Baum"
    }
}
```

## 1.4 Instruções de acesso
Abra um navegador de internet e informe a seguinte URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1--proj-web-t8-equipe-leia-comigo/blob/main/src/index.html