import { MapContextProvider } from "./contexts/mapContext";
import { Map, Tooltip } from "./components";
import "./App.scss";


function App() {

  return (
    <div className="App">  
      <MapContextProvider>
        <Map />
        <Tooltip /> 
      </MapContextProvider> 
    </div>
  );
}

export default App;


