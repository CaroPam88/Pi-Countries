import { Link } from "react-router-dom";
// import style from "./NavBar.module.css";
import React from "react";
import style from "../NavBar/NavBar.module.css"


function NavBar() {
 
  return (
    <div className={style.nav}>
      
     <Link to = "/home" >
      <button className={style.home}> HOME</button></Link>
     
      <Link to="/form" >
        <button className={style.form}>ADD ACTIVITY</button></Link>
      

    </div>
  );
}
export default NavBar;








