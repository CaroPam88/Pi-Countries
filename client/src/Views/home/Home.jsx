import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountries, getActivities } from "../../redux/actions";
import SearchBar from "../../Components/SearchBar/SearcBar";
import style from "../home/Home.module.css";


const Home = () => {
  const dispatch = useDispatch();
  

  const activity = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const [filters, setFilters] = useState({
    continent: "All",
    orderByLetter: "",
    orderByPopulation: "",
    activity: "",
  });

  function handleFilter(event) {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
    dispatch(
      filterCountries({ ...filters, [event.target.name]: event.target.value })
    );
  }

  return (
    <div className={style.container}>
     
      <div>
        <SearchBar />
        
        <select
          name="continent"
          onChange={handleFilter}
          className={style.continent}
        >
          <option value="All" key="All">
            All continents
          </option>
          <option value="Africa" key="Africa">
            Africa
          </option>
          <option value="Antarctic" key="Antarctic">
            Antarctica
          </option>
          <option value="Asia" key="Asia">
            Asia
          </option>
          <option value="Europe" key="Europe">
            Europe
          </option>
          <option value="Oceania" key="Oceania">
            Oceania
          </option>
          <option value="Americas" key="Americas">
            Americas
          </option>
        </select>

        <select
          name="orderByLetter"
          onChange={handleFilter}
          className={style.order}
        >
          <option value="" key="">
            Order
          </option>
          <option value="asc" key="asc">
            A-Z
          </option>
          <option value="desc" key="desc">
            Z-A
          </option>
        </select>

        <select
          name="orderByPopulation"
          onChange={handleFilter}
          className={style.population}
        >
          <option value="" key="">
            Population
          </option>
          <option value="Max" key="Max">
            Max population
          </option>
          <option value="Min" key="Min">
            Min population
          </option>
        </select>

        <select name="activity" onChange={handleFilter} className={style.activities}>
          <option value="">Activities</option>
          {activity.map((activity) => {
            return (
              <option key={activity.id} value={activity.name}>
                {activity.name}
              </option>
            );
          })}
        </select>
      </div>
     
      <CardsContainer />
    </div>
  );
};
export default Home;
