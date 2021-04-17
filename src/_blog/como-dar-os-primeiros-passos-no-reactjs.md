---
  title: 'Primeiros passos com React.js'
  date: '16-04-2021'
  formatedDate: '16 Mar 2021'
  type: 'JavaScript library'
  description: 'Como é definido pelo Facebook, React é “uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de interfaces de usuário (UI)”.'
---

Como é definido pelo Facebook, React é “uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de interfaces de usuário (UI)”.

<br />

Foi criado pelo Instagram antes de ser comprado pelo Facebook. React.js está sendo muito utilizado no mercado Frontend, e é utilizado por grandes empresas, como por exemplo: Facebook, Instagram, AirBnB, Yahoo, Discord etc.

<br />

React permite a criação de componentes encapsulados que gerenciam seus próprios estados, e quando se conectam com outros componentes, criam interfaces de usúario (UIs) complexas, com uma sintaxe declarativa e simples facilitando a manutenção do código, formando assim um dos seus maiores benefícios.

<br />
<br />

# Criando um projeto

<br />

Primeiramente, você vai precisar ter o <a target="_blank" rel="noopener oreferrer" href="https://nodejs.org/en/">Node.js</a> instalado no seu computador.

<br />

Com o Node.js já instalado, nós precisaremos executar dentro do terminal o comando abaixo:

<br />

<div class="codeContainer">
  <p><span class="blue">npx</span> create-react-app hello-world</p>

  <br />

  <p class="comment"> // Ou </p>

  <br />

  <p><span class="blue">yarn</span> create react-app hello-world &nbsp;<span class="comment">// É preciso ter o Yarn instalado</span></p>
</div>

<br />
<br />

Após a instalação, você pode executar o comando:

<br />

<div class="codeContainer">
  <p><span class="blue">npm</span> start</p>

  <br />

  <p class="comment"> // Ou </p>

  <br />

  <p><span class="blue">yarn</span> start &nbsp;<span class="comment">// É preciso ter o Yarn instalado</span></p>
</div>

<br />
<br />

Após isso, acesse no seu navegador o endereço: <a target="_blank" rel="noopener oreferrer" href="http://localhost:3000/">localhost:3000</a>, ao carrega, você verá a página de boas vindas, criada pelo próprio React.js.

<br />
<br />

# Pastas e Arquivos

<br />

- node_modules: onde estão instaladas todas as dependencias do projeto;
- public: armazena o arquivo HTML que irá renderizar a página;
- src: aqui, é aonde você irá programar a sua aplicação;
  - index.js: arquivo que vai injetar o Javascript dentro do arquivo index.html, para apresentar para o usúario;
  - App.js: esse é o arquivo que envia os componentes para o index.js.

- .gitignore: define os arquivos que serão ignorados pelo git;
- package.json: apresenta detalhes do projeto, como por exemplo: nome, descrição do projeto, versões, dependencias de desenvolvimento e de produção, etc;
- readme.md: arquivo para a descrição detalhada do projeto.

<br />
<br />

## Linpando o código

<br />

Podemos deletar todos os arquivos que estão dentro da pasta src, menos o App.js e o index.js.

<br />

No index.js delete a referência do index.css e do registerServiceWorker.

<br />

No App.js delete a referencia do logo e do app.css e todo o corpo dentro da primeira div.

<br />

Feito isso a aplicação voltará a funcionar novamente, só que agora teremos uma página em branco.

<br />
<br />

# Hello World 🖐🏼

<br />

Dentro do arquivo App.js, adicione o seguinte código, para você dar o seu primeiro e famoso "Hello World" dentro do React.js

<br />

<div class="codeContainer">

</div>
