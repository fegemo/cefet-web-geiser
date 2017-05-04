# cefet-web-geiser

Um mostruário de algumas pessoas que ficam fritando seus PCs. Há uma página que mostra essas pessoas e outra com detalhes sobre o que elas andam fazendo com seus computadores.

## Atividade

Você deve criar duas páginas dinâmicas usando Node.js e Express.js.

### Exercício 0: Configuração do Projeto

Você deve criar um arquivo `package.json` para caracterizar a pasta como um pacote Node.js.

Para tal, você pode pedir auxílio ao npm. Após clonar seu _fork_, abra o terminal na pasta e:

```
$ npm init
```

Nesse momento, o npm fará perguntas no termianl para alguns parâmetros descritivos do seu pacote. Ao digitar os valores e concluir a operação, um arquivo `package.json` terá surgido na pasta.

Depois, você deve instalar algumas dependências:

1. express (`npm install express --save`)
1. underscore (`npm install underscore --save`)
1. hbs (`npm install hbs --save`) - para handlebars, mas pode ser qualquer outro _templating engine_ suportado pelo Express

**Para executar**, você pode digitar:

```
$ node server/app.js
```

E, como o "código de entrada" do programa está nesse arquivo `app.js`, a aplicação será iniciada.

Contudo, repare que o arquivo `server/app.js` ainda não está fazendo nada de útil.

### Exercício 1: Arquivos Estáticos

Você deve agora abrir um servidor na porta 3000, configurado para servir estaticamente todos os arquivos da pasta `client/`.

Repare que o projeto já tem uma estrutura de diretórios e alguns arquivos criados:

1. Pasta `client/` com arquivos estáticos (`css/`, `.html`)
   - Os arquivos `.exemplo.html` são aqueles que devem se tornar dinâmicos
1. Pasta `server/` com arquivos dinâmicos do servidor, views etc.
   - O ponto de entrada é `server/app.js`
   - `sever/data/` contém as informações que precisamos para tornar as páginas dinâmicas em arquivos no formato JSON

Agora, modifique o arquivo `server/app.js` para ativar um servidor estático

  - o servidor deve servir os arquivos da pasta `client/`
  - Passos:
    1. Use o _middleware_ (`app.use`) `express.static(CAMINHO_PARA_PASTA)`, especificando a pasta onde estão os arquivos estáticos
    1. "Abra" o servidor e deixe-o escutando (`app.listen`) na porta 3000
    1. Teste seu servidor executando:
       ```
       $ node server/app
       ```
       - Repare que a extensão `.js` é opcional para o Node.js

**Para verificar** se o servidor estático está funcionando, acesse o endereço  http://localhost:3000/index.exemplo.html e veja se a página carregou devidamente.

### Exercício 2: Página Inicial

Neste exercício você deve criar a página `views/index.hbs` de forma que os usuários mostrados nela sejam buscados a partir do arquivo `data/jogadores.json`.

1. Instalar o _templating engine_ como uma dependência (se já não tiver feito isto)
1. [Configurar](http://expressjs.com/en/guide/using-template-engines.html) o _templating engine_
1. Carregar o arquivo `data/jogadores.json` para um objeto Javascript
   - Repare que já existe um objeto vazio na variável chamada `db` no arquivo `server/app.js`
   - Você pode carregar o arquivo de forma síncrona ou assíncrona usando o módulo _file system_ (fs)
   - Lembre-se de que o módulo _file system_ é da plataforma do Node.js, então **não é necessário instalá-lo**
   - Note que ao carregar o arquivo via `fs.readFileSync(CAMINHO)` ou `fs.readFile(CAMINHO, CALLBACK)`, o que é retornado (na chamada síncrona) ou passado como 2º argumento (na chamada assíncrona) é uma **_string_ com o conteúdo do arquivo JSON**
   - Sendo assim, é necessário desserializar essa _string_ em um objeto Javascript usando `JSON.parse(STRING)`
1. Criar uma rota do tipo `GET` ([`app.get(...)`](http://expressjs.com/starter/basic-routing.html)) para o caminho "/" (página inicial) que renderize ([`response.render(...)`](http://expressjs.com/en/4x/api.html#res.render)) a _view_ que está em `server/views/index.hbs` (ou outra extensão)
   - Repare que o argumento para a função `response.render(NOME, CONTEXTO_DE_DADOS)` é apenas o nome da _view_, sem a extensão nem a pasta


Neste momento, você pode testar no navegador se a rota e a _view_ estão sendo encontrada e renderizada acessando [http://localhost:3000/](http://localhost:3000/).

1. Agora você deve alterar a _view_ `server/views/index.hbs` (ou outra extensão) para torná-la dinâmica
   - Use os comentários no arquivo `server/views/index.hbs` para saber como mapear os campos do "banco de dados" para a _view_
   - Se estiver usando [Handlebars](http://handlebarsjs.com/), você vai precisar de:
     1. [Expressões](http://handlebarsjs.com/#getting-started)
     1. [Block `each`](http://handlebarsjs.com/builtin_helpers.html#iteration), para iterar no _array players_

Findos esses últimos passos, a página inicial deve estar igual à página em [http://geiser.herokuapp.com](http://geiser.herokuapp.com).

### Exercício 3: Página do Jogador

Siga os mesmos passos da página inicial, mas agora para a página de detalhes de um jogador:

- Rota: `/jogador/:numero_identificador/`, responde ao verbo `GET` apenas
- _View_: renderizar `server/views/jogador.hbs`
- Contexto de dados: vêm de 3 fontes diferentes
  1. De `jogadores.json`
  1. De `jogosPorJogador.json`
  1. Calculados das outras duas fontes

Veja nas imagens a seguir de onde vêm os dados para cada elemento da interface:

![](docs/geiser-jogos1.png)
![](docs/geiser-jogos1-json.png)
![](docs/geiser-jogos2.png)
![](docs/geiser-jogos2-json.png)


Mais informações vide slides: [16](http://fegemo.github.io/cefet-web/classes/ssn4/#16).
