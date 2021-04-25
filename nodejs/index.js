const express = require('express')
const exepress = require('express')
const app = express()
const port = 3000

var db=require('./database');



app.get('/', function(req, res, next) {
    var resposta = "<div style='text-align: center;'> <h1>FullCyle PFA Desafio 1</h1>"

        resposta += " <br>"
        resposta += " <br>"

    var sql='SELECT * FROM modulos_curso';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    var tabela = "<table align='center'> <tr style='text-align: center;font-weight: bold;font-size: larger;'> <td> Modulos </td> </tr>";
    data.forEach(element => {
        tabela +=  "<tr> <td>" + element.nome + "</td> </tr>";    
    });

    tabela +=  "</table> </div>";
    resposta += tabela;
    res.send(resposta);
    //res.send(fields);
  });

  
});

/*
app.get('/', (rqe,res) => {
    
    res.append('<h1>FullCyle PFA Desafio 1</h1>')
    //res.send('<h1>FullCyle PFA Desafio 1</h1>')
    
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT nome FROM modulos_curso", function (err, result, fields) {
          if (err) throw err;
          res.append(result);
        });
      });

      res.end()

    
})
*/


app.listen(port , () => {
    console.log('Rodando na porta ' + port)
})

