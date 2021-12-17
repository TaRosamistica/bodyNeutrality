
 ![Logo Body Neutrality](assets/logoprojetofinal.png)
## **Projeto Final** 

</h1>

 #### Catálogo de profissionais de saúde não gordofóbicos

 #### Status: Em construção 🚧

## **Sumário**: 
- Apresentação e contextualização
- Tecnologias e pacotes
- Funcionalidades da aplicação
- Arquitetura
- Instalação
- Features e rotas
- Collection
- Implementações futuras
- Referências 

## **Apresentação e contextualização**

<p align="justify"> O projeto “Body neutrality” é uma API que tem por objetivo reunir profissionais de saúde que possuem uma abordagem de atendimento não gordofóbica, enxergando o paciente enquanto um ser completo e não apenas identificando o peso e a forma do corpo enquanto um indicativo de saúde.</p>
<p align="justify"> Historicamente, às pessoas gordas é negado o direito à vida social, ao afeto, ao lazer e o mais danoso de todos, o acesso à saúde. Muitos profissionais de saúde ao examinarem pacientes gordos, independente de qual seja sua área de especialidade, trazema questão do peso corporal como causa raiz de qualquer problema. São inúmeros os relatos de pessoas gordas com problemas reais de saúde que tiveram seus corpos negligenciados por falta de atenção e disposição dos médicos em investigar as verdadeiras causas de seu adoecimento. Tal pressão estética, atinge também pessoas não gordas. A busca por um padrão de beleza irreal tem causado cada vez mais insatisfação corporal, distorção de imagem e transtornos alimentares, como a anorexia nervosa, a bulimia e a compulsão alimentar. De acordo com a nutricionista Sofhie Deram, essa prática médica focada na perda de peso, e na cobrança por um estilo de vida baseado em dietas restritivas, tem  feito as pessoas sofrerem um verdadeiro terrorismo nutricional, causando uma desconexão entre o indivíduo e a saúde no geral. </p>
<p align="justify"> Pensando nessa problemática por ser uma pessoa obesa e sentir na pele os efeitos desastrosos da gordofobia médica e social, eu escolhi esse assunto como tema do meu projeto livre. Faço tratamento multidisciplinar para combater um transtorno alimentar e nessa trajetória, demorei bastante para encontrar profissionais acolhedores que buscassem entender os reais motivos dessa condição. Por causa disso, decidi construir uma API para reunir cadastros de profissionais das mais diferentes especialidades que pratiquem uma abordagem não gordofóbica, conectando usuários a esses profissionais. O título do projeto “Body Neutrality” faz referência a um movimento de mesmo nome  que surgiu nas redes sociais em meados de 2015, e consiste numa vertente do movimento “Body Positive” (que surgiu nos EUA na década de 1970) e tem como objetivo pregar a aceitação e o amor ao corpo do jeito que ele é.</p> 
<p align="justify"> A vertente “Body Neutrality” abrange aquelas pessoas que não se sentem satisfeitas com seu corpo, porém, buscam ter uma visão mais neutra, focando menos no formato do corpo e mais no que ele pode oferecer. Os profissionais que praticam uma abordagem neutra, enxergam o peso com neutralidade, focando nos hábitos e comportamentos da pessoa, considerando a saúde como um todo, pois, defendem que, dando atenção às outras áreas, as chances da pessoa cuidar melhor do próprio corpo são maiores e assim um peso saudável e a saúde geral acaba vindo como consequência.</p> 
<p align="justify"> Assim, o  “‘Body Neutrality” é um projeto de conclusão do bootcamp de Back-End oferecido pelo {Reprograma} sob supervisão da professora Paula Allemand,  e consiste na criação de uma aplicação para cadastrar profissionais a fim de pôr em prática os conceitos aprendidos acerca da construção de uma API Rest que contém um CRUD completo em conexão com o banco de dados (MongoDb utilizando o Mongoose), onde é possível listar todos os profissionais cadastrados, buscar cadastro de um profissional por id, cadastrar novos profissionais, atualizar dados e também deletar um cadastro.</p> 


## ⚙️ Funcionalidades da aplicação

- Cadastro de profissionais da saúde de abordagem não gordofóbica;
- Lista de todos os profissionais cadastrados;
- Busca de profissionais cadastrados por id;
- Atualização de cadastro de profissionais;
- Remoção de cadastro de profissionais.


<br>

---
 ## 🛠Tecnologias
Para a construção do projeto, usamos as seguintes tecnologias:

- JavaScript
- Git/Github
- Node.js
- MongoDB Atlas
- Postman
- VsCode
- Heroku
---

 ## Bibliotecas 
 <br>
 express
- npm
- cors
- nodemon
- mongoose
- dotenv

