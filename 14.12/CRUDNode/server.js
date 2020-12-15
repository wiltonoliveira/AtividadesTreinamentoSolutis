const express = require('express')

const app = express()
const bodyparser = require('body-parse')
app.use(bodyparser.urlencoded({ extended: true}))
app.listen(3000, function(){

console.log('servidor rodando na porta 3000')
})

app.get('/', function(req, res){
    res.render('index.ejs');
});

app.set('view engine', 'ejs')

app.post('/show', function(req, res){
    console.log('Teste post...')
});

