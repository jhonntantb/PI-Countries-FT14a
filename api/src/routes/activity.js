const { Router } = require('express');
const {Tourism}=require('../db')
const router = Router();
router.get("/",(_req,res,next)=>{
    return Tourism.findAll().then(activities=>res.send(activities)).catch(err=>next(err))
});
router.post("/",(req,res,next)=>{
    const {name,difficulty,duration,season}=req.body
    //Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
    //Crea una actividad turística en la base de datos
    return Tourism.create({name:name,difficulty:difficulty,duration:duration,season:season})
    .then(activity=>res.send(activity))
    .catch(err=>next(err))
});
// router.put("/:id",(req,res,next)=>{
//     const name=req.params.name;
//     const activities=req.body
//     return Tourism.update(activities,{where:{id:id}})
//     .then(activities=>res.send(activities))
//     .catch(err=>next(err))

// });
// router.delete("/:id",(req,res,next)=>{
//     const name=req.params.name
//     return Tourism.destroy({where:{id:id}})
//     .then(()=>res.sendStatus(200)).catch(err=>next(err))

// });


module.exports = router;