<br>

## **Arquitetura MVC** 
Arquitetura padrão da API:
```
  📁 bodyNeutrality
   |
   |-  📁 assets
   |    |- 📑 logoprojetofinal.png
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 cadastroController.js
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |    |- 📁 models
   |         |- 📑 cadastroSchema.js
   |    |- 📁 routes
   |         |- 📑 cadastroRoutes.js 
   |
   |    |- 📑 app.js
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile  
   |- 📑 README.md
   |- 📑 server.js


```
<br>

## ⚙️Instalação 
Para realizar a instação do projeto, siga esse passo a passo:

No terminal do Git Bash, clone o projeto

> git clone https://github.com/TaRosamistica/bodyNeutrality.git

Entre na pasta do projeto:

> cd  bodyNeutrality

Instale todas as dependências 

> npm install 

Na pasta raiz do projeto renomeie .env.exemple para .env e adicione as variáveis PORT (porta sugerida 8090), e MONGODB_URL (string de conexão com o banco de dados). 

No terminal do Git Bash execute o servidor

> npm start

 O servidor iniciará e exibirá a seguinte mensagem: 
 
 > Servidor rodando na porta: PORT

 > Banco conectado (:

<br>

## ⚙️ Features e Rotas 
<br>

## Porta

* Local: http://localhost:8090 
* Heroku: https://bodyneutrality.herokuapp.com/

Utilize o **Postman**  para chamar e testar os endpoints da API localmente

 <br>



## Manipulando rotas

| Descrição | Método | Endpoint |
|---------|--------|------|
| Retorna todos os profissionais cadastros  | GET | `/all`|
| Filtro de cadastros por id | GET | `/:id` |
| Cria/cadastra um novo profissional| POST | `/create`|
| Altera informações de um cadastro | PUT | `/update/:id`|
| Remove um cadastro específico | DELETE | `/delete/:id`|


##  Collection

✅ Dados para a collection: 

- id: gerado automaticamente 
- nome: texto e obrigatório
- categoria: texto e obrigatório
- registro: texto e obrigatório
- especialidade: texto e obrigatório
- estado: texto e obrigatório
- cidade: texto e obrigatório
- telefone: texto e obrigatório
- email: texto e obrigatório
- atendimentoOnline: boolean e obrigatório
- atendimentoSocial: boolean e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

✅ A API deve retornar o seguinte Json:

```
        {
            "_id": "61ba4bcd7e4d054b600d6f08",
            "nome": "Max Vinicíus",
            "categoria": "Nutricionista",
            "registro": "12365",
            "especialidade": "Nutrição",
            "estado": "Paraíba",
            "cidade": "Campina Grande",
            "telefone": "33333333",
            "email": "max@gmail.com",
            "atendimentoOnline": true,
            "atendimentoSocial": true,
            "criadoEm": "2021-12-15T19:22:49.977Z",
            "__v": 0
        }
```

## 🚧 Implementações Futuras

- Criação de novas rotas organizando os profissionais cadastrados por especialidade;
- Criar documentação no swagger;
- Criar sistema de login;
- Autenticação das Rotas;
- Refatoração do código. 



<br>

## Referências
 
[Análise das diretrizes brasileiras de obesidade: patologização do corpo gordo, abordagem focada na perda de peso e gordofobia](https://www.scielosp.org/article/sausoc/2020.v29n1/e190227/pt/)

[C.A.S.A Sofhie - Centro de aconselhamento em saúde alimentar](https://www.ocasasophie.com.br/)

[Projeto - Saúde sem Gordofobia](https://www.instagram.com/saudesemgordofobia/)

[Nem Amar nem Odiar: aprenda a aceitar seu corpo como ele é](https://nutricaosemneura.blogosfera.uol.com.br/2018/11/21/nem-amar-nem-odiar-aprenda-a-aceitar-seu-corpo-como-ele-e/) 

[*Imagem original da Logo do projeto](https://miro.medium.com/max/700/1*FLHOTx36AV5lKm4TZjf8YA.jpeg)

Inspiração do Readme:

[Estante de histórias - Elizabete Alves](https://github.com/elisabetealves/reprograma-estante-de-historias)

[ Pretitudes: ocupação preta na política - Priscila Estevão](https://github.com/priscilaestevao/pretitudes-project-reprograma)

___

Criado por [Talita Rosa](https://github.com/TaRosamistica) com o apoio das professoras e monitoras do [{Reprograma}]( https://reprograma.com.br/), do meu amor [Monica Santana](https://www.linkedin.com/in/monica-sc/), e colaboração de minhas colegas de turma (On14) a quem tenho toda gratidão, admiração e carinho ❤️ 

[Linkedin](linkedin.com/in/talitarosamistica)