import style from "../Landing/Landing.module.css";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div className={style.container}>
      <div>
        <div>
          <strong>
            <h2 className={style.title}>Welcome to the Country Finder app! </h2>
          </strong>
          <Link to="/home">
            <h2>
              <button className={style.button}>Get Started!</button>
            </h2>
          </Link>
         

        </div>
      </div>
      
      <footer className={style.footer}>
            <div>
              <p>Made with ❤️ by Carolina Ramirez</p>
            </div>
          </footer>
          
    </div>
  );
};
export default Landing;
