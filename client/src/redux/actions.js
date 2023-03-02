import axios from "axios";

import {
  GET_COUNTRIES,
  GET_BY_ID,
  GET_BY_NAME,
  FILTER_BY_ACTIVITIES,
  GET_ACTIVITIES,
  FILTERS_COUNTRIES,
} from "./actions-types";

export const getCountries = () => {
  //ACTION CREATOR QUE RETORNA UNA FUNCION QUE HACE UNA PETICION Y DESPACHA LA ACTION
  return async function (dispatch) {
    const infoDb = await axios.get("http://localhost:3001/countries");
    const countries = infoDb.data; //LA INFO QUE NECESITO
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};
export const getCountryById = (id) => {
  return async function (dispatch) {
    const countryId = await axios.get(`http://localhost:3001/countries/${id}`);
    const country = countryId.data;
    dispatch({ type: GET_BY_ID, payload: country });
  };
};

//para la searchBar
export const getCountryByName = (name) => {
  return async function (dispatch) {
    const countryName = await axios.get(
      `http://localhost:3001/countries/?name=${name}`
    );
    const country = countryName.data;
    dispatch({ type: GET_BY_NAME, payload: country });
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const activities = await axios.get("http://localhost:3001/activities");
    const activityList = activities.data;
    dispatch({ type: GET_ACTIVITIES, payload: activityList });
  };
};

//Para filtrar las actividades
export const filterByActivities = (payload) => {
  return {
    type: FILTER_BY_ACTIVITIES,
    payload,
  };
};
//para postear actividades nuevas
export const postActivities = () => {
  return async function (dispatch) {
    const activities = await axios.post("http://localhost:3001/activities");
    const activityList = activities.data;
    dispatch({ type: GET_ACTIVITIES, payload: activityList });
  };
};

//VA A FILTRAR POR ORDEN, POPULATION,. CONTINENT Y ACTIVITY
export const filterCountries = (localState) => {
  return {
    type: FILTERS_COUNTRIES,
    payload: localState,
  };
};
