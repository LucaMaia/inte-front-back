const express = require('express');
const cors = require('cors');
const app = express();
const Home = require('./models/Home')

app.use(cors());

app.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next();
});

app.get('/', async(req,res) => {
    return res.json({
        erro: false,
        datahome: {
            text_one:"Exemplo 123",
            text_two:"Exemplo 2",
            text_three:"Exemplo 3",
            btn_title: "",
            btn_link: ""
        }
    })
})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
})
