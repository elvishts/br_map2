export const METEO_API_ENDPOINT = "https://api.open-meteo.com/v1/forecast";
export const METEO_API_DEFAULT_PARAMS = {
  hourly:
    "temperature_2m,relativehumidity_2m,rain,precipitation_probability,windspeed_10m",
  current_weather: "true",
  timezone: "America/Sao_Paulo",
};

export const STATES_DATA = {
  AC: { lat: "-8.77", long: "-70.55", name: "Acre", id: 12 },
  AL: { lat: "-9.62", long: "-36.82", name: "Alagoas", id: 27 },
  AM: { lat: "-3.47", long: "-65.10", name: "Amazonas", id: 13 },
  AP: { lat: "1.41", long: "-51.77", name: "Amapá", id: 16 },
  BA: { lat: "-13.29", long: "-41.71", name: "Bahia", id: 29 },
  CE: { lat: "-5.20", long: "-39.53", name: "Ceará", id: 23 },
  DF: { lat: "-15.83", long: "-47.86", name: "Distrito Federal", id: 53 },
  ES: { lat: "-19.19", long: "-40.34", name: "Espírito Santo", id: 32 },
  GO: { lat: "-15.98", long: "-49.86", name: "Goiás", id: 52 },
  MA: { lat: "-5.42", long: "-45.44", name: "Maranhão", id: 21 },
  MT: { lat: "-12.64", long: "-55.42", name: "Mato Grosso", id: 51 },
  MS: { lat: "-20.51", long: "-54.54", name: "Mato Grosso do Sul", id: 50 },
  MG: { lat: "-18.10", long: "-44.38", name: "Minas Gerais", id: 31 },
  PA: { lat: "-3.79", long: "-52.48", name: "Pará", id: 15 },
  PB: { lat: "-7.28", long: "-36.72", name: "Paraíba", id: 25 },
  PR: { lat: "-24.89", long: "-51.55", name: "Paraná", id: 41 },
  PE: { lat: "-8.38", long: "-37.86", name: "Pernambuco", id: 26 },
  PI: { lat: "-6.60", long: "-42.28", name: "Piauí", id: 22 },
  RJ: { lat: "-22.25", long: "-42.66", name: "Rio de Janeiro", id: 33 },
  RN: { lat: "-5.81", long: "-36.59", name: "Rio Grande do Norte", id: 24 },
  RO: { lat: "-10.83", long: "-63.34", name: "Rondônia", id: 11 },
  RS: { lat: "-30.17", long: "-53.50", name: "Rio Grande do Sul", id: 43 },
  RR: { lat: "1.99", long: "-61.33", name: "Roraima", id: 14 },
  SC: { lat: "-27.45", long: "-50.95", name: "Santa Catarina", id: 42 },
  SE: { lat: "-10.57", long: "-37.45", name: "Sergipe", id: 28 },
  SP: { lat: "-22.19", long: "-48.79", name: "São Paulo", id: 35 },
  TO: { lat: "-9.46", long: "-48.26", name: "Tocantins", id: 17 },
};
