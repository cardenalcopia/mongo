const mongoose = require("mongoose")
const profileSchema = new mongoose.Schema({
    name:String,
    surname:String,
    dateOfBirth:{
        type:Number,
        min:1900,
        max:2022
    },
    comments:String,
    rol:String

})
module.exports=mongoose.model("Profile",profileSchema);
