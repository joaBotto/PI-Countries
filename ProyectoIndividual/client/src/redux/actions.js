import axios from "axios";
export const GET_COUNTRY = "GET_COUNTRY";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const SORT = "SORT";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const FETCH_ACTIVITY = "FETCH_ACTIVITY";
export const FILTER_BY_POPULATION = "FILTER_BY_POPULATION";
const URLc = "http://localhost:3001/countries";
const URLa = "http://localhost:3001/activities";

export const getCountry = () => async (dispatch) => {
  try {
    const response = await axios.get(URLc);
    return dispatch({
      type: GET_COUNTRY,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchCountry = () => async (search) => {
  try {
    const response = await axios.get(`${URLc}?name=` + search);
    dispatch({
      type: SEARCH_COUNTRY,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const sort = (order) => ({
  type: SORT,
  payload: order,
});

export const filterByContinent = (payload) => ({
  type: FILTER_BY_CONTINENT,
  payload,
});

export const getActivity = () => {
  return async (dispatch) => {
    try {
      const response = await axios(URLa);
      dispatch({
        type: GET_ACTIVITY,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postActivity = (payload) => {
  async (dispatch) => {
    try {
      const response = await axios.post(URLa, payload);
      dispatch({
        type: POST_ACTIVITY,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeActivity = (name) => ({
  type: REMOVE_ACTIVITY,
  payload: name,
});

export const filterByActivity = (payload) => ({
  type: FILTER_BY_ACTIVITY,
  payload,
});

export const fetchActivity = () => {
  async (dispatch) => {
    try {
      const response = await axios.get(URLa);
      dispatch({
        type: FETCH_ACTIVITY,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterByPopulation = (payload) => ({
  type: FILTER_BY_POPULATION,
  payload,
});
