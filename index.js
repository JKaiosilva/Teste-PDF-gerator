const pdf = require('html-pdf')


var nomeUsuario = 'Kaio'
var formacao = 'Desenvolvedor'

var conteudo = `
<h1 style="color: red">Teste 123</h1>
<hr>
<p>teste de pdf</p>
<p>Nome: ${nomeUsuario}</p>
<p>Formação: ${formacao}</p>

`


pdf.create(conteudo, {}).toFile('./meuPdf.pdf', (err, res) => {
    if(err) {
        console.log('erro:' +err)
    }else{
        console.log(res)
    }
})