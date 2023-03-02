const axios = require("axios");
const { Country, Activity } = require("../db");

//TENGO QUE GUARDAR LA DATA DE LA API EN LA DATABASE

const getApiData = async () => {
  try {
    let country = [];
    
    let apiData = await axios.get("https://restcountries.com/v3/all");
    country.push(apiData);

    country = await apiData.data.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags[1],
        continent: country.region,
        capital: country.capital ? country.capital[0] : "No Capital",
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      };
    });
   

    return country;
  } catch (error) {
    return { error: error.message };
  }
};

//GUARDO TODO EN LA BASE DE DATOS

const saveDataInDb = async () => {
  try {
    const allCountries = await getApiData();
    await Country.bulkCreate(allCountries);

    return allCountries;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = saveDataInDb;


