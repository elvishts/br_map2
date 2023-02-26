import React, { useEffect } from "react";
import { ReactComponent as MapSvg } from '../../assets/map.svg';
import { useMapContext } from "../../hooks/useMapContext";

import './styles.scss';


export const Map = () => {
    const { setState, loadStateDataFromAPI } = useMapContext();
  
    const getElementStateUf = (target) => {
        const targetElement = target.nodeName === "a" ? target : target.parentNode;
        const targetTextNode = targetElement.getElementsByTagName("text")[0];
        const targetTextContent = targetTextNode?.textContent?.toUpperCase();

        return targetTextContent || "DF";
    };
  
    const handleClick = (event) => {
        const stateUf = getElementStateUf(event.target);
        loadStateDataFromAPI(stateUf);
    };
  
    const handleMouseEnter = (event) => {
        const stateUf = getElementStateUf(event.target);
        setState((stateCurrent) => ({
            ...stateCurrent,
            hovered: stateUf,
        }));
    };
  
    const handleMouseLeave = () => {
        setState((stateCurrent) => ({
            ...stateCurrent,
            hovered: null,
        }));
    };
  
    useEffect(() => {
        document.querySelectorAll("#svg-map a").forEach((element) => {
            element.addEventListener("click", handleClick);
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
        });
  
        return () => {
            document.querySelectorAll("#svg-map a").forEach((element) => {
                element.removeEventListener("click", handleClick);
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    });
  
    return <MapSvg />;
  };
  