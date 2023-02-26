import React, { useState } from "react";
import dayjs from "dayjs";

import { useMapContext } from "../../hooks/useMapContext";
import { STATES_DATA } from "../../commons/constants";

import "./styles.scss";

export const Tooltip = () => {
  const { state } = useMapContext();
  const [currentHour, setCurrentHour] = useState(dayjs().hour());

  const handlePrevHour = () => {
    const currentHourResolved = currentHour > 0 ? currentHour - 1 : currentHour;
    setCurrentHour(currentHourResolved);
  };

  const handleNextHour = () => {
    const currentHourResolved =
      currentHour < 23 ? currentHour + 1 : currentHour;
    setCurrentHour(currentHourResolved);
  };

  const stateUf = state.hovered || state.selected;
  const stateName = state.hovered
    ? STATES_DATA[state.hovered].name
    : STATES_DATA[state.selected].name;

  const showInfo =
    (state.hovered === state.selected || !state.hovered) &&
    state.selectedData.current_weather &&
    state.selectedData.hourly;

  console.log(state);

  const currentHourData = {
    time: dayjs(state.selectedData.hourly?.time[currentHour]).format("HH:mm"),
    temp: state.selectedData.hourly?.temperature_2m[currentHour],
    preciptation:
      state.selectedData.hourly?.precipitation_probability[currentHour],
    humidity: state.selectedData.hourly?.relativehumidity_2m[currentHour],
  };

  return (
    <div className="tooltip">
      <div className="tooltip_header">
        <h2 id="estado_uf">{stateUf}</h2>
        <p id="estado_nome">{stateName}</p>
      </div>
      {(showInfo || state.loading) && (
        <div className="tooltip_content">
          <div className="meteo">
            {state.loading ? (
              <span>Carregando...</span>
            ) : (
              <div className="m_item">
                <div className="mi_header">
                  <span className="mih_hour">{currentHourData.time}h</span>
                  <span className="mih_temperature">
                    {currentHourData.temp}°C
                  </span>
                </div>
                <div className="mi_info">
                  <p>
                    Chuva: <span> {currentHourData.preciptation}%</span>
                  </p>
                  <p>
                    Umidade: <span> {currentHourData.humidity}%</span>
                  </p>
                </div>
                <div className="mi_btn">
                  <button
                    className={`mib mib_prev ${
                      currentHour === 0 ? "disabled" : ""
                    }`}
                    onClick={handlePrevHour}
                  >
                    Anterior
                  </button>
                  <button
                    className={`mib mib_nect ${
                      currentHour === 23 ? "disabled" : ""
                    }`}
                    onClick={handleNextHour}
                  >
                    Próxima hora
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
