import style from "../Card/Card.Module.css";
import { Link } from "react-router-dom";

function Card({ id, name, flag, continent }) {
  return (
    <Link to={`/detail/${id}`} className={style.link}>

      <div className={style.card}>

        <h3 className={style.name}>{name}</h3>

        <h3 className={style.continent}>{continent}</h3>

        <div key={id}>
          
            <img  className={style.flag} src={flag} alt="flag" />
          
        </div>
      </div>
    </Link>
  );
}
export default Card;
