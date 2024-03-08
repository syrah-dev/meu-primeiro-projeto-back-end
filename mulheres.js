const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Suêyla Adriele',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQGxNi3MT3pt_Q/profile-displayphoto-shrink_200_200/0/1528563954079?e=2147483647&v=beta&t=YL6r3Q3obmCRC06ckx_B6E3ec-656TwUwq35S9DdY5Q',
        minibio: 'Desenvolvedora backend'

    
    },
    {
        nome:'Natiele Araújo',
        imagem:'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/421155420_370124012574557_7762767028429204336_n.jpg?ccb=11-4&oh=01_AdRRPjcdSZ9siMvvDHbBtBXam5rQJyFDew8fuzNNIkxQHw&oe=65F56972&_nc_sid=e6ed6c&_nc_cat=102',
        minibio:'Desenvolvedora frontend'
    }
]




function mostraMulheres(requeste, response) {
response.json(mulheres)

}
function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)

}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)