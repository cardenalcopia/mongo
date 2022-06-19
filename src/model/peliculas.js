const {Schema,model}= require("mongoose")
const peliSchema = new Schema({
    title:String,
    actors:[String],
    directors:[String],
    guionistas:[String],
    year:Number,
    productor:String
})
module.exports= model("Peli",peliSchema,"peli")