const connection =require("../database")


const { request } = require("express");
const fotoModel = require ("../model/photos") 
function getFoto(request,response)
{
    if(request.query.id== null)
    {
      fotoModel.find({})
      .then((foto)=>
      {
        console.log (foto);
        response.send(foto);
      })
      .catch((err) =>
      {
        console.log(err);
      })

    }else {
        fotoModel.findById(request.query.id)
        .then((foto) =>
        {
            console.log(foto);
            response.send(foto);

        })
        .catch((err) =>
        {
            console.log(err);

        })
    }
}
function postFoto(request,response)
{
    console.log(request.body);
    let fotoDocument = new fotoModel({
        name:request.body.name,
        url:request.body.url,
        title:request.body.title,
        descrip:request.body.descrip
    })
    let guardado = fotoDocument.save()
    
    .then((guardado)=>
    {
        
        console.log("Foto guardada");
        console.log(guardado);
        response.send(guardado);
    })
    .catch ((error)=>
    {
        console.log(error)
    })
}
function putFoto(request,response)
{
    
fotoModel.updateOne({title:request.body.title},{descrip:request.body.descrip})
.then((foto)=>
{
    console.log("foto actualizada");
    console.log(foto);
    response.send (foto)
})
.catch((error)=>
{
    console.log(error)
})

}
function delFoto(request,response)
{
    if (request.body.title=="")
    {
       fotoModel.deleteMany({name:request.body.name}) 
       .then((foto)=>
       {
        console.log("Todas borradas");
        console.log(foto);
        response.send(foto);
       })
       .catch((error)=>
       {
        console.log(error)
       })
    }else{
        fotoModel.deleteOne({"$and":[{"name":request.body.name},{"title":request.body.title}]})
        .then((foto)=>
        {
         console.log("Una borrada");
         console.log(foto);
         response.send(foto);
        })
        .catch((error)=>
        {
         console.log(error)
        })
    }
    
}
module.exports={getFoto,postFoto,putFoto,delFoto}