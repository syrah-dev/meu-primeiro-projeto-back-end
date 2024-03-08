const express = require ('express')

const router = express.Router()
const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: 'Suêyla Adriele',
    imagem: 'https://media.licdn.com/dms/image/C4E03AQGxNi3MT3pt_Q/profile-displayphoto-shrink_200_200/0/1528563954079?e=2147483647&v=beta&t=YL6r3Q3obmCRC06ckx_B6E3ec-656TwUwq35S9DdY5Q',
    minibio:'Desenvolvedora backend'
}) 

}
function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)