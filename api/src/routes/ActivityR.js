const { Router } = require("express");
const { Country, Activity } = require("../db");
const router = Router();
const {addActivity } = require ("../Controllers/activityC")

// // POST | /activities
// // Esta ruta recibirá todos los datos necesarios para crear una actividad turística y
// //relacionarla con los países solicitados.
// // Toda la información debe ser recibida por body.
// // Debe crear la actividad turística en la base de datos,
// //y esta debe estar relacionada con los países indicados (al menos uno).


//GET Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.
 router.get('/', async (req, res) => {
    try {
        let getAll = await Activity.findAll()
        if(getAll.length) return res.status(200).json(getAll)
        else{
            throw Error ("no hay nada")
        }
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, idCountry } = req.body;
    try {
        let newActivity = await addActivity(name, difficulty, duration, season, idCountry)    

       
        res.status(200).send(newActivity)
    } catch (error) {
        res.status(404).send("Cant create the activity")
    }
})


 module.exports = router;
