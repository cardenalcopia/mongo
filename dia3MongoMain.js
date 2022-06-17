let mongoose= require("mongoose")
mongoose.connect('mongodb+srv://cardenalcopia:cardenalcopia1.@cluster0.jcewvdc.mongodb.net/test',{useNewUrlParser:false, useUnifiedTopology:false})
let Mark = require("./dia3Mongo");
let markDocument = new Mark({
    date:"2021-07-04",
    mark:7,
    student_first_name: "Claudia",
    student_last_name:"Diez",
    group_name: "Metal",
    subject_name:"Mongo",
    teachers:[{
        teacher_first_name:"Jose",
        teacher_last_name :"Herrera"
    },{
        teacher_first_name:"Menchu",
        teacher_last_name:"Garcia"
    }]
})
function checkRespuesta(err,res)
{
    if (err){
        console.log("Error"+err)
    }else{
        console.log ("Documento guardado")
        mongoose.disconnect();
    }
}
// markDocument.save(checkRespuesta);
// Mark
// .aggregate([{$match: {subject_name: "Mongo"}},
//             {$group: {"_id": null, "N0ta Media": {"$avg": "$mark"}}}])
// .then((result) =>
// {
//     console.log(result);
//    //fs.writeFileSync("autores.json", JSON.stringify(result))
// })
// .catch((error) =>
// {
//     console.log(error);
// })
// Mark
// .aggregate([{$count: "Numero de Alumnos"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })
// Mark
// .aggregate([{$project: {
//                          student_first_name: 1,
//                          student_last_name:1,
//                          _id: 0}
//             }])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })
// Mark
// .aggregate([{$unwind:"$teachers"},
//             {$project:{"teachers.teacher_first_name":1,
//              "teachers.teacher_last_name":1,
//              _id:0}}])
// .then((result) =>
// {
//     console.log(result );
// })
// .catch((error) =>
// {
//     console.log(error);
// })
// Mark
// .aggregate([{$group: {"_id":"$group_name", 
//                  "Cantidad": {"$sum": 1}}},{$sort:{group_name:-1}}])
// .then((result) =>
// {
//     console.log(result );
// })
// .catch((error) =>
// {
//     console.log(error);
// });
// Mark
// .aggregate([{$group:{"_id":"$subject_name","media":{"$avg":"$mark"}}}
//             ,{$match:{"media":{"$gt":5}}},{$sort:{"media":-1}},{$limit:5}])
// .then((result) =>
// {
//     console.log(result );
// })
// .catch((error) =>
// {
//     console.log(error);
// });
// Mark
// .aggregate([{$unwind:"$teachers"},{$group:{"_id":"$subject_name","total":{"$sum":1}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// });
// Mark
// .aggregate([{$match:{"$or":[{"mark" :{"$gt":8}},
//                              {"date":{"$lt":new Date ("2021,06,15")}}]}},
//             {$project :{"student_first_name":1,
//                         "student_last_name":1,
//                         "_id":0,
//                         "mark":1}}])
// .then((result) =>
// {
//     console.log(result );
// })
// .catch((error) =>
// {
//     console.log(error);
// });
// Mark
// .aggregate([{$match:{"date":{"$gt":new Date("2022,01,01")}}},
//             {$group :{"_id":"$subject_name", "Nota media":{"$avg":"$mark"}}}])
//             .then((result) =>
//             {
//                 console.log(result );
//             })
//             .catch((error) =>
//             {
//                 console.log(error);
//             });
 Mark
.aggregate([{$unwind:"$teachers"},
            {$match:{"teachers.teacher_first_name":"Jose"}},
            // {$project:{"student_first_name":1}},
            {$group:{"_id":"$student_first_name","total":{"$sum":1}}}
            ])
            .then((result) =>
            {
                console.log(result );
            })
            .catch((error) =>
            {
                console.log(error);
            });
// Mark
// .aggregate([{$match:{"date":{"$gt":new Date("2022,01,01")}}},
//             {$group :{"_id":"$student_first_name", "Nota media":{"$avg":"$mark"}}}])
//             .then((result) =>
//             {
//                 console.log(result );
//             })
//             .catch((error) =>
//             {
//                 console.log(error);
//             });