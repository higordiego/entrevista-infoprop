# Entrevista de Freelancer


## O DESAFIO
-------------------------------------------------------------------------------------------------
O desenvolvedor da InfoProp será responsável pelo desenvolvimento da plataforma
web, assim como o seu banco de dados, sua API, e suas funcionalidades para
engajamento e retenção de usuários. Por isso, queremos saber como você constrói
o seu raciocínio e toma decisões na hora de desenvolver.
A aplicação que você irá construir trata-se de uma interface para receber um
arquivo em csv com imóveis anunciados e transformar os dados em um aplicação
de mapa com filtros.
Para baixar o arquivo em csv com a base de imóveis.
Se tiver qualquer dúvida, pode entrar em contato com qualquer um de nós:

Boa sorte =D


## BACK END
-------------------------------------------------------------------------------------------------
O nosso stack é feito com base em node.js e consiste em uma API REST de
comunicação e um banco de dados na AWS.
Nessa primeira parte do desafio, precisamos que você configure uma API REST e
um banco de dados que serão inseridos os dados enviados no dataset em CSV.
Campos importantes para criação da API são:

    ● logradouro
    ● numero
    ● bairro
    ● municipio
    ● estado
    ● cep
    ● lat
    ● lng
    ● tp_negocio (aluguel/venda)
    ● preco
    ● data
    
    
## Init Project
Criar uma .env com base no arquivo env-example

## Start Project
Instalar os node_modules

` yarn install`

Ter na maquina o mongodb e iniciar o mesmo.
`sudo mongod`

Dar o start no projeto 
` npm start `

## Rota Principal
A porta referente a sua configuração da env.
`http://localhost:${port}`
