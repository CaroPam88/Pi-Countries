import { useEffect, useState } from "react";
import { getCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "../../Views/Form/Form.module.css";
import axios from "axios";

function Form() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const countries = useSelector((state) => state.countries);

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    description: "",
    idCountry: [],
  });
  const [error, setError] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    idCountry: [],
  });

  function validate(input) {
    let error = {};
    if (!input.name) error.name = "Insert an activity Name";
    if (!/^[A-Za-z]+$/.test(input.name)) error.name = "The Name is invalid";
    if (!input.difficulty) error.difficulty = "Insert a Difficulty";
    if (!input.season) error.season = "Insert a Season";
    if (!input.countries) error.countries = "Choose a Country";

    return error;
  }

  const handlerCountry = (event) => {
    setForm({
      ...form,
      [event.target.name]: [...form[event.target.name], event.target.value],
    });
  };
  const handleForm = (event) => {
    setError(validate({ ...form, [event.target.name]: event.target.value }));
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
   // event.preventDefault();
    await axios
      .post("http://localhost:3001/activities", form)
      .then((response) => alert("Created Activity!"))
      .catch((error) => alert(error));
  };

  return (
    <div className={style.body}>
      <form onSubmit={submitHandler} className={style.form}>
        <div>
          <button className={style.button}> Create Activity!</button>
        </div>
        <div>
          <h3 className={style.name}>
            <label>Name:</label>
          </h3>

          <input
            type={"text"}
            value={form.name}
            onChange={handleForm}
            name="name"
            className={style.name}
          />
          {error.name && <span>{error.name}</span>}
        </div>
        
        <div>
          <h3 className={style.difficulty}>
            <label>Difficulty:</label>
          </h3>
          <select  className={style.optionDiff} name="difficulty" onChange={handleForm}>
            <option className={style.optionDiff} value="">---</option>
            <option className={style.optionDiff}value="1">1</option>
            <option className={style.optionDiff}value="2">2 </option>
            <option className={style.optionDiff}value="3">3</option>
            <option className={style.optionDiff}value="4">4</option>
            <option className={style.optionDiff}value="5">5</option>
          </select>

          {error.difficulty && <span>{error.difficulty}</span>}
        </div>

        <div>
          <h3 className={style.duration}>
            <label>Duration:</label>
          </h3>

          <select className={style.optionDur} name="duration" onChange={handleForm}>
            <option className={style.optionDur} value="">---</option>
            <option className={style.optionDur} value="1:00:00">1:00:00 Hs.</option>
            <option className={style.optionDur} value="2:00:00">2:00:00 Hs. </option>
            <option className={style.optionDur} value="3:00:00">3:00:00 Hs.</option>
            <option className={style.optionDur} value="4:00:00">4:00:00 Hs.</option>
            <option className={style.optionDur} value="5:00:00">5:00:00 Hs.</option>
            <option className={style.optionDur} value="6:00:00">6:00:00 Hs.</option>
            <option className={style.optionDur} value="7:00:00">7:00:00 Hs.</option>
            <option className={style.optionDur} value="8:00:00">8:00:00 Hs.</option>
            <option className={style.optionDur} value="9:00:00">9:00:00 Hs.</option>
            <option className={style.optionDur} value="10:00:00">10:00:00 Hs.</option>
            <option className={style.optionDur} value="11:00:00">11:00:00 Hs.</option>
            <option className={style.optionDur} value="12:00:00">12:00:00 Hs.</option>
            <option className={style.optionDur} value="13:00:00">13:00:00 Hs.</option>
            <option className={style.optionDur} value="14:00:00">14:00:00 Hs.</option>
            <option className={style.optionDur} value="15:00:00">15:00:00 Hs.</option>
            <option className={style.optionDur} value="16:00:00">16:00:00 Hs.</option>
            <option className={style.optionDur} value="17:00:00">17:00:00 Hs.</option>
            <option className={style.optionDur} value="18:00:00">18:00:00 Hs.</option>
            <option className={style.optionDur} value="19:00:00">19:00:00 Hs.</option>
            <option className={style.optionDur} value="20:00:00">20:00:00 Hs.</option>
            <option className={style.optionDur} value="21:00:00">21:00:00 Hs.</option>
            <option className={style.optionDur} value="22:00:00">22:00:00 Hs.</option>
            <option className={style.optionDur} value="23:00:00">23:00:00 Hs.</option>
            <option className={style.optionDur} value="24:00:00">24:00:00 Hs.</option>{" "}
          </select>
          {error.duration && <span>{error.duration}</span>}
        </div>

        <div>
          <h3 className={style.season}>
            <label htmlFor="season">Season: </label>
          </h3>
          <select className={style.optionSea} name="season" onChange={handleForm}>
            <option className={style.optionSea} value="">---</option>
            <option className={style.optionSea} value="Spring">Spring</option>
            <option className={style.optionSea} value="Summer">Summer</option>
            <option className={style.optionSea} value="Autumn">Autumn</option>
            <option className={style.optionSea} value="Winter">Winter</option>
          </select>
          {error.season && <span>{error.season}</span>}
        </div>

        <div>
          <h3 className={style.choose}>
            <p>Choose one country or more:</p>
            <select className={style.optionCou} name="idCountry" onChange={handlerCountry}>
              <option value="">---</option>
              {countries
                .sort((a, b) => a.name.localeCompare(b.name)) 
                .map((country) => {
                  return (
                    <option className={style.optionCou} key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  );
                })}
            </select>
            {error.idCountry && <span>{error.idCountry}</span>}
          </h3>
        </div>
        <div>
          <button
            className={style.buttonSubmit}
            type="submit"
            disabled={
              error.name || error.difficulty || error.season || error.idCountry
                ? true
                : false
            }
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
