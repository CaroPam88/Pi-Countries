const { Router } = require("express");
const { Country, Activity } = require("../db");
const { getAllCountries, getCountryById }= require ("../Controllers/countryC")

const router = Router();

// GET | /countries
//Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
// GET | /countries/name?="..."
// Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query.
// (No es necesario que sea una coincidencia exacta).
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el país, debe mostrar un mensaje adecuado.


router.get("/", async (req, res) => {
  const { name } =req.query;
  const allCountries = await getAllCountries(name);
  try {
     res.status(200).json(allCountries);
  } catch (error) {
    res.status(400).send({error: error.message})
  }
});

// GET | /countries/:idPais
// Esta ruta obtiene el detalle de un país específico.
// Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// El país es recibido por parámetro (ID de tres letras del país).
// Tiene que incluir los datos de las actividades turísticas asociadas a este país.

router.get("/:id", async (req, res)=>{
  const { id } = req.params
  try {
    const findCountryId = await getCountryById(id)
    res.status(200).send(findCountryId)
  } catch (error) {
    res.status(400).send({error: error.message})
  }

})
//AGREGAR VALIDACIONES




module.exports = router
