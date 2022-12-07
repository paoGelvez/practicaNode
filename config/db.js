const mongoose = require('mongoose')

const DB_URI = `mongodb://localhost:27017/my_app_node`

module.exports = () =>{
    const connect = () => {
        mongoose.connect(
            DB_URI,{
                KeepAlive:true,
                useNewUrlParser:true,
                useUnifiedTopology:true

            },
            (err)=>{
                if(err){
                    console.log('DB : Error')
                }else{
                    console.log('conexion correcta')
                }
            }
        )
    }

    connect();
}