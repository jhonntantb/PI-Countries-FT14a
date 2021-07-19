const { Router } = require('express');
const {Country,Tourism,}=require('../db')
const axios= require('axios');
const { Op } = require('sequelize');
const router = Router();
router.get("/:idCountry",async (req,res,next)=>{
    //Obtener el detalle de un país en particular
    //Debe traer solo los datos pedidos en la ruta de detalle de país
    //Incluir los datos de las actividades turísticas correspondientes
    const id= req.params.idCountry;
    try {
        const country=await Country.findOne({where:{id:id},include:{model: Tourism}})
        res.send(country)
    } catch (error) {
        next(error)
    }
     
})
router.get("/",async (req,res,next)=>{
    //En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
    //---me traigo todo de mi api para guardar lo que necesito en mi db---
    const resp= await axios("https://restcountries.eu/rest/v2/all")
    const response=resp.data;
    //---Como el Republic of kosovo no tiene numericCode le asigno uno-----
    const indexKosovo=response.findIndex(e=>e.name=="Republic of Kosovo")
    response[indexKosovo].numericCode="926"
    //-------------------------si obtengo name por query--------------------
    const name=req.query.name

    const api=await Country.findAll()
    if(api.length==0){
        try {
            for(let i=0;i<response.length;i++){
                await Country.create({
                    id:response[i].numericCode,
                    name:response[i].name,
                    flag:response[i].flag,
                    continent: response[i].region,
                    capital:response[i].capital,
                    subregion:response[i].subregion,
                    area:response[i].area,
                    population:response[i].population
                })
            }        
        } catch (error) {
            next(error)
        }
    }
    if(name){
        try {
            const country= await Country.findAll({
                where:{name:{[Op.iLike]:`%${name}%`}},
                order:[["name", "ASC"]]
            })
            if(country.length>0) return res.send(country);
            
        } catch (error) {
            next(error)
        }
    }
    try {
        const countries=await Country.findAll({
            order:[["name", req.query.order]],
            include:{model: Tourism}
            })
        return res.send(countries)
    } catch (error) {
        next(error)
    }
    
    
})
module.exports = router;


