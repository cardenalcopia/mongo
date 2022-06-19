const connection =require("../database")
const { request } = require("express");
const profModel = require("../model/profesional")
const peliModel = require("../model/peliculas")

function getProf (request,response){
    if (request.query._id ==null)
    {
        let mostrar = profModel.find ({})
        .then ((mostrar) =>
        {
           
            console.log(mostrar);
            response.send(mostrar);
        })
        .catch((err) =>
        {
            console.log(err);
        })
    }else{
        let mostrarId = profModel.findById(request.query._id)
        .then((mostrarId)=>
        {
          
            console.log(mostrarId);
            response.send(mostrarId);
        })
        .catch((err) =>
        {
            console.log(err)
        })
    }
}
function postProf(request, response)
{
console.log(request.body);
let profDocument = new profModel({
    name:request.body.name,
    age:request.body.age,
    nationality:request.body.nationality,
    profession:request.body.profession
})
let guardado = profDocument.save()
.then ((guardado) =>
{
    console.log("Profesional añadido");
    console.log(guardado);
    response.send(guardado);
})
.catch((err) =>
{
    console.log (err)
})
}
function putProf(request,response)
{
    if ( request.body._id!=null)
    {
      let actualizar =   profModel.updateOne({_id:request.body._id},
                            {name:request.body.name,
                            age:request.body.age,
                            nationality:request.body.nationality,
                            profession:request.body.profession})
        .then((actualizar) =>
        {
            console.log("Profesional actualizdo");
            console.log(actualizar);
            response.send(actualizar)
        })
        .catch((err) =>
        {
            console.log(err)
        })
    }else{
        console.log ("Introduce un id valido")
    }
}
function delProf(request,response)
{
    if ( request.body.id != "")
    {
        profModel.deleteOne({id:request.body.id})
        .then((prof)=> 
        {
            console.log("Profesional borrado");
            console.log(prof);
            response.send(prof);
        })
        .catch((err)=>
        {
            console.log(err);
        })
    }else{
        console.log("Introduce un valor de id válido")

    }
}
function getPeli()
{
    if (request.query._id ==null)
    {
        let mostrar = peliModel.find ({})
        .then ((mostrar) =>
        {
           
            console.log(mostrar);
            response.send(mostrar);
        })
        .catch((err) =>
        {
            console.log(err);
        })
    }else{
        let mostrarId = peliModel.findById(request.query._id)
        .then((mostrarId)=>
        {
          
            console.log(mostrarId);
            response.send(mostrarId);
        })
        .catch((err) =>
        {
            console.log(err)
        })
    }
}
function getPeliactor(request,response)
{
    if (request.query._id !=null)
    {
       let mostrarId = peliModel.findById(request.query._id)
        .then((mostrarId)=>
        {
          
            console.log(mostrarId.actors);
            response.send(mostrarId.actors);
        })
        .catch((err) =>
        {
            console.log(err)
        })
    }else{
        console.log("Id no valido")
       
    }
}
function getPelidirector(request,response)
{
    if (request.query._id !=null)
    {
       let mostrarId = peliModel.findById(request.query._id)
        .then((mostrarId)=>
        {
          
            console.log(mostrarId.directors);
            response.send(mostrarId.directors);
        })
        .catch((err) =>
        {
            console.log(err)
        })
    }else{
        console.log("Id no valido")
       
    }
}
function getPeliproductor(request,response)
{
    if (request.query._id !=null)
    {
       let mostrarId = peliModel.findById(request.query._id)
        .then((mostrarId)=>
        {
          
            console.log(mostrarId.productor);
            response.send(mostrarId.productor);
        })
        .catch((err) =>
        {
            console.log(err)
        })
    }else{
        console.log("Id no valido")
       
    }
}
function postPeli(request,response)
{
    console.log(request.body);
    let peliDocument = peliModel({
        title:request.body.title,
        actors:request.body.actors,
        directors:request.body.directors,
        guionistas:request.body.guionistas,
        year:request.body.year,
        productor:request.body.productor
    })
    let guardado = peliDocument.save()
    .then((guardado)=>
    {
        console.log(guardado);
        response.send(guardado);
    })
    .catch((err)=>
    {
        console.log(err)
    })
    
    
}
function postPeliactor(request, response)
{
   let actualizar=  peliModel.updateOne({_id:request.body._id},{$push:{actors:request.body.actors}})
    .then((actualizar)=>
    {
        console.log("Actores actualizados");
        response.send(actualizar)
    })
    .catch((err)=>
    {
        console.log(err)
    })
}
function postPelidirector(request, response)
{
   let actualizar=  peliModel.updateOne({_id:request.body._id},{$push:{directors:request.body.directors}})
    .then((actualizar)=>
    {
        console.log("Directores actualizados");
        response.send(actualizar)
    })
    .catch((err)=>
    {
        console.log(err)
    })
}
function postPeliguionista(request, response)
{
   let actualizar=  peliModel.updateOne({_id:request.body._id},{$push:{guionistas:request.body.guionistas}})
    .then((actualizar)=>
    {
        console.log("Guionistas actualizados");
        response.send(actualizar)
    })
    .catch((err)=>
    {
        console.log(err)
    })
}
function putPeli(request,response)
{
    if ( request.body._id!=null)
    {
      let actualizar =   peliModel.updateOne({_id:request.body._id},
                            {title:request.body.title,
                            actors:request.body.actors,
                            directors:request.body.directors,
                            guionistsa:request.body.guionistas,
                            year:request.body.year,
                            productor:request.body.productor})
        .then((actualizar) =>
        {
            console.log("PElicula actualizdo");
            console.log(actualizar);
            response.send(actualizar)
        })
        .catch((err) =>
        {
            console.log(err)
        })
    }else{
        console.log ("Introduce un id valido")
    }
}
function delPeli(request,response)
{
    if ( request.body.id != "")
    {
        peliModel.deleteOne({_id:request.body.id})
        .then((prof)=> 
        {
            console.log("Pelicula borrado");
            console.log(prof);
            response.send(prof);
        })
        .catch((err)=>
        {
            console.log(err);
        })
    }else{
        console.log("Introduce un valor de id válido")

    }  
}
function delPeliactor(request, response)
{
   let actualizar=  peliModel.updateOne({_id:request.body._id},{$pop: {actors:request.body.actors}})
    .then((actualizar)=>
    {
        console.log("Actores actualizados");
        response.send(actualizar)
    })
    .catch((err)=>
    {
        console.log(err)
    })
}
function delPelidirector(request, response)
{
   let actualizar=  peliModel.updateOne({_id:request.body._id},{$pop:{directors:request.body.directors}})
    .then((actualizar)=>
    {
        console.log("Directores actualizados");
        response.send(actualizar)
    })
    .catch((err)=>
    {
        console.log(err)
    })
}
function delPeliguionista(request, response)
{
   let actualizar=  peliModel.updateOne({_id:request.body._id},{$pop:{guionistas:request.body.guionistas}})
    .then((actualizar)=>
    {
        console.log("Guionistas actualizados");
        response.send(actualizar)
    })
    .catch((err)=>
    {
        console.log(err)
    })
}


module.exports={getProf,
                postProf,
                putProf,
                delProf,
                getPeli,
                getPeliactor,
                getPelidirector,
                getPeliproductor,
                postPeli}