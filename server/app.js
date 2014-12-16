var express = require('express'),
    app = express();

// carregar "banco de dados" (data/jogadores.json e data/jogosPorJogador.json)
// dica: 3-4 linhas de código (você deve usar o módulo de filesystem (fs))
var db = {
};


// configurar qual templating engine usar. Sugestão: hbs (handlebars)
//app.set('view engine', '???');


// definir rota para página inicial --> renderizar a view index, usando os
// dados do banco de dados "data/jogadores.json" com a lista de jogadores
// dica: o handler desta função é bem simples - basta passar para o template
//       os dados do arquivo data/jogadores.json

// definir rota para página de detalhes de um jogador --> renderizar a view
// jogador, usando os dados do banco de dados "data/jogadores.json" e
// "data/jogosPorJogador.json", assim como alguns campos calculados
// dica: o handler desta função pode chegar a ter umas 15 linhas de código


// configurar para servir os arquivos estáticos da pasta "client"
// dica: 1 linha de código

// abrir servidor
// dica: 1-3 linhas de código
