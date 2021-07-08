const { Router } = require('express');
const {Country}=require('../db')
const router = Router();

router.get("/",(_req,res,next)=>{
    //En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
    //Obtener un listado de los primeros 10 países
    Country.findAll({limit:10,where:{},order:["name", "DESC"]}).then(countries=>res.send(countries)).catch(err=>next(err))
})
router.get("/:idCountry",(req,res,next)=>{
    //Obtener el detalle de un país en particular
    //Debe traer solo los datos pedidos en la ruta de detalle de país
    //Incluir los datos de las actividades turísticas correspondientes me falta
    const id= req.params.idCountry;
    const name=req.query.name
    if(id){
        return Country.findByPk(id).then(country=>res.send(country)).catch(err=>next(err))
    }
    if(name){
        Country.findOne({where:{name:'%${name}%'}}).then((country)=>{
            if(!country) return res.send("The Country with that name does not exist");
             res.send(country)})
             .catch(err=>next(err))
    }
    
})
// router.get("/?name",(req,res)=>{
//     //GET /countries?name="...":
// //Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// //Si no existe ningún país mostrar un mensaje adecuado
//     res.send("soy la ruta countries")
// })

module.exports = router;


