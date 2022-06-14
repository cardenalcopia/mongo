const mongoose = require("mongoose")
const photeSchema = new mongoose.Schema({
    name:String,
    url:String,
    title:String,
    descrip:String
})
module.exports=mongoose.model("Photo",photeSchema);
