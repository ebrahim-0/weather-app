import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../rtk/Slices/weatherSlice";
import { Button, Col, Container, Row } from "react-bootstrap";
import Search from "./Search";
import Hightlight from "./Highlight";
import NextDays from "./NextDays";

function Weather() {
  const getWeather = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  const value = useRef();

  useEffect(() => {
    dispatch(fetchWeather("tanta"));
  }, []);

  console.log(getWeather);

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
