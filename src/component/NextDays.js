import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../rtk/Slices/weatherSlice";
import "./NextDays.css";
import { Col, Row } from "react-bootstrap";

function NextDays() {
  const getWeather = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("tanta"));
  }, []);

  return (
    <div className="nextDays p-4">
      <Row className="boxs gap-5 justify-content-center">
        <Col className="box p-3 d-flex flex-column">
          <div className="text-center">Tomorrow</div>
          <img
            src={`https://openweathermap.org/img/w/${getWeather[8].weather[0].icon}.png`}
            alt=""
          />
          <div className="text-center">
            {Math.floor(getWeather[8].main.temp - 273)}
          </div>
        </Col>
        <Col className="box p-3 d-flex flex-column justify-content-center">
          <div className="text-center">
            {getWeather[16].dt_txt.split("").slice(0, 11)}
          </div>
          <img
            src={`https://openweathermap.org/img/w/${getWeather[16].weather[0].icon}.png`}
            alt=""
          />
          <div className="text-center">
            {Math.floor(getWeather[16].main.temp - 273)}
          </div>
        </Col>
        <Col className="box p-3 d-flex flex-column justify-content-center">
          <div className="text-center">
            {getWeather[24].dt_txt.split("").slice(0, 11)}
          </div>
          <img
            src={`https://openweathermap.org/img/w/${getWeather[24].weather[0].icon}.png`}
            alt=""
          />
          <div className="text-center">
            {Math.floor(getWeather[24].main.temp - 273)}
          </div>
        </Col>
        <Col className="box p-3 d-flex flex-column justify-content-center">
          <div className="text-center">
            {getWeather[32].dt_txt.split("").slice(0, 11)}
          </div>
          <img
            src={`https://openweathermap.org/img/w/${getWeather[32].weather[0].icon}.png`}
            alt=""
          />
          <div className="text-center">
            {Math.floor(getWeather[32].main.temp - 273)}
          </div>
        </Col>
        <Col className="box p-3 d-flex flex-column justify-content-center">
          <div className="text-center">
            {getWeather[39].dt_txt.split("").slice(0, 11)}
          </div>
          <img
            src={`https://openweathermap.org/img/w/${getWeather[39].weather[0].icon}.png`}
            alt=""
          />
          <div className="text-center">
            {Math.floor(getWeather[39].main.temp - 273)}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default NextDays;
