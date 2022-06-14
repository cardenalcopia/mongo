const mongoose = require("mongoose")
const { stringify } = require("querystring")

const UserSchema = new mongoose.Schema({
    login:{
        type:String,
        enum:["Rober","rober"]
    },
    password:{
        type:String,
        validate:[
            function(password)
            {
                return password.lenght>=5;
            },
            "Password muy corto"
        ],
        select:false
    }
    
})
module.exports=mongoose.model("User",UserSchema)