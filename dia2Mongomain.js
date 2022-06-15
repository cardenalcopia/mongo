let Photo = require("./dia2Mongo")

function checkRespuesta(err,res)
{
    if (err){
        console.log("Error"+err)
    }else{
        console.log ("Documento guardado")
        mongoose.disconnect();
    }
}