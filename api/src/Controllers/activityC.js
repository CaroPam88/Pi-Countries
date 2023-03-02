const { Country, Activity } = require("../db");

// // POST | /activities
// // Esta ruta recibirá todos los datos necesarios para crear una actividad turística y
// //relacionarla con los países solicitados.
// // Toda la información debe ser recibida por body.
// // Debe crear la actividad turística en la base de datos,
// //y esta debe estar relacionada con los países indicados (al menos uno).

const addActivity = async (name, difficulty, duration, season, idCountry) => {
   if(!name || !difficulty || !duration || !season || !idCountry ) throw Error ("Cant create the activity")

  let newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  await newActivity.addCountries(idCountry);

  return newActivity;
};

module.exports = { addActivity };
