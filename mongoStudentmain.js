let mongoose= require("mongoose")
let Student= require("./mongoStudent")
mongoose.connect('mongodb+srv://cardenalcopia:cardenalcopia1.@cluster0.jcewvdc.mongodb.net/test',{useNewUrlParser:false, useUnifiedTopology:false})
// let studentDocumet = new Student({
//     first_name :"Claudia",
//     last_name:"Diez",
//     mark:[{
//         date:"2021-01-07",
//         mark:6,
//         subject:{
//             title:"mongo",
//             teacher:[{
//                 first_name:"Jose",
//                 last_name:"Herrera"
//             },{
//                 first_name:"Menchu",
//                 last_name:"Garcia"
//             }]
//         }

//     },{
//         date:"2021-07-07",
//         mark:8,
//         subject:{
//             title:"css",
//             teacher:[{
//                 first_name:"Jose",
//                 last_name:"Herrera"
//             },{
//                 first_name:"Menchu",
//                 last_name:"Garcia"
//             }]
//         }
        
//     }]
// })
function checkRespuesta(err,res)
{
    if (err){
        console.log("Error"+err)
    }else{
        console.log ("Documento guardado")
        mongoose.disconnect();
    }
}
// studentDocumet.save(checkRespuesta);

function mostrar(alumno)
{
    Student.findOne({first_name:alumno},
        function (err, data)
        {
            if (err)
            {
                console.log (err)
            }else{
                
                console.log ("Notas de "+ data.first_name + " "+ data.last_name)
                for ( let i =0;i<data.mark.length;i++)
                {
                  
                    console.log("Nota de " + data.first_name + data.mark[i])
                    console.log ("Asignatura matriculada " + data.mark[i].subject.title)
                    console.log("Profesores : "+ data.mark[i].subject.teacher)
                }
            }
        }
        
        )
}
mostrar("Roberto")