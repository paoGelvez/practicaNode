const model = require('../models/user')



/*exportamos esta funcion y lo que hacemos es unir esto a la ruta de user la funcion la unimos en el archivo routes asi : const controller = require('../contollers/user') */

/*obtener datos del usuario */
exports.getData = (req,res)=>{
    /*lo que hacemos en decirle a nuestro modelo (el modelo que exportamos*) que porfavor vaya y busque en la coleccion  y nos devuelva si es error o si tiene datos  */
    model.find({},(err,docs)=>{
        res.send({
            docs
        })
    })
}


/*insertar datos del usuario */

/*para insertar valores a traves de una peticion post lo primero que se debe hacer es instalar un paquete que se llama body-parser : npm i body-parser 
2) despues de esto vamos al archivo principal y importamos el bodyParser*/

exports.insertData = (req,res) =>{
    
}