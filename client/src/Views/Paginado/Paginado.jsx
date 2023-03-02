import style from "../Paginado/Paginado.module.css";
import { useEffect } from "react";

export default function Paginado({
  setCurrentPage,
  countriesPerPage,
  countries,
  paginado,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
    //voy a tomar el numero redondo de todos los paises dividido los paises por pagina
    pageNumbers.push(i); //los voy a pushear y los voy a guardar en mi array de pageNumbers
  }

  useEffect(() => {
    paginado(1);
  }, [countries]);

  return (
    <ul className={style.pagination}>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <li key={number} className={style.inputPage}>
            <a onClick={() => paginado(number)} className={style.a}>
              {number}
            </a>
          </li>
        ))}
    </ul>
  );
}
