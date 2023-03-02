const { Country, Activity } = require("../db");
const { Op } = require("sequelize");


// GET | /countries/name

const getAllCountries = async (name) => {
  let allCountries;

  allCountries = await Country.findAll({
    include: {
      model: Activity,
      through: {
        attributes: [],
      },
    },
  });
  if (name) {
    allCountries = allCountries.filter((country) =>
      country.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  if (!allCountries) throw Error("The country Not Exist");
  return allCountries;
};

// -  Esta ruta obtiene el detalle de un país específico. Es decir que devuelve
// un objeto con la información pedida en el detalle de un país.
// -  El país es recibido por parámetro (ID de tres letras del país).
// -  Tiene que incluir los datos de las actividades turísticas asociadas a este país.
const getCountryById = async (id) => {
  const idCountry = id.toUpperCase();

  const CountryByID = await Country.findByPk(id, {
    include: {
      model: Activity,
      through: {
        attributes: [],
      },
    },
  });
  if (!CountryByID) throw Error`${id} Doesnt Exist`;

  return CountryByID;
};

module.exports = { getAllCountries, getCountryById };
