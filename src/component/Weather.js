import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../rtk/Slices/weatherSlice";
import Search from "./Search";
import Hightlight from "./Highlight";
import NextDays from "./NextDays";

function Weather() {
  const getWeather = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("tanta"));
  }, []);

  return (
    <>
      {getWeather.length > 1 ? (
        <>
          <Search />
          <NextDays />
          <Hightlight />
        </>
      ) : (
        <h1>no data</h1>
      )}
    </>
  );
}

export default Weather;
