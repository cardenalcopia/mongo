const {Schema,model }= require("mongoose")

const FotoSchema = new Schema(
    {
        name:String,
        url:String,
        title:String,
        descrip:String

    }
)
module.exports= model("Foto",FotoSchema,"Foto")