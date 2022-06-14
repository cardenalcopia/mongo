const mongoose = require("mongoose")
const { stringify } = require("querystring")

const UserSchema = new mongoose.Schema({
    login:{
        type:String,
        enum:["Rober","rober"]
    },
    password:{
        type:String,
       
    }
    
})
module.exports=mongoose.model("User",UserSchema)

// UserSchema.pre('save', function(next)
// {
//     console.log("Middelewarer de entrada");
//     if(this.login == "rober")
//     {
//         console.log("HOLA ROBERTO")
//         next();
//     }
//     else{
//         console.log("TU QUIEN ERES , TARANTULA?")
//         next();
//     }

// })