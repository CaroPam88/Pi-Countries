import {
  GET_COUNTRIES,
  GET_BY_ID,
  GET_BY_NAME,
  GET_ACTIVITIES,
  FILTERS_COUNTRIES,
} from "./actions-types";

const initialState = {
  countries: [],
  countriesII: [],
  countriesDetail: [],
  activities: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesII: action.payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        countriesDetail: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case FILTERS_COUNTRIES:
      const countries = state.countriesII;
      const countriesFilteredByContinent =
        action.payload.continent === "All"
          ? countries
          : countries.filter(
              (country) => country.continent === action.payload.continent
            );
      const countriesOrderByLetter = filterByLetter(
        action.payload.orderByLetter,
        countriesFilteredByContinent
      );
      const orderCountriesByPopulation = filterByPopulation(
        action.payload.orderByPopulation,
        countriesOrderByLetter
      );
      const orderByActivities = filterByActivities(
        action.payload.activity,
        orderCountriesByPopulation
      );
      return {
        ...state,
        countries: orderByActivities,
      };
    default:
      return { ...state };
  }
};

const filterByLetter = (valueOfOrdering, countries) => {
  const sortCountries =
    valueOfOrdering === "asc"
      ? countries.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        })
      : valueOfOrdering === "desc"
      ? countries.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        })
      : countries;
  return sortCountries;
};

const filterByPopulation = (valueOfPopulation, countries) => {
  const sortPopulation =
    valueOfPopulation === "Min"
      ? countries.sort(function (a, b) {
          if (a.population > b.population) {
            return 1;
          }
          if (b.population > a.population) {
            return -1;
          }
          return 0;
        })
      : valueOfPopulation === "Max"
      ? countries.sort(function (a, b) {
          if (a.population > b.population) {
            return -1;
          }
          if (b.population > a.population) {
            return 1;
          }
          return 0;
        })
      : countries;
  return sortPopulation;
};

const filterByActivities = (activityName, countries) => {
  if (activityName === "") return countries;
  else {
    return countries.filter((c) =>
      c.Activities.find((a) => a.name === activityName)
    );
  }
};

export default reducer;
