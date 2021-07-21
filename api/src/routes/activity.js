const { Router } = require('express');
const {Tourism,Country}=require('../db')
const router = Router();
router.get("/",async(_req,res,next)=>{
    try {
        const activities=await Tourism.findAll({include:{model:Country}})
        res.send(activities)
    } catch (error) {
        next(error)
    }
});
router.post("/",async (req,res,next)=>{
    const {activity,countryId}=req.body
    //Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
    //Crea una actividad turística en la base de datos
    // console.log("esto es activity",activity)
    // console.log("esto es ids:",countryId)
    try {
        const [activit, created]=await Tourism.findOrCreate({where:{
            name:activity.name,
            difficulty:activity.difficulty,
            duration:activity.duration,
            season:activity.season
            },
            defaults:{
                name:activity.name,
                difficulty:activity.difficulty,
                duration:activity.duration,
                season:activity.season
            }
        })
        console.log(created)
        await activit.setCountries(countryId)
        res.send(activit)
    } catch (error) {
        next(error)        
    }
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