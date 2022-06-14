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
profileSchema.pre('save', function(next)
{
    console.log("Middelewarer de entrada");
    if(this.dateOfBirth == 1985)
    {
        console.log("HOLA ROBERTO")
        next();
    }
    else{
        console.log("TU QUIEN ERES , TARANTULA?")
        next();
    }

})