# cefet-web-geiser

Um mostruário de algumas pessoas que ficam fritando seus PCs. Há uma página que mostra essas pessoas e outra com detalhes sobre o que elas andam fazendo com seus computadores.

## Atividade

Você deve criar duas páginas dinâmicas usando Node.js e Express.js.

### Exercício 0

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

### Exercício 1

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

### Exercício 2

Vide slides: [12](http://fegemo.github.io/cefet-web/classes/ssn4/#12).

### Exercício 3

Vide slides: [16](http://fegemo.github.io/cefet-web/classes/ssn4/#16).
