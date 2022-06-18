let mongoose= require("mongoose");
mongoose.connect('mongodb+srv://cardenalcopia:cardenalcopia1.@cluster0.jcewvdc.mongodb.net/test'
                ,{useNewUrlParser:false,
                 useUnifiedTopology:false})
.then((db)=>{
    console.log("database connected on " + db.connection.host)
})
.catch((error)=>{
    console.log (error)
})