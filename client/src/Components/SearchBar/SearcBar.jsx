import { useState } from "react";
import { getCountryByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "../SearchBar/SearchBar.module.css"


const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (event)=>{
    setInput(event.target.value);
  }

  const handleClick = ()=>{
    dispatch( getCountryByName(input))
    setInput(1)

  }
  
return( 
  <div className={style.container}>
    <input
      type="text"
      value={input}
      placeholder="Country"
      onChange={handleChange}
      className={style.search}
    />
    <button onClick={handleClick}  className={style.button}>SEARCH</button>
  </div>
  
)};
export default SearchBar



