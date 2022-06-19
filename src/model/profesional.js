const {Schema,model}= require("mongoose")
const actorSchema = new Schema({
    name:String,
    age:Number,
    nationality:String,
    profession:String

})
module.exports= model("Prof",actorSchema,"Prof")