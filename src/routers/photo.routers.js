const {Router}= require("express")
const router=Router();
const photoCtrl = require("../controller/Photos.controller")
router.get("/photo",photoCtrl.getFoto);
router.post("/photo",photoCtrl.postFoto)
router.put("/photo",photoCtrl.putFoto)
router.delete("/photo",photoCtrl.delFoto)
module.exports=router
