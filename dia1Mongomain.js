let mongoose= require("mongoose")
let User= require("./dia1Mongo")
let Profile= require("./dia1Mongo2")
let Credentials = require("./dia1Mongo3")

mongoose.connect('mongodb+srv://cardenalcopia:cardenalcopia1.@cluster0.jcewvdc.mongodb.net/test',{useNewUrlParser:false, useUnifiedTopology:false})
let userDocument = new User({
    login:"carlos",
    password:"cardenalcopia"
});
userDocument.save(checkRespuesta)

let profileDocument = new Profile({
    name:"Roberto",
    surname:"Rodriguez",
    dateOfBirth:1800,
    comments:"el mejor",
    rol:"admin"
});
profileDocument.save(checkRespuesta)
let credentialDocument= new Credentials({
    address:"madrid",
    phone:1111,
    email:"cardenal@copia.com"
});
credentialDocument.save(checkRespuesta)
function checkRespuesta(err,res)
{
    if (err){
        console.log("Error"+err)
    }else{
        console.log ("Documento guardado")
        mongoose.disconnect();
    }
}