import { getCountryById } from "../../redux/actions";
// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "../Detail/Detail.module.css"
//DAR ESTILOS
//SACAR LA NAVBAR Y EL LINK AL FORMULARIO.
//QUE SOLO APAREZCA EL LINH AL HOME Y EL DETAIL DE LOS PAISES

const CountryId = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countriesDetail);
  const {
    name,
    flag,
    continent,
    capital,
    subregion,
    area,
    population,
    Activities,
  } = country;

  let { id } = useParams();
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      {/* <footer className={style.footer}>
        <div>
          <p>Made with ❤️ by Carolina Ramirez</p>
        </div>
      </footer> */}
      <div className={style.containerCard}>
        <div >
          <img src={flag} alt={name} />
        </div>
        <div className={style.name}>
          <h4>Country: {name}</h4>
        </div>

        <div className={style.capital}>
          <h4>Capital: {capital} </h4>
        </div>

        <div className={style.continent}>
          <h4>Continent: {continent}</h4>
        </div>

        <div className={style.subregion}>
          <h4>Subregion: {subregion} </h4>
        </div>

        <div className={style.area}>
          <h4>Area: {area}Km2 </h4>
        </div>

        <div className={style.population}>
          <h4>Population: {population} Hab.</h4>
        </div>
        

        <div className={style.activities}>
        { Activities && <h4>Activities: {Activities.map(activity=> activity.name)}</h4> }
        </div>
      </div>
    </div>
  );
};
export default CountryId;
