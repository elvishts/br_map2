import axios from "axios";
import dayjs from "dayjs";
import { createContext, useState } from "react";
import {
  METEO_API_DEFAULT_PARAMS,
  METEO_API_ENDPOINT,
  STATES_DATA,
} from "../commons/constants";

const initialState = {
  selected: "DF",
  selectedData: {
    current_weather: null,
    hourly: null,
  },
  loading: false,
  hovered: null,
};

export const mapContext = createContext();

export const MapContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const loadStateDataFromAPI = async (stateUf) => {
    setState((stateCurrent) => ({
      ...stateCurrent,
      loading: true,
      selected: stateUf,
    }));
    try {
      const { data } = await axios.get(METEO_API_ENDPOINT, {
        params: {
          ...METEO_API_DEFAULT_PARAMS,
          latitude: STATES_DATA[stateUf].lat,
          longitude: STATES_DATA[stateUf].long,
          start_date: dayjs().format("YYYY-MM-DD"),
          end_date: dayjs().format("YYYY-MM-DD"),
        },
      });
      setState((stateCurrent) => ({
        ...stateCurrent,
        selectedData: {
          current_weather: data.current_weather,
          hourly: data.hourly,
        },
      }));
    } catch (err) {
      console.error(err);
    }
    setState((stateCurrent) => ({
      ...stateCurrent,
      loading: false,
    }));
  };

  return (
    <mapContext.Provider value={{ state, setState, loadStateDataFromAPI }}>
      {children}
    </mapContext.Provider>
  );
};
