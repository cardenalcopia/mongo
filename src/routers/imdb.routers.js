const {Router}= require("express")
const router=Router();
const profCtrl = require("../controller/imdb.controller")
router.get("/profesional",profCtrl.getProf);
router.post("/profesional",profCtrl.postProf);
router.put("/profesional",profCtrl.putProf);
router.delete("/profesional",profCtrl.delProf);
router.get("/peliculas",profCtrl.getPeli)
router.get("/peliculas/actor",profCtrl.getPeliactor);
router.get("/peliculas/director",profCtrl.getPelidirector);
router.get("/peliculas/productor",profCtrl.getPeliproductor);


module.exports=router