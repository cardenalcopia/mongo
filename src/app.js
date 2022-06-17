const express= require("express")
const cors = require("cors")

const errorHandling= require ("./herror/errorHandling")
const app = express();

app.set("port",process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(estuRouters);
app.use(markRouters);
app.use(varRouters);

app.use(function(req,res,next){
    res.status(404).json({
        error:true,
        codigo:404,
        mensaje:"endpoint doesnt found"
    })
    
})
app.use(errorHandling);
module.exports=app;
