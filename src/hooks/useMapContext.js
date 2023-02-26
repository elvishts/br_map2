import { useContext } from "react";

import { mapContext } from "../contexts/mapContext";

export const useMapContext = () => {
  return useContext(mapContext);
};
