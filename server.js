const express = require ('express')
const initDB = require('./config/db')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const userRouters = require('./app/routes/user')

/*que nos codifique si viene en json */
app.use(
    bodyParser.json({
        limit: '20mb'
    })
)
/*que nos codifique si viene con el encabezado de fonts url(algo asi ) */
app.use(
    bodyParser.urlencoded({
        limit:'20mb',
        extended:true
    })
)

app.use(userRouters)

/*borramos esto por que le decimos que va a usar este modulo exportado  */
// app.get ('/',(req,res) => {
//     res.send ({
//         data:'hola mundo'
//     })
// })

app.listen(port,() => { 
    console.log('la aplicacion esta en linea')
})

initDB()
