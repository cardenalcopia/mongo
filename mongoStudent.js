const mongoose = require("mongoose")
const teacherSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
   
});
const subjectSchema = new mongoose.Schema({
    title:String,
    teacher:[teacherSchema]

})
const  markSchema = new mongoose.Schema({
    date:Date,
    mark:Number,
    subject:subjectSchema
})
const studentSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    mark:[markSchema]
});
module.exports=mongoose.model("Student", studentSchema)