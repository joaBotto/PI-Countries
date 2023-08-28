import axios from "axios";
import { ASCENDING, LOWER } from "./order";
import {
  FETCH_ACTIVITY,
  GET_ACTIVITY,
  GET_COUNTRY,
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  FILTER_BY_POPULATION,
  POST_ACTIVITY,
  REMOVE_ACTIVITY,
  SEARCH_COUNTRY,
  SORT,
} from "./actions";

const initialState = {
  countries: [],
  filteredCountries: [],
  activities: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // En este primer caso lo que hacemos es obtener los datos de los paises desde la API, y a su vez, actualizamos el state con los datos obtenidos e inicializamos "filteredCountries" con los mismos datos
    case GET_COUNTRY:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };

    // En el segundo caso, lo que hacemos es filtrar los paises segun la busqueda que se quiera realizar. Cabe destacar que el nombre del pais se puede escribir en minusculas. Tambien se actualiza el estado con los paises filtrados.
    case SEARCH_COUNTRY:
      const filteredCountries = state.countries.filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredCountries,
      };

    // En el tercer caso, filtramos los paises segun el continente al cual pertenezcan, tambien actualizamos el estado con los paises filtrados.
    case FILTER_BY_CONTINENT:
      const filteredByContinent = state.countries.filter(
        (country) => country.continent === action.payload
      );
      return {
        ...state,
        filteredCountries: filteredByContinent,
      };

    // En este caso lo que hacemos es obtener las actividades disponibles y actualizar el estado de "activities".
    case GET_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };

    case POST_ACTIVITY:
      const newActivity = action.payload;
      return {
        ...state,
        activities: [...state.activities, newActivity],
      };

    // case FETCH_ACTIVITY:
    //   return {
    //     ...state,
    //     activities: action.payload,
    //   };

    case FILTER_BY_ACTIVITY:
      const filteredByActivity = state.countries.filter((country) =>
        country.activities.includes(action.payload)
      );
      return {
        ...state,
        filteredCountries: filteredByActivity,
      };

    case FILTER_BY_POPULATION:
      const filteredByPopulation = state.countries.filter(
        (country) => country.population <= action.payload
      );
      return {
        ...state,
        filteredCountries: filteredByPopulation,
      };

    case REMOVE_ACTIVITY:
      const updatedActivities = state.activities.filter(
        (activity) => activity.name !== action.payload
      );
      return {
        ...state,
        activities: updatedActivities,
      };
    default:
      return state;
  }
}
