import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../rtk/Slices/weatherSlice";
import Search from "./Search";
import Hightlight from "./Highlight";
import NextDays from "./NextDays";
import "./Loading.css";

function Weather() {
  const getWeather = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("tanta"));
  }, []);

  return (
    <>
      {getWeather.length > 0 ? (
        <>
          <Search />
          <NextDays />
          <Hightlight />
        </>
      ) : (
        <div className="loading">
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </>
  );
}

export default Weather;
