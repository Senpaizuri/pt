const
    express = require('express'),
    app = express(),
    http= require('http').Server(app),
    ejs = require('ejs'),
    fetch = require('node-fetch'),
    port = process.env.PORT || 3000

    app.use(express.static('src'))
    app.set('view engine','ejs')

    app.get('/',(req,res)=>{
        res.status(200).render('base/index.ejs')
    })

    http.listen(port,()=>{
        console.log(`Running @ localhost:${port}`)
    })