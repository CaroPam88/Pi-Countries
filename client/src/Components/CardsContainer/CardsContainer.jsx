  import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Paginado from "../../Views/Paginado/Paginado";
import { getCountries } from "../../redux/actions";

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries); //me voy a treaer los datos desde el store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  //Declaro un estado local donde voy a mostrat cual es la pagina actual
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  //Declaro la cantidad de paises por pagina
  const indexOfLastCountry = currentPage * countriesPerPage; //10
  //El ultimo pais en la pagina es el resultado de multiplicar los paises por pagina y el numero de pagina
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  //El numero de mi primer pais en la pagina es el resultado de re restar el ultimo pais menos la cantidad de paises por pagina
  const currentCountry = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  //Esta costante es la mas importante porque es la que se va a guardar la informacion que se va a renderizar en cada pagina.
  //El resultado es un array con todos los paises por pagina

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
 };

  return (
    <>
      <div className={style.container}>
        <Paginado
          countriesPerPage={countriesPerPage}
          countries={countries.length}
          paginado={paginado}
        />
      </div>
      <div className={style.container}>
        
        { currentCountry.map((country) => {
          return (
            <Card
              id={country.id}
              flag={country.flag}
              name={country.name}
              continent={country.continent}
              Area={country.area}
              Population={country.population}
              Activities={country.activities}
            />
          );
        })}
      </div>
    </>
  );
};
export default CardsContainer;
