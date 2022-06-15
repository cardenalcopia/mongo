let mongoose= require("mongoose")
let Photo = require("./dia2Mongo")
mongoose.connect('mongodb+srv://cardenalcopia:cardenalcopia1.@cluster0.jcewvdc.mongodb.net/test',{useNewUrlParser:false, useUnifiedTopology:false})
let photoDocument = new Photo({
    name:"tyler",
    url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.etsystatic.com%2F14392680%2Fr%2Fil%2F84f51c%2F1325571098%2Fil_fullxfull.1325571098_p21w.jpg&imgrefurl=https%3A%2F%2Fwww.etsy.com%2Fes%2Flisting%2F551449620%2Filustracion-del-club-de-lucha-de-tyler&tbnid=fb6qyqGdNZxCdM&vet=12ahUKEwiW06uzkK34AhUXhc4BHcN5AucQMygBegUIARDoAQ..i&docid=z7jXjxmZ_ej9RM&w=1500&h=1000&q=tyler%20durden&ved=2ahUKEwiW06uzkK34AhUXhc4BHcN5AucQMygBegUIARDoAQ",
    title:"Durden",
    descrip:"Fight Club"
});
photoDocument.save(checkRespuesta);

function checkRespuesta(err,res)
{
    if (err){
        console.log("Error"+err)
    }else{
        console.log ("Documento guardado")
        mongoose.disconnect();
    }
}
// function subida(usuario,url,titulo,des)
// {
//     let miSubida = new Photo({
//         name:usuario,
//         url:url,
//         title:titulo,
//         descrip:des

//     })
//     miSubida.save(checkRespuesta)
    
// }
// subida("Alex","alex,jfif","Naranja","Mecánica")
// function obtener(usuario)
// {
//     Photo.find({name:usuario},
//         function(err,user)
//         {
//             if (err){
//                 console.log ("Error")
//             }else{
//                 console.log(user);
//             }
//         })
// }
// obtener("tyler");
// function modificar (titulo,des)
// {
//     Photo.updateOne({title:titulo},{descrip:des},checkRespuesta)
// }
// modificar("Durden","El club de la lucha")
function borraruno(usuario)
{
    Photo.deleteOne({name : usuario},
        function(err)

        {
            if (err){
                console.log("Error")
            }else{
                console.log("Elemento borrado");
                mongoose.disconnect();
            }
            
        })
}
// borraruno("Alex")
function borraruno2(usuario,titulo)
{
    Photo.deleteOne({"$and":[{"name": usuario},{"title":titulo}] },
        function(err)

        {
            if (err){
                console.log("Error")
            }else{
                console.log("Elemento borrado");
                mongoose.disconnect();
            }
            
        })
}
borraruno2("tyler","Durden" )

