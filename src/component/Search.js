import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../rtk/Slices/weatherSlice";
import { Button, Col, Row } from "react-bootstrap";
import "./Search.css";

function Search() {
  const getWeather = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  const value = useRef();

  useEffect(() => {
    dispatch(fetchWeather("tanta"));
  }, []);

  return (
    <div
      className="m-0 p-5 d-flex search"
      style={{ backgroundColor: "#1E213A" }}
    >
      <form
        className="d-flex gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(fetchWeather(value.current.value));
        }}
      >
        <input
          ref={value}
          placeholder="Search for Place"
          className=" border border-0 text-light"
        />

        <Button onClick={() => dispatch(fetchWeather(value.current.value))}>
          Search
        </Button>
      </form>

      <div className="image">
        <img
          src={`https://openweathermap.org/img/w/${getWeather[0].weather[0].icon}.png`}
          alt=""
        />
      </div>
      <Row className="details d-flex">
        <Col className="temp">
          {Math.floor(getWeather[0].main.temp - 273)}
          <sub>°c</sub>
        </Col>
        <Col className="main d-flex flex-column justify-content-center">
          <div>{getWeather[0].weather[0].main}</div>
          <div className="today">
            {getWeather[0].dt_txt.split("").slice(0, 11)}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Search;
