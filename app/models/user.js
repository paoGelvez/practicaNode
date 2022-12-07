/*un modelo es la estructura de datos que va atenert nuestra base de datos, una coleccion debe tener establecido un modelo es decir un esquema  */

const mongoose = require ('mongoose')

const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        avatar:{
            type:String,
            default:'http://image.com'
        },
        email:{
            type:String,
            unique:true,
            required:true
        }

    }

)

module.exports = mongoose.model('user',UserScheme )